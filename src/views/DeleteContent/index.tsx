import React from 'react'
import { Container } from 'react-bootstrap'
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import DeleteContentConfirmation from '../../components/DeleteContentConfirmation'

export default function DeleteContent() {
    const { contentReducer: { activeContent } }: { contentReducer: ContentState }  = useSelector((state: RootState) => state, shallowEqual);
    return (
        <Container className="containerView">
            <DeleteContentConfirmation {...activeContent} />
        </Container>
    )
}
