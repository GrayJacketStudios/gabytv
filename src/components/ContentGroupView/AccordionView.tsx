import { Accordion } from 'react-bootstrap';
import ContentToken from '../ContentToken';
import './accordion.style.scss'

export default function AccordionView({listContent}: {listContent: IContent[]}) {
    return (
        <Accordion>
            {listContent.map((content: IContent) => {
                return (
                    <ContentToken key={content.id} {...content} />
                )
            })}
        </Accordion>
)
}
