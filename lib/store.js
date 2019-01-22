import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const initialState = {
    showList: [],
    breadCrumb: [
        {
            name: "Homepage",
            url: "/"
        }
    ]
};

export const actionTypes = {
    FILLSHOWLIST: 'FILLSHOWLIST',
    ADDBREADCRUMB: 'ADDBREADCRUMB',
    REMOVEBREADCRUMB: 'REMOVEBREADCRUMB'
}

// Reducers
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FILLSHOWLIST:
            return Object.assign({}, state, {
                showList: action.showList
            });
        case actionTypes.ADDBREADCRUMB:
            const newAddArray = state.breadCrumb.slice();
            newAddArray.push(action.breadCrumbItem);
            return Object.assign({}, state, {
                breadCrumb: newAddArray
            });
        case actionTypes.REMOVEBREADCRUMB:
            const newRemovedArray = state.breadCrumb.filter((item,index) => index !== action.breadCrumbIndex);
            return Object.assign({}, state, {
                breadCrumb: newRemovedArray
            });
        default:
            return state;
    }
}

// Actions
export const setShowList = (showList) => dispatch => {
    return dispatch({ type: actionTypes.FILLSHOWLIST, showList: showList });
}
export const addBreadcrumbItem = (breadCrumbItem) => dispatch => {
    return dispatch({ type: actionTypes.ADDBREADCRUMB, breadCrumbItem: breadCrumbItem });
}
export const removeBreadcrumbItem = (breadCrumbIndex) => dispatch => {
    return dispatch({ type: actionTypes.REMOVEBREADCRUMB, breadCrumbIndex: breadCrumbIndex });
}

export function initializeStore (initialState = initialState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}