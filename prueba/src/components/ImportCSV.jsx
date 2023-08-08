import { parseCSV } from "../herlpers/csvParser";

export const ImportCSV = ({onImport}) => {

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        parseCSV(file, onImport);
    }

    return (
        <div className="mb-4 text-center">
      <label className="inline-block bg-blue-500 px-4 py-2 text-white rounded-lg cursor-pointer">
        Importar archivo CSV
        <input
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleFileUpload}
        />
      </label>
    </div>
    )
}