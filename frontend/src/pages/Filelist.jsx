import { useEffect, useState } from "react"
import "../css/Filelist.css"
import { useFileContext } from "../context/Filecontext"

function Filelist() {
        // const [files, setFiles] = useState([]);

    // useEffect(() => {
    //     const fetchFiles = async () => {
    //         try {
    //             const response = await fetch("http://localhost:8000/files/all/");
    //             const data = await response.json();
    //             setFiles(data);
    //         } catch (error) {
    //             console.error("Error fetching files:", error);
    //         }
    //     };
    //     fetchFiles();
    // }, []);
    
    const { files, loading } = useFileContext();

    if (loading) {
        return <div className="page-container"><h2>Loading files...</h2></div>;
    }

    return (
        <div className="page-container">
            <h1>Uploaded Files</h1>
            <div className="file-grid">
                {files.length === 0 ? (
                    <p>No files uploaded yet.</p>
                ) : (
                    files.map((file, index) => (
                        <div key={index} className="file-card">
                            <div className="file-icon">📄</div>
                            <p className="file-name">{file.filename}</p>
                            
                            {/* Tombol View / Download */}
                            <a 
                                href={`http://localhost:8000/static/${file.filename}`} 
                                target="_blank" 
                                rel="noreferrer"
                                className="btn-view"
                            >
                                View / Download
                            </a>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Filelist;