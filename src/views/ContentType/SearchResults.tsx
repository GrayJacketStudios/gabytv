import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import ContentGroupView from '../../components/ContentGroupView'
import { getContentByTitle, getContentBySynopsis } from '../../utils/contentHelper';
import { Button } from 'react-bootstrap';
import { goBackView } from '../../store/actions/viewActions';

export default function SearchResults() {
    const dispatch = useDispatch();

    const { contentReducer: { contents, search } }: { contentReducer: ContentState }  = useSelector((state: RootState) => state, shallowEqual);

    const [contentGroups, setContentGroups] = React.useState<Set<IContent>>(new Set<IContent>());

    React.useEffect(() => {
        const contentByTitle = getContentByTitle(contents, search);
        const contentBySynopsis = getContentBySynopsis(contents, search);
        setContentGroups(new Set([...contentByTitle, ...contentBySynopsis]));//We put it all in a Set, so we dont repeat!
    }, [ search, contents ]);

    return (
        <div className='containerView'>
            <Button variant="primary" onClick={() => dispatch(goBackView())}><i className="bi bi-arrow-left"></i></Button>
            <ContentGroupView listName={`Content found by '${search}'`} listContent={Array.from(contentGroups)} />
        </div>
    )
}
