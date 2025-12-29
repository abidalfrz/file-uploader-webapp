import '../css/Fileform.css'
import { use, useState } from 'react'

function Fileform() {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState("");

    const handleFileInput = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!file) return alert("Please select a file to upload");

        const formData = new FormData();
        formData.append("file_upload", file);

        try{
            setStatus("Uploading...");
            const endpoint = "http://localhost:8000/files/upload/";
            const response = await fetch(endpoint, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setStatus("File uploaded successfully!");
                setFile(null);
                document.getElementById("fileInput").value = "";
            } else {
                setStatus("File upload failed.");
            }
        } catch (error) {
            console.error("Error during file upload:", error);
            setStatus("An error occurred during file upload.");
        }
        

    }

    return (
        <div className="page-container">
            <h1>Upload New File</h1>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="file-input-wrapper">
                        <input 
                            id="fileInput"
                            type="file" 
                            onChange={handleFileInput} 
                        />
                    </div>

                    <button type="submit" disabled={!file} className="btn-primary">
                        Upload File
                    </button>
                </form>
                {status && <p className="status-msg">{status}</p>}
            </div>
        </div>
    );
}

export default Fileform;
