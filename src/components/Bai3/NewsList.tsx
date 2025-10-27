import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./NewsList.css";
interface Article {
  id: number;
  title: string;
  summary: string;
  published_at: string;
  url: string;
  image_url: string;
}

const NewsList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v4/articles?limit=10');
        console.log('Fetched data:', response.data);
        setArticles(response.data.results); // ✅ chỉ lấy mảng "results"
      } catch (err) {
        setError('Failed to fetch articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
  <div className="news-container">
    <h1>Tin tức</h1>
    <ul className="news-list">
      {articles.map((article) => (
        <li key={article.id} className="news-item">
          <img src={article.image_url} alt={article.title} />
          <div className="news-item-content">
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <p className="date">
              📅 {new Date(article.published_at).toLocaleDateString()}
            </p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Đọc thêm →
            </a>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
};

export default NewsList;