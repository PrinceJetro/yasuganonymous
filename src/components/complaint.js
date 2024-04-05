import React, { useState, useEffect } from "react";
import Navbar from './navbar';
import form_image from "../images/form upload image.png";
import "../styles/complaint.css";

export default function Complaint() {

    let [complaints, setComplaints] = useState([]);

    useEffect(() => {
        // This useEffect is empty because there's no dependency
    }, []);
    
    let createComplaint = async (event) => {
        event.preventDefault(); // Prevent form submission and page refresh
    
        const formData = new FormData(event.target); // Get form data
    
        // Append the image file to the FormData if available
        const fileInput = event.target.querySelector('input[type="file"]');
        if (fileInput && fileInput.files.length > 0) {
            formData.append('image', fileInput.files[0]); // Assuming the input field for the image is named "image"
        }
    
        fetch("https://prince-jetro-chat-app.vercel.app/create", {
            method: "POST",
            body: formData // Use FormData directly as the body
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Complaint created:', data);
            // Update state or perform any other action if needed
        })
        .catch(error => {
            console.error('Error creating complaint:', error);
        });
    }
    
    

    return (
        <div className="complaint">
            <Navbar />
            <form onSubmit={createComplaint} method="post" encType="multipart/form-data">
                <h1 className="mt-5">Speak Up Anonymously (Soro Soke)</h1>
                <div>
                    <select id="category" name="category" required={true}>
                        <option value="categories">Category</option>
                        <option value="harrassment">Harrassment</option>
                        <option value="academics">Academics</option>
                        <option value="facilities">Facilities</option>
                        <option value="safety">Safety</option>
                        <option value="others">Others</option>
                    </select>
                    <textarea type="text" name="complaint" required={true} placeholder="Details of the complaint"></textarea>
                    <label htmlFor="myFile">
                        <p className="m-3">Upload Evidence - Image/video (optional)</p>
                        <img src={form_image} alt="Image Label" />
                    </label>
                    <input type="file" id="myFile" name="filename" accept="image/*, video/*" className="d-none" />
                    <button type="submit" className="btn submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
