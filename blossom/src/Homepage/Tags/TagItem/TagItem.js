import React from 'react';
import './TagItem.css'

function TagItem({TagTitle, Description, PostPublished, Follow}){

    return(
        <div className='TagItem'>
            <div className='TagItem-Header'>
                <h3>{TagTitle}</h3>

            </div>
            <div className='TagItem-Body'>
            <p>
                    { Description }
            </p>
            </div>
            <div className='TagItem-Footer'>
                <p>{PostPublished}</p>
                <button>
                    {Follow ? ('Following'):('Follow')}
                </button>

            </div>
        </div>
    )
}

export default TagItem;
