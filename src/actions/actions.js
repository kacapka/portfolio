import Types from './actions_type';

export const toggleNav = () => (dispatch, getState) => {
    const isNavOpen = getState().isNavOpen;
    
    dispatch({
        type: Types.TOGGLE_NAV,
        payload: !isNavOpen
    });
}

export const toggleTitle = () => (dispatch, getState) => {
    const isTitle = getState().isTitle;
    
    dispatch({
        type: Types.TOGGLE_TITLE,
        payload: !isTitle
    });
}

export const setLanguage = (lang) => ({
    type: Types.SET_LANGUAGE,
    payload: lang
})

export const setActiveMenuItem = (lang) => ({
    type: Types.SET_ACTIVE_MENU_ITEM,
    payload: lang
})

