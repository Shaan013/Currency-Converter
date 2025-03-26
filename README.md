# Currency Converter

A simple currency converter built with React.js that fetches real-time exchange rates using the **Exchange Rate API**.

## 🌐 Live Demo
[Click here to visit the app](https://currency-converter-is5n.onrender.com/)

## Features
- Convert between multiple currencies.
- Swap between "From" and "To" currencies.
- Fetch live exchange rates.
- Responsive and user-friendly UI.

## Tech Stack
- Vite + React.js
- Exchange Rate API
- Tailwind CSS (for styling)
- React.js
- Exchange Rate API
- Tailwind CSS (for styling)

## Key Code

### Fetching Exchange Rates
```javascript
const fetchExchangeRates = async () => {
  const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_EXCHANGE_RATE_API_KEY}/latest/USD`);
  const data = await response.json();
  return data.conversion_rates;
};
```

### Currency Conversion Logic
```javascript
const convertCurrency = (amount, from, to, rates) => {
  if (!amount || !rates[from] || !rates[to]) return 0;
  const amountInUSD = amount / rates[from];
  return amountInUSD * rates[to];
};
```

### Swap Currencies
```javascript
const swapCurrencies = (from, to, setFrom, setTo, amount, setAmount, convertedAmount, setConvertedAmount) => {
  setFrom(to);
  setTo(from);
  setAmount(convertedAmount);
  setConvertedAmount(amount);
};
```

## API Integration
This project uses the [Exchange Rate API](https://www.exchangerate-api.com/) to fetch real-time exchange rates. Make sure to replace `your_api_key_here` in the `.env` file with your actual API key.

## Contributing
Feel free to fork the repository and submit pull requests with improvements or new features!

## License
This project is licensed under the MIT License.

