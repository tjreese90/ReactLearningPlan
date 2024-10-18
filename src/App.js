import React, { Suspense } from "react";
import "./styles.css";
// Using lazy loading for components
const Shape = React.lazy(() => import("./UseDataToMakeShape/MakeShapeApp"));
const TravelApp = React.lazy(() => import("./TravelCalculation/TravelApp"));
const TopicsApps = React.lazy(() =>
  import("./ListTopicsAndSubTopics/topicsApp")
);
const TreeApp = React.lazy(() => import("./TreeFileStructure/TreeApp.tsx"));
const RGBQuizApp = React.lazy(() => import("./RGBColorQuiz/RGBQuizApp.tsx"));
const SynonmApp = React.lazy(() => import("./SynonmsApiCalls/SynonmsFrom.tsx"));

// Define data before using it in the component
const shapeData = [
  [1, 1, 1], // First row (2 visible boxes, 2 hidden boxes)
  [1, 0, 0], // Second row (2 visible, 2 hidden)
  [1, 1, 1], // Third row (3 visible, 1 hidden)
];

let showComponent = false;

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        {/* Conditionally render components with lazy loading */}
        {showComponent && <TopicsApps />}
        {showComponent && <TravelApp />}
        {showComponent && <Shape data={shapeData} />}
        {showComponent && <TreeApp />}
        {showComponent && <RGBQuizApp />}
        {!showComponent && <SynonmApp />}
      </Suspense>
    </div>
  );
}
