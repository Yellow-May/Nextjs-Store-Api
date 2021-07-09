import React from "react";
import reducer from "./reducer";
import { ActionsProps, CART, CartItemProps, ContextProps, InitialStateProps } from "./types";

const initialState: InitialStateProps = {
	cartdata: null,
};

const AppStore = React.createContext({} as ContextProps);

export const AppProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	const actions: ActionsProps = {
		addtocart: (payload: CartItemProps) => dispatch({ type: CART.add, payload }),
		removefromcart: (payload: number) => dispatch({ type: CART.remove, payload }),
		updatecart: (payload: { id: number; quantity: number }) =>
			dispatch({ type: CART.update, payload }),
		emptycart: () => dispatch({ type: CART.empty }),
	};

	return <AppStore.Provider value={{ state, actions }}>{children}</AppStore.Provider>;
};

export default AppStore;
