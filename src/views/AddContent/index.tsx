import React from 'react'
import { Container } from 'react-bootstrap'
import FormEditContent from '../../components/FormEditContent'
import '../forms.style.scss'

export default function AddContent() {
    return (
        <Container className='formEditContent'>
            <h3>Add new content</h3>
            <FormEditContent id={''} title={''} photo={''} synopsis={''} type={'Film'} duration={0} chapter={0} />
        </Container>
    )
}
