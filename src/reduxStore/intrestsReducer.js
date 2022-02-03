const initialState = { 
    Tags: [], 
}


const IntrestsReducer = (Intrests = initialState, action) => {


    switch (action.type){

        case "INITIAL_TAGS":
            return { ...Intrests,  Tags: [action.payload.Tags, ...Intrests.Tags]}
        default:
            return Intrests;
    }


};

export default IntrestsReducer;