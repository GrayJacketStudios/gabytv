import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { updateDisplaySetting } from '../../../store/actions/viewActions';
import { RootState } from '../../../store/reducers';

export default function BGColorPicker() {
    const dispatch = useDispatch();
    const { viewReducer: { displaySettings: { backgroundColor } } }: { viewReducer: ViewState }  = useSelector((state: RootState) => state, shallowEqual);
    return (
        <div className='colorPicker'>
            <Row>
                <Col>
                <Form.Label htmlFor="customBackgroundColor">Background</Form.Label>
                </Col>
                <Col>
                    <Form.Control
                        type="color"
                        id="customBackgroundColorPicker"
                        defaultValue={backgroundColor}
                        title="Choose your background color"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(updateDisplaySetting('backgroundColor', e.target.value))}
                    />
                </Col>
            </Row>
        </div>
    )
}
