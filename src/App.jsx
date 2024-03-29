import React, { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import { InputBox } from "./components";
import useCurrencyRates from "./hooks/useCurrencyRates";

function App() {
  // state variables for user input and conversion
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");
  const [convertedAmount, setConvertedAmount] = useState("");

  // fetch currency data and generate options
  const currencyInfo = useCurrencyRates(from);
  const options = Object.keys(currencyInfo);

  // functions for currency conversion & swap actions
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const { width } = useWindowSize();
  const [fontSize, setFontSize] = useState("");
  const [containerClass, setContainerClass] = useState("");
  const [maxWidth, setMaxWidth] = useState("mx-w-4xl px-0.5");

  useEffect(() => {
    if (width <= 350) {
      setFontSize("text-sm");
    } else if (width <= 550) {
      setFontSize("text-xl");
      setContainerClass("mx-auto px-0.5");
    } else if (width <= 800) {
      setFontSize("text-2xl");
    } else {
      setFontSize("text-3xl");
      setMaxWidth("max-w-4xl px-0.5");
    }
  }, [width]);

  return (
    <>
      <div
        className={`w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat ${fontSize} ${containerClass} backgroundColor`}
        // style={{
        //   backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        // }}
      >
        <div className="w-full m-2">
          <div
            className={`neumorphism w-full ${maxWidth} mx-auto  rounded-lg px-2 pt-5 pb-5`}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              {/* InputBox Component-1 */}
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              {/* InputBox Component-2 */}
              <div className="w-full mt-1 mb-1">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full submitColor text-white border bg-purple-400 border-purple-300 px-4 py-3 rounded-full"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
