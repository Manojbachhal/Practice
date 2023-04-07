import React, { useEffect, useState } from 'react'

function Scroll() {
    const [count, setCount] = useState(25);
    let [array, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
    const infiteScroll = async () => {
        console.log("scrollHeight" + document.documentElement.scrollHeight)
        console.log("innnerHeight" + window.innerHeight)
        console.log("ScrollTop" + document.documentElement.scrollTop)
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setCount((prev) => prev + 25);
            }
        } catch (error) {

        }
    }
    const setArray = () => {
        let temp = [];
        for (let i = 1; i <= count; i++) {
            temp.push(i);
        }
        setArr(temp);
    }
    useEffect(() => {
        setArray();
        window.addEventListener('scroll', infiteScroll)
    }, [count])
    return (
        <div style={{ textAlign: 'center', margin: '0 auto', border: '10px solid red', width: '300px' }}>
            {
                array.map((ele) => {
                    return <h1>Masai Student {ele}</h1>
                })
            }
        </div>
    )
}

export default Scroll