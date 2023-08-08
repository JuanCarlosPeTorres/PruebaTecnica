# Aplicación de Movimientos Bancarios

Esta es una aplicación simple de React para gestionar transacciones bancarias. Te permite importar archivos CSV que contienen datos de transacciones, mostrar las mismas en una tabla y realizar acciones como editar y eliminar.

## Características

- Importar archivos CSV de transacciones bancarias.
- Mostrar transacciones en una tabla con fecha, descripción, monto y código único.
- Convertir montos en USD a PEN utilizando los tipos de cambio SUNAT.
- Editar y actualizar descripciones de transacciones.
- Eliminar transacciones.
  
## Instrucciones

1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Inicia la aplicación con `npm run dev`.

## Uso

1. Haz clic en el botón "Importar archivo CSV" para subir un archivo CSV que contenga datos de transacciones bancarias.
2. Una vez que los datos estén importados, se mostrarán en una tabla.
3. Haz clic en el botón "Editar" para editar la descripción de una transacción. También puedes eliminar transacciones con el botón "Eliminar".
4. Haz clic en el botón "Guardar" para guardar tus cambios después de editar una descripción.
5. La tabla convertirá automáticamente los montos en USD a PEN utilizando los tipos de cambio SUNAT.


## Estructura

- `src/` contiene los componentes y archivos principales.
  - `components/` contiene los componentes de la aplicación.
  - `helpers/` contiene funciones de ayuda para procesar el CSV.
  - `services/` contiene el servicio para obtener los tipos de cambio.

## Dependencias

- [React](https://reactjs.org/)
- [PapaParse](https://www.papaparse.com/)
- Otras dependencias especificadas en `package.json`.

## Contribuciones

Contribuciones y mejoras son bienvenidas. Si encuentras problemas o tienes sugerencias, crea un pull request o una issue en este repositorio.

## Créditos

Este proyecto fue creado como parte de una evaluación técnica. Utiliza React, Tailwind CSS y PapaParse para el análisis de archivos CSV.

