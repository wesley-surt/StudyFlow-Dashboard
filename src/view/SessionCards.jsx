import Subject from './cards/Subject.jsx';

export default function SessionCards({ lessons, setLessons }) {
  return (
    <>
      <div className="row g-3 col-12 col-md-12 col-lg-12 gap-3 justify-content-center">
        {lessons.map((lesson) => (
          <Subject key={lesson.id} lesson={lesson} lessons={lessons} setLessons={setLessons} />
        ))}
      </div>
    </>
  )
}