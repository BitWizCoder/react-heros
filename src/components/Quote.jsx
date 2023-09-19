import { useEffect, useState } from "react";
import axios from "axios";
import { FallingLines } from "react-loader-spinner";

function Quote() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((res) => setQuote(res.data));
    setLoading(false);
  }, []);
  return (
    <div>
      {loading && (
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      )}
      <h1>Here is the quote</h1>
      <h1>{quote.length}</h1>
      <h1>{quote.value}</h1>
    </div>
  );
}

export default Quote;
