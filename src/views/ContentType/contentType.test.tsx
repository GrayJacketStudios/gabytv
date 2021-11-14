


import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import { render, screen, cleanup } from '@testing-library/react';
import ContentType from '.';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../store/reducers';


describe("Renders the Films content type and do some tests", () =>{
    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});//Disabled console.warn as the carousel package throw an abnoxious warning
        render(
            <Provider store={createStore(rootReducer)}>
                <ContentType.Films /> 
            </Provider>
            );
    })

    afterAll(() => {
        cleanup();
    });

    it('Find the movie Thor: Ragnarok', () => {
        const titleElement = screen.getAllByText(/Thor: Ragnarok/i);
        expect(titleElement[0]).toBeInTheDocument();
    });

    it('Doesnt find any other type of content', () => {
        expect(screen.queryByText(/Program/i)).toBeNull();
        expect(screen.queryByText(/Commercial Spot/i)).toBeNull();
        expect(screen.queryByText(/Series/i)).toBeNull();
    });
});

describe("Renders the Series content type and do some tests", () =>{
    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});//Disabled console.warn as the carousel package throw an abnoxious warning
        render(
            <Provider store={createStore(rootReducer)}>
                <ContentType.Series /> 
            </Provider>
            );
    })

    afterAll(() => {
        cleanup();
    });

    it('Find the Series Dexter', () => {
        const titleElement = screen.getAllByText(/Dexter/i);
        expect(titleElement[0]).toBeInTheDocument();
    });

    it('Doesnt find any other type of content', () => {
        expect(screen.queryByText(/Program/i)).toBeNull();
        expect(screen.queryByText(/Commercial Spot/i)).toBeNull();
        expect(screen.queryByText(/Films/i)).toBeNull();
    });
});

describe("Renders the Commercial Spot content type and do some tests", () =>{
    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});//Disabled console.warn as the carousel package throw an abnoxious warning
        render(
            <Provider store={createStore(rootReducer)}>
                <ContentType.CommercialSpots /> 
            </Provider>
            );
    })

    afterAll(() => {
        cleanup();
    });

    it('Find the Commercial Spot', () => {
        const titleElement = screen.getAllByText(/Commercial Spot/i);
        expect(titleElement[0]).toBeInTheDocument();
    });

    it('Doesnt find any other type of content', () => {
        expect(screen.queryByText(/Program/i)).toBeNull();
        expect(screen.queryByText(/Films/i)).toBeNull();
        expect(screen.queryByText(/Series/i)).toBeNull();
    });
});

describe("Renders the Program content type and do some tests", () =>{
    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {});//Disabled console.warn as the carousel package throw an abnoxious warning
        render(
            <Provider store={createStore(rootReducer)}>
                <ContentType.Programs /> 
            </Provider>
            );
    })

    afterAll(() => {
        cleanup();
    });

    it('Find the Program', () => {
        const titleElement = screen.getAllByText(/Program/i);
        expect(titleElement[0]).toBeInTheDocument();
    });

    it('Doesnt find any other type of content', () => {
        expect(screen.queryByText(/Films/i)).toBeNull();
        expect(screen.queryByText(/Series/i)).toBeNull();
        expect(screen.queryByText(/Commercial Spot/i)).toBeNull();
    });
});