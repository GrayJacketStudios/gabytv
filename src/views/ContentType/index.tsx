import React from 'react'
import CommercialSpots from './CommercialSpots';
import Films from './Films'
import Programs from './Programs';
import SearchResults from './SearchResults';
import Series from './Series';

export default function ContentType() {
    return (
        <>
        </>
    )
}


ContentType.Films = () => <Films />;
ContentType.Series = () => <Series />;
ContentType.Programs = () => <Programs />;
ContentType.CommercialSpots = () => <CommercialSpots />;
ContentType.SearchContent = () => <SearchResults />;