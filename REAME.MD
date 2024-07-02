# API Reference - Prueba técnica Frontend Pymedesk

Esta referencia detalla los endpoints disponibles y la estructura de datos que maneja la API para la aplicación de gestión simplificada en Next.js para Pymedesk.

## Base URL - http://localhost:3000/api/ 
## VARIABLES DE ENTORNO
- **PORT** - Puerto en el que se ejecutará la aplicación. Por defecto, 3000.
- **MONGO_URI** - URI de conexión a la base de datos de MongoDB. Por defecto, `mongodb://localhost:27017/pymedesk`.


## Endpoints

### Productos

- **GET /api/productos**
  - Devuelve todos los productos almacenados.
  - Respuesta:
    ```json
    [
      {
        "_id": "string",
        "nombre": "string",
        "valor": number,
        "inventario": number
      }
    ]
    ```

- **GET /api/productos/:id**
  - Devuelve un producto específico por su ID.
  - Respuesta:
    ```json
    {
      "_id": "string",
      "nombre": "string",
      "valor": number,
      "inventario": number
    }
    ```

- **POST /api/productos**
  - Crea un nuevo producto.
  - Body:
    ```json
    {
      "nombre": "string",
      "valor": number,
      "inventario": number
    }
    ```
  - Respuesta:
    ```json
    {
      "message": "Producto creado",
      "producto": {
        "_id": "string",
        "nombre": "string",
        "valor": number,
        "inventario": number
      }
    }
    ```

- **PUT /api/productos/:id**
  - Actualiza un producto existente por su ID.
  - Body (opcional):
    ```json
    {
      "nombre": "string",
      "valor": number,
      "inventario": number
    }
    ```
  - Respuesta:
    ```json
    {
      "message": "Producto actualizado",
      "producto": {
        "_id": "string",
        "nombre": "string",
        "valor": number,
        "inventario": number
      }
    }
    ```

- **DELETE /api/productos/:id**
  - Elimina un producto existente por su ID.
  - Respuesta:
    ```json
    {
      "message": "Producto eliminado"
    }
    ```

### Pedidos

- **GET /api/pedidos**
  - Devuelve todos los pedidos almacenados.
  - Respuesta:
    ```json
    [
      {
        "_id": "string",
        "estado": "string",
        "pagado": boolean,
        "cliente": {
          "_id": "string",
          "nombre": "string",
          "correo": "string",
          "celular": "string",
          "direccion": "string",
          "ciudad": "string"
        },
        "productos": [
          {
            "_id": "string",
            "nombre": "string",
            "cantidad": number
          }
        ],
        "metodoEnvio": "string",
        "observaciones": "string",
        "fecha": "string"
      }
    ]
    ```

- **GET /api/pedidos/:id**
  - Devuelve un pedido específico por su ID.
  - Respuesta:
    ```json
    {
      "_id": "string",
      "estado": "string",
      "pagado": boolean,
      "cliente": {
        "_id": "string",
        "nombre": "string",
        "correo": "string",
        "celular": "string",
        "direccion": "string",
        "ciudad": "string"
      },
      "productos": [
        {
          "_id": "string",
          "nombre": "string",
          "cantidad": number
        }
      ],
      "metodoEnvio": "string",
      "observaciones": "string",
      "fecha": "string"
    }
    ```

- **POST /api/pedidos**
  - Crea un nuevo pedido.
  - Body:
    ```json
    {
      "estado": "string",
      "pagado": boolean,
      "cliente": "string", // ID del cliente
      "productos": [
        {
          "_id": "string",
          "cantidad": number
        }
      ],
      "metodoEnvio": "string",
      "observaciones": "string"
    }
    ```
  - Respuesta:
    ```json
    {
      "message": "Pedido creado",
      "pedido": {
        "_id": "string",
        "estado": "string",
        "pagado": boolean,
        "cliente": "string",
        "productos": [
          {
            "_id": "string",
            "nombre": "string",
            "cantidad": number
          }
        ],
        "metodoEnvio": "string",
        "observaciones": "string",
        "fecha": "string"
      }
    }
    ```

- **PUT /api/pedidos/:id**
  - Actualiza un pedido existente por su ID.
  - Body (opcional):
    ```json
    {
      "estado": "string",
      "pagado": boolean,
      "cliente": "string", // ID del cliente
      "productos": [
        {
          "_id": "string",
          "cantidad": number
        }
      ],
      "metodoEnvio": "string",
      "observaciones": "string"
    }
    ```
  - Respuesta:
    ```json
    {
      "message": "Pedido actualizado",
      "pedido": {
        "_id": "string",
        "estado": "string",
        "pagado": boolean,
        "cliente": "string",
        "productos": [
          {
            "_id": "string",
            "nombre": "string",
            "cantidad": number
          }
        ],
        "metodoEnvio": "string",
        "observaciones": "string",
        "fecha": "string"
      }
    }
    ```

- **DELETE /api/pedidos/:id**
  - Elimina un pedido existente por su ID.
  - Respuesta:
    ```json
    {
      "message": "Pedido eliminado"
    }
    ```

### Usuarios

- **GET /api/usuarios**
  - Devuelve todos los usuarios almacenados.
  - Respuesta:
    ```json
    [
      {
        "_id": "string",
        "nombre": "string",
        "correo": "string",
        "celular": "string",
        "direccion": "string",
        "ciudad": "string"
      }
    ]
    ```

- **GET /api/usuarios/:id**
  - Devuelve un usuario específico por su ID.
  - Respuesta:
    ```json
    {
      "_id": "string",
      "nombre": "string",
      "correo": "string",
      "celular": "string",
      "direccion": "string",
      "ciudad": "string"
    }
    ```

- **POST /api/usuarios**
  - Crea un nuevo usuario.
  - Body:
    ```json
    {
      "nombre": "string",
      "correo": "string",
      "celular": "string",
      "direccion": "string",
      "ciudad": "string"
    }
    ```
  - Respuesta:
    ```json
    {
      "message": "Usuario creado",
      "usuario": {
        "_id": "string",
        "nombre": "string",
        "correo": "string",
        "celular": "string",
        "direccion": "string",
        "ciudad": "string"
      }
    }
    ```

- **PUT /api/usuarios/:id**
  - Actualiza un usuario existente por su ID.
  - Body (opcional):
    ```json
    {
      "nombre": "string",
      "correo": "string",
      "celular": "string",
      "direccion": "string",
      "ciudad": "string"
    }
    ```
  - Respuesta:
    ```json
    {
      "message": "Usuario actualizado",
      "usuario": {
        "_id": "string",
        "nombre": "string",
        "correo": "string",
        "celular": "string",
        "direccion": "string",
        "ciudad": "string"
      }
    }
    ```

- **DELETE /api/usuarios/:id**
  - Elimina un usuario existente por su ID.
  - Respuesta:
    ```json
    {
      "message": "Usuario eliminado"
    }
    ```

### Resumen

- **GET /api/resumen**
  - Devuelve métricas resumidas del desempeño del comercio.
  - Respuesta:
    ```json
    {
      "numeroPedidos": number,
      "numeroClientes": number,
      "ingresosUltimoMes": number,
      "ciudadMasPedidos": "string",
      "productoMasVendido": "string"
    }
    ```
