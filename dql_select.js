// 100 Consultas MongoDB para un Sistema Hospitalario

//1. **Encontrar todos los hospitales.**


   db.hospitales.find();
   

//2. **Encontrar un hospital por su nombre.**


   db.hospitales.find({ nombre: "Hospital Central" });
   

//3. **Encontrar hospitales por ubicación (búsqueda parcial).**


   db.hospitales.find({ ubicacion: { $regex: /Bogotá/ } });
   

//4. **Contar el número total de hospitales.**


   db.hospitales.countDocuments();
   

//5. **Encontrar áreas especializadas de un hospital específico.**


   db.areasEspecializadas.find({ idHospital: 1 });
   

//6. **Encontrar todo el personal de un hospital específico.**


   db.personal.find({ idHospital: 2 });
   

//7. **AGREGACIÓN 1: Contar áreas especializadas por hospital.**


   db.areasEspecializadas.aggregate([
     { $group: { _id: "$idHospital", numeroDeAreas: { $sum: 1 } } },
     { $lookup: { from: "hospitales", localField: "_id", foreignField: "_id", as: "hospitalInfo" } },
     { $unwind: "$hospitalInfo" },
     { $project: { _id: 0, nombreHospital: "$hospitalInfo.nombre", numeroDeAreas: 1 } }
   ]);
   

//8. **Listar nombre y teléfono de todos los hospitales.**


   db.hospitales.find({}, { nombre: 1, telefono: 1, _id: 0 });
   

//9. **Encontrar áreas de "Cardiología".**


   db.areasEspecializadas.find({ nombre: { $regex: /Cardiología/i } });
   

//10. **Contar el personal total de un hospital.**


    db.personal.countDocuments({ idHospital: 1 });
    

//11. **Mostrar personal de un hospital, ordenado por salario.**


    db.personal.find({ idHospital: 1 }).sort({ salario: -1 });
    

//12. **AGREGACIÓN 2: Contar médicos por hospital.**


    db.personal.aggregate([
      { $lookup: { from: "roles", localField: "idRol", foreignField: "_id", as: "rolInfo" } },
      { $unwind: "$rolInfo" },
      { $match: { "rolInfo.nombre": "Médico" } },
      { $group: { _id: "$idHospital", cantidadMedicos: { $sum: 1 } } },
      { $lookup: { from: "hospitales", localField: "_id", foreignField: "_id", as: "hospital" } },
      { $unwind: "$hospital" },
      { $project: { _id: 0, hospital: "$hospital.nombre", cantidadMedicos: 1 } }
    ]);
    

//13. **AGREGACIÓN 3: Contar enfermeras por hospital.**


    db.personal.aggregate([
      { $lookup: { from: "roles", localField: "idRol", foreignField: "_id", as: "rolInfo" } },
      { $unwind: "$rolInfo" },
      { $match: { "rolInfo.nombre": "Enfermero" } },
      { $group: { _id: "$idHospital", cantidadEnfermeras: { $sum: 1 } } },
      { $lookup: { from: "hospitales", localField: "_id", foreignField: "_id", as: "hospital" } },
      { $unwind: "$hospital" },
      { $project: { _id: 0, hospital: "$hospital.nombre", cantidadEnfermeras: 1 } }
    ]);
    

//14. **AGREGACIÓN 4: Listar áreas y el hospital al que pertenecen.**


    db.areasEspecializadas.aggregate([
      { $lookup: { from: "hospitales", localField: "idHospital", foreignField: "_id", as: "hospitalInfo" } },
      { $unwind: "$hospitalInfo" },
      { $project: { _id: 0, nombreArea: "$nombre", descripcionArea: "$descripcion", nombreHospital: "$hospitalInfo.nombre" } }
    ]);
    

//15. **Encontrar hospitales sin área de "Urgencias".**


    db.hospitales.aggregate([
      { $lookup: { from: "areasEspecializadas", localField: "_id", foreignField: "idHospital", as: "areas" } },
      { $match: { "areas.nombre": { $ne: "Urgencias" } } },
      { $project: { nombre: 1, ubicacion: 1 } }
    ]);
    

//16. **AGREGACIÓN 5: Calcular salario promedio por hospital.**


    db.personal.aggregate([
      { $group: { _id: "$idHospital", salarioPromedio: { $avg: "$salario" } } },
      { $lookup: { from: "hospitales", localField: "_id", foreignField: "_id", as: "hospitalInfo" } },
      { $unwind: "$hospitalInfo" },
      { $project: { _id: 0, hospital: "$hospitalInfo.nombre", salarioPromedio: { $round: ["$salarioPromedio", 2] } } }
    ]);
    

//17. **AGREGACIÓN 6: Reporte completo de personal por hospital.**


    db.personal.aggregate([
      { $lookup: { from: "roles", localField: "idRol", foreignField: "_id", as: "rol" } },
      { $unwind: "$rol" },
      { $group: { _id: { idHospital: "$idHospital", rol: "$rol.nombre" }, cantidad: { $sum: 1 } } },
      { $group: { _id: "$_id.idHospital", conteoRoles: { $push: { rol: "$_id.rol", cantidad: "$cantidad" } } } },
      { $lookup: { from: "hospitales", localField: "_id", foreignField: "_id", as: "hospital" } },
      { $unwind: "$hospital" },
      { $project: { _id: 0, hospital: "$hospital.nombre", distribucionPersonal: "$conteoRoles" } }
    ]);
    

//18. **AGREGACIÓN 7: Encontrar el salario más alto por hospital.**


    db.personal.aggregate([
      { $sort: { salario: -1 } },
      { $group: { _id: "$idHospital", nombre: { $first: "$nombre" }, salarioMaximo: { $first: "$salario" } } },
      { $lookup: { from: "hospitales", localField: "_id", foreignField: "_id", as: "hospitalInfo" } },
      { $unwind: "$hospitalInfo" },
      { $project: { _id: 0, hospital: "$hospitalInfo.nombre", empleadoConSalarioMaximo: "$nombre", salario: "$salarioMaximo" } }
    ]);
    

//19. **Listar hospitales y teléfonos, ordenados alfabéticamente.**


    db.hospitales.find({}, { nombre: 1, telefono: 1, _id: 0 }).sort({ nombre: 1 });
    

//20. **Contar el personal total en la base de datos.**


    db.personal.countDocuments();
    


//21. **Listar todos los medicamentos.**


    db.medicamentos.find();
    

//22. **Encontrar un medicamento por su nombre.**


    db.medicamentos.find({ nombre: "Ibuprofeno" });
    

//23. **Listar medicamentos con inventario bajo (menos de 50).**


    db.medicamentos.find({ inventario: { $lt: 50 } });
    

//24. **AGREGACIÓN 8: Contar tipos de medicamentos por hospital.**


    db.medicamentos.aggregate([
      { $group: { _id: "$idHospital", tiposDeMedicamentos: { $sum: 1 } } },
      { $lookup: { from: "hospitales", localField: "_id", foreignField: "_id", as: "hospitalInfo" } },
      { $unwind: "$hospitalInfo" },
      { $project: { _id: 0, hospital: "$hospitalInfo.nombre", tiposDeMedicamentos: 1 } }
    ]);
    

//25. **AGREGACIÓN 9: Listar medicamentos y su fabricante.**


    db.medicamentos.aggregate([
      { $lookup: { from: "fabricantes", localField: "idFabricante", foreignField: "_id", as: "fabricanteInfo" } },
      { $unwind: "$fabricanteInfo" },
      { $project: { _id: 0, nombreMedicamento: "$nombre", inventario: 1, nombreFabricante: "$fabricanteInfo.nombre" } }
    ]);
    

//26. **Encontrar medicamentos de un fabricante específico.**


    // Suponiendo que el ID del fabricante es 1
    db.medicamentos.find({ idFabricante: 1 });
    

//27. **Sumar el inventario total de un medicamento.**


    db.medicamentos.aggregate([
      { $match: { nombre: "Paracetamol" } },
      { $group: { _id: "$nombre", inventarioTotal: { $sum: "$inventario" } } }
    ]);
    

//28. **Encontrar medicamentos con "mg" en su dosis.**


    db.medicamentos.find({ dosisEstandar: { $regex: /mg/i } });
    

//29. **Listar los 5 medicamentos con mayor inventario.**


    db.medicamentos.find().sort({ inventario: -1 }).limit(5);
    

//30. **Listar los 5 medicamentos con menor inventario.**


    db.medicamentos.find().sort({ inventario: 1 }).limit(5);
    

//31. **Encontrar fabricantes de un país específico.**


    db.fabricantes.find({ paisOrigen: "Alemania" });
    

//32. **AGREGACIÓN 10: Listar medicamentos y sus reacciones adversas.**


    db.medicamentosReaccionAdversa.aggregate([
      { $lookup: { from: "medicamentos", localField: "idMedicamento", foreignField: "_id", as: "medicamentoInfo" } },
      { $lookup: { from: "reaccionesAdversas", localField: "idReaccion", foreignField: "_id", as: "reaccionInfo" } },
      { $unwind: "$medicamentoInfo" },
      { $unwind: "$reaccionInfo" },
      { $project: { _id: 0, medicamento: "$medicamentoInfo.nombre", reaccion: "$reaccionInfo.nombre", gravedad: "$reaccionInfo.gravedad" } }
    ]);
    

//33. **Encontrar medicamentos sin reacciones adversas registradas.**


    db.medicamentos.aggregate([
      { $lookup: { from: "medicamentosReaccionAdversa", localField: "_id", foreignField: "idMedicamento", as: "reacciones" } },
      { $match: { reacciones: { $size: 0 } } },
      { $project: { nombre: 1, inventario: 1 } }
    ]);
    

//34. **Contar medicamentos por compañía fabricante.**


    db.medicamentos.aggregate([
      { $lookup: { from: "fabricantes", localField: "idFabricante", foreignField: "_id", as: "fabricanteInfo" } },
      { $unwind: "$fabricanteInfo" },
      { $group: { _id: "$fabricanteInfo.nombre", cantidadMedicamentos: { $sum: 1 } } },
      { $sort: { cantidadMedicamentos: -1 } }
    ]);
    

//35. **Actualizar el inventario de un medicamento.**


    db.medicamentos.updateOne({ _id: 101 }, { $set: { inventario: 250 } });
    

//36. **Incrementar el inventario de un medicamento.**


    db.medicamentos.updateOne({ _id: 102 }, { $inc: { inventario: 50 } });
    

//37. **Listar todos los fabricantes activos.**


    db.fabricantes.find({ estado: "Activo" });
    

//38. **Encontrar reacciones adversas "Graves".**


    db.reaccionesAdversas.find({ gravedad: "Grave" });
    

//39. **Eliminar un medicamento.**


    db.medicamentos.deleteOne({ _id: 103 });
    

//40. **AGREGACIÓN 11: Ver el inventario total de un hospital.**


    db.medicamentos.aggregate([
      { $match: { idHospital: 1 } },
      { $group: { _id: "$idHospital", inventarioTotalUnidades: { $sum: "$inventario" } } }
    ]);
    


//41. **Encontrar paciente por número de historia clínica.**


    db.pacientes.findOne({ numeroHistoriaClinica: 789012 });
    

//42. **Encontrar paciente por nombre (búsqueda parcial).**


    db.pacientes.find({ nombre: { $regex: /Carlos Ruiz/i } });
    

//43. **Listar historiales clínicos de un paciente.**


    db.historialesClinicos.find({ idPaciente: 10 });
    

//44. **Encontrar historiales por diagnóstico.**


    db.historialesClinicos.find({ diagnostico: "Hipertensión" });
    

//45. **AGREGACIÓN 12: Listar tratamientos asignados a un paciente.**


    db.historialesClinicos.aggregate([
      { $match: { idPaciente: 10 } },
      { $lookup: { from: "tratamientosAsignados", localField: "_id", foreignField: "idHistorial", as: "tratamientos" } },
      { $unwind: "$tratamientos" },
      { $lookup: { from: "tratamientos", localField: "tratamientos.idTratamiento", foreignField: "_id", as: "infoTratamiento" } },
      { $unwind: "$infoTratamiento" },
      { $project: { _id: 0, fechaAplicacion: "$tratamientos.fechaAplicacion", nombreTratamiento: "$infoTratamiento.nombre", observaciones: "$tratamientos.observaciones" } }
    ]);
    

//46. **Encontrar diagnósticos de "Diabetes" en el último año.**


    const unAnoAtras = new Date();
    unAnoAtras.setFullYear(unAnoAtras.getFullYear() - 1);
    db.historialesClinicos.find({
      diagnostico: "Diabetes",
      fecha: { $gte: unAnoAtras }
    });
    

//47. **AGREGACIÓN 13: Mostrar historial clínico completo de un paciente.**


    db.pacientes.aggregate([
      { $match: { _id: 10 } },
      { $lookup: { from: "historialesClinicos", localField: "_id", foreignField: "idPaciente", as: "historial" } },
      { $unwind: "$historial" },
      { $project: { _id: 0, nombrePaciente: "$nombre", fechaConsulta: "$historial.fecha", motivo: "$historial.motivoConsulta", diagnostico: "$historial.diagnostico" } }
    ]);
    

//48. **AGREGACIÓN 14: Contar pacientes por tipo de seguro.**


    db.pacientes.aggregate([
      { $lookup: { from: "segurosMedicos", localField: "idSeguro", foreignField: "_id", as: "seguro" } },
      { $unwind: "$seguro" },
      { $group: { _id: "$seguro.nombre", totalPacientes: { $sum: 1 } } },
      { $project: { _id: 0, tipoSeguro: "$_id", totalPacientes: 1 } }
    ]);
    

//49. **Encontrar resultados de exámenes de un paciente.**


    db.historialesClinicos.aggregate([
      { $match: { idPaciente: 10 } },
      { $lookup: { from: "resultados", localField: "idResultados", foreignField: "_id", as: "resultadosExamen" } },
      { $unwind: "$resultadosExamen" },
      { $project: { _id: 0, fechaExamen: "$resultadosExamen.fecha", tipoExamen: "$resultadosExamen.tipoExamen", descripcion: "$resultadosExamen.descripcion" } }
    ]);
    

//50. **Listar pacientes con seguro a punto de vencer.**


    const hoy = new Date();
    const en30Dias = new Date();
    en30Dias.setDate(hoy.getDate() + 30);
    db.pacientes.aggregate([
      { $lookup: { from: "segurosMedicos", localField: "idSeguro", foreignField: "_id", as: "seguro" } },
      { $unwind: "$seguro" },
      { $lookup: { from: "tiposSeguros", localField: "seguro.idTipoSeguro", foreignField: "_id", as: "tipoSeguro" } },
      { $unwind: "$tipoSeguro" },
      { $match: { "tipoSeguro.vigenciaFinal": { $gte: hoy, $lte: en30Dias } } },
      { $project: { _id: 0, nombrePaciente: "$nombre", telefono: 1, vencimientoPoliza: "$tipoSeguro.vigenciaFinal" } }
    ]);
    

//51. **Encontrar el último diagnóstico de un paciente.**


    db.historialesClinicos.find({ idPaciente: 10 }).sort({ fecha: -1 }).limit(1);
    

//52. **AGREGACIÓN 15: Listar medicamentos recetados a un paciente.**


    db.tratamientosAsignados.aggregate([
      { $lookup: { from: "historialesClinicos", localField: "idHistorial", foreignField: "_id", as: "historial" } },
      { $unwind: "$historial" },
      { $match: { "historial.idPaciente": 10 } },
      { $lookup: { from: "medicamentos", localField: "idMedicamento", foreignField: "_id", as: "medicamento" } },
      { $unwind: "$medicamento" },
      { $project: { _id: 0, fecha: "$fechaAplicacion", medicamento: "$medicamento.nombre" } }
    ]);
    

//53. **Contar diagnósticos de una enfermedad para un paciente.**


    db.historialesClinicos.countDocuments({ idPaciente: 10, diagnostico: "Gripe" });
    

//54. **Encontrar pacientes sin correo electrónico.**


    db.pacientes.find({ correo: { $exists: false } });
    

//55. **Listar pacientes de un hospital específico.**


    db.pacientes.find({ idHospital: 1 });
    

//56. **AGREGACIÓN 16: Obtener aseguradora de un paciente.**


    db.pacientes.aggregate([
      { $match: { _id: 10 } },
      { $lookup: { from: "segurosMedicos", localField: "idSeguro", foreignField: "_id", as: "seguro" } },
      { $unwind: "$seguro" },
      { $lookup: { from: "tiposSeguros", localField: "seguro.idTipoSeguro", foreignField: "_id", as: "tipoSeguro" } },
      { $unwind: "$tipoSeguro" },
      { $lookup: { from: "entidadAseguradora", localField: "tipoSeguro.idEntidadAseguradora", foreignField: "_id", as: "aseguradora" } },
      { $unwind: "$aseguradora" },
      { $project: { _id: 0, nombrePaciente: "$nombre", nombreAseguradora: "$aseguradora.nombre", telefonoAseguradora: "$aseguradora.telefono" } }
    ]);
    

//57. **Agregar un nuevo historial clínico.**


    db.historialesClinicos.insertOne({
      _id: 201, motivoConsulta: "Dolor de cabeza persistente", diagnostico: "Migraña", fecha: new Date(),
      idPaciente: 10, idResultados: 301, idArea: 4
    });
    

//58. **Actualizar el diagnóstico de un historial.**


    db.historialesClinicos.updateOne({ _id: 201 }, { $set: { diagnostico: "Cefalea tensional" } });
    

//59. **Encontrar pacientes cuyo nombre empiece con "A".**


    db.pacientes.find({ nombre: { $regex: /^A/ } });
    

//60. **Contar el total de pacientes registrados.**


    db.pacientes.countDocuments();
    


//61. **Encontrar personal por rol.**


    // Suponiendo que el rol de Médico es _id: 1
    db.personal.find({ idRol: 1 });
    

//62. **Encontrar personal por especialidad.**


    // Suponiendo que Cardiología es _id: 1
    db.personal.find({ idEspecialidad: 1 });
    

//63. **Listar el horario de un miembro del personal.**


    db.horarios.find({ idPersonal: 50 });
    

//64. **Mostrar visitas médicas de un médico.**


    db.visitasMedicas.find({ idPersonalMedico: 50 });
    

//65. **Mostrar tratamientos aplicados por un enfermero.**


    db.tratamientosAsignados.find({ idPersonalEnfermero: 75 });
    

//66. **AGREGACIÓN 17: Listar personal que atendió a un paciente.**


    db.visitasMedicas.aggregate([
      { $match: { idPaciente: 10 } },
      { $lookup: { from: "personal", localField: "idPersonalMedico", foreignField: "_id", as: "medico" } },
      { $lookup: { from: "personal", localField: "idPersonalEnfermero", foreignField: "_id", as: "enfermero" } },
      { $unwind: "$medico" },
      { $unwind: "$enfermero" },
      { $project: { _id: 0, fechaVisita: "$fecha", nombreMedico: "$medico.nombre", nombreEnfermero: "$enfermero.nombre" } }
    ]);
    

//67. **AGREGACIÓN 18: Contar visitas por médico.**


    db.visitasMedicas.aggregate([
      { $group: { _id: "$idPersonalMedico", totalVisitas: { $sum: 1 } } },
      { $lookup: { from: "personal", localField: "_id", foreignField: "_id", as: "medicoInfo" } },
      { $unwind: "$medicoInfo" },
      { $project: { _id: 0, nombreMedico: "$medicoInfo.nombre", totalVisitas: 1 } },
      { $sort: { totalVisitas: -1 } }
    ]);
    

//68. **Encontrar personal que trabaja fines de semana.**


    db.horarios.find({ dia: { $in: ["Sábado", "Domingo"] } });
    

//69. **AGREGACIÓN 19: Listar personal y su especialidad.**


    db.personal.aggregate([
      { $lookup: { from: "especialidadesMedicas", localField: "idEspecialidad", foreignField: "_id", as: "especialidad" } },
      { $unwind: "$especialidad" },
      { $project: { _id: 0, nombrePersonal: "$nombre", especialidad: "$especialidad.nombre", salario: 1 } }
    ]);
    

//70. **Ver resultados de exámenes asignados por un profesional.**


    db.resultados.find({ profesionalAsignado: 51 });
    

//71. **Contar tratamientos asignados por cada médico.**


    db.tratamientosAsignados.aggregate([
      { $group: { _id: "$idPersonalMedico", numTratamientos: { $sum: 1 } } }
    ]);
    

//72. **Encontrar personal con salario mayor a 7,000,000.**


    db.personal.find({ salario: { $gt: 7000000 } });
    

//73. **Listar personal sin especialidad asignada.**


    db.personal.find({ idEspecialidad: { $exists: false } });
    

//74. **Obtener número de colegiatura de un médico.**


    db.colegiaturas.findOne({ personal: 52 });
    

//75. **Encontrar personal por dominio de correo.**


    db.personal.find({ correo: { $regex: /@hospital\.com$/ } });
    

//76. **Ver personal de turno en un momento específico.**


    db.horarios.find({ dia: "Lunes", horaInicio: { $lte: "09:00" }, horaFin: { $gte: "09:00" } });
    

//77. **Actualizar el salario de un empleado.**


    db.personal.updateOne({ _id: 53 }, { $set: { salario: 7500000 } });
    

//78. **AGREGACIÓN 20: Listar personal con rol y especialidad.**


    db.personal.aggregate([
      { $lookup: { from: "roles", localField: "idRol", foreignField: "_id", as: "rol" } },
      { $lookup: { from: "especialidadesMedicas", localField: "idEspecialidad", foreignField: "_id", as: "especialidad" } },
      { $unwind: { path: "$rol", preserveNullAndEmptyArrays: true } },
      { $unwind: { path: "$especialidad", preserveNullAndEmptyArrays: true } },
      { $project: { _id: 1, nombre: 1, rol: "$rol.nombre", especialidad: "$especialidad.nombre" } }
    ]);
    

//79. **Eliminar un horario del personal.**


    db.horarios.deleteOne({ _id: 401 });
    

//80. **Encontrar personal con más de 10 años de antigüedad.**


    // Asumiendo un campo `fechaContratacion` que no está en el esquema original.
    db.personal.find({ fechaContratacion: { $lt: new Date('2015-01-01') } });
    



//81. **Listar visitas médicas de un día específico.**


    const inicioDia = new Date('2025-07-28');
    const finDia = new Date('2025-07-29');
    db.visitasMedicas.find({ fecha: { $gte: inicioDia, $lt: finDia } });
    

//82. **Listar citas para un día futuro.**


    db.citas.find({ fecha: new Date('2025-08-15') });
    

//83. **Contar número de visitas por motivo.**


    db.visitasMedicas.aggregate([
      { $group: { _id: "$motivo", cantidad: { $sum: 1 } } },
      { $sort: { cantidad: -1 } }
    ]);
    

//84. **AGREGACIÓN 21: Identificar los 5 diagnósticos más comunes.**


    db.historialesClinicos.aggregate([
      { $group: { _id: "$diagnostico", frecuencia: { $sum: 1 } } },
      { $sort: { frecuencia: -1 } },
      { $limit: 5 }
    ]);
    

//85. **Encontrar las citas de un paciente.**


    db.citas.find({ idPaciente: 15 });
    

//86. **Contar citas por hospital.**


    db.citas.aggregate([
      { $group: { _id: "$idHospital", totalCitas: { $sum: 1 } } }
    ]);
    

//87. **Listar visitas y diagnósticos de un paciente.**


    db.visitasMedicas.find({ idPaciente: 12 }, { fecha: 1, diagnostico: 1, _id: 0 });
    

//88. **AGREGACIÓN 22: Calcular promedio de visitas por paciente.**


    db.visitasMedicas.aggregate([
      { $group: { _id: "$idPaciente", numVisitas: { $sum: 1 } } },
      { $group: { _id: null, promedioVisitas: { $avg: "$numVisitas" } } }
    ]);
    

//89. **Encontrar médico con más citas en un día.**


    db.citas.aggregate([
      { $match: { fecha: new Date('2025-08-20') } },
      { $group: { _id: "$idPersonal", cantidadCitas: { $sum: 1 } } },
      { $sort: { cantidadCitas: -1 } },
      { $limit: 1 }
    ]);
    

//90. **Cancelar (eliminar) una cita.**


    db.citas.deleteOne({ _id: 501 });
    

//91. **Reprogramar (actualizar) una cita.**


    db.citas.updateOne({ _id: 502 }, { $set: { fecha: new Date('2025-09-10'), hora: "11:00" } });
    

//92. **Ver total facturado en un día.**


    // Asumiendo un campo `fechaEmision`
    // db.facturas.aggregate([
    //   { $match: { fechaEmision: new Date('2025-07-28') } },
    //   { $group: { _id: null, totalDiario: { $sum: "$total" } } }
    // ]);
    

//93. **Listar pacientes con más de 5 visitas médicas.**


    db.visitasMedicas.aggregate([
      { $group: { _id: "$idPaciente", count: { $sum: 1 } } },
      { $match: { count: { $gt: 5 } } }
    ]);
    

//94. **AGREGACIÓN 23: Distribución de diagnósticos por área.**


    db.historialesClinicos.aggregate([
      { $group: { _id: { idArea: "$idArea", diagnostico: "$diagnostico" }, count: { $sum: 1 } } },
      { $lookup: { from: "areasEspecializadas", localField: "_id.idArea", foreignField: "_id", as: "areaInfo" } },
      { $unwind: "$areaInfo" },
      { $project: { _id: 0, area: "$areaInfo.nombre", diagnostico: "$_id.diagnostico", frecuencia: "$count" } },
      { $sort: { area: 1, frecuencia: -1 } }
    ]);
    

//95. **Listar facturas no pagadas (conceptual).**


    // Lógica conceptual:
    // 1. Obtener facturas de un paciente.
    // 2. Para cada factura, sumar los pagos asociados.
    // 3. Filtrar aquellas donde la suma de pagos sea menor al total de la factura.
    

//96. **Costo total de tratamientos para un diagnóstico.**


    db.historialesClinicos.aggregate([
      { $match: { diagnostico: "Fractura de radio" } },
      { $lookup: { from: "tratamientosAsignados", localField: "_id", foreignField: "idHistorial", as: "asignados" } },
      { $unwind: "$asignados" },
      { $lookup: { from: "tratamientos", localField: "asignados.idTratamiento", foreignField: "_id", as: "tratamientoInfo" } },
      { $unwind: "$tratamientoInfo" },
      { $group: { _id: "$diagnostico", costoTotalEstimado: { $sum: "$tratamientoInfo.costo" } } }
    ]);
    

//97. **Estadísticas de visitas por mes.**


    db.visitasMedicas.aggregate([
      { $project: { mes: { $month: "$fecha" }, año: { $year: "$fecha" } } },
      { $group: { _id: { año: "$año", mes: "$mes" }, totalVisitas: { $sum: 1 } } },
      { $sort: { "_id.año": 1, "_id.mes": 1 } }
    ]);
    

//98. **Ver citas con motivo "Consulta General".**


    db.citas.find({ motivo: "Consulta General" });
    

//99. **Listar pacientes y fecha de su última visita.**


    db.visitasMedicas.aggregate([
      { $sort: { fecha: -1 } },
      { $group: { _id: "$idPaciente", ultimaVisita: { $first: "$fecha" } } }
    ]);
    

//100. **AGREGACIÓN 24: Contar pacientes únicos por médico.**