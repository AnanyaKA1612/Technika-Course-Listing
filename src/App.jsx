
import { useState } from "react";
import "./App.css";
import CourseList from "./components/CourseList";

const courses = [
  {
    id: 1,
    title: "Artificial Intelligence",
    category: "AI & Machine Learning",
    description: "Learn the fundamentals of AI.",
    duration: "3 Months"
  },
  {
    id: 2,
    title: "Machine Learning",
    category: "AI & Machine Learning",
    description: "Explore machine learning concepts.",
    duration: "4 Months"
  },
  {
    id: 3,
    title: "Full Stack Development",
    category: "Web Development",
    description: "Learn frontend and backend development.",
    duration: "6 Months"
  },
  {
    id: 4,
    title: "React Development",
    category: "Web Development",
    description: "Build interactive user interfaces.",
    duration: "3 Months"
  },
  {
    id: 5,
    title: "Data Analytics",
    category: "Data Science",
    description: "Analyze and understand data.",
    duration: "4 Months"
  },
  {
    id: 6,
    title: "Python for Data Science",
    category: "Data Science",
    description: "Use Python for data analysis.",
    duration: "3 Months"
  },
  {
    id: 7,
    title: "Cybersecurity Fundamentals",
    category: "Cybersecurity",
    description: "Understand digital security basics.",
    duration: "3 Months"
  },
  {
    id: 8,
    title: "Network Security",
    category: "Cybersecurity",
    description: "Learn network security concepts.",
    duration: "4 Months"
  },
  {
    id: 9,
    title: "Cloud Computing",
    category: "Cloud Computing",
    description: "Explore cloud technologies.",
    duration: "3 Months"
  },
  {
    id: 10,
    title: "AWS Fundamentals",
    category: "Cloud Computing",
    description: "Learn the basics of AWS.",
    duration: "2 Months"
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const totalCourses = courses.length;

  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category))
  ];

  const totalFields = categories.length - 1;

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" ||
      course.category === selectedCategory;

    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  
  return (
    <div>
      <header className="navbar">
        <h2>TECHNIKA</h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Learn. Build. Grow.</h1>
        <p>
          Discover industry-focused technical courses
          and build skills for your future.
        </p>
        <a href="#courses">Explore Courses</a>
      </section>

      <h1 id="home">Explore Our Technical Courses</h1>

      <p>Total Courses: {totalCourses}</p>
      <p>Technical Fields: {totalFields}</p>

      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div id="courses">
        {filteredCourses.length > 0 ? (
          <CourseList courses={filteredCourses} />
        ) : (
          <p className="no-results">
            No courses found. Try another search!
          </p>
        )}
      </div>

      <section id="about" className="about-section">
        <h2>About Technika</h2>
        <p>
          Technika is a learning platform designed to help
          students explore technical fields, develop practical
          skills, and prepare for future career opportunities.
        </p>
        <h3>Learn Today. Lead Tomorrow.</h3>
      </section>

      <footer className="footer">
        <h2>TECHNIKA</h2>
        <p>Learn Today. Lead Tomorrow.</p>
        <p>© 2026 Technika. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
