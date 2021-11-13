import React from 'react'
import { Container } from 'react-bootstrap'
import { shallowEqual, useSelector } from 'react-redux';
import FormEditContent from '../../components/FormEditContent'
import { RootState } from '../../store/reducers';
import '../forms.style.scss'

export default function UpdateContent() {
    const { contentReducer: { activeContent } }: { contentReducer: ContentState }  = useSelector((state: RootState) => state, shallowEqual);
    return (
        <Container className='formEditContent'>
            <h3>Editing content</h3>
            <FormEditContent {...activeContent} />
        </Container>
    )
}
