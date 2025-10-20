import { Card, CardDescription, CardHeader, CardTitle } from '../CardComponents.jsx'
import { Plus } from 'lucide-react'
import '../../css-bootstrap-custom/cardTitle.css'
import ButtonCardLesson from '../ButtonCardLesson.jsx'
import ProgressBar from '../ProgressBar.jsx'

export default function Subject({ lesson, lessons, setLessons }) {

    const incrementLesson = (lessonId) => {
    setLessons(lessons.map(currentLesson => {
        if (currentLesson.id === lessonId && currentLesson.completedLessons < currentLesson.totalLessons) {
        const newCompleted = currentLesson.completedLessons + 1
        const newStatus = newCompleted === currentLesson.totalLessons 
            ? 'completed' 
            : newCompleted > 0 
            ? 'in-progress' 
            : 'not-started'
            
        return {
            ...currentLesson,
            completedLessons: newCompleted,
            status: newStatus
        }
        }
        return currentLesson
    }))
    }
    
    return (
        <div
        key={lesson.id}
        className='row flex-wrap col-12 col-md-4 col-lg-4'
        style={{maxWidth: '513px', minWidth: '321px'}}>
            <Card className={'position-relative custom-border-blue d-flex flex-column custom-gap-6 custom-hover-shadow-lg custom-transition-shadow custom-min-height-cards'}>
                <CardHeader>
                    <CardTitle>{lesson.name}</CardTitle>
                    {lesson.description && (
                        <CardDescription style={{color: '#D1D5DB'}}>{lesson.description}</CardDescription>
                    )}
                </CardHeader>

                <ProgressBar progress={(lesson.completedLessons * 100) / lesson.totalLessons} />

                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="small" style={{color: '#D1D5DB'}}>
                            Aulas: {lesson.completedLessons} / {lesson.totalLessons}
                        </span>
                        <span style={{color: '#D1D5DB'}} className="small">
                            {Math.round((lesson.completedLessons / lesson.totalLessons) * 100)}%
                        </span>
                    </div>
                </div>

                {lesson.completedLessons < lesson.totalLessons && (
                    <div className={'d-flex justify-content-end'}>
                        <ButtonCardLesson
                        className={'rounded-circle'}
                        customizedStyle={{
                            width: '40px',
                            height: '40px',
                            bottom: '16px',
                            right: '16px'
                        }}
                        callback={() => incrementLesson(lesson.id)}>
                            <Plus className="w-4 h-4 text-white" />
                        </ButtonCardLesson>
                    </div>
                )}
            </Card>
        </div>
    ) 
}