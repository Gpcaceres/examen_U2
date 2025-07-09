# examen_U2

Examen de la Unidad II

### Instrucciones para Docker

```bash
# Creamos la imagen
docker build -t img-examen:v1 .

# Para crear el contenedor
docker run -dit -p 8082:80 --name img-examen --rm img-examen:v1

# Preparacion para subir la imagen
docker image tag img-examen:v1 germancin/examen_u2:v1
docker login

# asegurarse de que realice login
# Subimos a dockerhub
docker push germancin/examen_u2:v1
