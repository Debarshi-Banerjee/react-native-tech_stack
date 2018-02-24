import * as types from './actionTypes';

export function selectLibrary(libraryId) {
    return {
        type: types.SELECT_LIBRARY,
        payload: libraryId
    };
}
