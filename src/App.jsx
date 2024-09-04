import useCurrencyInfo from "./utils/useCurrencyInfo";

import "./App.css";

function App() {

  const data = useCurrencyInfo('usd') 
  console.log(data)
  return (
    <>
      <div className=" bg-fuchsia-500 h-screen w-screen flex justify-center items-center">
        <div>
        <h1>currency converter</h1>
        
        </div>
      </div>
    </>
  );
}

export default App;
