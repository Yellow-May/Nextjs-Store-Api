import { ActionProp, CART, InitialStateProps } from "./types";

const reducer = (state: InitialStateProps, action: ActionProp) => {
	switch (action.type) {
		case CART.add:
			return {
				...state,
				cartdata: state.cartdata
					? state.cartdata.filter(item => item.id === action.payload.id).length === 0
						? [...state.cartdata, action.payload]
						: [...state.cartdata]
					: [action.payload],
			};

		case CART.remove:
			return {
				...state,
				cartdata:
					state.cartdata &&
					(state.cartdata.length === 1
						? null
						: state.cartdata.filter(item => item.id !== action.payload)),
			};

		case CART.update:
			return {
				...state,
				cartdata:
					state.cartdata &&
					state.cartdata.map(item => {
						if (item.id === action.payload.id) item.quantity = action.payload.quantity;
						return item;
					}),
			};

		case CART.empty:
			return { ...state, cartdata: null };

		default:
			return state;
	}
};

export default reducer;
