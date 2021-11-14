import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import ContentGroupView from '../../components/ContentGroupView'
import { getContentByType } from '../../utils/contentHelper';

export default function Series() {

    const { contentReducer }: { contentReducer: ContentState }  = useSelector((state: RootState) => state, shallowEqual);

    return (
        <div className='containerView'>
            <ContentGroupView listName="Series" listContent={getContentByType(contentReducer.contents, 'Series')} />
        </div>
    )
}
