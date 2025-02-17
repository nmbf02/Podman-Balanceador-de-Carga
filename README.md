## 📦 Podman-Balanceador-de-Carga

🚀 **Proyecto para levantar múltiples aplicaciones en distintas tecnologías (PHP, Java, Node.js) usando Podman y aplicar balanceo de carga con Nginx.**  

### 🛠️ Tecnologías Utilizadas
- **Podman** 🐧 (Alternativa a Docker)
- **PHP** (Apache + PHP)
- **Java** (Spring Boot)
- **Node.js** (Express.js)
- **Nginx** (Balanceador de carga)

### 📁 Estructura del Proyecto
```
/Podman-Balanceador-de-Carga/
│── php-app/       # Aplicación en PHP
│── java-app/      # Aplicación en Java
│── node-app/      # Aplicación en Node.js
│── nginx/         # Configuración de Nginx como Load Balancer
│── podman-compose.yml  # Archivo para levantar los contenedores
│── README.md      # Este archivo 🚀
```

### 🚀 Cómo Ejecutar

1. **Instalar Podman** en Windows  
   [Descargar Podman](https://podman.io/getting-started/installation)

2. **Configurar Podman y WSL2**
   ```sh
   podman machine init
   podman machine start
   ```

3. **Clonar el repositorio**
   ```sh
   git clone https://github.com/nmbf02/Podman-Balanceador-de-Carga.git
   cd Podman-Balanceador-de-Carga
   ```

4. **Construir y levantar los contenedores**
   ```sh
   podman-compose up -d
   ```

5. **Ver los contenedores en ejecución**
   ```sh
   podman ps
   ```

6. **Abrir en el navegador:**  
   📌 **http://localhost** → Balanceador de carga con Nginx  
   📌 **http://localhost:8081** → Servicio PHP  
   📌 **http://localhost:8082** → Servicio Java  
   📌 **http://localhost:8083** → Servicio Node.js  

### 🎯 Escalar Servicios
Para aumentar la cantidad de instancias de cada servicio:
```sh
podman-compose up --scale php-app=2 --scale java-app=2 --scale node-app=2
```

### 📌 Contacto
👩‍💻 **Desarrollado por:** [Nathaly Berroa](https://www.linkedin.com/in/nathalyberroa/)  
🔗 **Repositorio GitHub:** [https://github.com/nmbf02/Podman-Balanceador-de-Carga](https://github.com/nmbf02/Podman-Balanceador-de-Carga)  
