import { Component } from "react";
import axios from "axios";
import Navbarclass from "./Navbarclass";

const apiKey = "c59c8887f5ea4271a82766c8ef110fb3";
const newsApiUrl =
  "https://newsapi.org/v2/everything?q=apple&from=2023-10-28&to=2023-10-28";

class BeritaApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      searchQuery: "",
    };
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    try {
      const response = await axios.get(`${newsApiUrl}&apiKey=${apiKey}`);
      this.setState({ articles: response.data.articles });
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  searchArticle = () => {
    const { articles, searchQuery } = this.state;
    const filteredNews = articles.filter((article) => {
      return article.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    return filteredNews;
  };

  render() {
    const { searchQuery, articles } = this.state;
    const filteredArticles = this.searchArticle();

    return (
      <div className="App">
        <Navbarclass
          searchQuery={searchQuery}
          setSearchQuery={(searchQuery) => this.setState({ searchQuery })}
          searchArticle={this.searchArticle}
        />
        <div className="container mt-4">
          <div className="row">
            {searchQuery.length > 0
              ? filteredArticles.map((article, index) => (
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
  }
}

export default BeritaApp;
