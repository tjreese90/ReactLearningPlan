const topics = [
  {
    title: "Physics",
    enabled: true,
    subTopics: [
      {
        title: "Classical Mechanics",
        enabled: true,
        subTopics: [
          {
            title: "Newton's Laws",
            enabled: true,
            subTopics: [],
          },
          {
            title: "Energy and Work",
            enabled: true,
            subTopics: [],
          },
        ],
      },
      {
        title: "Thermodynamics",
        enabled: true,
        subTopics: [
          {
            title: "Laws of Thermodynamics",
            enabled: true,
            subTopics: [],
          },
          {
            title: "Heat Transfer",
            enabled: true,
            subTopics: [],
          },
        ],
      },
      {
        title: "Electromagnetism",
        enabled: false,
        subTopics: [
          {
            title: "Electric Fields",
            enabled: true,
            subTopics: [],
          },
          {
            title: "Magnetic Fields",
            enabled: true,
            subTopics: [],
          },
        ],
      },
      {
        title: "Optics",
        enabled: true,
        subTopics: [
          {
            title: "Reflection and Refraction",
            enabled: true,
            subTopics: [],
          },
          {
            title: "Lenses and Mirrors",
            enabled: true,
            subTopics: [],
          },
        ],
      },
    ],
  },
  {
    title: "Mathematics",
    enabled: false,
    subTopics: [
      {
        title: "Algebra",
        enabled: true,
        subTopics: [
          {
            title: "Linear Equations",
            enabled: false,
            subTopics: [],
          },
          {
            title: "Quadratic Equations",
            enabled: true,
            subTopics: [],
          },
        ],
      },
      {
        title: "Calculus",
        enabled: false,
        subTopics: [
          {
            title: "Differentiation",
            enabled: true,
            subTopics: [],
          },
          {
            title: "Integration",
            enabled: true,
            subTopics: [],
          },
        ],
      },
      {
        title: "Statistics",
        enabled: true,
        subTopics: [
          {
            title: "Probability Distributions",
            enabled: true,
            subTopics: [],
          },
          {
            title: "Hypothesis Testing",
            enabled: true,
            subTopics: [],
          },
        ],
      },
      {
        title: "Geometry",
        enabled: true,
        subTopics: [
          {
            title: "Triangles and Circles",
            enabled: true,
            subTopics: [],
          },
          {
            title: "Pythagoras' Theorem",
            enabled: true,
            subTopics: [],
          },
        ],
      },
    ],
  },
  {
    title: "Chemistry",
    enabled: true,
    subTopics: [
      {
        title: "Organic Chemistry",
        enabled: true,
        subTopics: [
          {
            title: "Hydrocarbons",
            enabled: true,
            subTopics: [],
          },
          {
            title: "Functional Groups",
            enabled: true,
            subTopics: [],
          },
        ],
      },
      {
        title: "Inorganic Chemistry",
        enabled: true,
        subTopics: [
          {
            title: "Periodic Table",
            enabled: true,
            subTopics: [],
          },
          {
            title: "Chemical Bonding",
            enabled: true,
            subTopics: [],
          },
        ],
      },
    ],
  },
  {
    title: "Computer Science",
    enabled: true,
    subTopics: [
      {
        title: "Programming",
        enabled: true,
        subTopics: [
          {
            title: "Data Structures",
            enabled: true,
            subTopics: [],
          },
          {
            title: "Algorithms",
            enabled: true,
            subTopics: [],
          },
        ],
      },
      {
        title: "Databases",
        enabled: true,
        subTopics: [
          {
            title: "SQL",
            enabled: true,
            subTopics: [],
          },
          {
            title: "NoSQL",
            enabled: true,
            subTopics: [],
          },
        ],
      },
    ],
  },
];

export default topics;

//Questions and Assumptions:
// Do we test for properties that are missing?
// Yes, it is a good practice to test for missing properties, especially
// if you're rendering content dynamically. It ensures your app won't crash if
// certain data is unavailable.

// Should we assume that topics cannot be empty arrays?
// Topics can potentially be empty, especially if there are no subtopics available at
// that level. You may want to handle this in your logic to avoid displaying empty lists.

// No API calls to make things smaller.
// If you want to keep things lightweight, avoid making API calls by storing the topics statically in
// your code as you've done. If more dynamic behavior is needed, you can conditionally load or
// fetch more data based on user interaction.
