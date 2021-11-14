import { loadDummyData } from "../store/reducers/contentReducers";
import { getContentBySynopsis, getContentByTitle, getContentByType } from "./contentHelper";


const content = loadDummyData();//Cargamos data dummy del json para realizar los tests


describe("Check the functionality of getMaxCarouselCards", () => {
    it("returns 2 series", () => {
        const result: IContent[] =  getContentByType(content, "Series");
        expect(result.length).toBe(2);
        expect(result[0].title).toBe("Dexter");
    });

    it("returns 1 film with the title 'Star Wars: Ewok Adventures'", () => {
        const result: IContent[] =  getContentByTitle(content, "Star Wars: Ewok Adventures");
        expect(result.length).toBe(1);
        expect(result[0].title).toBe("Star Wars: Ewok Adventures");
    });

    it("returns 1 film with the synopsis 'The Towani family'", () => {
        const result: IContent[] =  getContentBySynopsis(content, "The Towani family");
        expect(result.length).toBe(1);
        expect(result[0].title).toBe("Star Wars: Ewok Adventures");
    });

})