import useJsonFetch from "../hooks/useJsonFetch";
import React from "react";
export default function Request({ props }) {
  const [{ data, loading, error }] = useJsonFetch(props);

  setInterval(() => {
    console.log(error)
  }, 1000);
  return (
    <>
      <h5>Server status</h5>
      <div>
        <p>{data ? data : 'loading...'}</p>
        <p>{loading ? loading : 'status'}</p>
        <p>{error ? error : 'error'}</p>
      </div>
    </>
  );
}
