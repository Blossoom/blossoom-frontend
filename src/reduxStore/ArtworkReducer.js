import { createStore } from 'redux';





const initialState = { 
    
    Title: '' , 
    Tags: [], 
    Artwork: [],   
    Description: '',
}


const ArtworkReducer = (ArtworkData = initialState, action) => {

    switch (action.type){
        case "INSERT_ARTWORK_DESCRIPTION":
            return { ...ArtworkData, Description: action.payload.Description}
        case "INSERT_ARTWORK_TITLE":
            return { ...ArtworkData, Title: action.payload.Title}
        case "INSERT_ARTWORK_TAGS":
            return { ...ArtworkData,  Tags: [action.payload.Tags, ...ArtworkData.Tags]}
        case "INSERT_ARTWORK":
            return { ...ArtworkData,  Artwork: [action.payload.Artwork, ...ArtworkData.Artwork]}

        default:
            return ArtworkData;
    }
};

export default ArtworkReducer;