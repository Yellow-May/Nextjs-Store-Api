import styled from "styled-components";

const Styled = {
	Wrapper: styled.main({
		width: "100%",
		padding: "20px 2.5vw",

		h2: { fontSize: "1.25em", letterSpacing: 1, lineHeight: 1, textTransform: "uppercase" },

		h4: { fontSize: "1.5em", "&::before": { content: "'$ '" } },

		p: {
			fontSize: "0.875em",
			letterSpacing: 1,
			lineHeight: 1.5,
		},

		">*": { marginBottom: 20, "&:last-child": { marginBottom: 0 } },

		"@media (min-width: 640px)": { padding: "25px 5vw" },
		"@media (min-width: 768px)": { padding: "25px 8vw" },
		"@media (min-width: 960px)": { padding: "30px 11vw" },
		"@media (min-width: 1024px)": { padding: "30px 15vw" },
	}),

	ImgWrapper: styled.div({
		width: "100%",
		height: 250,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderBottom: "thin solid grey",
		position: "relative",

		img: {
			height: "100% !important",
			width: "unset !important",
			minWidth: "unset !important",
		},

		"@media (min-width: 640px)": { height: 300 },
		"@media (min-width: 768px)": { height: 350 },
		"@media (min-width: 960px)": { height: 400 },
	}),
};

export default Styled;
