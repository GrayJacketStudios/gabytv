import { Accordion } from 'react-bootstrap';
import ContentToken from '../ContentToken';
import './accordion.style.scss'

export default function AccordionView({listContent}: {listContent: ContentState}) {
    return (
        <Accordion
        >
            {listContent.contents.map((content: IContent) => {
                return (
                    <ContentToken key={content.id} {...content} />
                )
            })}
        </Accordion>
)
}
