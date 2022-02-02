const initialState = {
    Title: '' , 
    Category: [],
    Item: [],
    Type: '',
    Description: '',
}


const ShopItemReducer = (ShopItemReducer = initialState, action) => {

    switch (action.type){
        case "INSERT_SHOPITEM_DESCRIPTION":
            return { ...ShopItemReducer, Description: action.payload.Description}


        case "INSERT_SHOPITEM_TYPE":
                return { ...ShopItemReducer, Type: action.payload.Type}



        case "INSERT_SHOPITEM_TITLE":
            return { ...ShopItemReducer, Title: action.payload.Title}



        case "INSERT_CATEGORY":
            return { ...ShopItemReducer,  Category: [action.payload.Category, ...ShopItemReducer.Category]}

            
        case "INSERT_ITEMPHOTOS":
            return { ...ShopItemReducer,  Item: [action.payload.Item, ...ShopItemReducer.Item]}

        default:
            return ShopItemReducer;
    }
};

export default ShopItemReducer;