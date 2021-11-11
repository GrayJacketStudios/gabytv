import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import { shortener } from '../../utils/text';
import { secondsToReadablehms } from '../../utils/time';
import './ContentToken.style.scss';

export default function ContentToken({id, title, photo, synopsis, type, duration, chapter}: IContent) {
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
            </Accordion.Body>
        </Accordion.Item>
    )
}
