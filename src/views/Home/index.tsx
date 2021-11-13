import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import ContentGroupView from '../../components/ContentGroupView'

export default function Home() {
    const { contentReducer }: { contentReducer: ContentState }  = useSelector((state: RootState) => state, shallowEqual);

    return (
        <div>
            <ContentGroupView listName="General Content" listContent={contentReducer} />
        </div>
    )
}
