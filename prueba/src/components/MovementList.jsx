import { useState } from "react";

export const MovementList = ({
  movements,
  setMovements,
  exchangeRates,
  onDelete,
}) => {
  const [editedMovement, setEditedMovement] = useState(null);
  const [editedDescripcion, setEditedDescripcion] = useState("");

  const handleEdit = (movement) => {
    setEditedMovement(movement);
    setEditedDescripcion(movement.descripcion);
  };

  const handleCancel = () => {
    setEditedMovement(null);
  };

  const handleChangeEdit = (e) => {
    setEditedDescripcion(e.target.value);
  };

  const handleSave = () => {
    if (editedMovement) {
      const updatedMovements = movements.map((movement) =>
        movement.codigo_unico === editedMovement.codigo_unico
          ? { ...movement, descripcion: editedDescripcion }
          : movement
      );

      setMovements(updatedMovements);

      setEditedMovement(null);
    }
  };

  return (
    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
              Descripción
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Monto (PEN)
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Código
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {movements.map((movement) => (
            <tr key={movement.codigo_unico}>
              <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                {movement.fecha}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                {editedMovement === movement ? (
                  <input
                    value={editedDescripcion}
                    onChange={handleChangeEdit}
                    className="px-2 py-1 border rounded-md bg-blue-50 focus:bg-white focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                ) : (
                  movement.descripcion
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                {movement.moneda === "USD"
                  ? (
                      movement.monto * exchangeRates[movement.fecha].compra
                    ).toFixed(2)
                  : movement.monto.toFixed(2)}{" "}
                PEN
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                {movement.codigo_unico}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-800">
                {editedMovement === movement ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="px-2 py-1 bg-green-500 text-white rounded-md mr-2"
                    >
                      Guardar
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-2 py-1 bg-gray-500 text-white rounded-md"
                    >
                      Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(movement)}
                      className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => onDelete(movement.codigo_unico)}
                      className="px-2 py-1 bg-red-500 text-white rounded-md"
                    >
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
