import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeContent } from '../../store/actions/contentActions';
import { goBackView } from '../../store/actions/viewActions';
import './deleteConfirmation.style.scss'

export default function DeleteContentConfirmation({id, title, photo}: IContent) {
    const dispatch = useDispatch();
    return (
        <div className='deleteContainer'>
            <Row>
                <Col xs={2}>
                    <Image src={photo} fluid />
                </Col>
                <Col xs={10}>
                    <h3 className='title'>Permanently delete Content</h3>
                    <p>Are you sure you want to delete <span className='contentTitle'>{title}</span>?</p>
                    <p>Once done it can't be retrieved</p>
                    <Button onClick={() => dispatch(goBackView())} variant="primary">Dont delete, take me back</Button>
                    <Button onClick={() => dispatch(removeContent(id))} variant="danger">Delete</Button>
                </Col>
            </Row>
        </div>
    )
}
