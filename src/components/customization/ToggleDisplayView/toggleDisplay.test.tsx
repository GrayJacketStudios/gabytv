import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import { render, screen, cleanup } from '@testing-library/react';
import ToggleDisplayView from '.';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../../store/reducers';


describe("Renders the toggle button to check on it", () =>{
    beforeAll(() => {
        render(
            <Provider store={createStore(rootReducer)}>
                <ToggleDisplayView />
            </Provider>
            );
    })

    afterAll(() => {
        cleanup();
    });

    test('renders ToggleDisplayView and can get the displayed text of it', () => {
        const titleElement = screen.getByText(/List mode/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('Check if the element comes false by default', () => {
        const toggleElement = screen.getByLabelText(/List mode/i);
        expect(toggleElement).not.toBeChecked();
    });

    test('Check if the element comes true after clicking on it', () => {
        const toggleElement = screen.getByLabelText(/List mode/i);
        toggleElement.click();
        expect(toggleElement).toBeChecked();
    });



});

