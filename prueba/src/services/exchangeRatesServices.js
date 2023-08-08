import exchangeRatesData from "../data/exchangesRates.json"

export const getExchangeRates = async () => {
    return exchangeRatesData;
}