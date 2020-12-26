import { useSelector } from "react-redux";

export function RateTable({ rates }) {
  const amount = useSelector((state) => state.amount);
  return (
    <table className="ExchangeRate-table">
      <tbody>
        {Object.entries(rates).map(([code, rate]) => {
          // NOTE: normally avoid floating point math in JS
          const exchangeAmount = amount * rate || 0.0;
          return (
            <tr>
              <td>{code}</td>
              <td>
                {exchangeAmount.toLocaleString("en", {
                  style: "currency",
                  currency: code,
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
