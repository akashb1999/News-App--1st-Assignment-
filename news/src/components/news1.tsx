import React, {useState, useEffect} from "react";
import Loader from "./loader";

type Article = {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
};

const categories = [
 "General",
 "Business",
 "Entertainment",
 "Health",
 "Science",
 "Sports",
 "Technology"
];

const API_KEY = '26a51f38ae6e432796e72eeef189a295';


const NewsApp: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [category, setCategory] = useState("general");

    const fetchNews = async () => {
    try {
        const response = await fetch (`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
        
        const data = await response.json ();
        console.log(data);
        setArticles(data.articles);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
};
useEffect(() => {
    fetchNews();
}, [category]);


// const [loading, setLoading] = useState(true);

// useEffect(() => {
//     const timer = setTimeout(() => {
//     setLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
// });

if (articles.length === 0) {
    return <Loader />;
}

return (
    <>
    <div className="p-20 bg-gray-600">
        <h1 className="font-extrabold flex justify-center flex-row text-8xl ">News Headlines</h1>
        <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mt-4 p-1 border border-gray-300 rounded-2xl flex text-2xl bg-transparent"
        >
        {categories.map((catagory) => (
            <option key={catagory} value={catagory}>
            {catagory}
            </option>
        ))}
        </select>

        <div className="mt-4 sm:grid sm:grid-cols-1 md:grid-cols-2 flex flex-col justify-center gap-3 ">
            {articles.map((article) => (
            <div className="mb-5 bg-white border-x-8 border-x-gray-800 rounded-2xl p-10" key={article.url}>
                <h3 className="font-extrabold text-center text-4xl">{article.title}</h3>
                <p className="text-2xl m-5">{article.description || "No description available"}</p>
                <a href={article.url} className="m-5 text-1.5xl hover:underline hover:pl-5 hover:text-2xl" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
            ))}
        </div>
    </div>
    </>
);
};

export default NewsApp