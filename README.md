# Task Manager Pro

![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Style-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

---

**Task Manager Pro** es una aplicación web para la gestión de tareas personales, desarrollada con **Node.js** y **React**.  
Permite crear, listar, marcar y eliminar tareas de manera sencilla y visualmente atractiva.  
Este proyecto fue creado como práctica para aprender el modelo **MVC** en el backend con Node.js y **React + TailwindCSS** en el frontend.

---

## Características

- Crear nuevas tareas con título y descripción.  
- Marcar tareas como completadas o pendientes.  
- Eliminar tareas con confirmación visual.  
- Interfaz moderna con **TailwindCSS**.  
- Comunicación entre frontend y backend mediante **API REST (Express)**.  
- Arquitectura separada en **frontend** y **backend**.

---

## Tecnologías utilizadas

### **Frontend**
- React  
- TailwindCSS  
- Axios  

### **Backend**
- Node.js  
- Express  
- MySQL  

---

## 📁 Estructura del proyecto



```
TaskManagerPro/
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── models/
│ │ └── routes/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── api/
│ │ └── App.jsx
│ ├── tailwind.config.js
│ └── package.json
│
└── .gitignore
```



---

##  Instalación y ejecución

### ** Clonar el repositorio**
```bash
git clone https://github.com/tuusuario/TaskManagerPro.git
cd TaskManagerPro

Backend

cd backend
npm install
npm run dev

Frontend

cd frontend
npm install
npm run dev

```
