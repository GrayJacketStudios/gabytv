import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import ContentGroupView from '../../components/ContentGroupView'
import { getContentByType } from '../../utils/contentHelper';

export default function CommercialSpots() {

    const { contentReducer }: { contentReducer: ContentState }  = useSelector((state: RootState) => state, shallowEqual);

    return (
        <div className='containerView'>
            <ContentGroupView listName="Commercial Spots" listContent={getContentByType(contentReducer.contents, 'Commercial Spot')} />
        </div>
    )
}
