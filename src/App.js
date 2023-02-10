import "./App.css";
import useJsonFetch from "../src/hooks/useJsonFetch";
import React, { useEffect, useState } from "react";

function App() {
  let dataUrl = "http://localhost:7070/data"; // —успешное получение данных;
  let errorUrl = "http://localhost:7070/error"; // — получение 500 ошибки;
  let loadingUrl = "http://localhost:7070/loading";
  let [info, setInfo] = useState();

  const [{ data, loading, error }] = useJsonFetch(dataUrl);

  let request = function () {
    setInterval(() => {
      setInfo(data);
    }, 2000)
  }

  useEffect(request, [data])
  
  return (
    <>
      <h5>Server data</h5>
      <div>
        <p>Data: {data ? data.status : 'Not gained'}</p>
        <p>{data ? loading : 'Loading...'}</p>
        <p> Status: {error ? error.message : 'Not have errors'}</p> 
      </div>
    </>
  );
}  

export default App;
