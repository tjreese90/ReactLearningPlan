import React, { useState } from "react";
import topics from "./topics";
import "./topicsStyle.module.css";

// Recursive component to display topics and their subtopics.
// The base case is when there are no subtopics left, so we simply render the topic.
// Otherwise, we recursively render each subtopic.
const Topic = React.memo(({ topic, topicID }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggles the expanded state to show or hide subtopics
  const onClick = () => {
    setIsExpanded(!isExpanded); // simple toggle logic remember it.
  };
  // each topic create is alreadly link it its own sub list when <Topic /> is created.
  return (
    <>
      <li
        key={topicID} // Unique key for React's internal tracking
        onClick={onClick}
        style={{ backgroundColor: topic.enabled ? "aliceblue" : "lightpink" }} // Conditional styling based on 'enabled' flag
        aria-expanded={isExpanded} // Adds aria-expanded for accessibility
      >
        <p>
          {topic.title} <span>{topic.subTopics.length}</span>{" "}
          {/* Shows number of subtopics */}
        </p>
      </li>

      {/* If the topic is expanded and there are subtopics, render them recursively */}
      {isExpanded && topic.subTopics.length > 0 && (
        <ul>
          {topic.subTopics.map((subtopic, subId) => (
            // Recursive rendering of subtopics
            <li key={`${topicID}-${subId}`}>{subtopic.title}</li> // unique keys are important!
          ))}
        </ul>
      )}
    </>
  );
});

// The main TopicsApps component renders the full list of topics
const TopicsApps = () => {
  return (
    <div>
      <ul>
        {/* Iterating over the topics array and rendering each topic */}
        {topics.map((topic, index) => {
          // We need a key on our custom components that we want to loop throgh.
          return <Topic topic={topic} topicID={index} key={index} />; // Passing down the topic and its index
        })}
      </ul>
    </div>
  );
};

export default TopicsApps;
