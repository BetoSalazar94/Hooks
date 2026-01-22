import React, { useEffect, useState } from 'react'

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
};



export const useTraffic = () => {

    const [light, setLight] = useState('red');

    const [countdown, setCountdown] = useState(5);




    useEffect(() => {



        const intervalId = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }

    }, [countdown]);

    useEffect(() => {

        if (countdown > 0) return;

        setCountdown(5);

        if (light == 'red') {
            setLight('green');
        } else if (light == 'yellow') {
            setLight('red');
        } else if (light == 'green') {
            setLight('yellow');
        }

        return;


    }, [countdown, light]);


    return { 
        light, 
        countdown, 
        colors,

        percentage:(countdown / 5) * 100


    };

}
