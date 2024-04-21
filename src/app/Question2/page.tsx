"use client"
import React, { useState } from "react";
import "./index.css";

function Structure({ myFiles }: any) {
  const [openFolders, setOpenFolders] = useState<string[]>([]);

  const toggleFolder = (name: string) => {
    if (openFolders.includes(name)) {
      setOpenFolders(openFolders.filter((folder) => folder !== name));
    } else {
      setOpenFolders([...openFolders, name]);
    }
  };

  return (
    <div>
      {myFiles.map((el: any, index: any) => (
        <div key={index}>
          <button onClick={() => toggleFolder(el.name)}>{el.name}</button>
          {el.children && openFolders.includes(el.name) && (
            <Structure myFiles={el.children} />
          )}
        </div>
      ))}
    </div>
  );
}

const Question2 = () => {
  const [myFiles, setMyFiles] = useState([
    {
      name: "File1.txt",
      type: "file",
      isOpen: false,
    },
    {
      name: "Folder1",
      type: "folder",
      children: [
        {
          name: "Folder2",
          type: "folder",
          children: [
            {
              name: "FileInner2.txt",
              type: "file",
            },
          ],
          isOpen: false,
        },
      ],
      isOpen: false,
    },
    {
      name: "File2.txt",
      type: "file",
      isOpen: false,
    },
    {
      name: "Folder3",
      type: "folder",
      children: [
        {
          name: "FileInner1.txt",
          type: "file",
        },
      ],
      isOpen: false,
    },
  ]);

  return (
    <div>
      <Structure myFiles={myFiles} />
    </div>
  );
};

export default Question2;

