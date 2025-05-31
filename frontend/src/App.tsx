import { useState } from "react";
import "./App.css";
import { getSearchResultsApi } from "./api/apiServices";

const App = () => {
    interface ResultsFace {
        position: number;
        url: string;
        description: string;
        title: string;
    }

    const [query, setQuery] = useState<string>("");
    const [results, setResults] = useState<ResultsFace[]>([]);

    const getSearchResults = async () => {
        const searchResponses = await getSearchResultsApi(query);

        setResults(searchResponses?.data);
    };

    return (
        <div id='main'>
            <h1>
                explore<span>.io</span>
            </h1>

            {/* SEARCH BOX AREA */}
            <>
                <div className='search-area'>
                    <div className='form-control'>
                        <input
                            className='input input-alt'
                            placeholder='Type something here...'
                            required
                            type='text'
                            name='input'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <span className='input-border input-border-alt'></span>
                    </div>

                    <button
                        onClick={getSearchResults}
                        value=''
                        className='shadow__btn'
                    >
                        <i className='fa-solid fa-magnifying-glass'></i>
                    </button>
                </div>
            </>

            {/* RESULTS AREA */}
            <div className='result-area'>
                {(results || []).map((data) => (
                    <div className='result'>
                        <h2>{data.title}</h2>
                        <a href='<%= data.url %>' target='_blank'>
                            {data.url}
                        </a>
                        <p>{data.description}</p>
                    </div>
                ))}
            </div>

            <div>
                {results.length != 0 && (
                    <div className='footer-area'>
                        <p>&copy; copyright reserved | Vikash Kumar</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
