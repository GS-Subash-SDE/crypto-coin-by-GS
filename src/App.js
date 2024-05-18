import { useEffect, useState } from "react";
import { GetInputs } from "./inputs";
import { fetchData } from "./fetching";
import './App.scss';
const App = () => {
  const [coin, setCoin] = useState([]);
  const [enteredText, setEnteredText] = useState("");
  useEffect(() => {
    // console.log('executed');
    // console.log(JSON.stringify(coin));
    fetchData(setCoin);
  }, []);

  

  return (
    <main className="container">
      <GetInputs entered={setEnteredText} coin={coin} setCoin={setCoin} />
      <section className="data-container">
        <table>
          <tbody>
            <tr className="row">
              <th>Name</th>
              <th className="text-left">Symbol</th>
              <th className="text-right curPrice">Current price</th>
              <th className="text-right changePrice">Total volume</th>
              <th>Price change %</th>
              <th>MKT Cap</th>
            </tr>
            {coin.filter((ele) => {
                return (
                  ele.name.toLowerCase().includes(enteredText.toLowerCase()) ||
                  ele.symbol.toLowerCase().includes(enteredText.toLowerCase())
                );
              })
              .map((obj, i) => {
                return (
                  <tr key={i} className="row">
                    <td>
                      <img src={obj.image} alt={obj.name} /> {obj.name}
                    </td>
                    <td>{obj.symbol.toUpperCase()}</td>
                    <td className="text-right">${obj.current_price}</td>
                    <td className="text-right">${obj.total_volume}</td>
                    <td
                      className={
                        obj.price_change_percentage_24h < 0
                          ? "td-red  text-center"
                          : "td-green  text-center"
                      }
                    >
                      ${obj.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td>Mkt Cap: {obj.market_cap}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default App;
// <!-- <tr>
//               <td><img src="./favicon.ico" alt="icon" /> Coin</td>
//               <td>ICO</td>
//               <td class="text-right">$34938</td>
//               <td>$88,394,893</td>
//               <td class="td-green">3.78%</td>
//               <td>Mkt Cap: $834,037,237,448</td>
//             </tr> -->
