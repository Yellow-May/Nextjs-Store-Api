export type CartItemProps = {
	id: number;
	title: string;
	price: number;
	quantity: number;
};

export interface InitialStateProps {
	cartdata: CartItemProps[] | null;
}

export interface ActionsProps {
	addtocart: (payload: CartItemProps) => void;
	removefromcart: (payload: number) => void;
	updatecart: (payload: { id: number; quantity: number }) => void;
	emptycart: () => void;
}

export type ContextProps = {
	state: InitialStateProps;
	actions: ActionsProps;
};

export type ActionProp = {
	type: string;
	payload?: any;
};

export enum CART {
	add = "ADD_ITEM",
	remove = "REMOVE_ITEM",
	update = "UPDATE_ITEM",
	empty = "EMPTY",
}
