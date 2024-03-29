import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const labelId = useId();
  return (
    <div className={`formDivColor p-3 rounded-lg flex mb-2 ${className}`}>
      <div className="w-1/2">
        {/* LABEL */}
        <label htmlFor={labelId} className="labelColor mb-2 inline-block">
          {label}
        </label>

        {/* INPUT ELEMENT */}
        <input
          id={labelId}
          className="inputColor outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>

      {/* SELECT BUTTON */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-white/80 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 selectColor cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisable}
        >
          {/* OPTIONS VALUES */}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
