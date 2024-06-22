import "material-icons/iconfont/material-icons.css";
import {  useState } from "react";
import SearchBox from "./components/search-box";
import Address from "./components/address";
import { Alert, Button, Result, Spin } from "antd";
import Error from "./components/Error";

const App = () => {
  const [apiStatus, setApiStatus] = useState("init");
  const [postoffices, setPostoffices] = useState([]);
  const [query, setQuery] = useState('');
  
  document.title='Post-Office';
  return (
    <div className="app">
      {(apiStatus === "init" || apiStatus === "sizeError") && (
        <SearchBox
          query={query}
          setQuery={setQuery}
          setApiStatus={setApiStatus}
          setPostoffices={setPostoffices}
        />
      )}

      {apiStatus === "ready" && <Address postoffices={postoffices} />}

      {apiStatus === "loading" && (
        <Spin tip="Loading...">
          <Alert
            message="Data Fetching"
            description="Please wati few minutes. 🙂"
            type="info"
          />
        </Spin>
      )}
      {apiStatus === "error" && <Error setApiStatus={setApiStatus} />}
      {apiStatus === "sizeError" && (
        <Result
          status="warning"
          title="You should enter 6 digit numbers."
          
        />
      )}
    </div>
  );
};

export default App;
