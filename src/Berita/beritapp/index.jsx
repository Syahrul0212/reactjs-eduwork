import { useState, useEffect } from "react";
import axios from "axios";
import Navbarapp from "./Navbar";

const apiKey = "c59c8887f5ea4271a82766c8ef110fb3";
const newsApiUrl =
  "https://newsapi.org/v2/everything?q=apple&from=2023-10-28&to=2023-10-28&sor";

const BeritaApp = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const response = await axios.get(`${newsApiUrl}&apiKey=${apiKey}`);
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const searchArticle = () => {
    const filteredNews = articles.filter((article) => {
      return article.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    return filteredNews;
  };

  return (
    <div className="App">
      <Navbarapp
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchArticle={searchArticle}
      />
      <div className="container mt-4">
        <div className="row">
          {searchQuery.length > 0
            ? articles
                .filter((article) =>
                  article.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
                )
                .map((article, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className="card">
                      <img
                        src={article.urlToImage}
                        className="card-img-top"
                        alt={article.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text">{article.description}</p>
                        <a
                          href={article.url}
                          className="btn btn-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More...
                        </a>
                      </div>
                    </div>
                  </div>
                ))
            : articles.map((article, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src={article.urlToImage}
                      className="card-img-top"
                      alt={article.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">{article.description}</p>
                      <a
                        href={article.url}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More...
                      </a>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default BeritaApp;
