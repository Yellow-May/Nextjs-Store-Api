import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }

   body {
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-size: 12px;

		@media (min-width: 480px) { font-size: 13px };
		@media (min-width: 640px) { font-size: 14px };
		@media (min-width: 960px) { font-size: 15px };
   }

   a {
      color: inherit;
      text-decoration: none;
   }
`;
