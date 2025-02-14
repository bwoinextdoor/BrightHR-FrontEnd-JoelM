import React from "react";
import { FileItem } from "../context/FileContext";

interface FolderItemProps {
  folder: FileItem;
  onClick: (folder: FileItem) => void;
}

const FolderItem: React.FC<FolderItemProps> = ({ folder, onClick }) => {
  return (
    <div className="flex cursor-pointer w-full" onClick={() => onClick(folder)}>
      <div className="w-1/12 px-4 py-2">📁</div>
      <div className="w-5/12 px-4 py-2 whitespace-nowrap overflow-hidden">{folder.name}</div>
      <div className="w-3/12 px-4 py-2">{folder.type}</div>
      <div className="w-3/12 px-4 py-2">{folder.added || "N/A"}</div>
    </div>
  );
};

export default FolderItem;