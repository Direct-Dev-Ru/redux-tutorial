import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

const initialState = {
	articles: [],
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_ARTICLE:
			state = Object.assign({}, state, {
				articles: state.articles.concat(action.payload),
			});
			
			break;
		case DATA_LOADED:
			
			state = Object.assign({}, state, {
				remoteArticles:
					state?.remoteArticles?.concat(action.payload) ?? action.payload,
			});
			
			break;

		default:
			break;
	}
	return state;
}
export default rootReducer;
