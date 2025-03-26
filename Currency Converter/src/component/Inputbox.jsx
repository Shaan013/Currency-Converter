import React, { useId } from "react";

function Inputbox ({ 
   label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currrencyDisabled = false,



}) {
    const id =useId();
    return  (
        <div className="w-[350px] p-4 bg-white rounded-lg shadow-md flex justify-between items-center">
        {/* Left Side - Label & Input */}
        <div className="flex flex-col items-start">
          <label className="text-gray-500 text-sm" htmlFor={id}>{label}</label>
          <input
          id={id}
            type="number"
            className="mt-1 w-100 text-lg bg-transparent border-none outline-none"
            value={amount}
            disabled={amountDisabled}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            //defaultValue="0"
          />
        </div>
      
      
        {/* Right Side - Label & Select */}
        <div className="flex flex-col items-end">
          <label className="text-gray-500 text-sm">Currency Type</label>
          <select className="mt-1 px-2 py-1 text-lg bg-gray-100 rounded-md cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)}}
          disabled={currrencyDisabled}
          >
           {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>
      
      
    );
}
 export default Inputbox;