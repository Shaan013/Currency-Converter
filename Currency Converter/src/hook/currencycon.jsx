import { useState, useEffect } from "react";

const API_URL = "https://api.exchangerate-api.com/v4/latest/USD"; // Example API

const useCurrencyData = () => {
  const [currencyRates, setCurrencyRates] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setCurrencyRates(data.rates);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return { currencyRates, error };
};

export default useCurrencyData;
