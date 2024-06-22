import { useState } from "react";
import Details from "./addDetails";
import { Result } from "antd";

export default function Address({ postoffices }) {
  // console.log(postoffices);
  document.title = "PostOffice Addresses";

  const [filterQuery, setFilterQuery] = useState("");

  const handleFilter = (e) => {
    const val = e.target.value;
    setFilterQuery((q) => val);
  };

  const tempOffice = postoffices.slice().filter(({ Name }) => {
    return Name.toLowerCase().trim().includes(filterQuery.toLowerCase().trim());
  });

// console.log(tempOffice);
  return (
    <>
      <div className="info-tab">
        <h3 className="title">Pincode: {postoffices[0].Pincode}</h3>
        <p className="title">
          Message:{" "}
          <span className="num-of-pin">
            {/* Number of pincode(s) found: { tempOffice?tempOffice.length: postoffices.length} */}
            Number of pincode(s) found: {tempOffice.length}
          </span>
        </p>
      </div>
      <div className="search-box">
        <span className="material-icons filter-icon">search</span>
        <input
          className="filter-search"
          value={filterQuery}
          type="text"
          placeholder="Filter"
          onChange={handleFilter}
        />
      </div>
      <div className={`display-cont ${tempOffice.length === 0 ? "not-found" : ""}`}>
        {tempOffice.length === 0 && (
          <Result
            status="404"
            title="404"
            subTitle="Sorry, Couldn’t find the postal data you’re looking for…"
          />
        )}
        {tempOffice?.map((postOff, i) => (
          <Details postOff={postOff} key={postOff.Name} />
        ))}
      </div>
    </>
  );
}
