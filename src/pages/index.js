import React, {useState, useEffect} from 'react';

const IndexPage = () => {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/functions/hello');
      const data = await res.json();
      setMessage(data.message);
    };

    fetchData();
  }, []);

  return (
    <div style={{display: 'grid', placeItems: 'center'}}>
      {message === false ? (
        <p>Fetching message from /funcitons/hello...</p>
      ) : (
        <h1>{message}</h1>
      )}
    </div>
  );
};

export default IndexPage;
