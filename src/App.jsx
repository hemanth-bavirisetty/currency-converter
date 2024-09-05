import { useState } from "react";
import useCurrencyInfo from "./utils/useCurrencyInfo";
import InputBox from "./components/InputBox";

import "./App.css";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  console.log(currencyInfo);
  const currencyOptions = Object.keys(currencyInfo);

  const convertCurrency = () => {
    setConvertedAmount(Number(amount) * currencyInfo[to]);
  };

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);

  };


  return (
    <>
      <div className=" h-screen w-screen flex justify-center items-center ">
        <div className=" border-4 rounded-xl bg-[#64cb33] shadow-xl">
          <div className="flex flex-col items-center  bg-slate-300 p-5 rounded-lg bg-transparent ">
            <h1 className="mb-4 text-2xl font-bold text-white "> currency converter</h1>
            <InputBox
              label={"from"}
              currencyOptions={currencyOptions}
              amount={amount}
              onAmountChange={setAmount}
              onCurrencyChange={setFrom}
              selectCurrency={from}
            />
            <button
              className="bg-white opacity-90 p-2  rounded-full "
              onClick={swap}
            >{`swap`}</button>
            <InputBox
              label={"to"}
              amount={convertedAmount}
              onCurrencyChange={setTo}
              currencyOptions={currencyOptions}
              selectCurrency={to}
            />
            <button
              className="bg-[#226bcb] p-2 rounded-lg mt-3 w-full border-4 hover:bg-[#3f79ed]"
              onClick={convertCurrency}
          >{`convert ${from} - ${to}`}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
