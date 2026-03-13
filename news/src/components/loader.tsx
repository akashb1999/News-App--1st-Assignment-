import React, { useState, useEffect } from 'react';

function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <h2 className="flex justify-center font-extrabold p-10 text-5xl">Loading...</h2>;
    }
    return <div className="flex justify-center font-extrabold p-10 text-5xl>Loaded!, But there is nothing to show , //chek your Internet Concention!!!</div>;
};

export default Loader;


// import { TailSpin } from "react-loader-spinner";

// function Loader () {
//     return <TailSpin />
// }

// export default Loader