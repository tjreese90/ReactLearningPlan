import React, { useEffect, useMemo, useState, useRef } from "react";
import "./MakeShakeStyle.css"; // Ensure styles are imported
import classnames from "classnames";

// Shape component responsible for rendering boxes based on a 2D array (data)
const Shape = ({ data }) => {
  // Memoized flattening of the 2D array for performance optimization.
  // This ensures that `boxes` is recalculated only when `data` changes.
  const boxes = useMemo(() => data.flat(Infinity), [data]);

  // State to track selected boxes using a Set (for efficiency).
  const [selected, setSelected] = useState(new Set());

  // State to track whether the unloading process is happening.
  const [unloading, setUnloading] = useState(false);

  // useRef to store timeout reference for the unloading process, allowing us to clean it up if needed.
  const timeRef = useRef(null);

  // Memoized calculation of visible boxes (boxes with value `1`).
  // This avoids recalculating the number of visible boxes unless `boxes` changes.
  const countOfVisibleBoxes = useMemo(() => {
    return boxes.reduce((accum, box) => (box === 1 ? accum + 1 : accum), 0);
  }, [boxes]);

  // Handle click event on each box.
  // If the clicked box is visible and unloading is not in progress, we add it to the selected Set.
  const handleClick = (e) => {
    const { target } = e;
    const index = target.getAttribute("data-index");
    const status = target.getAttribute("data-status");

    // Prevent any actions if the box is hidden, unloading is in progress, or invalid click.
    if (index === null || status === "hidden" || unloading === true) {
      return;
    }

    // Add the clicked box to the selected Set.
    setSelected((prev) => {
      const newSelected = new Set(prev);
      newSelected.add(index); // Add the index of the clicked box to the Set
      return newSelected;
    });
  };

  // Function responsible for "unloading" (removing selected boxes one by one every 500ms).
  const unload = () => {
    const keys = Array.from(selected.keys()); // Convert the selected Set to an array of keys

    setUnloading(true); // Set unloading state to true

    // Function to remove one box at a time, recursively called via setTimeout
    const removeNextKey = () => {
      if (keys.length > 0) {
        const currentKey = keys.shift(); // Remove the first selected box
        setSelected((prev) => {
          const updatedKeys = new Set(prev);
          updatedKeys.delete(currentKey); // Remove the current box from the selected Set
          return updatedKeys;
        });
        // Call removeNextKey after 500ms to continue removing boxes
        timeRef.current = setTimeout(removeNextKey, 500);
      } else {
        // When all boxes are unloaded, stop the process
        setUnloading(false);
        clearTimeout(timeRef.current); // Clear any remaining timeout
      }
    };

    // Start the unloading process after a small delay
    setTimeout(removeNextKey, 100);
  };

  // Effect to automatically start unloading when all visible boxes are selected
  useEffect(() => {
    // Trigger unloading process when all visible boxes have been selected
    if (selected.size >= countOfVisibleBoxes && countOfVisibleBoxes > 0) {
      unload(); // Initiate the unload process
    }
  }, [selected, countOfVisibleBoxes]); // Dependency array ensures the effect re-runs when selected or countOfVisibleBoxes changes

  // Render the boxes grid
  return (
    <div className="boxes" onClick={handleClick}>
      {boxes.map((box, index) => {
        const status = box === 1 ? "visible" : "hidden"; // Determine box visibility status
        const isSelected = selected.has(index.toString()); // Check if the box is selected

        return (
          <div
            key={`${box}-${index}`} // Unique key for each box
            className={classnames("box", status, isSelected && "selected")} // Apply appropriate classes dynamically
            data-index={index} // Store the box's index for event handling
            data-status={status} // Store the visibility status of the box
          ></div>
        );
      })}
    </div>
  );
};

export default Shape;
