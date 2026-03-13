import React, {useState, useEffect} from "react";

type Article = {
    title: string;
    description: string;
    url: string;
    Image: FileList;
};

const API_URl = "https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}";

const catagories = [
    "General", 
    "Business", 
    "Entertainment", 
    "Health", 
    "Science", 
    "Sports", 
    "Technology"
];

const NewsApp: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [category, setCategory] = useState("general");

    const fetchNews = async () => {
    try {
        const response = await fetch
        ("https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}");
        
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
        {catagories.map((catagory) => (
            <option key={catagory} value={catagory}>
            {catagory}
            </option>
        ))}
        </select>

        <div className="">
            {articles.map((article, index) => (
                <div className="" key={index}>
                    
                </div>
            ))}
        </div>
    </div>
    </>
);
}

export default NewsApp