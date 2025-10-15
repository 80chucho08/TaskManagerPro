import mysql from "mysql2";
import dotenv from "dotenv";

// carga las variables de entorno desde el archivo .env
dotenv.config();

//Configuro la conexion a la base de datos

//Utiliza la variable de entorno para el host, o 'localhost' si no esta definida
//utilizamos la variable de entorno para el usuairo o root por defecto
//Utilizo la variable de entorno para la contraseña, pero la mia es vacia
//Utilizo la variable de entorno para el nombre de la bd
const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "task_manager_pro"
});

// Intento establecer la conexion
connection.connect((err) => {
    if(err) {
      console.error("Error al conectar la base de datos: ", err);
    }else{
        console.log("Conectado a la base de datos MySQL");
    }
});

//Exportamos el objeto de conexión para poder usarlo en otras partes del proyecto
export default connection;