import React from 'react'
import { Carousel  } from '@trendyol-js/react-carousel';
import { getMaxCarouselCards } from '../../utils/carousel';
import ContentCard from '../ContentCard';
import './carousel.style.scss'

export default function CarouselView({listContent}: {listContent: ContentState}) {
    return (
        <Carousel
            className="contentContainer" 
            show={getMaxCarouselCards()} 
            slide={1} 
            transition={0.5} 
            dynamic={true}
        >
            {listContent.contents.map((content: IContent) => {
                return (
                    <div key={content.id} className="item">
                        <ContentCard {...content} />
                    </div>
                )
            })}
        </Carousel>
)
}
