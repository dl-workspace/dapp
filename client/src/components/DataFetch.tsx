import { useState, useEffect } from "react"

const DataFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true);

    fetch(
      `https://api.github.com/users/dealoux`
      ).then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if(loading){
    return <h1>Loading...</h1>;
  }
  if(error){
    return <pre>{JSON.stringify(error)}</pre>
  }
  if(!data){
    return null;
  }

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}

export default DataFetch