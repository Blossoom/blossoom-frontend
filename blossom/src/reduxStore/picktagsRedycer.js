import { createStore } from 'redux';





const initialState = { 
    
    Tags: {}, 
    Blocks: {},   
    Description: '',
}


const BlogReducer = (BlogData = initialState, action) => {


    switch (action.type){

        case "INSERT_DESCRIPTION":
            return { ...BlogData, Description: action.payload.Description}
        case "INSERT_TITLE":
            return { ...BlogData, Title: action.payload.Title}
        case "INSERT_TAGS":
            return { ...BlogData,  Tags: [action.payload.Tags, ...BlogData.Tags]}
        case "INSERT_BLOCKS":
            return { ...BlogData, Blocks: action.payload.Blocks}

        default:
            return BlogData;
    }


};

export default BlogReducer;