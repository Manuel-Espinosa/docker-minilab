# Docker MiniLab

Este repositorio contiene el código fuente y las instrucciones para ejecutar un laboratorio experimental de Docker para la conferencia "FLISOL" en TESI IXTAPALUCA.

## Instrucciones de Uso

Para comenzar, asegúrate de tener Docker y Docker Compose instalados en tu sistema.

### Paso 1: Clonar el Repositorio

``` git clone https://github.com/tu-usuario/docker-minilab.git```

```cd docker-minilab```

### Paso 2: Configurar el Entorno
Crea un archivo .env en la raíz del proyecto y define las variables de entorno necesarias. Puedes encontrar un ejemplo en el archivo .env.example.

### Paso 3: Iniciar los Contenedores
Ejecuta los siguientes comandos para iniciar los contenedores:

```docker-compose build```

```docker-compose up```

Esto construirá y ejecutará los contenedores de acuerdo a la configuración definida en docker-compose.yml.

### Paso 4: Acceder a la Aplicación
Una vez que los contenedores estén en ejecución, puedes acceder a la aplicación en tu navegador web visitando:

http://localhost:<puerto>

Reemplaza <puerto> con el puerto configurado en tu archivo .env o en el archivo docker-compose.yml.

### Paso 5: Detener los contenedores
Ejecuta el siguiente comando para detener los contenedores:

```docker-compose down```

## Acerca de Docker MiniLab
Este repositorio forma parte de un laboratorio experimental para la conferencia "FLISOL" en TESI IXTAPALUCA. El objetivo principal de este laboratorio es proporcionar una introducción práctica a Docker y cómo se pueden utilizar contenedores para desarrollar y desplegar aplicaciones.

Si tienes alguna pregunta o problema, no dudes en crear un problema (issue) en este repositorio o contactar.

¡Gracias por participar!