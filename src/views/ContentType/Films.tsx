import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import ContentGroupView from '../../components/ContentGroupView'
import { useEffect } from 'react';
import { getContentByType } from '../../utils/contentHelper';

export default function Films() {

    const { contentReducer }: { contentReducer: ContentState }  = useSelector((state: RootState) => state, shallowEqual);

    const [films, setFilms] = React.useState<IContent[]>([]);

    useEffect(() => {
        setFilms(getContentByType(contentReducer.contents, 'Film'));
    }, [contentReducer.contents]);


    return (
        <div className='containerView'>
            <ContentGroupView listName="Films" listContent={films} />
        </div>
    )
}
