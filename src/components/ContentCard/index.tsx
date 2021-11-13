import { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setCurrentContent } from '../../store/actions/contentActions';
import { updateView } from '../../store/actions/viewActions';
import { shortener } from '../../utils/text';
import { secondsToReadablehms } from '../../utils/time';
import './ContentCard.style.scss'

/**
 * Functional component where we display a card with basic information of the content
 */
export default function ContentCard({id, title, photo, synopsis, type, duration, chapter}: IContent) : JSX.Element {
    const dispatch = useDispatch();
    const [activeSynopsis, setActiveSynopsis] = useState<"" | "active">("");

    const handleClickOnCard = () => {
        if (activeSynopsis !== "")
            setActiveSynopsis("");
        else
            setActiveSynopsis("active");
    }

    const handleExpand = () => {
        dispatch(setCurrentContent({id, title, photo, synopsis, type, duration, chapter}));
        dispatch(updateView('singleContent'))
    }

    return (
        <Card className='contentCardBody' data-testid='cardContainer' onClick={handleClickOnCard}>
            <Card.Header>
                <Container>
                    <Row>
                        <Col>{type}</Col>
                        <Col className='durationDisplay'>{secondsToReadablehms(duration)}</Col>
                    </Row>
                </Container>
            </Card.Header>
            <div className='imageContainer'>
                <Card.Img variant='top' src={photo} alt={title} />
                <Card.Text className={`synopsis ${activeSynopsis}`}>
                    {shortener(synopsis, 320)}
                </Card.Text>
            </div>
            
            <Card.Body>
                <Card.Title className="contentTitle">
                    <Row>
                        <Col md={10}>
                            {shortener(title, 20)} {chapter?`- ${chapter}`:''}
                        </Col>
                        <Col md={2}>
                            <i className="bi bi-arrows-angle-expand expand" onClick={handleExpand}></i>
                        </Col>
                    </Row>
                </Card.Title>
            </Card.Body>
            
        </Card>
    );
}
