import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import ContentGroupView from '../../components/ContentGroupView'
import ContentType from '../ContentType/ContentType';

export default function Home() {
    const { contentReducer: { contents } }: { contentReducer: ContentState }  = useSelector((state: RootState) => state, shallowEqual);

    return (
        <>
            <div className='containerView'>
                <ContentGroupView listName="General Content" listContent={contents} />
            </div>
            <div className='containerView'>
                <ContentType.Films/>
            </div>
            <div className='containerView'>
                <ContentType.Series/>
            </div>
            <div className='containerView'>
                <ContentType.Programs/>
            </div>
            <div className='containerView'>
                <ContentType.CommercialSpots/>
            </div>
        </>
    )
}
