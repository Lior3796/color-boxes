import { Component, ReactNode } from "react";
import ColorBoxes from "./components/colorBoxes/colorBoxes";
import { generateColor } from "./helpers/generateColor";
import "./App.css";

interface IText {
	text: string;
}

interface IState {
	colors: string[];
}

class App extends Component<IText, IState> {
	constructor(props: IText) {
		super(props);
		this.generateBoxes = this.generateBoxes.bind(this);
		this.state = {
			colors: this.generateBoxes(),
		};
	}

	generateBoxes() {
		const colors = Array.from({ length: 20 }).map((i) => generateColor());
		return colors;
	}

	render(): ReactNode {
		return (
			<div className="App">
				<ColorBoxes boxes={this.state.colors} />
			</div>
		);
	}
}

export default App;
