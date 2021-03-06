import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {

  const [term, setTerm] = useState("");
  const [results, setresults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get(`https://en.wikipedia.org/w/api.php`, {
        params:{
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        },
      });
      setresults(data.query.search)
    };

    if (term && !results.length){
      search();
    }else{

      const timeoutId = setTimeout(() => {
        if (term) {
        search()
       }
      },500);

      // clean up
      return () => {
        clearTimeout(timeoutId);
      };
    }

  },[term]);

   const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span> //note security
        </div>
        <div className="right floated content">
          <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
        </div>
      </div>
    );
  });

  return(
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input className="input" type="text" vlaue={term} onChange={e => setTerm(e.target.value)}/>
        </div>
      </div>

      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
   );
}

export default Search;
