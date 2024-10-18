import React from "react";
import "./TreeApp.css";
import Entry from "./Entry.tsx";

// Example file structure to be rendered in the TreeApp
// Example file structure to be rendered in the TreeApp
const files = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "joi",
          children: [
            {
              name: "lib",
              children: [
                { name: "index.js" },
                { name: "validator.js" },
                { name: "schema.js" },
              ],
            },
            { name: "package.json" },
          ],
        },
        {
          name: "react",
          children: [
            {
              name: "lib",
              children: [{ name: "React.js" }, { name: "ReactDOM.js" }],
            },
            { name: "README.md" },
          ],
        },
        {
          name: "express",
          children: [
            {
              name: "lib",
              children: [
                { name: "application.js" },
                { name: "router.js" },
                { name: "middleware.js" },
              ],
            },
            { name: "package.json" },
          ],
        },
      ],
    },
    {
      name: "src",
      children: [
        {
          name: "components",
          children: [
            { name: "Header.js" },
            { name: "Footer.js" },
            { name: "Sidebar.js" },
            {
              name: "Dashboard",
              children: [
                { name: "index.js" },
                { name: "Widget.js" },
                { name: "Analytics.js" },
              ],
            },
          ],
        },
        {
          name: "assets",
          children: [
            { name: "logo.png" },
            { name: "background.jpg" },
            { name: "theme.css" },
          ],
        },
        {
          name: "utils",
          children: [
            { name: "helpers.js" },
            { name: "api.js" },
            { name: "constants.js" },
          ],
        },
        { name: "App.js" },
        { name: "index.js" },
      ],
    },
    {
      name: "public",
      children: [
        { name: "index.html" },
        { name: "favicon.ico" },
        { name: "manifest.json" },
      ],
    },
    {
      name: "package.json",
    },
    {
      name: "vite.config.ts",
    },
    {
      name: "README.md",
    },
  ],
};

// Define the type for a file entry (could be a file or directory)
export type TEntry = {
  name: string; // Name of the file or folder
  children?: TEntry[]; // Optional children if it's a folder
};

// The main TreeApp component that renders the file structure
const TreeApp = () => {
  return (
    <div className="TreeApp">
      {/* Map through the children of the root directory and render them */}
      {files.children.map((entry, index) => (
        <Entry key={`${entry.name}:${index}`} entry={entry} depth={1} />
      ))}
    </div>
  );
};

export default TreeApp;
