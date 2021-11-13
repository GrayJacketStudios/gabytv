import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import { shortener } from '../../utils/text';
import { secondsToReadablehms } from '../../utils/time';
import { useDispatch } from 'react-redux';
import { updateView } from '../../store/actions/viewActions';
import { setCurrentContent } from '../../store/actions/contentActions';
import './ContentToken.style.scss';


export default function ContentToken({id, title, photo, synopsis, type, duration, chapter}: IContent) {
    const dispatch = useDispatch();

    const handleExpand = () => {
        dispatch(setCurrentContent({id, title, photo, synopsis, type, duration, chapter}));
        dispatch(updateView('singleContent'))
    }

    return (
        <Accordion.Item eventKey={id}>
            <Accordion.Header>
            <Container>
                    <Row>
                        <Col>{shortener(title, 20)} {chapter?`- ${chapter}`:''}</Col>
                        <Col>{type}</Col>
                        <Col className='durationDisplay'>{secondsToReadablehms(duration)}</Col>
                    </Row>
            </Container>
            </Accordion.Header>
            <Accordion.Body>
                <img src={photo} alt={title} className='contentTokenImage'/>
                <p>{synopsis}</p>
                <i className="bi bi-arrows-angle-expand expand" onClick={handleExpand}></i>
            </Accordion.Body>
        </Accordion.Item>
    )
}
