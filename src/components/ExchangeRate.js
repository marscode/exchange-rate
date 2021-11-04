import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
// access state using useSelector
import { 
  getAmount,  
  getCurrencyCode,
  getCurrencyData,
  changeCurrencyCode,
  supportedCurrencies 
} from "../store/rates";


export function ExchangeRate() {
  
const dispatch = useDispatch();
const amount = useSelector(getAmount);
const currencyCode = useSelector(getCurrencyCode);
const currencyData = useSelector(getCurrencyData);



  // fetch the exchange rates each time currency code changes
  useEffect(() => {
    dispatch(changeCurrencyCode(currencyCode));
  }, []);

 
  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
            currencyCode={currencyCode}
         
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount}  />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}
