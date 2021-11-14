import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import ContentGroupView from '../../components/ContentGroupView'
import { useEffect } from 'react';
import { getContentByType } from '../../utils/contentHelper';

export default function Programs() {

    const { contentReducer }: { contentReducer: ContentState }  = useSelector((state: RootState) => state, shallowEqual);

    const [programs, setPrograms] = React.useState<IContent[]>([]);

    useEffect(() => {
        setPrograms(getContentByType(contentReducer.contents, 'Program'));
    }, [contentReducer.contents]);


    return (
        <div className='containerView'>
            <ContentGroupView listName="Programs" listContent={programs} />
        </div>
    )
}
