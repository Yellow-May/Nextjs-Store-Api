import React from "react";
import Head from "next/head";
import Link from "next/link";
import Styled from "../../styles/Layout";

interface ComponentProps {
	cart?: boolean;
}

const Layout: React.FC<ComponentProps> = ({ children, cart }) => {
	return (
		<Styled.Wrapper>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='description' content='Shopping App created using create-next-app' />
				<link rel='icon' href='/favicon.ico' />

				<title>Yellow May | Nextjs {cart ? "Cart" : "Shop"}</title>
			</Head>

			<Styled.Header>
				<h1>Nextjs Shop App</h1>
				<Link href={cart ? "/" : "/cart"}>
					<a>{cart ? "home icon" : "cart icon"}</a>
				</Link>
			</Styled.Header>

			{children}

			<Styled.Footer>
				Designed by{" "}
				<a href='https://github.com/Yellow-May' target='_blank' rel='noopener noreferrer'>
					The Yellow May
				</a>
			</Styled.Footer>
		</Styled.Wrapper>
	);
};

export default Layout;
