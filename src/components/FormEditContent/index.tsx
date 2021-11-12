import React, { useEffect } from 'react'
import { Button, ButtonGroup, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { saveContent } from '../../store/actions/contentActions';
import { goBackView } from '../../store/actions/viewActions';
import { secondsToObjectTime } from '../../utils/time';
import { enableChapterControl, getTotalSeconds } from './formControl';
import './FormEditContent.style.scss';

const FormEditContent: React.FunctionComponent<IContent> = ({id, title, type, photo, synopsis, duration, chapter}) => {
    const dispatch = useDispatch();
    const [content, setContent] = React.useState<IContent>({
        id: id,
        title: title,
        type: type,
        photo: photo,
        synopsis: synopsis,
        duration: duration,
        chapter: chapter
    });

    const [formDuration, setFormDuration] = React.useState<{hours: number, minutes: number, seconds: number}>(secondsToObjectTime(duration));

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setContent({...content, [name]: value});
    }

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = event.target;
        setContent({...content, [name]: value});
    }

    const handleChangeTime = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormDuration({...formDuration, [name]: value});
        
    }

    useEffect(() => {
        setContent(c => { return {...c, duration: getTotalSeconds(formDuration)}});
    }, [ formDuration ])

    return (
        <Form>

            <FloatingLabel label='Title' className="mb-2" controlId="editForm.ControlTitle">
                <Form.Control name='title' value={content.title} onChange={handleChange} type="text" placeholder="Title of the new content..." />
            </FloatingLabel>

            <Row className="g-2">
                <Col md='9'>
                    <FloatingLabel label='Type' className="mb-2" controlId="editForm.ControlType">
                        <Form.Select aria-label="Default select example" name='type' value={content.type} onChange={handleSelect}>
                            <option>Film</option>
                            <option>Series</option>
                            <option>Program</option>
                            <option>Commercial Spot</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col md='3'>
                    <FloatingLabel label='Chapter' className="mb-2" controlId="editForm.ControlChapter">
                        <Form.Control name='chapter' value={content.chapter} onChange={handleChange} type="number" placeholder="Chapter of the series" disabled={enableChapterControl(content.type)} />
                    </FloatingLabel>
                </Col>
            </Row>
            

            <Row className="g-2">
                <Col md='4'>
                    <FloatingLabel label='Hours' className="mb-2" controlId="editForm.ControlHours">
                        <Form.Control name='hours' value={formDuration.hours} onChange={handleChangeTime} type="number" min={0} max={23}/>
                    </FloatingLabel>
                </Col>
                <Col md='4'>
                    <FloatingLabel label='Minutes' className="mb-2" controlId="editForm.ControlChapter">
                        <Form.Control name='minutes' value={formDuration.minutes} onChange={handleChangeTime} type="number" min={0} max={59}/>
                    </FloatingLabel>
                </Col>
                <Col md='4'>
                    <FloatingLabel label='Seconds' className="mb-2" controlId="editForm.ControlChapter">
                        <Form.Control name='seconds' value={formDuration.seconds} onChange={handleChangeTime} type="number" min={0} max={59}/>
                    </FloatingLabel>
                </Col>
            </Row>

            <FloatingLabel label='Synopsis' className="mb-2" controlId="editForm.ControlSynopsis">
                <Form.Control name='synopsis' value={content.synopsis} onChange={handleChange} as="textarea" rows={3} placeholder="Synopsis of the new content..." />
            </FloatingLabel>

            <Row className="g-2">
                <Col md='2'>
                    <img src={content.photo} alt="content" className="img-fluid" />
                </Col>
                <Col md='10'>
                    <FloatingLabel label='Photo url' className="mb-2" controlId="editForm.ControlPhoto">
                        <Form.Control name='photo' value={content.photo} onChange={handleChange} type="text" placeholder="Photo of the new content..." />
                    </FloatingLabel>
                </Col>
            </Row>


            <ButtonGroup className="d-flex">
                    <Button variant="danger" onClick={() => dispatch(goBackView())}>Cancel</Button>
                    <Button variant="success" onClick={() => dispatch(saveContent(content))} >Save content</Button>
            </ButtonGroup>

        </Form>
        
    )
}

export default FormEditContent;