import { combineReducers } from 'redux';
import Types from 'actions/actions_type';

const isNavOpen = (state = false, action) => {
    
    switch(action.type) {
        case Types.TOGGLE_NAV:
            return action.payload;
        default:
            return state;
    }
    
}

const isTitle = (state = false, action) => {
    
    switch(action.type) {
        case Types.TOGGLE_TITLE:
            return action.payload;
        default:
            return state;
    }
    
}

const language = (state = 'en', action) => {
    
    switch(action.type) {
        case Types.SET_LANGUAGE:
            return action.payload;
        default:
            return state;
    }
    
}

const activeMenu = (state = 'home', action) => {
    
    switch(action.type) {
        case Types.SET_ACTIVE_MENU_ITEM:
            return action.payload;
        default:
            return state;
    }
    
}


const rootReducer = combineReducers({
    isNavOpen,
    isTitle,
    language,
    activeMenu
});

export default rootReducer;