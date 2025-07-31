## 📂 Sustentación del Proyecto

<a href="https://drive.google.com/drive/folders/1VBAdUWQtilw_mVMFmZYu_ijfKRLCvNRr" target="_blank">
  <img src="https://img.shields.io/badge/Sustentaci%C3%B3n-Google%20Drive-34A853?style=for-the-badge&logo=google-drive&logoColor=white" alt="Sustentación">
</a>

<br>

<a href="https://www.youtube.com/watch?v=J_hnPTlLyTg" target="_blank">
  <img src="https://img.shields.io/badge/Sustentaci%C3%B3n-YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Sustentación YouTube"><br>

</a>

<br>

Aquí se encuentra la sustentación del proyecto **Sistema Hospitalario** desarrollado con **MongoDB**, donde se explica el modelado, la implementación y las funcionalidades clave de la base de datos.


<br>

---

<br>
<br>
<br>
<br>
<br>
<br>


<div align="center">

# Sistema Hospitalario 

&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;  

**DANIEL ESTEBAN GUERRERO QUINTERO**  
**AURA CAMILA PICO ARAQUE**

&nbsp;  
&nbsp;  
 
**S1**  
&nbsp;  
&nbsp;  
&nbsp;  

**PEDRO FELIPE GÓMEZ BONILLA**  

&nbsp;  
&nbsp;  
&nbsp;  

**CAMPUSLANDS**  
**ARTEMIS**  
**RUTA NODEJS**  
**BUCARAMANGA**  
**CAJASAN**
**2025**
<br>
</div>
<br>
<br>

#

<br>
<br>
<br>

## Tabla de Contenidos

- [Sistema Hospitalario](#sistema-hospitalario)
- [](#)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [✅ Requisitos del Sistema](#-requisitos-del-sistema)
  - [🧩 Instalación y Configuración](#-instalación-y-configuración)
      - [🛠️ Requisitos Previos](#️-requisitos-previos)
  - [⚙️ Paso a Paso](#️-paso-a-paso)
      - [1️⃣ Crear la Base de Datos y Estructura](#1️⃣-crear-la-base-de-datos-y-estructura)
      - [2️⃣ Cargar los Datos Iniciales](#2️⃣-cargar-los-datos-iniciales)
      - [3️⃣ Crear Usuarios del Sistema](#3️⃣-crear-usuarios-del-sistema)
      - [4️⃣ Ejecutar Funciones de Consulta](#4️⃣-ejecutar-funciones-de-consulta)
      - [Verificación Final](#verificación-final)
- [🏥 Sistema Hospitalario](#-sistema-hospitalario)
  - [Introducción](#introducción)
  - [📚 Caso de Estudio](#-caso-de-estudio)
        - [Estructura del Sistema](#estructura-del-sistema)
        - [Pacientes](#pacientes)
        - [Médicos y Personal](#médicos-y-personal)
        - [Tratamientos y Medicamentos](#tratamientos-y-medicamentos)
        - [Visitas Médicas](#visitas-médicas)
- [📄 Planificación](#-planificación)
  - [🏗 Construcción del Modelo Conceptual](#-construcción-del-modelo-conceptual)
    - [Descripción](#descripción)
  - [📁 Estructura Modelo Conceptual](#-estructura-modelo-conceptual)
    - [1. 🏥 `hospitales`](#1--hospitales)
- [](#-1)
    - [2. 🧠 `areasEspecializadas`](#2--areasespecializadas)
- [](#-2)
    - [3. 🧠 `personal` (OPCIONAL )](#3--personal-opcional-)
      - [3.1 🏛️ `directoresGenerales`](#31-️-directoresgenerales)
      - [3.2 🩺 `medicosEspecialistas`](#32--medicosespecialistas)
      - [3.3 🩹 `personalEnfermeria`](#33--personalenfermeria)
      - [3.4.1 💼 `personalAdministrativo`](#341--personaladministrativo)
      - [3.5 🧹 `personalAseoYServicios`](#35--personalaseoyservicios)
- [](#-3)
    - [4. 🧍 `pacientes`](#4--pacientes)
- [](#-4)
    - [5. 💳 `segurosMedicos`](#5--segurosmedicos)
- [](#-5)
    - [6. 📋 `historialesClinicos`](#6--historialesclinicos)
- [](#-6)
    - [7. 💉 `tratamientos`](#7--tratamientos)
- [](#-7)
    - [8. 💊 `medicamentos`](#8--medicamentos)
- [](#-8)
    - [9. 📆 `visitasMedicas`](#9--visitasmedicas)
  - [📈 Gráfica](#-gráfica)
    - [🛠️ Descripción Técnica](#️-descripción-técnica)
  - [🏗 Construcción del Modelo Lógico](#-construcción-del-modelo-lógico)
    - [Descripción](#descripción-1)
  - [📈 Gráfica](#-gráfica-1)
    - [Descripción Técnica](#descripción-técnica)
  - [〽 Normalización del Modelo Lógico](#-normalización-del-modelo-lógico)
  - [1️⃣ Primera Forma Normal (1FN)](#1️⃣-primera-forma-normal-1fn)
    - [Descripción](#descripción-2)
  - [📈 Gráfica](#-gráfica-2)
    - [Descripción Técnica](#descripción-técnica-1)
  - [2️⃣ Segunda Forma Normal (2FN)](#2️⃣-segunda-forma-normal-2fn)
    - [Descripción](#descripción-3)
  - [📈 Gráfica](#-gráfica-3)
    - [Descripción Técnica](#descripción-técnica-2)
  - [3️⃣ Tercera Forma Normal (3FN)](#3️⃣-tercera-forma-normal-3fn)
    - [Descripción](#descripción-4)
  - [📈 Gráfica](#-gráfica-4)
    - [Descripción Técnica](#descripción-técnica-3)
  - [📁 Estructura Modelo Final Normalizacion](#-estructura-modelo-final-normalizacion)
    - [1. 🏥 hospitales](#1--hospitales-1)
    - [2. 🧠 areasEspecializadas](#2--areasespecializadas-1)
    - [3. 🧍 pacientes](#3--pacientes)
    - [4. 💳 segurosMedicos](#4--segurosmedicos)
    - [5. 💳 tipoSeguro](#5--tiposeguro)
    - [6. 💳 entidadAseguradora](#6--entidadaseguradora)
    - [7. 💳 estadoSeguro](#7--estadoseguro)
    - [8. 📋 historialesClinicos](#8--historialesclinicos)
    - [9. 📋 Resultados](#9--resultados)
    - [10. 💉 tratamientos](#10--tratamientos)
    - [11. 💊 medicamentos](#11--medicamentos)
    - [12. 💊 medicamentoReaccionAdversa](#12--medicamentoreaccionadversa)
    - [13 💊 reaccionesAdversas](#13--reaccionesadversas)
    - [14. 💊 Fabricantes](#14--fabricantes)
    - [15. 🩺 tratamientosAsignados](#15--tratamientosasignados)
    - [16. 📆 visitasMedicas](#16--visitasmedicas)
    - [17. 🧑‍⚕️ personal](#17-️-personal)
    - [18. 🆔 colegiaturas](#18--colegiaturas)
    - [19. 📚 especialidadesMedicas](#19--especialidadesmedicas)
    - [20. 🏷️ roles](#20-️-roles)
    - [21. ⏰ horarios](#21--horarios)
    - [22. 📅 citas](#22--citas)
    - [23. 📅 estado](#23--estado)
    - [24. 📄 facturas](#24--facturas)
    - [25. 💰 pagos](#25--pagos)
    - [Explicacion](#explicacion)
  - [🏗 Construcción del Modelo Físico](#-construcción-del-modelo-físico)
    - [Descripción](#descripción-5)
    - [🗄️ Crear Apartado Base Datos](#️-crear-apartado-base-datos)
    - [📝**Código**](#código)
    - [Visualizar Colecciones](#visualizar-colecciones)
      - [📝**Comando**](#comando)
      - [Explicacion Codigo](#explicacion-codigo)
    - [Descripción Técnica](#descripción-técnica-4)
  - [🔧 Funciones para Consultas del Sistema](#-funciones-para-consultas-del-sistema)
    - [🛠️ Ejemplos de Funcionalidad](#️-ejemplos-de-funcionalidad)
    - [💻 Ejemplo de uso:](#-ejemplo-de-uso)
        - [Resultado esperado:](#resultado-esperado)
  - [👤 Implementación de Usuarios](#-implementación-de-usuarios)
    - [🛠️ Datos de los usuarios registrados](#️-datos-de-los-usuarios-registrados)
  - [👥 Características de los Usuarios](#-características-de-los-usuarios)
    - [Explicacion a fondo](#explicacion-a-fondo)
    - [🛠️ Ejemplo de uso en pruebas](#️-ejemplo-de-uso-en-pruebas)
- [🔗 Referencias](#-referencias)
- [](#-9)
  - [👥 Desarrolladores](#-desarrolladores)
  - [🤝 Contribuciones](#-contribuciones)
    - [👩‍💻 Aura Camila Pico Araque](#-aura-camila-pico-araque)
    - [👨‍💻 Daniel Esteban Guerrero Quintero](#-daniel-esteban-guerrero-quintero)
  - [📜 Licencia y Contacto](#-licencia-y-contacto)
    - [👤 Aura Camila Pico Araque](#-aura-camila-pico-araque-1)
    - [👤 Daniel Esteban Guerrero Quintero](#-daniel-esteban-guerrero-quintero-1)
  - [🛠 Herramientas de Desarrollo](#-herramientas-de-desarrollo)

<br>
<br>

## ✅ Requisitos del Sistema

<div align="center">

<img src="https://img.shields.io/badge/MongoDB-6.0+-47A248?logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB%20Compass-1.40+-green?logo=mongodb"/>
<img src="https://img.shields.io/badge/Node.js-18.x+-339933?logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Editor-VSCode-007ACC?logo=visualstudiocode&logoColor=white"/>

</div>

Para el desarrollo de nuestro **Sistema Hospitalario en MongoDB**, nosotros utilizamos el siguiente entorno tecnológico:

- **MongoDB** `v6.0` o superior  
  Es el motor de base de datos NoSQL que elegimos para estructurar y almacenar toda la información hospitalaria, permitiéndonos trabajar con colecciones flexibles y relaciones referenciales.

- **MongoDB Compass** `v1.40` o superior  
  Esta herramienta nos facilitó la visualización y validación de nuestras colecciones, así como la ejecución de consultas y operaciones CRUD durante el proceso de pruebas.

- **Node.js** `v18.x` o superior *(opcional)*  
  Lo consideramos útil para crear scripts que automatizan la carga de datos y simulan interacciones con la base de datos desde una lógica de backend.

- **Visual Studio Code**  
  Fue nuestro editor de código principal. Nos permitió mantener una estructura organizada del proyecto y colaborar de manera eficiente.

> 🛠️ Recomendamos verificar que el servicio de MongoDB esté corriendo correctamente en el entorno local antes de iniciar con las inserciones o consultas.


<br>
<br>

## 🧩 Instalación y Configuración

Para poner en marcha el sistema hospitalario, se requiere tener un entorno de base de datos MongoDB instalado y listo para ejecutar tanto la estructura como los datos del sistema. 

A continuación, detallamos los pasos necesarios para configurar todo correctamente.

<br>


#### 🛠️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- MongoDB Community Server

- MongoDB Compass (opcional, para una vista gráfica)

- Node.js (opcional, si se utilizará una interfaz o entorno con scripts JavaScript)

- El archivo ddl.js con la creación de colecciones y validadores.

- El archivo dml.json con datos de ejemplo (si se desea cargar información inicial).

- El archivo dql_funciones.js con funciones para consultas frecuentes.

<br><br>

## ⚙️ Paso a Paso

#### 1️⃣ Crear la Base de Datos y Estructura

Ejecuta el archivo ddl.js dentro del entorno de MongoDB. Esto generará todas las colecciones necesarias, incluyendo validación de datos por esquema:

```bash

# Ingresar al shell de MongoDB
mongo

# Cambiar a la base de datos
use sistema_hospitalario

# Ejecutar el archivo con las colecciones y validadores
load("ddl.js")
```

<br>

---

<br>


#### 2️⃣ Cargar los Datos Iniciales

Si tienes un archivo llamado dml.json con datos de prueba, puedes cargarlo usando mongoimport desde la terminal o consola:

```bash
mongoimport --db sistema_hospitalario --collection pacientes --file dml.json --jsonArray
⚠️ Repite este proceso para cada colección (hospitales, medicamentos, personal, etc.) si tienes archivos JSON separados.
```

<br>

---

<br>


#### 3️⃣ Crear Usuarios del Sistema

Si estás utilizando autenticación en MongoDB, asegúrate de crear los usuarios y asignar sus roles. Puedes ejecutar estos comandos directamente en el shell:


```js
use sistema_hospitalario

db.createUser({
  user: "admin",
  pwd: "admin123",
  roles: [{ role: "dbOwner", db: "sistema_hospitalario" }]
})
```

Este paso debe repetirse para cada usuario (medico, enfermero, etc.).

<br>

---

<br>


#### 4️⃣ Ejecutar Funciones de Consulta

Las funciones que permiten consultar datos como historiales, tratamientos, áreas médicas y más están definidas en el archivo dql_funciones.js. Para usarlas:

```bash
# Abrir MongoDB Shell
mongo

# Cambiar a la base de datos
use sistema_hospitalario

# Cargar las funciones
load("dql_funciones.js")

# Ejecutar alguna función
historialClinicoCompleto(1005)
```
---


#### Verificación Final
Para comprobar que todo está funcionando correctamente:

Consulta las colecciones con db.nombreColeccion.find().pretty()

Verifica que los usuarios se conecten con sus permisos usando:

```bash
mongo -u medico -p medico123 --authenticationDatabase sistema_hospitalario
```


<br>
<br><br>


#  🏥 Sistema Hospitalario 

El objetivo del proyecto es diseñar y desarrollar un sistema de base de datos en **MongoDB** que permita gestionar de manera eficiente todas las operaciones relacionadas con la administración de un **Sistema Hospitalario**. Dicho sistema incluirá la gestión de hospitales, pacientes, médicos, tratamientos, medicamentos, visitas médicas, historiales clínicos, áreas especializadas y personal administrativo.

<br>

## Introducción

El sistema propuesto busca facilitar la gestión de hospitales, pacientes, personal médico y administrativo, áreas especializadas, tratamientos, medicamentos, visitas médicas e historiales clínicos. Además, se incluirán mecanismos de autenticación y control de acceso basados en roles para garantizar la seguridad y privacidad de la información. A través de consultas optimizadas y funciones re utilizables, se pretende brindar a los usuarios herramientas para la toma de decisiones, el control de inventario, el análisis de datos clínicos y la mejora continua en la atención médica.

<br><br>


## 📚 Caso de Estudio

- [Recurso Base](https://drive.google.com/file/d/1MqFQ7nI6pOwNBHwOSZjvmbwOalD-9zoG/view)
    
Los hospital no cuenta con un sistema centralizado que permita almacenar consultar y actualizar la información de sus pacientes médicos tratamientos y personas administrativa de forma eficiente esto ha provocado dificultades en la gestión de historiales clínicos control de visitas médicas y distribución de medicamentos
    
Nuestra propuesta es un diseño e implementación de una base de datos No SQL , utilizando MongoDB , este nos permitirá gestionar de forma integral y escalable todos los elementos relacionados con las operaciones hospitalarias
    
Tendremos en cuenta la gestión de las siguientes entidades que serán claves:

El sistema debe cumplir con las siguientes características estructurales y funcionales:

##### Estructura del Sistema

- Un hospital puede tener múltiples áreas especializadas.
- Cada hospital tiene un director general, que puede supervisar varios hospitales.
- Cada hospital cuenta con médicos, enfermeros y personal administrativo.
- Se debe mantener el historial de pacientes y tratamientos realizados.

##### Pacientes

- Identificados por historia clínica, nombre, dirección, teléfono, correo y seguros médicos.
- Los historiales clínicos registran diagnósticos, tratamientos y resultados.

##### Médicos y Personal

- Los médicos se identifican por número de colegiatura, nombre, especialidad, teléfono, correo y salario.
- Tipos de personal definidos:
  - 001: Director General
  - 002: Médico Especialista
  - 003: Enfermero/a
  - 004: Personal Administrativo
  - 005: Personal de Mantenimiento

##### Tratamientos y Medicamentos

- Tratamientos con nombre, descripción, área médica y costo.
- Medicamentos registrados por nombre, tipo, fabricante e inventario disponible.

##### Visitas Médicas

- Registran fecha, hora, médico asignado, paciente atendido y diagnóstico.
- Un paciente puede tener varias visitas médicas a lo largo del tiempo.



Usaremos MongoDB ya que nos permite almacenar datos de manera flexible lo que es ideal para manejar documentos clínicos que pueden variar en estructuras según el paciente o especialidad , además de su capacidad de escalabilidad en sistemas hospitalarios que pueden crecer con el tiempo.

<br><br>

# 📄 Planificación

La planificación del proyecto se ha estructurado en **etapas progresivas**, con base en el análisis de requerimientos del sistema hospitalario, su estructura funcional y los datos que se deben gestionar. El objetivo es lograr una base de datos No SQL eficiente, escalable y coherente con el funcionamiento real de una institución médica.

Siguiendo la construcción del sistema hospitalario en MongoDB requiere una planificación estructurada que permita abordar cada componente de manera lógica, modular y escalable. Esta planificación se diseñó con base en las necesidades específicas de un entorno clínico real, considerando tanto la complejidad de la información como la dinámica entre las áreas, el personal y los pacientes.

Para finalizar la planificación del sistema hospitalario la basamos en etapas progresivas en la cual abordamos cada componente de manera lógica, modular y escalable. Diseñado a partir de una base de las necesidades específicas de un entorno clínico real , considerando tanto la complejidad de la información como la dinámica que tiene cada área, el personal y sus pacientes.

<br>

## 🏗 Construcción del Modelo Conceptual

Durante la construcción del modelo conceptual, nuestro objetivo principal fue estructurar una base de datos que no solo cumpliera con los requerimientos técnicos de un sistema hospitalario moderno, sino que también representara con fidelidad el funcionamiento real de una institución médica. 
Desde el inicio, nos propusimos que cada colección reflejara relaciones reales entre pacientes, médicos, personal administrativo, tratamientos, medicamentos y espacios físicos, manteniendo siempre la coherencia, escalabilidad y eficiencia en la gestión de la información.

<br>


### Descripción


Para diseñar el modelo, partimos de entidades fundamentales como hospitales, las cuales actúan como eje central del sistema. Cada hospital se encuentra relacionado directamente con sus áreas especializadas, su personal (médico, administrativo, de enfermería, directivo y de servicios), así como con los pacientes que atiende. A partir de esta estructura, definimos otras entidades como pacientes, visitas médicas, historiales clínicos, tratamientos y medicamentos, todas enlazadas mediante referencias claras que permiten trazar un recorrido completo de atención dentro del sistema. 

Un aspecto clave fue unificar la gestión del personal en una sola colección (personal), subdividido lógicamente por roles, lo cual nos permitió reducir redundancias y facilitar las consultas posteriores. Asimismo, modelamos los seguros médicos como documentos referenciados que amplían la información del paciente sin sobrecargar su estructura. 

Las relaciones entre especialidades, tratamientos y medicamentos también fueron cuidadosamente mapeadas para garantizar una segmentación lógica y detallada que permita analizar la operación del hospital por áreas médicas. Este diseño se realizó considerando la integración fluida de todos los componentes y dejando la estructura lista para escalar e integrar nuevas funcionalidades.

<br><br>

<details>
  <summary><strong> 🧰 Estructura del seguimiento a hacer para nuestro modelo conceptual </strong></summary>

  <br>

## 📁 Estructura Modelo Conceptual

### 1. 🏥 `hospitales`

Representa los hospitales del sistema.

-   `idHospital`: ObjectId (PK) – Identificador único del hospital
    
-   `nombre`: String – Nombre del hospital
    
-   `ubicacion`: String – Dirección o ciudad
    
-   `telefono`: String – Número de contacto
    
-   `idDirector`: Ref → `personal` – Hace referencia al director general (tipo 001)
    
-   `areasEspecializadas`: [Ref → `areasEspecializadas`] – Áreas que conforman el hospital
    
-   `personal`: [Ref → `personal`] – Médicos, administrativos, enfermeros y otros
    
-   `pacientes`: [Ref → `pacientes`] – Pacientes registrados en el hospital
    
#

### 2. 🧠 `areasEspecializadas`

Define las especialidades médicas disponibles.

-   `idArea`: ObjectId (PK) – Identificador único del área

-   `nombre`: String – Nombre del área (ej. Cardiología, Pediatría)
    
-   `descripcion`: String – Descripción general del área

- `hospital_asignado`:  Ref → hospitales *(Requerido)*  
#
    
### 3. 🧠 `personal` (OPCIONAL )
Unificar los cargos en una sola colección para en un momento de consultas sean simples y minimizar la duplicación de estructura entre colecciones al igual que validaciones mas simples 👍

#### 3.1 🏛️ `directoresGenerales`

Estructura ampliada de directores generales con todos los campos.

- `idDirector`: ObjectId *(Primary Key)*  
- `tipo_personal`: String *(Requerido)*  
- `numero_documento`: String *(Requerido)*  
- `nombre_completo`: String *(Requerido)*  
- `rol`: String *(Requerido)*  
- `telefono`: String *(Requerido)*  
- `correo_electronico`: String *(Requerido)*  
- `salario`: Number *(Requerido)*  
- `fecha_ingreso`: Date *(Requerido)*  
- `hospitales_asignados`: Ref → hospitales*(Requerido)*  

---

#### 3.2 🩺 `medicosEspecialistas`

- `idMedico`: ObjectId *(Primary Key)*  
- `tipo_personal`: String *(Requerido)*  
- `numero_colegiatura`: String *(Requerido)*  
- `nombre_completo`: String *(Requerido)*  
- `especialidad`: String *(Requerido)*  
- `telefono`: String *(Requerido)*  
- `correo_electronico`: String *(Requerido)*  
- `salario`: Number *(Requerido)*  
- `hospital_asignado`: Ref → hospitales *(Requerido)*  
---


#### 3.3 🩹 `personalEnfermeria`

- `idEnfermero`: ObjectId *(Primary Key)*  
- `tipo_personal`: String *(Requerido)*  
- `numero_documento`: String *(Requerido)*  
- `nombre_completo`: String *(Requerido)*  
- `area_asignada`: String *(Requerido)*  
- `telefono`: String *(Requerido)*  
- `correo_electronico`: String *(Requerido)*  
- `salario`: Number *(Requerido)*  
- `hospital_asignado`: Ref → hospitales *(Requerido)*  
---


#### 3.4.1 💼 `personalAdministrativo`

Estructura del personal administrativo del sistema hospitalario.

- `idAdministrativo`: ObjectId *(Primary Key)*  
- `tipo_personal`: String *(Requerido)*  
- `numero_documento`: String *(Requerido)*  
- `nombre_completo`: String *(Requerido)*  
- `cargo`: String *(Requerido)*  
 [
    - `"Asistente de Gestión Humana"`  
    - `"Coordinador Financiero"`  
    - `"Recepcionista Principal"`
  ]
- `telefono`: String *(Requerido)*  
- `correo_electronico`: String *(Requerido)*  
- `salario`: Number *(Requerido)*  
- `hospital_asignado`: Ref → hospitales*(Requerido)*  
---


#### 3.5 🧹 `personalAseoYServicios`

Estructura del personal de aseo y servicios generales.

- `idPersonalAseo`: ObjectId *(Primary Key)* 
- `tipo_personal`: String *(Requerido)*  
- `numero_documento`: String *(Requerido)*  
  - Documento de identidad (10 dígitos).  
- `nombre_completo`: String *(Requerido)*  
  - Nombre completo del empleado.  
- `funcion`: String *(Requerido)*  
  - Descripción específica de sus labores.  [
    - `"Limpieza de áreas quirúrgicas"`  
    - `"Aseo de habitaciones"`  
    - `"Mantenimiento de áreas comunes"`
]
- `telefono`: String *(Requerido)*   
- `correo_electronico`: String *(Opcional)*  
- `salario`: Number *(Requerido)*  
- `hospital_asignado`:  Ref → hospitales *(Requerido)*  
    
#
### 4. 🧍 `pacientes`

Información de los pacientes registrados.

-   `idPaciente`: ObjectId (PK)
      
-   `numeroHistoriaClinica`: String – Código único
    
-   `nombre`: String
    
-   `direccion`: String
    
-   `telefono`: String
    
-   `correo`: String
    
-   `segurosMedicos`: [Ref → `segurosMedicos` :  `nombre`: String , `compañia`: String  ]
    
-   `historialClinico`: [Ref → `historialesClinicos`: -   `idPaciente`: Ref →[ `pacientes`] , `diagnostico`: String ,	`tratamientos`: [Ref → 	`tratamientos`]	,`resultados`: String`fecha`: Date ]

- `hospital_asignado`:  Ref → hospitales *(Requerido)*  


#
### 5. 💳 `segurosMedicos`

Listado de aseguradoras y entidades médicas.

-   `idSeguro`: ObjectId (PK)
    
-   `nombre`: String
    
-   `compañia`: String (opcional)

-    `tipo_seguro` :  String 
    


#
### 6. 📋 `historialesClinicos`

Registro médico del paciente.

-   `idHistorial`: ObjectId (PK)
    
-   `idPaciente`: Ref → `pacientes`
 	
-   `tipo de especialista`:  Ref → `areasEspecializadas` :  String
 	
-    `médico_responsable` :  Ref → `idMedico , idEnfermero `
 	    
-    `Motivo de la consulta` :    *String (Requerido)*

-   `diagnostico`: String
    
-   `tratamientos`: [Ref → `tratamientos`]
    
-   `resultados`: String
    
-   `fecha`: Date
    
- `hospital_asignado`:  Ref → hospitales *(Requerido)*  

#
### 7. 💉 `tratamientos`

Procedimientos realizados al paciente.

-   `idTratamiento`: ObjectId (PK)
    
-   `nombre`: String
    
-   `descripcion`: String
    
-   `areaMedica`: Ref → `areasEspecializadas`

-    `Plan de tratamiento` : String

-    `duracion_estimada` :  String
    
-   `costo`: Number
    
-   `medicamentosUsados`: [Ref → `medicamentos`]

- `hospital_asignado`:  Ref → hospitales *(Requerido)*  
    
#
### 8. 💊 `medicamentos`

Inventario de medicamentos disponibles.

-   `idMedicamento`: ObjectId (PK)
    
-   `nombre`: String
    
-   `fabricante`: String
    
-   `tipo`: String (ej. analgésico, antibiótico)

-    `dosis_estandar` :  String  (Requerido)

-   `Frecuencia` :   String  (Requerido)

-   `Vía de administración`  :    String  (Requerido)

-   `Reacciones adversas` :    String  (Requerido)
    
-   `inventario`: Number
    
- `hospital_asignado`:  Ref → hospitales *(Requerido)*  
- 
#

### 9. 📆 `visitasMedicas`

Registro de las atenciones médicas.

-   `idVisita`: ObjectId (PK)
    
-   `tipo_visita` :  String  (Requerido)

-	 `observaciones` :   String  (Requerido)

-   `fecha`: Date
    
-   `hora`: String
    
-   `medicoAsignado`: Ref → `personal` (tipo 002)
    
-   `pacienteAtendido`: Ref → `pacientes`
    
-   `diagnostico`: String

- `hospital_asignado`:  Ref → hospitales *(Requerido)*  

</details>


Analizar quienes tendran el `permisos: ["ver_pacientes", "editar_visitas"]`   para modelar los roles y el acceso de un array de permisos
  
(OPCIONAL):
tener en cuenta implementar o no **Citas y turnos** (gestión de tiempos)  , **Inventario y facturación** (gestión operativa y financiera) , Consentimientos, Reportes, Alertas, Adjuntos, Encuestas  

<br><br>



## 📈 Gráfica

```mermaid

graph TD

  

%% Entidades principales

Hospitales[Hospitales]

Areas[AreasEspecializadas]

Pacientes[Pacientes]

Seguros[SegurosMedicos]

Historial[HistorialesClinicos]

Tratamientos[Tratamientos]

Medicamentos[Medicamentos]

Visitas[VisitasMedicas]

  

%% Personal dividido en roles

Directores[DirectoresGenerales]

Medicos[MedicosEspecialistas]

Enfermeros[PersonalEnfermeria]

Administrativos[PersonalAdministrativo]

Aseo[PersonalAseoYServicios]

  

%% Atributos Hospitales

idHospital((idHospital))

nombreHospital((nombre))

ubicacionHospital((ubicacion))

telefonoHospital((telefono))

Hospitales --> idHospital

Hospitales --> nombreHospital

Hospitales --> ubicacionHospital

Hospitales --> telefonoHospital

Hospitales -->|dirigido por| Directores

Hospitales -->|tiene áreas| Areas

Hospitales -->|tiene personal| Directores

Hospitales --> Directores

Hospitales --> Medicos

Hospitales --> Enfermeros

Hospitales --> Administrativos

Hospitales --> Aseo

Hospitales -->|atiende a| Pacientes

  

%% Areas Especializadas

idArea((idArea))

nombreArea((nombre))

descArea((descripcion))

Areas --> idArea

Areas --> nombreArea

Areas --> descArea

Areas -->|pertenece a| Hospitales

  

%% Personal General

Directores -->|trabaja en| Hospitales

Medicos -->|trabaja en| Hospitales

Enfermeros -->|trabaja en| Hospitales

Administrativos -->|trabaja en| Hospitales

Aseo -->|trabaja en| Hospitales

  

%% Pacientes

idPaciente((idPaciente))

nombrePaciente((nombre))

direccion((direccion))

telefono((telefono))

correo((correo))

historia((numeroHistoriaClinica))

Pacientes --> idPaciente

Pacientes --> nombrePaciente

Pacientes --> direccion

Pacientes --> telefono

Pacientes --> correo

Pacientes --> historia

Pacientes -->|tiene seguro| Seguros

Pacientes -->|tiene historial| Historial

Pacientes -->|hospitalizado en| Hospitales

  

%% Seguros Médicos

idSeguro((idSeguro))

nombreSeguro((nombre))

compania((compañia))

tipoSeguro((tipo_seguro))

Seguros --> idSeguro

Seguros --> nombreSeguro

Seguros --> compania

Seguros --> tipoSeguro

  

%% Historial Clínico

idHistorial((idHistorial))

motivo((MotivoConsulta))

diagnostico((diagnostico))

resultados((resultados))

fechaHistorial((fecha))

Historial --> idHistorial

Historial --> motivo

Historial --> diagnostico

Historial --> resultados

Historial --> fechaHistorial

Historial -->|de paciente| Pacientes

Historial -->|requiere tratamiento| Tratamientos

Historial -->|realizado por| Medicos

Historial -->|realizado por| Enfermeros

Historial -->|área médica| Areas

Historial -->|hospital| Hospitales

  

%% Tratamientos

idTratamiento((idTratamiento))

nombreTratamiento((nombre))

descripcionTratamiento((descripcion))

plan((PlanTratamiento))

duracion((duracion_estimada))

costo((costo))

Tratamientos --> idTratamiento

Tratamientos --> nombreTratamiento

Tratamientos --> descripcionTratamiento

Tratamientos --> plan

Tratamientos --> duracion

Tratamientos --> costo

Tratamientos -->|usa| Medicamentos

Tratamientos -->|área| Areas

Tratamientos -->|hospital| Hospitales

  

%% Medicamentos

idMed((idMedicamento))

nombreMed((nombre))

fabricante((fabricante))

tipoMed((tipo))

dosis((dosis_estandar))

frecuencia((Frecuencia))

via((VíaAdministración))

reacciones((ReaccionesAdversas))

inventario((inventario))

Medicamentos --> idMed

Medicamentos --> nombreMed

Medicamentos --> fabricante

Medicamentos --> tipoMed

Medicamentos --> dosis

Medicamentos --> frecuencia

Medicamentos --> via

Medicamentos --> reacciones

Medicamentos --> inventario

Medicamentos -->|disponible en| Hospitales

  

%% Visitas Médicas

idVisita((idVisita))

tipoVisita((tipo_visita))

observaciones((observaciones))

fechaVisita((fecha))

hora((hora))

diagnosticoVisita((diagnostico))

Visitas --> idVisita

Visitas --> tipoVisita

Visitas --> observaciones

Visitas --> fechaVisita

Visitas --> hora

Visitas --> diagnosticoVisita

Visitas -->|realizada por| Medicos

Visitas -->|atendió a| Pacientes

Visitas -->|hospital| Hospitales

```


<br>

### 🛠️ Descripción Técnica

Técnicamente, el modelo conceptual fue construido con un enfoque modular, usando `ObjectId` como identificadores únicos y referencias entre documentos para mantener la integridad referencial. Se aplicó el principio de reutilización a través de arrays referenciales en campos como hospital_asignado, medicamentosUsados, historialClinico o areasEspecializadas, lo que permite mantener un alto nivel de normalización sin sacrificar el rendimiento. 

Se emplearon estructuras anidadas en contextos donde era más eficiente agrupar datos directamente, como los formularios clínicos del historial o los planes de tratamiento, evitando consultas innecesarias. La clasificación del personal dentro de una colección común con discriminación por tipo de rol facilita la validación y el control de accesos, mientras que el uso de relaciones bidireccionales entre visitas, médicos y pacientes permite reconstruir trayectorias clínicas completas. 

Este modelo conceptual, respaldado por una gráfica ER coherente, establece las bases técnicas para avanzar hacia el modelo lógico y físico sin necesidad de rediseñar las relaciones principales, y garantiza un manejo robusto y flexible de la información médica, administrativa y operativa del sistema hospitalario.



<br><br>

## 🏗 Construcción del Modelo Lógico

Una vez definido el modelo conceptual, procedimos con la construcción del modelo lógico, transformando las entidades y relaciones previamente diseñadas en una estructura más formal, siguiendo la lógica de una base de datos NoSQL, específicamente adaptada a MongoDB. 

El objetivo de esta fase fue garantizar que las relaciones, tipos de datos y asociaciones entre documentos fueran funcionales, eficientes y coherentes con el flujo operativo de un sistema hospitalario real. Este modelo actúa como puente entre la idea abstracta del sistema (conceptual) y su futura implementación física.


<br>

### Descripción

En el modelo lógico, estructuramos cada entidad como una colección en MongoDB, definiendo claramente sus campos, tipos de datos, referencias cruzadas y relaciones jerárquicas. Las entidades como hospitales, pacientes, personal, tratamientos, medicamentos, visitas médicas, historiales clínicos, seguros médicos y áreas especializadas fueron diseñadas como colecciones independientes, pero estrechamente conectadas entre sí a través de claves foráneas representadas por ObjectId. 

El hospital es el núcleo relacional, al que se asocian otras entidades mediante referencias directas. Por ejemplo, los pacientes, medicamentos y tratamientos se relacionan directamente con el hospital asignado, lo que permite segmentar fácilmente la información por sede. El personal, aunque distribuido en varios roles, se representa lógicamente como una unidad con especialización interna, lo cual optimiza las relaciones con historiales, visitas y tratamientos. 

También se definieron relaciones como la que existe entre un historial clínico y sus tratamientos, o entre una visita médica y el médico responsable, estableciendo un flujo informativo que permite reconstruir con precisión el recorrido clínico del paciente.

- Una tabla está en 1FN si cumple con los siguientes criterios:

- Todos los atributos contienen valores atómicos (indivisibles).

- No debe haber grupos repetitivos de columnas.

- Cada columna debe contener un solo valor en cada fila.

<br><br>

## 📈 Gráfica

<br>

```mermaid
erDiagram

    HOSPITALES ||--o{ AREAS_ESPECIALIZADAS : tiene
    HOSPITALES ||--o{ PACIENTES : atiende
    HOSPITALES ||--o{ MEDICOS : emplea
    HOSPITALES ||--o{ DIRECTORES : dirigido_por
    HOSPITALES ||--o{ ENFERMEROS : emplea
    HOSPITALES ||--o{ ADMINISTRATIVOS : emplea
    HOSPITALES ||--o{ ASEO : emplea
    HOSPITALES ||--o{ MEDICAMENTOS : dispone
    HOSPITALES ||--o{ TRATAMIENTOS : aplica

    AREAS_ESPECIALIZADAS ||--o{ TRATAMIENTOS : contiene
    AREAS_ESPECIALIZADAS ||--o{ HISTORIALES_CLINICOS : asociados

    PACIENTES ||--o{ HISTORIALES_CLINICOS : tiene
    PACIENTES ||--|| SEGUROS_MEDICOS : usa
    PACIENTES ||--o{ VISITAS_MEDICAS : recibe

    HISTORIALES_CLINICOS ||--o{ TRATAMIENTOS : requiere
    HISTORIALES_CLINICOS ||--|| MEDICOS : realizado_por
    HISTORIALES_CLINICOS ||--|| ENFERMEROS : asistido_por

    TRATAMIENTOS ||--o{ MEDICAMENTOS : usa

    VISITAS_MEDICAS ||--|| MEDICOS : realizada_por

    HOSPITALES {
        string idHospital PK
        string nombre
        string ubicacion
        string telefono
    }

    AREAS_ESPECIALIZADAS {
        string idArea PK
        string nombre
        string descripcion
    }

    PACIENTES {
        string idPaciente PK
        string nombre
        string direccion
        string telefono
        string correo
        string numeroHistoriaClinica
    }

    SEGUROS_MEDICOS {
        string idSeguro PK
        string nombre
        string compania
        string tipo_seguro
    }

    HISTORIALES_CLINICOS {
        string idHistorial PK
        string MotivoConsulta
        string diagnostico
        string resultados
        string fecha
    }

    TRATAMIENTOS {
        string idTratamiento PK
        string nombre
        string descripcion
        string PlanTratamiento
        string duracion_estimada
        float costo
    }

    MEDICAMENTOS {
        string idMedicamento PK
        string nombre
        string fabricante
        string tipo
        string dosis_estandar
        string Frecuencia
        string VíaAdministración
        string ReaccionesAdversas
        int inventario
    }

    VISITAS_MEDICAS {
        string idVisita PK
        string tipo_visita
        string observaciones
        string fecha
        string hora
        string diagnostico
    }

    DIRECTORES {
        string idPersonal PK
        string nombre
        string telefono
        string correo
        float salario
    }

    MEDICOS {
        string idPersonal PK
        string nombre
        string especialidad
        string numeroColegiatura
        string telefono
        string correo
        float salario
    }

    ENFERMEROS {
        string idPersonal PK
        string nombre
        string telefono
        string correo
        float salario
    }

    ADMINISTRATIVOS {
        string idPersonal PK
        string nombre
        string telefono
        string correo
        float salario
    }

    ASEO {
        string idPersonal PK
        string nombre
        string telefono
        string correo
        float salario
    }
```

<br><br>

### Descripción Técnica

Desde una perspectiva técnica, el modelo lógico se construyó respetando los principios de normalización aplicables al enfoque documental. Se utilizaron referencias (DBRef o manuales con ObjectId) para conectar entidades sin duplicar información, priorizando la eficiencia en la consulta y la integridad referencial. Cada colección cuenta con un identificador único y campos definidos con tipos de datos adecuados (cadenas, números, fechas, arreglos y referencias). 

Las relaciones de uno a muchos y muchos a muchos se manejaron principalmente mediante arrays de referencias, como en el caso de los tratamientos que agrupan múltiples medicamentos, o los hospitales que contienen varias áreas especializadas. Además, se incorporaron campos pensados para ser indexados en el futuro, anticipando necesidades de rendimiento en consultas frecuentes. 

Las estructuras anidadas se reservaron para datos que no requieren ser consultados de forma independiente, mientras que la información crítica o relacional se gestionó por referencia. Este modelo lógico, respaldado por la gráfica ER construida con notación formal, garantiza una base sólida para el modelo físico, con una estructura clara, relaciones explícitas y una lógica que facilita tanto el desarrollo como el mantenimiento del sistema hospitalario.


<br><br>


## 〽 Normalización del Modelo Lógico

En esta etapa del diseño, aplicamos el proceso de normalización al modelo lógico con el fin de garantizar la integridad, consistencia y eficiencia del almacenamiento de los datos dentro del sistema hospitalario. La normalización permite eliminar redundancias innecesarias, estructurar mejor la información y facilitar su mantenimiento a largo plazo, especialmente en un entorno con múltiples relaciones como lo es un sistema clínico. 

A pesar de trabajar con una base NoSQL como MongoDB, aplicamos los principios de normalización clásicos de bases de datos relacionales como una guía metodológica que refuerza la claridad y la organización interna del modelo lógico antes de traducirlo al modelo físico documental.


<br><br>

## 1️⃣ Primera Forma Normal (1FN)

La Primera Forma Normal busca eliminar los grupos repetitivos dentro de una misma entidad, asegurando que cada campo contenga solo valores atómicos y que no existan columnas que almacenen múltiples valores o estructuras anidadas que generen ambigüedad en la lectura o manipulación de los datos. Esta etapa es fundamental, ya que establece las bases para una estructura limpia, donde cada atributo representa una sola información por fila, evitando duplicidades internas y facilitando su posterior análisis o consulta.


<br><br>

### Descripción

Durante la revisión del modelo lógico, identificamos ciertas entidades que inicialmente contenían arreglos o estructuras no atómicas, como listas de tratamientos dentro de un historial clínico, medicamentos dentro de un tratamiento, o múltiples áreas asignadas directamente en el hospital. En el proceso de adaptación a la 1FN, se tomó la decisión de separar estas agrupaciones en colecciones independientes o referenciadas, garantizando que cada documento representara una única instancia de información. Por ejemplo, en lugar de almacenar todos los medicamentos como un array dentro del tratamiento, se transformaron en documentos individuales relacionados mediante ObjectId. De esta manera, cada entidad mantiene una estructura clara y alineada con los principios de atomicidad de datos.


<br>

## 📈 Gráfica


```mermaid
erDiagram
    HOSPITALES ||--o{ AREAS_ESPECIALIZADAS : tiene
    HOSPITALES ||--o{ PACIENTES : atiende
    HOSPITALES ||--o{ PERSONAL : emplea
    HOSPITALES ||--o{ MEDICAMENTOS : dispone
    HOSPITALES ||--o{ TRATAMIENTOS : aplica

    AREAS_ESPECIALIZADAS ||--o{ TRATAMIENTOS : contiene
    AREAS_ESPECIALIZADAS ||--o{ HISTORIALES_CLINICOS : asociados

    PACIENTES ||--o{ HISTORIALES_CLINICOS : tiene
    PACIENTES ||--|| SEGUROS_MEDICOS : usa
    PACIENTES ||--o{ VISITAS_MEDICAS : recibe

    HISTORIALES_CLINICOS ||--o{ TRATAMIENTOS : requiere
    HISTORIALES_CLINICOS ||--|| PERSONAL : realizado_por

    TRATAMIENTOS ||--o{ MEDICAMENTOS : usa

    VISITAS_MEDICAS ||--|| PERSONAL : realizada_por

    PERSONAL ||--|| ROLES : tiene

    HOSPITALES {
        string idHospital PK
        string nombre
        string ubicacion
        number telefono
    }

    AREAS_ESPECIALIZADAS {
        string idArea PK
        string nombre
        string descripcion
        string idHospital FK
    }

    PACIENTES {
        string idPaciente PK
        string nombre
        string direccion
        string telefono
        string correo
        string numeroHistoriaClinica
        string idSeguro FK
        string idHospital FK
    }

    SEGUROS_MEDICOS {
        string idSeguro PK
        string nombre
        string compania
        string tipo_seguro
    }

    HISTORIALES_CLINICOS {
        string idHistorial PK
        string motivoConsulta
        string diagnostico
        string resultados
        string fecha
        string idPaciente FK
        string idArea FK
        string idMedico FK
        string idEnfermero FK
    }

    TRATAMIENTOS {
        string idTratamiento PK
        string nombre
        string descripcion
        string planTratamiento
        string duracionEstimada
        float costo
        string idArea FK
        string idHospital FK
    }

    MEDICAMENTOS {
        string idMedicamento PK
        string nombre
        string fabricante
        string tipo
        string dosisEstandar
        string frecuencia
        string viaAdministracion
        string reaccionesAdversas
        int inventario
        string idHospital FK
    }

    VISITAS_MEDICAS {
        string idVisita PK
        string tipoVisita
        string observaciones
        string fecha
        string hora
        string diagnostico
        string idPaciente FK
        string idMedico FK
    }

    PERSONAL {
        string idPersonal PK
        string nombre
        string telefono
        string correo
        float salario
        string idHospital FK
        string idRol FK
        string especialidad
        string numeroColegiatura
    }

    ROLES {
        string idRol PK
        string nombreRol
        string descripcion
    }
```
<br><br>

### Descripción Técnica

Técnicamente, para cumplir con la Primera Forma Normal, nos aseguramos de que todos los atributos definidos en cada colección tuvieran un único valor por registro, evitando campos tipo array cuando estos representaban datos que podían crecer o cambiar dinámicamente. 

Se eliminó cualquier tipo de estructura multivaluada que dificultara el acceso individual a los datos. En lugar de eso, implementamos relaciones referenciales donde era necesario, asegurando la unicidad de cada dato y la posibilidad de aplicar operaciones CRUD con mayor precisión. 

Esta decisión también facilitó la implementación posterior de índices y filtros, ya que la información al estar desnormalizada por completo permite búsquedas más directas y eficientes. El paso por la 1FN nos permitió consolidar una base sólida sobre la cual aplicar las siguientes formas de normalización con mayor claridad.



<br><br>
 
## 2️⃣ Segunda Forma Normal (2FN)

La Segunda Forma Normal tiene como objetivo eliminar la dependencia parcial de atributos respecto a claves primarias compuestas. En otras palabras, busca que todos los campos de una tabla o colección dependan completamente de la clave primaria y no solo de una parte de ella. 

Este principio es especialmente útil en estructuras donde una clave está compuesta por más de un campo, situación que puede provocar redundancia de datos o inconsistencias si no se maneja adecuadamente. Aunque MongoDB no utiliza claves compuestas de forma tradicional, seguimos este principio para asegurar la cohesión lógica de cada documento y evitar atributos que dependan parcialmente de identificadores múltiples.

<br>

### Descripción

Durante el análisis del modelo lógico, identificamos entidades donde existía dependencia parcial, especialmente en aquellos documentos donde se almacenaban atributos que estaban relacionados solo con una parte del contexto. 

Por ejemplo, en las visitas médicas, se incluían datos del paciente y del médico, pero también información como la especialidad del médico o el motivo de consulta que, si bien estaban dentro del documento de visita, dependían únicamente del profesional de salud y no de la visita en sí. 

En estos casos, se decidió trasladar estos atributos a sus entidades correspondientes (como personal o áreas) y mantener en la colección de visitas únicamente los campos que dependieran directamente del contexto completo de la visita. Este ajuste redujo la redundancia y facilitó una mejor trazabilidad de la información.


<br><br>

## 📈 Gráfica

```mermaid
erDiagram
HOSPITALES ||--o{ AREAS_ESPECIALIZADAS : tiene
    HOSPITALES ||--o{ PACIENTES : atiende
    HOSPITALES ||--o{ PERSONAL : emplea
    HOSPITALES ||--o{ MEDICAMENTOS : dispone

    AREAS_ESPECIALIZADAS ||--o{ TRATAMIENTOS : contiene
    AREAS_ESPECIALIZADAS ||--o{ HISTORIALES_CLINICOS : asociados

    PACIENTES ||--o{ HISTORIALES_CLINICOS : tiene
    PACIENTES ||--|| SEGUROS_MEDICOS : usa
    PACIENTES ||--o{ VISITAS_MEDICAS : recibe

    HISTORIALES_CLINICOS ||--o{ TRATAMIENTOS_ASIGNADOS : requiere

    VISITAS_MEDICAS ||--|| PERSONAL : realizada_por

    PERSONAL ||--|| ROLES : tiene

    TRATAMIENTOS ||--o{ TRATAMIENTOS_ASIGNADOS : aplica
    MEDICAMENTOS ||--o{ TRATAMIENTOS_ASIGNADOS : incluidos_en

    HOSPITALES {
        string idHospital PK
        string nombre
        string ubicacion
        number telefono
    }

    AREAS_ESPECIALIZADAS {
        string idArea PK
        string nombre
        string descripcion
        string idHospital FK
    }

    PACIENTES {
        string idPaciente PK
        string nombre
        string direccion
        string telefono
        string correo
        string numeroHistoriaClinica
        string idSeguro FK
        string idHospital FK
    }

    SEGUROS_MEDICOS {
        string idSeguro PK
        string nombre
        string compania
        string tipo_seguro
    }

    HISTORIALES_CLINICOS {
        string idHistorial PK
        string motivoConsulta
        string diagnostico
        string resultados
        string fecha
        string idPaciente FK
        string idArea FK
    }

    TRATAMIENTOS {
        string idTratamiento PK
        string nombre
        string descripcion
        string planTratamiento
        string duracionEstimada
        float costo
        string idArea FK
    }

    MEDICAMENTOS {
        string idMedicamento PK
        string nombre
        string fabricante
        string tipo
        string dosisEstandar
        string frecuencia
        string viaAdministracion
        string reaccionesAdversas
        int inventario
        string idHospital FK
    }

    TRATAMIENTOS_ASIGNADOS {
        string idAsignacion PK
        string idHistorial FK
        string idTratamiento FK
        string idMedicamento FK
        string fechaAplicacion
        string observaciones
        string idPersonalMedico FK
        string idPersonalEnfermero FK
    }

    VISITAS_MEDICAS {
        string idVisita PK
        string tipoVisita
        string observaciones
        string fecha
        string hora
        string diagnostico
        string idPaciente FK
        string idMedico FK
    }

    PERSONAL {
        string idPersonal PK
        string nombre
        string telefono
        string correo
        float salario
        string idHospital FK
        string idRol FK
        string especialidad
        string numeroColegiatura
    }

    ROLES {
        string idRol PK
        string nombreRol
        string descripcion
    }

```



### Descripción Técnica

Para garantizar el cumplimiento de la Segunda Forma Normal, revisamos las entidades que incluían referencias cruzadas o información contextual duplicada. Se reestructuraron los documentos eliminando campos que no dependían completamente del identificador del documento. 

Por ejemplo, la información relacionada con la especialidad médica fue centralizada en la colección de áreasEspecializadas, y los datos del médico se relacionaron mediante referencias, evitando así repetir constantemente información que podía mantenerse de forma centralizada. 

En términos de MongoDB, esto se tradujo en colecciones más limpias, enfocadas en un único propósito lógico, con estructuras referenciales claras y sin ambiguedades. Esta separación de responsabilidades dentro de los documentos mejora tanto la organización como la eficiencia al momento de realizar consultas o actualizaciones parciales en el sistema hospitalario.



<br><br>

## 3️⃣ Tercera Forma Normal (3FN)

Nos enfocamos en eliminar las dependencias transitivas dentro de una entidad, es decir, asegurar que todos los atributos no clave dependan exclusivamente de la clave primaria y no de otros atributos no clave. 

Este principio busca evitar que la información se repita innecesariamente y mejorar la coherencia semántica del modelo. Aunque MongoDB no requiere este tipo de normalización de forma estricta debido a su naturaleza documental, aplicarla conceptualmente refuerza la integridad del diseño lógico previo a su implementación física.

<br>

### Descripción

Al analizar el modelo lógico con base en el nuevo diagrama ER, identificamos varios casos donde se presentaban dependencias transitivas. Por ejemplo, en la entidad personal, atributos como el nombre del rol o la especialidad médica dependían de idRol e idEspecialidad respectivamente, y no del identificador principal del documento (idPersonal). 

Por esta razón, estos datos fueron trasladados a colecciones independientes: roles y especialidades_medicas, permitiendo así mantener una sola fuente de verdad para cada tipo de información. Otro caso se dio en facturas, donde detalles como el método de pago o el historial de transacciones eran más adecuados para una colección como pagos, lo cual permite gestionar los abonos de forma individual y reutilizar estructuras. 

Esta reestructuración eliminó la dependencia de atributos entre sí y aseguró que todas las colecciones reflejaran únicamente relaciones directas con sus claves primarias.



<br><br>

## 📈 Gráfica
```mermaid
erDiagram
    HOSPITALES ||--o{ AREAS_ESPECIALIZADAS : tiene
    HOSPITALES ||--o{ PACIENTES : atiende
    HOSPITALES ||--o{ PERSONAL : emplea
    HOSPITALES ||--o{ MEDICAMENTOS : dispone
    HOSPITALES ||--o{ CITAS : programa
    HOSPITALES ||--o{ FACTURAS : factura

    AREAS_ESPECIALIZADAS ||--o{ TRATAMIENTOS : contiene
    AREAS_ESPECIALIZADAS ||--o{ HISTORIALES_CLINICOS : asociados

    PACIENTES ||--o{ HISTORIALES_CLINICOS : tiene
    PACIENTES ||--|| SEGUROS_MEDICOS : usa
    PACIENTES ||--o{ VISITAS_MEDICAS : recibe
    PACIENTES ||--o{ CITAS : agenda
    PACIENTES ||--o{ FACTURAS : genera

    SEGUROS_MEDICOS ||--|| TIPOSEGURO : clasificado
    TIPOSEGURO ||--|| ENTIDADASEGURADORA : emitido_por
    TIPOSEGURO ||--|| ESTADOSEGURO : tiene_estado

    HISTORIALES_CLINICOS ||--o{ TRATAMIENTOS_ASIGNADOS : requiere
    HISTORIALES_CLINICOS ||--|| RESULTADOS : contiene

    RESULTADOS ||--|| PERSONAL : profesional_asignado

    TRATAMIENTOS ||--o{ TRATAMIENTOS_ASIGNADOS : aplica
    MEDICAMENTOS ||--o{ TRATAMIENTOS_ASIGNADOS : incluidos_en
    MEDICAMENTOS ||--|| FABRICANTES : fabricado_por
    MEDICAMENTOS ||--o{ MEDICAMENTOREACCIONADVERSA : relacionado
    MEDICAMENTOREACCIONADVERSA ||--|| REACCIONESADVERSAS : provoca

    TRATAMIENTOS_ASIGNADOS ||--|| PERSONAL : asignado_por
    TRATAMIENTOS_ASIGNADOS ||--|| PERSONAL : aplicado_por

    VISITAS_MEDICAS ||--|| PERSONAL : realizada_por

    PERSONAL ||--|| ROLES : tiene
    PERSONAL ||--|| COLEGIATURAS : posee
    PERSONAL ||--|| HORARIOS : trabaja_en
    PERSONAL ||--|| ESPECIALIDADES_MEDICAS : especializado_en

    CITAS ||--|| PERSONAL : atendido_por
    CITAS ||--|| ESTADO : estado

    FACTURAS ||--o{ PAGOS : tiene

    HOSPITALES {
        ObjectId idHospital PK
        String nombre
        String ubicacion
        Number telefono
    }

    AREAS_ESPECIALIZADAS {
        ObjectId idArea PK
        String nombre
        String descripcion
    }

    PACIENTES {
        ObjectId idPaciente PK
        String nombre
        String direccion
        String telefono
        String correo
        String numeroHistoriaClinica
    }

    SEGUROS_MEDICOS {
        ObjectId idSeguro PK
        String nombre
        String compania
    }

    TIPOSEGURO {
        ObjectId idTipoSeguro PK
        String nombre
        String cobertura
        String numeroPoliza
        DateTime vigenciaInicio
        DateTime vigenciaFinal
        String condiciones
    }

    ENTIDADASEGURADORA {
        ObjectId idEntidadAseguradora PK
        String nombre
        String afiliacion
        String ubicacion
        String telefono
        String correo
        DateTime fechaRegistro
    }

    ESTADOSEGURO {
        ObjectId idEstadoSeguro PK
        String estado
        DateTime fechaCreacion
        String prioridad
        Boolean vencimiento
    }

    HISTORIALES_CLINICOS {
        ObjectId idHistorial PK
        String motivoConsulta
        String diagnostico
        DateTime fecha
    }

    RESULTADOS {
        ObjectId idResultados PK
        String tipoExamen
        DateTime fecha
        String descripcion
    }

    TRATAMIENTOS {
        ObjectId idTratamiento PK
        String nombre
        String descripcion
        String planTratamiento
        String duracionEstimada
        Float costo
    }

    MEDICAMENTOS {
        ObjectId idMedicamento PK
        String nombre
        String tipo
        String dosisEstandar
        String frecuencia
        Int inventario
    }

    MEDICAMENTOREACCIONADVERSA {
        ObjectId idmedicamento PK
    }

    REACCIONESADVERSAS {
        ObjectId idReacciones PK
        String nombre
        String gravedad
        String descripcion
    }

    FABRICANTES {
        String idFabricante PK
        String nombreFabri
        String paisOrigen
        String telefono
        String direccion
        String estado
    }

    TRATAMIENTOS_ASIGNADOS {
        ObjectId idAsignacion PK
        Date fechaAplicacion
        String observaciones
    }

    VISITAS_MEDICAS {
        ObjectId idVisita PK
        String tipoVisita
        String observaciones
        Date fecha
        String hora
        String diagnostico
    }

    PERSONAL {
        ObjectId idPersonal PK
        String nombre
        String telefono
        String correo
        Float salario
    }

    COLEGIATURAS {
        ObjectId idColegiatura PK
        String numero
    }

    ESPECIALIDADES_MEDICAS {
        ObjectId idEspecialidad PK
        String nombreEspecialidad
    }

    ROLES {
        ObjectId idRol PK
        String nombreRol
        String descripcion
    }

    HORARIOS {
        ObjectId idHorario PK
        String dia
        String horaEntrada
        String horaSalida
    }

    CITAS {
        ObjectId idCita PK
        Date fecha
        String hora
        String motivo
    }

    ESTADO {
        ObjectId idEstado PK
        String etapaEstado
        String descripcion
    }

    FACTURAS {
        ObjectId idFactura PK
        Date fechaEmision
        Float total
        String metodoPago
    }

    PAGOS {
        ObjectId idPago PK
        Date fechaPago
        Float monto
        String metodo
    }
```


<br><br>

### Descripción Técnica

Para aplicar correctamente la Tercera Forma Normal en este modelo, fragmentamos entidades que contenían campos con dependencias indirectas, y los trasladamos a colecciones especializadas con sus respectivos ObjectId.

Así, roles, especialidades_medicas, pagos, colegiaturas y seguros_medicos se convirtieron en entidades propias, cada una relacionada por referencia con las entidades principales (personal, pacientes, facturas). 

Esta separación lógica permite mantener una alta cohesión dentro de cada colección y evita la repetición de atributos como nombre del rol, tipo de seguro o nombre de la especialidad, que podrían estar presentes en múltiples documentos si no se normalizan. Desde la perspectiva técnica, este enfoque mejora la eficiencia del almacenamiento, reduce el riesgo de inconsistencias en actualizaciones y permite escalabilidad en el control de catálogos, roles y transacciones.



<br><br>
  


<details>
  <summary><strong> 🧰 Estructura del Modelo Finalizado de la Normalizacion </strong></summary>

  <br>

## 📁 Estructura Modelo Final Normalizacion

---

### 1. 🏥 hospitales

Representa los hospitales del sistema.

- `idHospital`: ObjectId (PK)  
- `nombre`: String  
- `ubicacion`: String  
- `telefono`: Number  
- Relaciones:  
  - Tiene → `AREAS_ESPECIALIZADAS`  
  - Atiende → `PACIENTES`  
  - Emplea → `PERSONAL`  
  - Dispone → `MEDICAMENTOS`  
  - Programa → `CITAS`  

---

### 2. 🧠 areasEspecializadas

- `idArea`: ObjectId (PK)  
- `nombre`: String  
- `descripcion`: String  
- `idHospital`: Ref → `HOSPITALES`  
- Relaciones:  
  - Contiene → `TRATAMIENTOS`  
  - Asociados → `HISTORIALES_CLINICOS`  

---

### 3. 🧍 pacientes

- `idPaciente`: ObjectId (PK)  
- `nombre`: String  
- `direccion`: String  
- `telefono`: String  
- `correo`: String  
- `numeroHistoriaClinica`: String  
- `idSeguro`: Ref → `SEGUROS_MEDICOS`  
- `idHospital`: Ref → `HOSPITALES`  
- Relaciones:  
  - Tiene → `HISTORIALES_CLINICOS`  
  - Recibe → `VISITAS_MEDICAS`  
  - Agenda → `CITAS`  
  - Genera → `FACTURAS`  

---

### 4. 💳 segurosMedicos

- `idSeguro`: ObjectId (PK)  
- `nombre`: String  
- `compania`: String  
- `idTipoSeguro`: Ref → `TIPOSEGURO`  

---
### 5. 💳 tipoSeguro

- ` idTipoSeguro`: ObjectId (PK) 
- ` nombre ` : String
- `cobertura` : String
- `numeroPoliza` : String
- `vigenciaInicio` : DateTime
- `vigenciaFinal` : DateTime
- `condiciones` : String
- `idEntidadAseguradora`: Ref → `ENTIDADASEGURADORA`  
- `idEstadoSeguro`: Ref → `ESTADOSEGURO`  

---
### 6. 💳 entidadAseguradora

- `idEntidadAseguradora`: ObjectId (PK) 
-  `nombre` : String
-  `afiliacion` : String
- `ubicacion`: String  
- `telefono`: String  
- `correo` : String
- `paginaWeb` : String
- `fechaRegistro` : DateTime

---
### 7. 💳 estadoSeguro

- `idEstadoSeguro` : ObjectId (PK) 
- `estado`: String
- `fechaCreacion` : DateTime
- `prioridad` : String
- `Vencimiento` : Booleano

---

### 8. 📋 historialesClinicos

- `idHistorial`: ObjectId (PK)  
- `motivoConsulta`: String  
- `diagnostico`: String  
- `fecha`: DateTime  
- `idPaciente`: Ref → `PACIENTES`  
- `idResultados`: Ref → `RESULTADOS`  
- `idArea`: Ref → `AREAS_ESPECIALIZADAS`  
- Relaciones:  
  - Requiere → `TRATAMIENTOS_ASIGNADOS`  
---

### 9. 📋 Resultados

- `idResultados` :  ObjectId (PK)  
- `TipoExamen` : String
- `Fecha`:  DateTime
- `Descripcion` : String
- `profesionalAsignado`: ->  `idMedico`: Ref → `PERSONAL`  


---

### 10. 💉 tratamientos

- `idTratamiento`: ObjectId (PK)  
- `nombre`: String  
- `descripcion`: String  
- `planTratamiento`: String  
- `duracionEstimada`: String  
- `costo`: Float  
- `idArea`: Ref → `AREAS_ESPECIALIZADAS`  
- Relaciones:  
  - Aplica → `TRATAMIENTOS_ASIGNADOS`  

---

### 11. 💊 medicamentos

- `idMedicamento`: ObjectId (PK)  
- `nombre`: String  
- `tipo`: String  
- `dosisEstandar`: String  
- `frecuencia`: String  
- `inventario`: Int  
-  `idFabricante`: Ref → `FABRICANTES`
- `idHospital`: Ref → `HOSPITALES`  
- `idmedicamento`: Ref → `MEDICAMNTOREACCIONADVERSA`  
- Relaciones:  
  - Incluidos en → `TRATAMIENTOS_ASIGNADOS`  

---
### 12. 💊 medicamentoReaccionAdversa
- `idmedicamento` : ObjectId (PK) 
- `idReacciones`: Ref → `REACCIONESADVERSAS`  

---

### 13 💊 reaccionesAdversas

- `idReacciones` : ObjectId (PK) 
- `nombre`: String
- `gravedad` : String
- `descripcion`: String

---
### 14. 💊 Fabricantes

- `idFabricante`:  String
- `nombreFabri`: String
- `paisOrigen`: String
- `telefono`: String
- `direccion` : String
- `estado` : String


---
### 15. 🩺 tratamientosAsignados

- `idAsignacion`: ObjectId (PK)  
- `idHistorial`: Ref → `HISTORIALES_CLINICOS`  
- `idTratamiento`: Ref → `TRATAMIENTOS`  
- `idMedicamento`: Ref → `MEDICAMENTOS`  
- `fechaAplicacion`: Date  
- `observaciones`: String  
- `idPersonalMedico`: Ref → `PERSONAL`  
- `idPersonalEnfermero`: Ref → `PERSONAL`  

---

### 16. 📆 visitasMedicas

- `idVisita`: ObjectId (PK)  
- `tipoVisita`: String  
- `observaciones`: String  
- `fecha`: Date  
- `hora`: String  
- `diagnostico`: String  
- `idPaciente`: Ref → `PACIENTES`  
- `idMedico`: Ref → `PERSONAL`  
- Relaciones:  
  - Realizada por → `PERSONAL`  

---

### 17. 🧑‍⚕️ personal

- `idPersonal`: ObjectId (PK)  
- `nombre`: String  
- `telefono`: String  
- `correo`: String  
- `salario`: Float  
- `idHospital`: Ref → `HOSPITALES`  
- `idRol`: Ref → `ROLES`  
- `idEspecialidad`: Ref → `ESPECIALIDADES_MEDICAS`  
- Relaciones:  
  - Posee → `COLEGIATURAS`  
  - Trabaja en → `HORARIOS`  
  - Especializado en → `ESPECIALIDADES_MEDICAS`  

---

### 18. 🆔 colegiaturas

- `idColegiatura`: ObjectId (PK)  
- `numero`: String  
- `idPersonal`: Ref → `PERSONAL`  

---

### 19. 📚 especialidadesMedicas

- `idEspecialidad`: ObjectId (PK)  
- `nombreEspecialidad`: String  

---

### 20. 🏷️ roles

- `idRol`: ObjectId (PK)  
- `nombreRol`: String  
- `descripcion`: String  

---

### 21. ⏰ horarios

- `idHorario`: ObjectId (PK)  
- `dia`: String  
- `horaEntrada`: String  
- `horaSalida`: String  
- `idPersonal`: Ref → `PERSONAL`  

---

### 22. 📅 citas

- `idCita`: ObjectId (PK)  
- `fecha`: Date  
- `hora`: String  
- `motivo`: String  
- `idEstado`:  Ref → `ESTADO` 
- `idPaciente`: Ref → `PACIENTES`  
- `idPersonal`: Ref → `PERSONAL`  
- `idHospital`: Ref → `HOSPITALES`  
- Relaciones:  
  - Atendido por → `PERSONAL`  
  
---

### 23. 📅 estado

- `idEstado`: ObjectId (PK)  
- `etapaEstado` : String
- `Descripcion`: String


### 24. 📄 facturas

- `idFactura`: ObjectId (PK)  
- `fechaEmision`: Date  
- `total`: Float  
- `metodoPago`: String  
- `idPaciente`: Ref → `PACIENTES`  
- `idHospital`: Ref → `HOSPITALES`  
- Relaciones:  
  - Tiene → `PAGOS`  

---

### 25. 💰 pagos

- `idPago`: ObjectId (PK)  
- `fechaPago`: Date  
- `monto`: Float  
- `metodo`: String  


</details>

<br><br>

### Explicacion 

Para la estructura finalizada de la normalizacion implementamos las `referencias` para guiarnos en el momento de aplicarlo al modelo fisico , de igual manera entregamos la estructura visual de los atributos para que el usuario se relacione al momento de ejecutar en el siguiente modelo.

<br><br>

## 🏗 Construcción del Modelo Físico

En esta etapa final del diseño de la base de datos, trasladamos toda la estructura definida en el modelo lógico a una implementación concreta en MongoDB. Se utilizó un enfoque basado en colecciones con validación mediante jsonSchema, lo que permite garantizar la integridad estructural de los datos desde el momento de su inserción. 

Esta capa es esencial para asegurar que cada entidad cumpla con la forma esperada y se mantenga coherente con el resto del sistema.

<br><br>

### Descripción

Se definieron múltiples colecciones que reflejan las entidades principales del entorno hospitalario: 

- hospitales, pacientes, personal, tratamientos, medicamentos, facturas, visitas, entre otras. 
  
A cada colección se le asignaron validaciones específicas que establecen que campos son obligatorios y qué tipo de datos se esperan. Esto evita registros incompletos, duplicados o inconsistentes. 

También se incluyeron colecciones complementarias como roles, especialidades médicas, fabricantes o reacciones adversas, que permiten segmentar la información y mejorar su trazabilidad dentro del sistema. 

La estructura facilita futuras consultas, relaciones entre documentos y una gestión ordenada de cada módulo.

<br>


### 🗄️ Crear Apartado Base Datos

En este apartado se define la base de datos principal del sistema hospitalario. Utilizamos el comando `use` para seleccionar o crear la base de datos llamada `sistema_hospitalario`, donde se almacenarán todas las colecciones que conforman la estructura del modelo hospitalario.

```
use sistema_hospitalario
```

<br>

A continuación se definen las colecciones que compondrán la base de datos `sistema_hospitalario`. Cada colección representa una entidad del sistema, como hospitales, pacientes, personal médico, entre otros, y se crean con sus respectivas validaciones mediante `jsonSchema` para asegurar la integridad de los datos.

<br><br>

### 📝**Código**

```

//Crear Colecciones

// COLECCIÓN HOSPITALES: Representa a los hospitales que forman parte del sistema.

db.createCollection("hospitales",{
    validator:{
        jsonSchema:{
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


// COLECCIÓN AREAS ESPECIALIZADAS: Contiene las áreas médicas disponibles en cada hospital.

db.createCollection("areasEspecializadas",{
    validator:{
        jsonSchema:{
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


// COLECCIÓN PACIENTES: Registra a los pacientes que reciben atención en los hospitales.

db.createCollection("pacientes",{
    validator:{
        jsonSchema:{
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


// COLECCIÓN SEGUROS MÉDICOS: Almacena información sobre los seguros afiliados a los pacientes.

db.createCollection("segurosMedicos",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","nombre","compañia","idTipoSeguro"],
            properties:{
                _id:{bsonType:"int"},
                nombre:{bsonType:"string"},
                compañia:{bsonType:"string"},
                idTipoSeguro:{bsonType:"string"}
                }
            }
        }
    }
)


// COLECCIÓN TIPOS DE SEGURO: Describe las características y condiciones de cada tipo de seguro médico.

db.createCollection("tiposSeguros",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","nombre","cobertura","numeroPoliza","vigenciaInicio","vigenciaFinal","condiciones","idEntidadAseguradora"],
            properties:{
                _id:{bsonType:"int"},
                nombre:{bsonType:"string"},
                cobertura:{bsonType:"string"},
                numeroPoliza:{bsonType:"int"},
                vigenciaInicio:{bsonType:"date"},
                vigenciaFinal:{bsonType:"date"},
                condiciones:{bsonType:"string"},
                idEntidadAseguradora:{bsonType:"int"}
            }
        }
    }
})


// COLECCIÓN ENTIDADES ASEGURADORAS: Representa a las compañías que ofrecen los seguros médicos.

db.createCollection("entidadAseguradora",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","nombre","afiliacion","ubicacion","telefono","correo","fechaRegistro"],
            properties:{
                _id:{bsonType:"int"},
                nombre:{bsonType:"string"},
                afiliacion:{bsonType:"string"},
                ubicacion:{bsonType:"string"},
                telefono:{bsonType:"int"},
                correo:{bsonType:"string"},
                fechaRegistro:{bsonType:"date"}
            }
        }
    }
})


// COLECCIÓN ESTADO DE SEGURO: Detalla el estado actual, vigencia y prioridad de un seguro.

db.createCollection("estadoSeguro",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","estado","fechaCreacion","prioridad","vencimiento"],
            properties:{
                _id:{bsonType:"int"},
                estado:{bsonType:"string"},
                fechaCreacion:{bsonType:"date"},
                prioridad:{bsonType:"string"},
                vencimiento:{bsonType:"date"}
            }
        }
    }
})


// COLECCIÓN HISTORIALES CLÍNICOS: Guarda el registro de las consultas, diagnósticos y resultados por paciente.

db.createCollection("historialesClinicos",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","motivoCOnsulta","diagnostico","fecha","idPaciente","idResultados","idArea"],
            properties:{
                _id:{bsonType:"int"},
                motivoCOnsulta:{bsonType:"string"},
                diagnostico:{bsonType:"string"},
                fecha:{bsonType:"date"},
                idPaciente:{bsonType:"int"},
                idResultados:{bsonType:"int"},
                idArea:{bsonType:"int"}
            }
        }
    }
})


// COLECCIÓN RESULTADOS: Contiene los resultados de pruebas o tratamientos asignados a un paciente.

db.createCollection("resultados",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","nombre","descripcion","planTrataiento","duracionEstimada","costo","idArea"],
            properties:{
                _id:{bsonType:"int"},
                nombre:{bsonType:"string"},
                descripcion:{bsonType:"string"},
                planTrataiento:{bsonType:"string"},
                duracionEstimada:{bsonType:"int"},
                costo:{bsonType:"int"},
                idArea:{bsonType:"int"}
            }
        }
    }
})


// COLECCIÓN TRATAMIENTOS: Define los tratamientos disponibles en el hospital.

db.createCollection("tratamientos",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","nombre","descripcion","planTratamiento","duracionEstimada","costo","idArea"],
            properties:{
                _id:{bsonType:"int"},
                nombre:{bsonType:"string"},
                descripcion:{bsonType:"string"},
                duracionEstimada:{bsonType:"int"},
                costo:{bsonType:"int"},
                idArea:{bsonType:"int"}
            }
        }
    }
})


// COLECCIÓN MEDICAMENTOS: Registra los medicamentos disponibles y sus características principales.

db.createCollection("medicamentos",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","nombre","dosisEstandar","frecuencia","inventario","idFabricante","idHospital","idReaccionAdversa"],
            properties:{
                _id:{bsonType:"int"},
                nombre:{bsonType:"string"},
                dosisEstandar:{bsonType:"string"},
                frecuencia:{bsonType:"string"},
                inventario:{bsonType:"int"},
                idFabricante:{bsonType:"int"},
                idHospital:{bsonType:"int"},
                idReaccionAdversa:{bsonType:"int"}
            }
        }
    }
})


// COLECCIÓN MEDICAMENTOS - REACCIÓN ADVERSA: Relaciona los medicamentos con las reacciones adversas que pueden provocar.

db.createCollection("medicamentosReaccionAdversa",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","idReacciones"],
            properties:{
                _id:{bsonType:"int"},
                idReacciones:{bsonType:"int"}
            }
        }
    }
})


// COLECCIÓN REACCIONES ADVERSAS: Enumera posibles efectos secundarios o reacciones por el uso de medicamentos.

db.createCollection("reaccionesAdversas",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","nombre","gravedad","descripcion"],
            properties:{
                _id:{bsonType:"int"},
                nombre:{bsonType:"string"},
                gravedad:{bsonType:"string"},
                descripcion:{bsonType:"string"}
            }
        }
    }
})


// COLECCIÓN FABRICANTES: Guarda los datos de los fabricantes de medicamentos registrados.

db.createCollection("fabricantes",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","nombre","paisOrigen","telefono","direccion","estado"],
            properties:{
                _id:{bsonType:"int"},
                nombre:{bsonType:"string"},
                paisOrigen:{bsonType:"string"},
                telefono:{bsonType:"int"},
                direccion:{bsonType:"string"},
                estado:{bsonType:"string"}
            }
        }
    }
})


// COLECCIÓN TRATAMIENTOS ASIGNADOS: Registra los tratamientos administrados a un paciente, junto a su personal responsable.

db.createCollection("tratamientosAsignados",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","idHistorial","idTratamiento","idMedicamento","fechaAplicacion","observaciones","idPersonalMedico","idPersonalEnfermero"],
            properties:{
                _id:{bsonType:"int"},
                idHistorial:{bsonType:"int"},
                idTratamiento:{bsonType:"int"},
                idMedicamento:{bsonType:"int"},
                fechaAplicacion:{bsonType:"date"},
                observaciones:{bsonType:"string"},
                idPersonalMedico:{bsonType:"int"},
                idPersonalEnfermero:{bsonType:"int"}
            }
        }
    }
})


// COLECCIÓN VISITAS MÉDICAS: Contiene información de las visitas realizadas por los pacientes al hospital.

db.createCollection("visitasMedicas",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","fecha","motivo","diagnostico","idPaciente","idPersonalMedico","idPersonalEnfermero"],
            properties:{
                _id:{bsonType:"int"},
                fecha:{bsonType:"date"},
                motivo:{bsonType:"string"},
                diagnostico:{bsonType:"string"},
                idPaciente:{bsonType:"int"},
                idPersonalMedico:{bsonType:"int"},
                idPersonalEnfermero:{bsonType:"int"}
            }
        }
    }
})


// COLECCIÓN PERSONAL: Registra al personal del hospital, incluyendo médicos, enfermeros y administrativos.

db.createCollection("personal",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","nombre","telefono","correo","salario","idHospital","idRol","idEspecialidad"],
            properties:{
                _id:{bsonType:"int"},
                nombre:{bsonType:"string"},
                telefono:{bsonType:"int"},
                correo:{bsonType:"string"},
                salario:{bsonType:"int"},
                idHospital:{bsonType:"int"},
                idRol:{bsonType:"int"},
                idEspecialidad:{bsonType:"int"}
            }
        }
    }
}
)


// COLECCIÓN COLEGIATURAS: Almacena la validación profesional del personal médico con su número de colegiatura.

db.createCollection("colegiaturas",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","numero","personal"],
            properties:{
                _id:{bsonType:"int"},
                fechaPago:{bsonType:"date"},
                monto:{bsonType:"int"},
                idSeguro:{bsonType:"int"}
            }
        }
    }
}
)


// COLECCIÓN ESPECIALIDADES MÉDICAS: Lista las distintas especialidades médicas que puede tener el personal.

db.createCollection("especialidadesMedicas",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","nombre"],
            properties:{
                _id:{bsonType:"int"},
                nombre:{bsonType:"string"}
            }
        }
    }
})


// COLECCIÓN ROLES: Describe los diferentes roles del personal dentro del hospital (médico, enfermero, administrativo...).

db.createCollection("roles",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","nombre","descripcion"],
            properties:{
                _id:{bsonType:"int"},
                nombre:{bsonType:"string"},
                descripcion:{bsonType:"string"}
            }
        }
    }
})


// COLECCIÓN HORARIOS: Define los horarios de trabajo del personal hospitalario.

db.createCollection("horarios",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","dia","horaInicio","horaFin","idPersonal"],
            properties:{
                _id:{bsonType:"int"},
                dia:{bsonType:"string"},
                horaInicio:{bsonType:"string"},
                horaFin:{bsonType:"string"},
                idPersonal:{bsonType:"int"}
            }
        }
    }
})


// COLECCIÓN CITAS: Registra las citas médicas programadas entre pacientes y personal.

db.createCollection("citas",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","fecha","hora","motivo","idPaciente","idPersonal","idHospital"],
            properties:{
                _id:{bsonType:"int"},
                fecha:{bsonType:"date"},
                hora:{bsonType:"string"},
                motivo:{bsonType:"string"},
                idPaciente:{bsonType:"int"},
                idPersonal:{bsonType:"int"},
                idHospital:{bsonType:"int"}
            }
        }
    }
})


// COLECCIÓN ESTADO: Indica las etapas o estados que puede atravesar una cita, tratamiento o paciente.

db.createCollection("estado",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","etapaEstado","descripcion"],
            properties:{
                _id:{bsonType:"int"},
                etapaEstado:{bsonType:"string"},
                descripcion:{bsonType:"string"}
            }
        }
    }
})


// COLECCIÓN FACTURAS: Contiene la información de facturación por servicios prestados.

db.createCollection("facturas",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","fechaEmision","total","metodoPagos","idPaciente","idHospital"],
            properties:{
                _id:{bsonType:"int"},
                fecha:{bsonType:"date"},
                total:{bsonType:"int"},
                idPaciente:{bsonType:"int"},
                idSeguro:{bsonType:"int"}
            }
        }
    }
})


// COLECCIÓN PAGOS: Registra los pagos efectuados por parte de los pacientes o aseguradoras.

db.createCollection("pagos",{
    validator:{
        jsonSchema:{
            bsonType:"object",
            required:["_id","fechaPago","monto","metodo"],
            properties:{
                _id:{bsonType:"int"},
                fechaPago:{bsonType:"date"},
                monto:{bsonType:"int"},
                idFactura:{bsonType:"int"}
            }
        }
    }
})
```

<br>

### Visualizar Colecciones

Una vez creadas todas las colecciones dentro de la base de datos `sistema_hospitalario`, podemos visualizar el listado completo utilizando el siguiente comando en la consola de MongoDB:

#### 📝**Comando**

```
show collections
```

<br><br>

#### Explicacion Codigo 

En cada `db.createCollection()` especificamos un jsonSchema con los atributos obligatorios y sus tipos, como string, int o date, según la condicion de cada dato. 

Por ejemplo, en la colección pacientes definimos campos como nombre, correo, numeroHistoriaClinica, así como referencias lógicas a seguros y hospitales. Este enfoque nos permitió establecer reglas desde el principio que previenen errores, duplicidades o inserciones incompletas. 

A su vez, las referencias entre entidades se expresaron por medio de campos como idPaciente, idTratamiento o idPersonal, lo que mantiene la estructura relacional dentro de un modelo documental.

<br><br>

### Descripción Técnica

Iniciamos dando inicio la implementacion de cada colección utilizando el método `db.createCollection()` en MongoDB, incorporando validadores jsonSchema para definir la estructura y restricciones de cada documento. 

Usamos identificadores numéricos (_id de tipo int) para facilitar el control referencial y optimizar el rendimiento en búsquedas. Las relaciones entre colecciones, aunque no se manejan mediante claves foráneas como en bases de datos relacionales, se simularon a través de campos como idHospital, idPaciente, idEspecialidad, que actúan como referencias cruzadas. 

Esta configuración nos permite mantener la integridad de los datos, controlar la entrada de información y preparar el sistema para una posible indexación futura. El resultado es un modelo físico coherente, estructurado y preparado para escalar dentro del entorno hospitalario propuesto.


<br>
<br>


## 🔧 Funciones para Consultas del Sistema

Durante el desarrollo del sistema, implementamos un conjunto de funciones en JavaScript orientadas a facilitar la consulta de datos en MongoDB. Estas funciones simulan comportamientos frecuentes del sistema como búsquedas clínicas, visualización de información operativa, estadísticas administrativas o tareas de seguimiento.

<br>
Cada función encapsula una consulta específica que se puede ejecutar directamente en el entorno de MongoDB (por ejemplo, MongoDB Shell, Compass), usando agregaciones, filtros o búsquedas simples para optimizar el acceso a los datos.

Estas funciones están organizadas por áreas del sistema (clínico, operativo, financiero) y reflejan interacciones reales del día a día hospitalario.

<br><br>

### 🛠️ Ejemplos de Funcionalidad

- Función: `historialClinicoCompleto(idPaciente)`

-> Esta función busca todos los historiales clínicos asociados a un paciente específico, utilizando su ID. Es útil para conocer el historial médico completo del paciente en un solo lugar, incluyendo motivo de consulta, diagnóstico y fecha.

-> En especifico nos permite centralizar la historia médica de cada paciente. Esto es clave para médicos y enfermeros que deben consultar antecedentes antes de prescribir tratamientos o programar nuevas visitas. Además, puede servir para generar reportes clínicos o auditorías médicas internas.

<br>

### 💻 Ejemplo de uso:

Esto retornara todos los registros clínicos del paciente con ID 1005, con sus respectivos diagnósticos, fechas, áreas especializadas involucradas y observaciones.

```js
historialClinicoCompleto(1005)
```

##### Resultado esperado:

```js
[
  {
    "_id": 301,
    "motivoConsulta": "Dolor abdominal",
    "diagnostico": "Gastritis crónica",
    "fecha": "2024-03-15T00:00:00Z",
    "idArea": 12,
    "idPaciente": 1005
  },
  {
    "_id": 308,
    "motivoConsulta": "Fiebre alta",
    "diagnostico": "Infección viral",
    "fecha": "2024-06-02T00:00:00Z",
    "idArea": 10,
    "idPaciente": 1005
  }
]
```


<br>
<br>


## 👤 Implementación de Usuarios

Creamos un conjunto de usuarios representativos de los perfiles más importantes dentro del entorno hospitalario. Cada usuario tiene un nombre de acceso y una contraseña asociada. 

Aunque no se incluye un sistema completo de autenticación, esta implementación nos permite simular distintas funciones y probar el sistema desde diferentes perspectivas. La colección puede expandirse más adelante para incluir permisos, tokens de sesión o encriptación de contraseñas si se requiere mayor seguridad.


### 🛠️ Datos de los usuarios registrados

```
[
  {
    "usuario": "admin",
    "password": "admin123",
    "rol": "Administrador"
  },
  {
    "usuario": "medico",
    "password": "medico123",
    "rol": "Médico"
  },
  {
    "usuario": "enfermero",
    "password": "enfermero123",
    "rol": "Enfermero"
  },
  {
    "usuario": "mantenimiento",
    "password": "mantenimiento123",
    "rol": "Mantenimiento"
  },
  {
    "usuario": "director",
    "password": "director123",
    "rol": "Director"
  }
]

```
<br><br>



## 👥 Características de los Usuarios

| Usuario        | Contraseña       | Rol MongoDB           | Descripción funcional                                                                 | Permisos asignados                                       |
|----------------|------------------|------------------------|----------------------------------------------------------------------------------------|-----------------------------------------------------------|
| `admin`        | `admin123`       | `dbOwner`              | Supervisa y gestiona toda la base de datos, incluyendo creación y eliminación de datos.| Acceso total (CRUD en todas las colecciones)              |
| `medico`       | `medico123`      | `medicoRole`           | Gestiona historiales clínicos, tratamientos y visitas médicas.                         | Lectura y escritura en historiales, visitas y tratamientos|
| `enfermero`    | `enfermero123`   | `enfermeroRole`        | Apoya en administración de medicamentos y tratamientos asignados.                     | Lectura clínica y escritura en tratamientos asignados     |
| `mantenimiento`| `mantenimiento123`| `mantenimientoRole`   | Consulta aspectos operativos del hospital, sin acceso a información clínica.           | Solo lectura en hospitales y áreas especializadas          |
| `director`     | `director123`    | `read`                 | Visualiza datos de todo el sistema para control y toma de decisiones.                  | Lectura global en todas las colecciones                   |

<br><br>


### Explicacion a fondo

Cada usuario cuenta con un nombre de acceso (usuario) y una contraseña (password), además de un campo de rol que define su función dentro del hospital. Esto nos permite simular situaciones como registros médicos, asignación de tratamientos, consultas administrativas o gestión operativa, según el perfil con el que iniciemos.

En el desarrollo, podemos referenciar estos usuarios para controlar qué colecciones deben estar visibles o modificables, dependiendo del rol activo. Por ejemplo, desde el perfil del médico se pueden consultar historiales clínicos, pero no se deberían modificar los estados financieros del paciente.


### 🛠️ Ejemplo de uso en pruebas

Si queremos simular que un médico registra una visita médica, iniciamos sesión con:

- Usuario: medico

- Contraseña: medico123
  

Para registrar una factura o revisar pagos, usamos:

- Usuario: admin

- Contraseña: admin123
  

En pruebas de control de tratamientos desde enfermería:

- Usuario: enfermero

- Contraseña: enfermero123

<br> <br>

Esto nos permite acceder con los permisos correspondientes. Por ejemplo:

Si ingresamos como mantenimiento, solo podremos realizar operaciones de lectura.

Si ingresamos como admin, tendremos acceso completo para leer y modificar cualquier colección.



<br> <br>

# 🔗 Referencias

- [ Sistema de Información Hospitalaria](https://www.sciencedirect.com/topics/computer-science/hospital-information-system)

- [sistema de gestión hospitalaria](https://www.aalpha.net/blog/how-to-build-a-hospital-management-system/)

#

<br>

## 👥 Desarrolladores

<div align="center">

  <a href="https://github.com/Danny200523">
    <img src="https://img.shields.io/badge/GitHub-DanielEstebanGuerreroQuintero-181717?style=for-the-badge&logo=github" alt="Danny200523">
  </a> <br>
  <a href="https://github.com/AuraCamilaPicoAraque">
    <img src="https://img.shields.io/badge/GitHub-AuraCamilaPicoAraque-181717?style=for-the-badge&logo=github" alt="AuraCamilaPicoAraque">
  </a>

</div>

<br>

<br>

## 🤝 Contribuciones

<div align="center">

<img src="https://img.shields.io/badge/Trabajo%20en%20equipo-Colaborativo-6A1B9A?style=for-the-badge&logo=teams&logoColor=white"/>
<img src="https://img.shields.io/badge/Colaboradores-2%20integrantes-1976D2?style=for-the-badge&logo=visualstudio&logoColor=white"/>

</div>

<br>

Este proyecto fue desarrollado de manera colaborativa, dividiendo responsabilidades de forma clara para asegurar una construcción estructurada y completa del sistema hospitalario:

---

### 👩‍💻 Aura Camila Pico Araque  
[![GitHub - AuraCamilaPicoAraque](https://img.shields.io/badge/GitHub-AuraCamilaPicoAraque-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AuraCamilaPicoAraque)

- Responsable de la **documentación completa del proyecto**.  
- Diseño de la idea base para la **estructura de la base de datos** y modelo conceptual.  
- Validación de **consultas** e implementación inicial del código en MongoDB.

---

### 👨‍💻 Daniel Esteban Guerrero Quintero  
[![GitHub - Danny200523](https://img.shields.io/badge/GitHub-Danny200523-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Danny200523)

- Desarrollo de los **diagramas Mermaid** para representar el modelo ER.  
- Encargado de la **normalización completa** del modelo hasta 3FN.  
- Implementación de las **100 consultas, inserciones y validaciones** funcionales.  
- Apoyo conjunto en la funcionalidad general del sistema con su compañera.

---

> *Ambos contribuyeron de manera activa al diseño lógico y físico del sistema, asegurando su estructura, coherencia y funcionalidad completa en MongoDB.*

---


<br>
<br>

## 📜 Licencia y Contacto

<div align="center">

<img src="https://img.shields.io/badge/Licencia-MIT-0A66C2?style=for-the-badge&logo=open-source-initiative&logoColor=white"/>
<img src="https://img.shields.io/badge/Contacto-Disponible-24292E?style=for-the-badge&logo=github&logoColor=white"/>

<img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" width="200" align="right"/>

</div>

<br>

Este proyecto se encuentra bajo la licencia **MIT**, lo que significa que puedes usarlo, modificarlo y distribuirlo libremente, siempre que mantengas los créditos correspondientes.

Si tienes dudas, sugerencias o encuentras algún problema con la implementación, no dudes en contactarnos:

<div align="left">

### 👤 Aura Camila Pico Araque  
[![GitHub - AuraCamilaPicoAraque](https://img.shields.io/badge/GitHub-AuraCamilaPicoAraque-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AuraCamilaPicoAraque)  
[![Email - Aura](https://img.shields.io/badge/Email-aura.camila@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:aura.camila@ejemplo.com)

### 👤 Daniel Esteban Guerrero Quintero  
[![GitHub - Danny200523](https://img.shields.io/badge/GitHub-DanielEstebanGuerreroQuintero-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Danny200523)  
[![Email - Daniel](https://img.shields.io/badge/Email-daniel.guerrero@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:daniel.guerrero@ejemplo.com)

</div>

<br>

> *¡Gracias por revisar nuestro proyecto del Sistema Hospitalario! Tu feedback es siempre bienvenido.* 🏥💻

---


<br>

## 🛠 Herramientas de Desarrollo


<p  align="center">

<img  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDVhaGg5bWczaWI2eTNwcHI0dGRmZ3NkdzB5MDljemc3eXhwcnZociZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/tAjb5pyCEBhEb8jWxC/giphy.gif"  alt="Funny Coding Gif"  width="150"/>

<h3 align="center"> MongoDB ~ </h3>

</p>

<br>
