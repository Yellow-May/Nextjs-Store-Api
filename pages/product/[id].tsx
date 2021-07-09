import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import AppStore from "../../app/store";
import Layout from "../layout";
import Styled from "../../styles/Product";
import { DataProps, getProduct, getProductsId } from "../../lib/products";

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getProductsId();
	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const data = await getProduct(context.params?.id as string);
	return { props: { data } };
};

const Item: React.FC<{ data: DataProps }> = ({ data }) => {
	const { actions } = React.useContext(AppStore);
	const { addtocart } = actions;

	const handleClick = () => {
		addtocart({
			id: data.id,
			title: data.title,
			price: data.price,
			quantity: 1,
		});
	};

	return (
		<Layout>
			<Styled.Wrapper>
				<Link href='/' passHref>
					<a>Go Home</a>
				</Link>

				<Styled.ImgWrapper>
					<Image src={data.image} alt={data.title} layout='fill' />
				</Styled.ImgWrapper>

				<h2>{data.title}</h2>
				<p>{data.description}</p>
				<h4>{data.price}</h4>

				<Link href='/'>
					<a onClick={handleClick}>Add To Cart</a>
				</Link>
			</Styled.Wrapper>
		</Layout>
	);
};

export default Item;
