import React from 'react';
import { useEffect } from 'react';

const spoonacular = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const apiUrl = ''
        const apiKey = 'd81c3e7850a04f3aac73904bd8f522d3'
        fetch(apiUrl)
        .then(res => res.json)
        .then(
            (res) => {
                setIsLoaded(true)
                setItems(res)
            },
            (err) => {
                setIsLoaded(true)
                setError(err)
            }
        )
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default spoonacular;