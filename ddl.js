// Crear Base de Datos

use sistema_hospitalario

//Crear Colecciones

db.createCollection("hospitales",{
    validator:{
        $jsonSchema:{
            bsonType: "Object",
            required:["_id","nombre","ubicacion","telefono"],
            properties:{
                _id:{bsonType:"int"},
                nombre:{bsonType:"string"},
                ubicacion:{bsonType:"string"},
                telefono:{bsonType:"int"}
            }
        }
    }
}
)

db.createCollection("areasEspecializadas",{
    validator:{
        $jsonSchema:{
            bsonType: "Object",
            required:["_id","nombre","descripcion","idHospital"],
            properties:{
                _id:{bsonType:"int"},
                nombre:{bsonType:"string"},
                descripcion:{bsonType:"string"},
                idHospital:{bsonType:"int"}
            }
        }
    }
}
)

db.createCollection("pacientes",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["_id","nombre","direccion","telefono","correo","numeroHistoriaClinica","idSeguro","idHospital"],
            properties:{
                _id:{bsonType:"int"},
                nombre:{bsonType:"string"},
                direccion:{bsonType:"string"},
                telefono:{bsonType:"int"},
                correo:{bsonType:"string"},
                numeroHistoriaClinica:{bsonType:"int"},
                idSeguro:{bsonType:"int"},
                idHospital:{bsonType:"int"}
            }
        }
    }
}
)

db.createCollection("segurosMedicos",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["_id","nombre","compañia","tipoSeguro"],
            properties:{
                _id:{bsonType:"int"},
                nombre:{bsonType:"string"},
                compañia:{bsonType:"string"},
                tipoSeguro:{bsonType:"string"}
                }
            }
        }
    }
)