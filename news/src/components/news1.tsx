import React, {useState, useEffect} from "react";

type Article = {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
};

const API_URL = "https://newsapi.org/v2/top-headlines?country=us&category=${category} & apiKey=${API_KEY}";

const categories = [
 "general",
 "business",
 "entertainment",
 "health",
 "science",
 "sports",
 "technology"
];

const NewsApp: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [category, setCategory] = useState("general");

    const fetchNews = async () => {
    try {
        const response = await fetch
        (API_URL.replace("${category}", category));
        
        const data = await response.json();
        setArticles(data.articles);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
};
useEffect(() => {
    fetchNews();
}, [category]);

return (
    <>
    <div className="p-20">
        <h1 className="font-extrabold flex justify-center flex-row text-8xl ">News Headlines</h1>
        <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mt-4 p-1 border border-gray-300 rounded-2xl flex text-2xl"
        >
        {categories.map((catagory) => (
            <option key={catagory} value={catagory}>
            {catagory}
            </option>
        ))}
        </select>

        <div className="mt-4 flex flex-row">
            {/* make a loading statement */}
            
            {articles.map((article, index) => (
                <div className="mb-5 border border-gray-300 rounded-2xl" key={article.url}>
                    <h3>{article.title}</h3>
                    <p>{article.description || "No description available"}</p>
                    <a href={article.url} target="_blank">Read more</a>
                </div>
            ))}
        </div>
    </div>
    </>
);
}

export default NewsApp