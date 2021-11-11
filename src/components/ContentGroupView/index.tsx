import './contentGroup.style.scss'
import { useMediaQuery } from 'react-responsive';
import CarouselView from './CarouselView';
import AccordionView from './AccordionView';


export default function ContentGroupView({listName, listContent}: {listName: string, listContent: ContentState}) {

    const isMobile = useMediaQuery({ maxWidth: 767 })


    const selectDisplayView = () => {
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
