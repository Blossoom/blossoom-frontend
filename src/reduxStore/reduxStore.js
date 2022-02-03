import {configureStore} from '@reduxjs/toolkit';
import BlogReducer from './BlogReducer';
import ArtworkReducer from './ArtworkReducer';
import ShopItemReducer from './ShopItem';
import AuthReducer from './AuthStatus'
import IntrestsReducer from './intrestsReducer';


export default configureStore({
    reducer: {
        CreateBlog: BlogReducer,
        CreateArtwork: ArtworkReducer,
        CreateShopITem: ShopItemReducer,
        Auth: AuthReducer,
        Tags: IntrestsReducer,

    }
});