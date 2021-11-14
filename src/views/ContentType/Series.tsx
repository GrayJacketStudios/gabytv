import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import ContentGroupView from '../../components/ContentGroupView'
import { useEffect } from 'react';
import { getContentByType } from '../../utils/contentHelper';

export default function Series() {

    const { contentReducer }: { contentReducer: ContentState }  = useSelector((state: RootState) => state, shallowEqual);

    const [series, setSeries] = React.useState<IContent[]>([]);

    useEffect(() => {
        setSeries(getContentByType(contentReducer.contents, 'Series'));
    }, [contentReducer.contents]);


    return (
        <div className='containerView'>
            <ContentGroupView listName="Series" listContent={series} />
        </div>
    )
}
