# ProyectMateify-API
API para el Proyecto final del modulo 3 del Bootcamp de Matea

## Rutas a utilizar

### Users
```code
'users/' GET : Esta ruta va a obtener toda la lista de usuarios de la db.
'users/:firstName' GET : Esta ruta va a obtener al usuario con dicho nombre.
'users' POST : Esta ruta agregara un nuevo usuario a la db.
'users/firstName' DELETE : Esta ruta eliminara un usuario por su nombre de la db.
'users/firstName' PUT : Esta ruta modificara al usuario correspondiente.
```
### Songs
```code
'songs/' POST : Esta ruta agregara una cancion a la db.
'songs/:name' DELETE : Esta ruta eliminara la cancion deseada de la db.
'songs/:name' PUT : Esta ruta modificara la cancion correspondiente.
```
