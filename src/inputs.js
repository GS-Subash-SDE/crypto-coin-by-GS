import { fetchData } from "./fetching";
export function GetInputs({ coin, setCoin, entered }) {
  // sorting event for MarketCap
  const sortMktCap = () => {
    const sorted = [...coin].sort((a, b) => a.market_cap - b.market_cap);
    // console.log(sorted);
    setCoin(sorted);
  };

  // sorting event for Percentage
  const sortPercentage = () => {
    const sorted = [...coin].sort(
      (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h
    );
    // console.log(sorted);
    setCoin(sorted);
  };

  const searchBox = (e) => {
    const enteredText = e.target.value;
    entered(enteredText);
  };

  return (
    <section className="search">
      <input
        className="search-box"
        type="search"
        placeholder="Search By Name or Symbol"
        onInput={searchBox}
      />
      <button onClick={sortMktCap} className="mktCapSort" type="button">
        Sort By Mkt Cap
      </button>
      <button onClick={sortPercentage} className="percentSort" type="button">
        Sort by percentage
      </button>
    </section>
  );
}