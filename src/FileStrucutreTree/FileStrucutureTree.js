import { Children } from "react";
import "./FileStructureTree.module.css";

// With tree strucutre we setup an object
const files = {
  //each entry is a folder or file.
  children: [
    {
      name: "node_module",
    },
  ],
};

const FileStructureTree = () => {
  return <div className="FileTree"></div>;
};

export default FileStructureTree;
