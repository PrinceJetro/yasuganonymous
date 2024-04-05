import React, { useState, useEffect } from "react";
import Navbar from './navbar';


export default function ComplaintPageList() {
    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let username = prompt("What is the username?: ")
        let password = prompt("password?:  ")
        if(username == "Admin" && password == "Anonymous"){
            getComplaints();
        }
        else{
            return alert("Invalid Credentials")
        }
    }, []);

    const getComplaints = async () => {
        try {
            const response = await fetch('https://prince-jetro-chat-app.vercel.app/all');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            // Manipulate the img URLs to remove the first '/'
            data.forEach(complaint => {
                if (complaint.img) {
                    complaint.img = decodeURIComponent(complaint.img.substring(1));
                }
            });
            setComplaints(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <div>
           <Navbar />

            <h1  style={{marginTop:"100px"}}>Complaint</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div>
                    {complaints.map((complaint) => (
                        <div key={complaint.id}>
                            <h1> Category: {complaint.categories}</h1>
                            <h1>{complaint.body}</h1>
                            <img src={complaint.img} alt="Complaint Image" style={{width:"100%"}} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
