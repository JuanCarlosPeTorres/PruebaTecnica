import { useEffect, useState } from "react";
import "./App.css";
import { ImportCSV } from "./components/ImportCSV";
import { getExchangeRates } from "./services/exchangeRatesServices";
import { MovementList } from "./components/MovementList";

function App() {
  const [movements, setMovements] = useState([]);
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    getExchangeRates().then((rates) => {
      setExchangeRates(rates);
    });
  }, []);

  const handleImport = (parsedMovements) => {
    setMovements(parsedMovements);
  };

  const handleEdit = (updatedMovement) => {
    const updatedMovements = movements.map((movement) =>
      movement.codigo_unico === updatedMovement.codigo_unico
        ? updatedMovement
        : movement
    );
    setMovements(updatedMovements);
  };

  const handleDeleted = (codigoUnico) => {
    const updateMovements = movements.filter(
      (movement) => movement.codigo_unico !== codigoUnico
    );
    setMovements(updateMovements);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-8 mb-6">
        Movimientos Bancarios
      </h1>
      <ImportCSV onImport={handleImport} />
      {movements.length !== 0 ? (
        <MovementList
          movements={movements}
          setMovements={setMovements}
          exchangeRates={exchangeRates}
          onEdit={handleEdit}
          onDelete={handleDeleted}
        />
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No hay información disponible
        </p>
      )}
    </>
  );
}

export default App;
