import Papa from "papaparse";

export const parseCSV = (csvFile, onDataParsed) => {
    Papa.parse(csvFile, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
            try {
                const parsedData = processCSVData(results.data);
                onDataParsed(parsedData);
            } catch (error) {
                console.error("Error procesando CSV: ", error);
            }
        }
    })
}

const processCSVData = (data) => {
    return data.map((entry) => ({
        fecha: entry.fecha,
        descripcion: entry.descripcion,
        moneda: entry.moneda,
        monto: parseFloat(entry.monto),
        codigo_unico: entry.codigo_unico
    }))
}