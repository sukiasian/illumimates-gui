import { combineReducers } from 'redux';
import { boxReducer, BoxState } from './slices/boxSlice';
import { modalReducer, ModalState } from './slices/modalSlice';

export interface RootState {
	box: BoxState,
	modal: ModalState,
	// default: {}
}

const rootReducer = combineReducers<RootState>({
    box: boxReducer,
    modal: modalReducer
});

export default rootReducer;
