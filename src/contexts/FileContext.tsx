import React, { createContext, useContext, useState, ReactNode } from "react";
import filesData from "../data/files.json";

export interface FileItem {
    type: string;
    name: string;
    added?: string;
    files?: FileItem[];
}

interface FileContextType {
    data: FileItem[];
    setData: React.Dispatch<React.SetStateAction<FileItem[]>>;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<FileItem[]>(filesData);

    return (
        <FileContext.Provider value={{ data, setData }}>
            {children}
        </FileContext.Provider>
    );
};

export const useFileContext = (): FileContextType => {
    const context = useContext(FileContext);
    if (!context) {
        throw new Error("useFileContext must be used within a FileProvider");
    }
    return context;
};