import axios from "axios";

export interface DataProps {
	id: number;
	title: string;
	image: string;
	description: string;
	price: number;
}

export const getProducts = async () => {
	const res = await axios.get("https://fakestoreapi.com/products");
	const data = (await res.data) as DataProps[];
	return data;
};

export const getProductsId = async () => {
	const data = await getProducts();
	const paths = data.map(item => ({ params: { id: item.id.toString() } }));
	return paths;
};

export const getProduct = async (id: string) => {
	const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
	const data = (await res.data) as DataProps;
	return data;
};
