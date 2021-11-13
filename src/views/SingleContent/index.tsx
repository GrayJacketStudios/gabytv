import React from 'react'
import { Container } from 'react-bootstrap';
import { shallowEqual, useSelector } from 'react-redux';
import ContentBoard from '../../components/ContentBoard'
import { RootState } from '../../store/reducers';
import '../forms.style.scss'

export default function SingleContent() {
    const { contentReducer: { activeContent } }: { contentReducer: ContentState }  = useSelector((state: RootState) => state, shallowEqual);
    return (
        <Container className='formEditContent'>
            <ContentBoard {...activeContent} />
        </Container> 
    )
}
