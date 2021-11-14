import React from 'react'
import { Form } from 'react-bootstrap'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { updateDisplaySetting } from '../../store/actions/viewActions';
import { RootState } from '../../store/reducers';
import './toggleDisplayView.style.scss';

export default function ToggleDisplayView() {
    const dispatch = useDispatch();
    const { viewReducer: { displaySettings: { showListView } } }: { viewReducer: ViewState }  = useSelector((state: RootState) => state, shallowEqual);
    return (
        <div className='toggleSwitch'>
            <Form.Check 
                type="switch"
                id="custom-switch"
                label="List mode"
                defaultChecked={showListView}
                onChange={() => dispatch(updateDisplaySetting('showListView', !showListView ))}
            />
            {showListView}
        </div>
    )
}
