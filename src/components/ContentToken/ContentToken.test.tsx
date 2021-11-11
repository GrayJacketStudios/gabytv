import '@testing-library/react/dont-cleanup-after-each';
import { render, screen, cleanup } from '@testing-library/react';
import ContentToken from '.';


describe("Renders the card element and try to get things from it", () =>{
    beforeAll(() => {
        render(
            <ContentToken 
                id="409c17c2-3e86-11ec-9bbc-0242ac130002"
                title="testing title" 
                type="Program" 
                duration={1965} 
                chapter={5}
                photo="https://2.bp.blogspot.com/-CPsjNj0bN2g/T8OwBvfGfVI/AAAAAAAAOWc/AWcanBMvKrM/s1600/Benny___Joon_(MGM,_1993).jpg"
                synopsis="this is a testing content card"
            />);
    })

    afterAll(() => {
        cleanup();
    });

    test('renders ContentCard and can get the title of it', () => {
        const titleElement = screen.getByText(/testing title/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('if the image have the title alt', () => {
        const imgElement = screen.getByAltText(/testing title/i);
        expect(imgElement).toHaveAttribute('src');
    });

    test('if we display the type of content', () => {
        const typeElement = screen.getByText(/Program/i);
        expect(typeElement).toBeInTheDocument();
    });

    test('if we give it a chapter, it will display it belognside the title', () => {
        const titleWithChapterElement = screen.getByText(/testing title - 5/i);
        expect(titleWithChapterElement).toBeInTheDocument();
    });

});

