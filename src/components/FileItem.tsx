import React from "react";
import { FileItem } from "../context/FileContext";

interface FileItemProps {
  file: FileItem;
}

const FileItemComponent: React.FC<FileItemProps> = ({ file }) => {
  return (
    <div className="flex w-full">
      <div className="w-1/12 px-4 py-2">📄</div>
      <div className="w-5/12 px-4 py-2 whitespace-nowrap overflow-hidden">{file.name}</div>
      <div className="w-3/12 px-4 py-2">{file.type}</div>
      <div className="w-3/12 px-4 py-2">{file.added || "N/A"}</div>
    </div>
  );
};

export default FileItemComponent;