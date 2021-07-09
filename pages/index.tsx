import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";

import Layout from "./layout";
import Styled from "../styles/Home";
import { DataProps, getProducts } from "../lib/products";

export const getStaticProps: GetStaticProps = async () => {
	const data = await getProducts();
	return { props: { data } };
};

const Home: React.FC<{ data: DataProps[] }> = ({ data }) => {
	return (
		<Layout>
			<Styled.Wrapper>
				<h1>Available Products</h1>

				<Styled.Container>
					{data.map(item => (
						<Link key={item.id} href={`/product/${item.id}`} passHref>
							<Styled.Card>
								<Styled.ImgWrapper>
									<Image src={item.image} alt={item.title} layout='fill' />
								</Styled.ImgWrapper>
								<Styled.Content>
									<h3>{item.title}</h3>
									<p>${item.price}</p>
									<p>In Stock</p>
								</Styled.Content>
							</Styled.Card>
						</Link>
					))}
				</Styled.Container>
			</Styled.Wrapper>
		</Layout>
	);
};

export default Home;
