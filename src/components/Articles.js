import React, { useEffect, useState } from 'react'
import SkeletonArticle from '../skeletons/SkeletonArticle';

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout( async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setArticles(data);
    }, 5000);

  })

  return (
    <div className="user">
      <h2>Articles</h2>

      {articles && articles.map(article => (
        <div className="article" key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </div>
      ))}

      {!articles && (
        <div> 
          {Array(100).fill(0).map((_, index) => 
            <SkeletonArticle type="title" key={index} />
          )}
        </div>
      )}
    </div>

  )
}

export default Articles;
