import styled from "styled-components";

const Layout = {
	Wrapper: styled.div``,

	Header: styled.header({
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottom: "thin solid #eaeaea",
		padding: "10px 2vw",

		h1: {
			fontSize: "1.5em",
			letterSpacing: 1,
		},

		a: {
			padding: 5,
			borderRadius: 5,
			boxShadow: "1.5px 1.5px 1.5px rgba(0,0,0,0.5)",
		},

		"@media (min-width: 640px)": { padding: "10px 5vw" },
		"@media (min-width: 768px)": { padding: "10px 8vw" },
		"@media (min-width: 960px)": { padding: "10px 11vw" },
		"@media (min-width: 1024px)": { padding: "10px 15vw" },
	}),

	Footer: styled.footer({
		width: "100%",
		borderTop: "thin solid #eaeaea",
		padding: "10px 0",
		fontSize: "0.875em",
		textAlign: "center",

		a: {
			color: "rgba(0,0,255,1)",
		},
	}),
};

export default Layout;
