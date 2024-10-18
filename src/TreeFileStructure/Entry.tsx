import React, { useState, memo, useCallback } from "react";
import type { TEntry } from "./TreeApp";

// The Entry component represents a single file or directory
const Entry = memo(({ entry, depth }: { entry: TEntry; depth: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle expanding and collapsing of the folder / this will be recreated every render
  // without useCall back.

  const toggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev); // function for for using prev vale, instead of creating new values
  }, []); // Tip make code simpler when possible.

  return (
    <div className="entry" style={{ paddingLeft: `${depth * 10}px` }}>
      <div
        className="entry-name"
        onClick={entry.children ? toggleExpand : undefined}
      >
        {/* Add a caret icon for folders that can expand/collapse */}
        {entry.children ? (
          <span style={{ cursor: "pointer" }}>
            {isExpanded ? "▼" : "▶"} {entry.name}
          </span>
        ) : (
          <span>{entry.name}</span>
        )}
      </div>
      {/* If this entry has children, recursively render them */}
      {isExpanded && entry.children && (
        <div className="entry-children">
          {entry.children.map((child, index) => (
            <Entry key={index} entry={child} depth={depth + 1} /> // we call entryt again, we add depth
          ))}
        </div>
      )}
    </div>
  );
});

export default Entry;
