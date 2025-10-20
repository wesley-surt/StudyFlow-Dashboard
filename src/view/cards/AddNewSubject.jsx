import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../CardComponents.jsx'
import ButtomCardLesson from '../ButtonCardLesson.jsx'
import { BookOpen } from 'lucide-react'
import LabelInput from '../LabelInput.jsx'

export default function AddNewSubject( { lessons, setLessons} ) {
    const [subject, setSubject] = useState({
        id: lessons.length + 1,
        name: '',
        description: '',
        totalLessons: 0,
        completedLessons: 0,
        status: 'not-started'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubject(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    function handleSubmit() {
        console.log(subject);

        if (subject.name && subject.totalLessons > 0) {
            setLessons([{
                id: subject.id,
                name: subject.name,
                description: subject.description,
                totalLessons: parseInt(subject.totalLessons),
                completedLessons: 0,
                status: 'not-started'
            }, ...lessons]);
            
            subject.name = '';
            subject.description = '';
            subject.totalLessons = 0;
            subject.id = lessons.length + 1;
        }

        console.log(lessons);
        console.log(setLessons);
        console.log(subject);
    };

  return (
        <Card
        className={"p-4 custom-bg-card custom-rounded-xl custom-text-light custom-border-blue custom-min-height-card col-12 col-sm-5"}>
            <CardHeader className='d-flex gap-2'>
                <CardTitle
                className="d-flex gap-2">
                    <BookOpen style={{color: '#1CA8DD'}} />
                    Adicionar Nova Matéria
                </CardTitle>
            </CardHeader>
            <CardContent className='pt-4'>
                <LabelInput
                placeholder='Ex: Matemática'
                label={'Nome da Matéria:'}
                type={'text'}
                name={'name'}
                value={subject.name}
                callback={handleChange} />
            </CardContent>
            <CardContent className='pt-4'>
                <LabelInput
                placeholder='Ex: Álgebra, Geometria, etc.'
                label={'Descrição (Opcional):'}
                type={'text'}
                name={'description'}
                value={subject.description}
                callback={handleChange} />
            </CardContent>
            <CardContent className='py-4'>
                <LabelInput
                placeholder='Ex: 20'
                label={'Total de aulas:'}
                type={'number'}
                name={'totalLessons'}
                value={subject.totalLessons}
                callback={handleChange} />
            </CardContent>
            <CardDescription className='mt-2 w-100'>
                <ButtomCardLesson
                className={'d-flex align-itens-center justify-content-center fw-semibold fs-6 w-100'}
                callback={handleSubmit}>
                    <p
                    className='fw-semibold fs-6 p-2 text-center m-0'
                    style={{color: '#EFF0F4'}}>
                        Criar Matéria
                    </p>
                </ButtomCardLesson>
            </CardDescription>
        </Card>
  );
}