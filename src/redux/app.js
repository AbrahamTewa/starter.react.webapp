// ============================================================
// Module constants and variables
const SET_TITLE = 'set title';

// ============================================================
// Action creator
/**
 *
 * @param {string} title
 */
function setTitle(title) {
    return { title, type: SET_TITLE };
}

// ============================================================
// Reducer
function reducer(state = {}, action = {}) {
    switch (action.type) {
        case SET_TITLE:
            return {
                ...state,
                title: action.title,
            };

        default:
            return state;
    }
}

// ============================================================
// Exports
export default reducer;

export { setTitle };
