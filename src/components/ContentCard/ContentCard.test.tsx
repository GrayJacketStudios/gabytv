import React from 'react';
import { render, screen } from '@testing-library/react';
import ContentCard from '.';

describe("Renders the card element and try to get things from it", () =>{
    beforeAll(() => {
        render(
            <ContentCard 
                title="testing title" 
                type="Program" 
                duration={1965} 
                photo="no photo"
                synopsis="this is a testing content card"
            />);
    })

    test('renders ContentCard and can get the title of it', () => {
        const titleElement = screen.getByText(/testing title/i);
        expect(titleElement).toBeInTheDocument();
      });
});

