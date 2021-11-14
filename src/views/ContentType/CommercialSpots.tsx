import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import ContentGroupView from '../../components/ContentGroupView'
import { useEffect } from 'react';
import { getContentByType } from '../../utils/contentHelper';

export default function CommercialSpots() {

    const { contentReducer }: { contentReducer: ContentState }  = useSelector((state: RootState) => state, shallowEqual);

    const [commercialSpots, setCommercialSpots] = React.useState<IContent[]>([]);

    useEffect(() => {
        setCommercialSpots(getContentByType(contentReducer.contents, 'Commercial Spot'));
    }, [contentReducer.contents]);


    return (
        <div className='containerView'>
            <ContentGroupView listName="Commercial Spots" listContent={commercialSpots} />
        </div>
    )
}
