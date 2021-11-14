import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import ContentGroupView from '../../components/ContentGroupView'
import { getContentByType } from '../../utils/contentHelper';

export default function Programs() {

    const { contentReducer }: { contentReducer: ContentState }  = useSelector((state: RootState) => state, shallowEqual);

    return (
        <div className='containerView'>
            <ContentGroupView listName="Programs" listContent={getContentByType(contentReducer.contents, 'Program')} />
        </div>
    )
}
