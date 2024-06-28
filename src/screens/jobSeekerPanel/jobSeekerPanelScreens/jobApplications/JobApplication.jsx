import React, { useEffect, useState } from 'react'

export default function JobApplication() {
    let [userData, setUserData] = useState({});
    useEffect(() => {
        const storedUserData = localStorage.getItem("user");
        if (storedUserData) {
            const data = JSON.parse(storedUserData);
            setUserData(data);
            console.log(data)
        } else {
            navigate('/')
        }
    }, [])
    return (
        <div>JobApplication</div>
    )
}
