import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { goBackView, updateView } from '../../store/actions/viewActions';
import { secondsToObjectTime } from '../../utils/time'
import { snakeInator } from '../../utils/units';

export default function ContentBoard({title, photo, synopsis, type, duration, chapter}: IContent) : JSX.Element {
    const dispatch = useDispatch();
    const {hours, minutes, seconds} = secondsToObjectTime(duration);

    const getDurationString = () => {
        return `${hours?`${hours} hour${snakeInator(hours)} `:''}${minutes?`${minutes} minute${snakeInator(minutes)} `:''}${seconds?`${seconds} second${snakeInator(seconds)}`:''}`;
    }

    return (
        <div>
            <Row>
                <Col md={8} xs={3} sm={2}>
                    <Button variant="primary" onClick={() => dispatch(goBackView())}><i className="bi bi-arrow-left"></i></Button>
                </Col>
                <Col>
                    <Button variant="danger"  onClick={() => dispatch(updateView('deleteContent'))}>Delete content</Button>
                    <Button variant="primary"  onClick={() => dispatch(updateView('editContent'))}>Edit content</Button>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <img src={photo} alt={title} className="img-fluid"/>
                </Col>
                <Col md={9}>
                    
                    <h2><span>{type}: </span>{title} {chapter? `- Chapter ${chapter}`:''}</h2>
                    <p>Total duration: {getDurationString()} </p>
                    <p>{synopsis}</p>
                    
                </Col>
            </Row>
        </div>
    )
}
