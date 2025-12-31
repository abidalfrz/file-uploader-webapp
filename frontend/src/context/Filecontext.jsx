import { useState, useEffect, createContext, useContext } from "react";

const FileContext = createContext();

export const useFileContext = () => useContext(FileContext);

export const FileProvider = ({ children }) => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchFiles = async () => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:8000/files/all/");
            const data = await response.json();
            setFiles(data);
        } catch (error) {
            console.error("Error fetching files:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    const addFile = (newFile) => {
        setFiles((prevFiles) => [...prevFiles, newFile]);
    };

    return (
        <FileContext.Provider value={{ files, loading, fetchFiles, addFile }}>
            {children}
        </FileContext.Provider>
    );
}

export default FileContext;
