import React from 'react';
import TagItem from './../TagItem/TagItem'
import "./TagsBody.css"

function TagsBody(){
    return(
    <div className='TagsBody'>
        <TagItem TagTitle='TestTag' Description='test desxc' PostPublished='11/12/12' Follow={true} />
        <TagItem TagTitle='TestTag' Description='test desxc' PostPublished='11/12/12' Follow={true} />
        <TagItem TagTitle='TestTag' Description='test desxc' PostPublished='11/12/12' Follow={true} />
    </div>
    )
}

export default TagsBody;