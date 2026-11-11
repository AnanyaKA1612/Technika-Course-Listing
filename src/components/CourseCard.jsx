
export default function CourseCard({ course }) {
  function handleExplore() {
    alert(`You selected: ${course.title}`);
  }

  return (
    <div className="course-card">
      <h2>{course.title}</h2>
      <p>{course.category}</p>
      <p>{course.description}</p>
      <p>Duration: {course.duration}</p>

      <button onClick={handleExplore}>
        Explore Course
      </button>
    </div>
  );
}
