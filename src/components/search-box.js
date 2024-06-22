import fetchingData from "./fetchingData";

export default function SearchBox({ query, setQuery, setApiStatus, setPostoffices }) {
  
    document.title = "Search Post-Office";

  
  const frequencyCatch = (e) => {
    setQuery(e.target.value);
    // console.log(query.length);
  };

  const executeFetch = (e) => {
    e.preventDefault();
    if (query.length === 6) {
      console.log("searching");
  (async function () {
    setApiStatus("loading");
    const response = await fetchingData(query);
    console.log(response);
    if (response.status) {
      setPostoffices(response.data.PostOffice);
      setApiStatus("ready");
    } else {
      setApiStatus("error");
      setQuery('');
      setPostoffices([]);
    }
  })();
    } else {
      // alert('Please Enter 6 Digits only!');
      // setQuery('');
      setApiStatus("sizeError");
}
}

  return (
    <>
      <h3 className="title">Enter Pincode</h3>
      <div className="form-cont">
        <form onSubmit={executeFetch}>
          <input
            className="pin-input"
            value={query}
            onChange={frequencyCatch}
            type="text"
            placeholder="Pincode"
          />
          <button className="lookup-btn">Lookup</button>
        </form>
      </div>
    </>
  );
}