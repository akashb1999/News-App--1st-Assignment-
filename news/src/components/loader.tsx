import { useState, useEffect } from 'react';

function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <>
        <h2 className="flex justify-center font-extrabold p-10 text-5xl m-20 ">Loading...</h2>;
        <div className="flex justify-center items-center">
      <div className="h-20 w-20 border-4 border-t-blue-500 border-r-red-500 border-b-yellow-400 border-l-green-500 rounded-full animate-spin m-20"></div>
    </div>

        </>
    }
    return <div>Loaded!, But there is nothing to show , //chek your Internet Concention!!!</div>;
};

export default Loader;


// import { TailSpin } from "react-loader-spinner";

// function Loader () {
//     return <TailSpin />
// }

// export default Loader