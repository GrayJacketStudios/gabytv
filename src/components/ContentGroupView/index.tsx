import './contentGroup.style.scss'
import { useMediaQuery } from 'react-responsive';
import CarouselView from './CarouselView';
import AccordionView from './AccordionView';
import { Container } from 'react-bootstrap';


export default function ContentGroupView({listName, listContent}: {listName: string, listContent: IContent[]}) {

    const isMobile = useMediaQuery({ maxWidth: 767 })


    const selectDisplayView = () => {
        if (listContent.length === 0) {
            return (
                <Container>
                    <h5>{listName} has no content to display</h5>
                </Container>
            );
        }
        
        if(!isMobile) {
            return (
                <CarouselView listContent={listContent} />
            );
        }
        return (
            <AccordionView listContent={listContent} />
        );
    }

    return (
        <div>
            <div>
                <h3 className='contentGroupTitle'>{listName}</h3>
                <div >
                    {selectDisplayView()}
                </div>
            </div>
        </div>
    )
}
