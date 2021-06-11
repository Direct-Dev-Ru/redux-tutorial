import { ADD_ARTICLE } from "../constants/action-types";
const forbiddenWords = ["spam", "money"];

function forbiddenWordsMiddleware({ dispatch }) {
	return function (next) {
		return function (action) {
			// do your stuff

			if (action.type === ADD_ARTICLE) {
				const foundWords = forbiddenWords.filter((w) =>
					action.payload.title.toLowerCase().includes(w.toLowerCase())
				);

				if (foundWords.length > 0) {
					return dispatch({ type: "FOUND_BAD_WORDS" });
				}
			}

			return next(action);
		};
	};
}

function addIdMiddleware({ getState, dispatch }) {
	return function (next) {
		return function (action) {
			// do your stuff

			if (action.type === ADD_ARTICLE) {
				const state = getState();
				
				let nextId = 1;
				if (state.articles.length > 0) {
					nextId =
						Math.max.apply(
							Math,
							state.articles.map((el) => el.id)
						) + 1;
                }
                action.payload = { ...action.payload, id: nextId};
				if (false) {
					return dispatch({ type: "BAD ID" });
				}
			}

			return next(action);
		};
	};
}

const exportObject = [forbiddenWordsMiddleware, addIdMiddleware];
export default exportObject;
