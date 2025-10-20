import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../CardComponents.jsx'
import LabelInput from '../LabelInput.jsx'
import ButtomCardLesson from '../ButtonCardLesson.jsx'

import { Target, BookOpen } from 'lucide-react'


export default function GoalCalculator({ lessons }) {
    const [targetDate, setTargetDate] = useState('');
    //const [totalLessons, setTotalLessons] = useState('');
    const [lessonsPerDay, setLessonsPerDay] = useState(null);
    
    const calculateDaysDiff = () => {
        const currentDate = new Date();
        const endDate = new Date(targetDate);
        const timeDiff = endDate - currentDate;
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return daysDiff > 0 ? daysDiff : '--';
    }

    const updateTargetDate = (e) => {
        setTargetDate(e.target.value);
    }

    const totalLessons = () => {
        const total = lessons.reduce((sum, lesson) => sum + (lesson.totalLessons - lesson.completedLessons), 0);
        console.log(total);
        return total;
    }

    const calculateDailyLessons = () => {
        if (!targetDate || !lessons || lessons.length === 0) {
            return 0;
        }
        const daysDiff = calculateDaysDiff();
        
        console.log(totalLessons())
        console.log(Math.ceil(totalLessons() / daysDiff))

        setLessonsPerDay(daysDiff > 0 ? Math.ceil(totalLessons() / daysDiff) : 0);
    }

    return (
            <Card
            className={"custom-min-height-card custom-border-blue col-12 col-sm-6"}
            style={{minWidth: '219px', width: '100%'}}>
                <CardHeader className='d-flex gap-2'>
                    <CardTitle
                    className="d-flex gap-2">
                        <Target style={{color: '#1CA8DD'}} />
                        Calculadora de Metas
                    </CardTitle>
                </CardHeader>
                <CardContent className='py-4'>
                    <LabelInput
                    label={'Meta para terminar todos os estudos:'}
                    type={'date'}
                    value={targetDate}
                    callback={updateTargetDate} />
                </CardContent>
                
                <CardContent className='mt-2 w-100'>
                    <ButtomCardLesson
                    className={'d-flex align-itens-center justify-content-center fw-semibold fs-6 w-100'}
                    callback={calculateDailyLessons}>
                        <p
                        className='fw-semibold fs-6 p-2 text-center m-0'
                        style={{color: '#EFF0F4'}}>
                            Calcular
                        </p>
                    </ButtomCardLesson>
                </CardContent>
                
                <CardContent className='mt-4 w-100'>
                    <div
                    className="rounded p-4"
                    style={{
                        backgroundColor: '#2F323B',
                        border: '2px solid rgba(82, 51, 203, 0.3)',
                    }}>
                        <div className="d-flex align-items-center"
                        style={{ gap: '0.5rem' }}>
                            <div
                            className="d-flex align-items-center justify-content-center rounded-circle"
                            style={{
                                width: '1.5rem',
                                height: '1.5rem',
                                backgroundColor: 'rgba(82, 51, 203, 0.5)'
                            }}>
                                <BookOpen style={{
                                width: '0.75rem',
                                height: '0.75rem',
                                color: '#D1D5DB'
                                }} />
                            </div>
                            <span
                            className="small"
                            style={{ color: '#D1D5DB' }}>
                                Prévia do Cálculo
                            </span>
                        </div>
                        <div
                        className="row mt-3 d-flex justify-content-center"
                        style={{ columnGap: '0.75rem', rowGap: '0.75rem' }}>
                            <div
                            className="rounded p-2 col"
                            style={{ backgroundColor: 'rgba(61, 64, 73, 0.5)' }}>
                                <div
                                className="fs-5"
                                style={{ color: '#1CA8DD' }}>
                                    {totalLessons() !== null ? totalLessons() : '--'}
                                </div>
                                <div
                                className="small"
                                style={{ color: '#D1D5DB' }}>
                                    aulas restantes
                                </div>
                            </div>
                            <div
                            className="rounded p-2 col"
                            style={{ backgroundColor: 'rgba(61, 64, 73, 0.5)' }}>
                                <div
                                className="fs-5"
                                style={{ color: '#1CA8DD' }}>
                                    {targetDate ? calculateDaysDiff() : (
                                        '--'
                                    )}
                                </div>
                                <div
                                className="small"
                                style={{ color: '#D1D5DB' }}>
                                    dias restantes
                                </div>
                            </div>
                        </div>
                        {!lessonsPerDay && targetDate && (
                        <p
                        className="text-center fst-italic pt-3"
                        style={{
                            fontSize: '0.75rem', // Tailwind text-xs ≈ 12px
                            color: '#D1D5DB',
                        }}>
                            Clique em "Calcular" para ver quantas aulas por dia você precisa estudar
                        </p>
                        )}
                    </div>

                    {lessonsPerDay && (
                        <div
                        className="rounded p-4 mt-4"
                        style={{
                            backgroundImage: 'linear-gradient(to right, rgba(28, 168, 221, 0.2), rgba(0, 121, 225, 0.2))',
                            border: '2px solid rgba(28, 168, 221, 0.4)',
                        }}>
                            <div
                            className="d-flex align-items-center mb-3"
                            style={{ gap: '0.5rem' }}>
                                <div
                                className="d-flex align-items-center justify-content-center rounded-circle"
                                style={{
                                    width: '2rem',
                                    height: '2rem',
                                    backgroundColor: '#1CA8DD',
                                }}>
                                <Target
                                style={{
                                    width: '1rem',
                                    height: '1rem',
                                    color: '#ffffff'
                                }} />
                                </div>
                                <span
                                className="fw-medium"
                                style={{ color: '#EFF0F4' }}>Resultado do Cálculo</span>
                            </div>
                            <div
                            className="rounded p-3"
                            style={{
                                backgroundColor: '#2F323B',
                                border: '2px solid rgba(82, 51, 203, 0.3)',
                            }}>
                                <div className="text-center">
                                    <div
                                    className="mb-1"
                                    style={{
                                        fontSize: '1.5rem',
                                        color: '#1CA8DD',
                                    }}>{lessonsPerDay}</div>
                                    <div
                                    className="small"
                                    style={{color: '#EFF0F4'}}>aulas por dia</div>
                                </div>
                            </div>
                            <p
                            className="text-center pt-3 mb-0"
                            style={{
                                fontSize: '0.75rem',
                                color: '#D1D5DB',
                            }}>
                                Baseado na sua meta de conclusão, mantenha esse ritmo para alcançar seus objetivos.
                            </p>
                        </div>
                    )}
                </CardContent>
            </Card>
    )
}