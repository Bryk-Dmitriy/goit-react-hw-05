import { useEffect, useState  } from "react";
import { fetchArticlesWithTopic } from "./articles-api";
import { SearchForm } from "./SearchForm";


export default function HttpUsing() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


    // useEffect(() => {
    //     async function fetchArticles(){
    //       try {
    //         // 1. Встановлюємо індикатор в true перед запитом
    //             setLoading(true);
    //             const response = await axios.get(
    //               "https://hn.algolia.com/api/v1/search?query=react"
    //               // "https://hn.algolia.com/api123/v1/search?query=react"
    //             );
    //             setArticles(response.data.hits);
    //           } catch (error) {
    //             setError(true);
    //             // Тут будемо обробляти помилку
    //           } finally {
    //         // 2. Встановлюємо індикатор в false після запиту
    //             setLoading(false);
    //           }
    //         }
        
    //         fetchArticles();
    //       }, []);

    useEffect(() => {
      async function fetchArticles() {
        try {
          setLoading(true);
      // 2. Використовуємо HTTP-функцію
      const data = await fetchArticlesWithTopic("react");
          setArticles(data);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
  
      fetchArticles();
    }, []);

      const ArticleList = ({ items }) => (
        <ul>
          {items.map(({ objectID, url, title }) => (
            <li key={objectID}>
              <a href={url} target="_blank" rel="noreferrer noopener">
                {title}
              </a>
            </li>
          ))}
        </ul>
      );

      const handleSearch = async (topic) => {
        try {
        setArticles([]);
        setError(false);
          setLoading(true);
          const data = await fetchArticlesWithTopic(topic);
          setArticles(data);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };
    
      return (
        <div>
           <h1>Latest articles</h1>
      {loading && <p style={{ fontSize: 20 }}>Loading data, please wait...</p>}
      {error && ( <p>Whoops, something went wrong! Please try reloading this page!</p>)}
      {articles.length > 0 && <ArticleList items={articles} />}
      <SearchForm onSearch={handleSearch} />
        </div>
      );
    };
