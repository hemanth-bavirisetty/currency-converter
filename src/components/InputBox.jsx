import { useId } from "react";
import PropTypes from "prop-types";

export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const amountId = useId();

  return (
    <div
      className={`${className} bg-[#ff6699] flex  p-5 rounded-lg opacity-90 border-4 border-white`}
    >
      <div className=" flex flex-col mr-4">
        <label htmlFor={amountId} className="text-black mb-1 inline-block">
          {label}
        </label>
        <input
          placeholder="Amount"
          id={amountId}
          type="number"
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
          disabled={amountDisabled}
          className="rounded-lg  placeholder:text-black text-black px-2 py-1"
        />
      </div>
      <div className=" flex flex-col mr-4">
        <label className="text-black mb-1 inline-block" htmlFor="currency">
          Currency Type
        </label>
        <select
          className="rounded-lg p-1 bg-[#99ff66]"
          id="currency"
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currencyOption) => {
            return (
              <option key={currencyOption} value={currencyOption}>
                {currencyOption}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  currencyOptions: PropTypes.array,
  selectCurrency: PropTypes.string,
  amountDisabled: PropTypes.bool,
  currencyDisabled: PropTypes.bool,
  className: PropTypes.string,
};
