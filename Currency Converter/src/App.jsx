
import { useState, useEffect } from "react";
import stockImage from "./image/stock.jpg"; // Ensure the image path is correct
import "./App.css";
import Inputbox from "./component/inputbox";
import useCurrencyData from "./hook/currencycon"
import infoDetail from "./component/info";
import linkdinImage from "./assets/Linkdin.png"
import githubImage from "./assets/github.png"


function App() {
  const [amount, setAmount]= useState("");
  const [from , setFrom] = useState("USD");
  const [to ,setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  

  function swap() {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);

  }
  const { currencyRates, error } = useCurrencyData();
  //console.log(currencyRates[to] +"   " + currencyRates[from]);
  const options = Object.keys(currencyRates);
  //console.log( options);
  

  if (error) return <p>Error: {error}</p>;
  if (!currencyRates) return <p>Loading...</p>;

  const conver = () => {
    if (!amount || isNaN(amount) || !currencyRates[from] || !currencyRates[to]) return 0; // Ensures valid amount
    const amountInUSD = amount / currencyRates[from]; // Convert to number
    return amountInUSD * currencyRates[to];
};


  useEffect(() => {
      setConvertedAmount(conver() || 0);
  }, [amount, from, to]);

 
  
  return (
    <>
    <div
      className="h-screen w-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${stockImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

<form onSubmit={(e) => {
            e.preventDefault()
            setConvertedAmount(conver());
          }}>

      <div className="  flex flex-col w-[400px] h-[250px] bg-white/15 justify-center items-center rounded-md backdrop-blur gap-2" >
     
     
      <Inputbox 
      label="from"
      amount={amount}
      currencyOptions={options}
      onCurrencyChange={(currency) => setFrom(currency)}
      onAmountChange={(amount) => setAmount(amount)}
      selectedCurrency={from}
      />
     
        <button className=" absolute bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg shadow-md transition-transform transform hover:scale-105 m-0 "
        onClick={swap}> swap</button>
     
      <Inputbox 
      label="to"
      currencyOptions={options}
      amount={convertedAmount}
      onCurrencyChange={(currency) => setTo(currency)}
      selectedCurrency={to}
      amountDisabled
      />      
      </div>
      </form>


  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
  {/* Social Links */}
  <div className="flex gap-5">
    <a href="https://github.com/Shaan013" target="_blank" rel="noopener noreferrer">
      <img src={githubImage} alt="GitHub" className="w-10 h-10" />
    </a>
    <a href="https://www.linkedin.com/in/shaan-patel-609879271" target="_blank" rel="noopener noreferrer">
      <img src={linkdinImage} alt="LinkedIn" className="w-10 h-10" />
    </a>
  </div>

  {/* Creator Info */}
  <p className="text-white text-sm">Created by: <span className="font-semibold">Shaan Patel</span></p>
</div>

    </div>
    
    
    
    
    </>
  );
  
}

export default App;
