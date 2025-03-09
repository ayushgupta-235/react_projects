import React from 'react';
import { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-gray-800 p-4 rounded-lg shadow-md ${className}`}>
      <label htmlFor={amountInputId} className="text-white block mb-2 text-sm font-medium">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          id={amountInputId}
          type="number"
          className="bg-gray-700 text-white p-2 rounded-lg w-full outline-none"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
        <select
          className="bg-gray-700 text-white p-2 rounded-lg cursor-pointer"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;