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
        return <div>Loading...</div>;
    }
    return <div>Loaded!</div>;
}

export default Loader;

