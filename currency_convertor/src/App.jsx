import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount) 
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-xl font-semibold text-white text-center mb-4">
          Currency Converter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* From Currency Input */}
          <InputBox
            label="From"
            amount={amount}
            onAmountChange={(value) => setAmount(value)}
            onCurrencyChange={(currency) => setFrom(currency)}
            currencyOptions={options}
            selectCurrency={from}
          />

          {/* Swap Button */}
          <div className="flex justify-center my-4">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          {/* To Currency Input */}
          <InputBox
            label="To"
            amount={convertedAmount}
            onCurrencyChange={(currency) => setTo(currency)}
            currencyOptions={options}
            selectCurrency={to}
            amountDisable={true}
          />

          {/* Convert Button */}
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg w-full mt-4 hover:bg-green-600 transition"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;