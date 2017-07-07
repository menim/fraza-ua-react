import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import background from "./pictures/background.png";
import { fontFace } from "./utils/fontFace";
import { injectGlobal } from "styled-components";

const container = document.getElementById("root");

ReactDOM.render(<App />, container);

injectGlobal`
	${fontFace("ArnoPro", "arno-pro")};
	${fontFace("ArnoProItalic", "arnopro-italic")};


	html,
	body {
	  margin: 0;
	  padding: 0;
	  height: 100%;
	}

	body {
	  font: 16px ArnoPro, Georgia, serif;
	  color: #5b5b5b;
	  background-image: url(${background});
	}

	body>div {
	  height: 100%;
	}
`;
