import React from "react";
import Link from "next/link";
import AppStore from "../../app/store";
import Layout from "../layout";
import Styled from "../../styles/Cart";
import QuantSelect from "./QuantSelect";

const Cart = () => {
	const { state, actions } = React.useContext(AppStore);
	const { cartdata } = state;
	const { updatecart, removefromcart, emptycart } = actions;

	return (
		<Layout cart>
			<Styled.Wrapper>
				{cartdata ? (
					cartdata.map(item => (
						<Styled.ItemWrapper key={item.id}>
							<Styled.ContentWrapper>
								<Styled.ContentHeading>{item.title}</Styled.ContentHeading>
								<Styled.ContentPrice>{item.price * item.quantity}</Styled.ContentPrice>
								<QuantSelect id={item.id} value={item.quantity} changeFunc={updatecart} />
							</Styled.ContentWrapper>
							<button title='remove from cart' onClick={() => removefromcart(item.id)}>
								X
							</button>
						</Styled.ItemWrapper>
					))
				) : (
					<Styled.EmptyText>Cart is Empty!</Styled.EmptyText>
				)}
				{cartdata && (
					<Link href='/'>
						<a onClick={emptycart}>Buy Items</a>
					</Link>
				)}
			</Styled.Wrapper>
		</Layout>
	);
};

export default Cart;
