
//  1. Buscar Personal por Rol
// Devuelve todos el personal en el rol especificado
```js
function buscarPersonalPorRol(idRol) {
  return db.personal.find({ idRol: idRol }).toArray();
}
```



//  2. Obtener áreas especializadas de un hospital

// Devuelve todas las áreas médicas de un hospital específico

```js
function areasEspecializadasPorHospital(idHospital) {
  return db.areasEspecializadas.find({ idHospital: idHospital }).toArray();
}
```



//  3. Buscar pacientes por número de historia clínica

// Encuentra un paciente usando su número único de historia clínica

```js
function buscarPacientePorHistoriaClinica(numeroHistoria) {
  return db.pacientes.findOne({ numeroHistoriaClinica: numeroHistoria });
}
```



//  4. Listar Pacientes por tipo de seguro

// Devuelve pacientes que tienen un tipo particular de seguro médico

```js
function pacientesPorTipoSeguro(idTipoSeguro) {
  return db.pacientes.aggregate([
    {
      $lookup: {
        from: "segurosMedicos",
        localField: "idSeguro",
        foreignField: "_id",
        as: "seguro"
      }
    },
    { $unwind: "$seguro" },
    { $match: { "seguro.idTipoSeguro": idTipoSeguro.toString() } }
  ]).toArray();
}
```


//  5. Obtener historial clínico completo de un paciente

// Devuelve todo el historial médico de un paciente específico

```js
function historialClinicoCompleto(idPaciente) {
  return db.historialesClinicos.find({ idPaciente: idPaciente }).sort({ fecha: -1 }).toArray();
}
```


//  6. Buscar tratamientos por área médica

// Lista todos los tratamientos disponibles en un área especializada

```js
function tratamientosPorArea(idArea) {
  return db.tratamientos.find({ idArea: idArea }).toArray();
}
```

//  7. Obtener medicamentos con bajo inventario

// Devuelve medicamentos con stock por debajo del nivel especificado

```js
function medicamentosBajoInventario(nivelMinimo) {
  return db.medicamentos.find({ inventario: { $lt: nivelMinimo } }).toArray();
}
```



//  8. Buscar Reacciones por medicamento

// Lista las posibles reacciones adversas de un medicamento específico

```js
function reaccionesPorMedicamento(idMedicamento) {
  return db.medicamentos.aggregate([
    { $match: { _id: parseInt(idMedicamento) } },
    {
      $lookup: {
        from: "reaccionesAdversas",
        localField: "idReaccionAdversa",
        foreignField: "_id",
        as: "reacciones"
      }
    }
  ]).toArray();
}
```


//  9. Obtener personal por especialidad y hospital

// Devuelve el personal médico filtrado por especialidad y hospital

```js
function personalPorEspecialidadYHospital(idEspecialidad, idHospital) {
  return db.personal.find({ 
    idEspecialidad: idEspecialidad, 
    idHospital: idHospital 
  }).toArray();
}
```


//   10. Buscar citas pendientes de un paciente

// Devuelve las citas futuras de un paciente específico

```js
function citasPendientesPaciente(idPaciente) {
  // Obtener la fecha actual sin horas/minutos/segundos
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  
  // Buscar citas del paciente con fecha igual o posterior a hoy
  const citas = db.citas.find({
    idPaciente: idPaciente,
    fecha: { $gte: hoy }
  }).toArray();
  
  return citas;
}
```


//  11. Calcular total facturado a un paciente

// Suma todos los montos facturados a un paciente específico

```js
function totalFacturadoPaciente(idPaciente) {
  return db.facturas.aggregate([
    { $match: { idPaciente: idPaciente } },
    { $group: { _id: null, total: { $sum: "$total" } } }
  ]).toArray();
}
```


//  12. Obtener tratamientos asignados recientes

// Devuelve los tratamientos asignados en los últimos 'n' días

```js
function tratamientosAsignadosRecientes(dias) {
  const fechaLimite = new Date();
  fechaLimite.setDate(fechaLimite.getDate() - dias);
  return db.tratamientosAsignados.find({ 
    fechaAplicacion: { $gte: fechaLimite } 
  }).toArray();
}
```


//  13. Buscar visitas médicas por diagnóstico

// Devuelve visitas médicas que contengan el diagnóstico especificado

```js
function visitasPorDiagnostico(diagnostico) {
  return db.visitasMedicas.find({ 
    diagnostico: { $regex: diagnostico, $options: 'i' } 
  }).toArray();
}
```


//  14. Listar horarios de un miembro del personal

// Devuelve los horarios de trabajo de un empleado específico

```js
function horariosPersonal(idPersonal) {
  return db.horarios.find({ idPersonal: idPersonal }).sort({ dia: 1 }).toArray();
}
```


//  15. Obtener pacientes con seguro próximo a vencer

// Devuelve pacientes cuyo seguro médico está por vencer en los próximos 'n' días

```js
function pacientesConSeguroPorVencer(dias) {
  const fechaLimite = new Date();
  fechaLimite.setDate(fechaLimite.getDate() + dias);
  return db.pacientes.aggregate([
    { $lookup: { from: "segurosMedicos", localField: "idSeguro", foreignField: "_id", as: "seguro" } },
    { $lookup: { from: "tiposSeguros", localField: "seguro.idTipoSeguro", foreignField: "_id", as: "tipoSeguro" } },
    { $match: { "tipoSeguro.vigenciaFinal": { $lte: fechaLimite, $gte: new Date() } } }
  ]).toArray();
}
```


//  16. Buscar medicamentos por fabricante

// Devuelve todos los medicamentos producidos por un fabricante específico

```js
function medicamentosPorFabricante(idFabricante) {
  return db.medicamentos.find({ idFabricante: idFabricante }).toArray();
}
```


//  17. Obtener Facturas pendientes

// Devuelve facturas que no han sido pagadas completamente

```js
function facturasPendientesBasica() {
  return db.facturas.aggregate([
    {
      $lookup: {
        from: "pagos",
        localField: "_id",
        foreignField: "idFactura",
        as: "pagosAsociados"
      }
    },
    {
      $addFields: {
        totalPagado: { $sum: "$pagosAsociados.monto" }
      }
    },
    {
      $match: {
        $or: [
          { totalPagado: { $exists: false } },
          { totalPagado: { $lt: 100 } } // Asumiendo un valor fijo temporal
        ]
      }
    }
  ]).toArray();
}
```



//  18. Buscar personal por rol y hospital

// Devuelve empleados filtrados por su rol y hospital asignado


```js
function personalPorRolYHospital(idRol, idHospital) {
  return db.personal.find({ 
    idRol: idRol, 
    idHospital: idHospital 
  }).toArray();
}
```


//  19. Obtener estadísticas de tratamientos por área

// Devuelve un conteo de tratamientos agrupados por área médica


```js
function conteoTratamientosPorArea() {
  return db.tratamientos.aggregate([
    {
      $group: {
        _id: "$idArea",
        cantidadTratamientos: { $sum: 1 },
        costoTotal: { $sum: "$costo" }
      }
    },
    {
      $sort: { cantidadTratamientos: -1 }
    }
  ]).toArray();
}
```


//  20. Buscar Citas por médico

// Devuelve Citas por médico específicas usando una estructura más simple

```js
function citasPorMedico(idPersonal) {
  return db.citas.aggregate([
    // Filtra por el médico y convierte el ID a número
    { 
      $match: { 
        idPersonal: parseInt(idPersonal) 
      } 
    },
    // Ordena por fecha ascendente (las más antiguas primero)
    { $sort: { fecha: 1 } },
    // Obtiene información del médico
    {
      $lookup: {
        from: "personal",
        localField: "idPersonal",
        foreignField: "_id",
        as: "medico"
      }
    },
    { $unwind: "$medico" },
    // Obtiene información del paciente
    {
      $lookup: {
        from: "pacientes",
        localField: "idPaciente",
        foreignField: "_id",
        as: "paciente"
      }
    },
    { $unwind: "$paciente" },
    // Obtiene información del hospital
    {
      $lookup: {
        from: "hospitales",
        localField: "idHospital",
        foreignField: "_id",
        as: "hospital"
      }
    },
    { $unwind: "$hospital" },
    // Proyecta solo los campos relevantes
    {
      $project: {
        _id: 1,
        fecha: 1,
        hora: 1,
        motivo: 1,
        estado: 1,
        "medico.nombre": 1,
        "paciente.nombre": 1,
        "paciente.numeroHistoriaClinica": 1,
        "hospital.nombre": 1
      }
    }
  ]).toArray();
}
```