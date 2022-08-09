import { Component, ReactNode } from "react";
import { generateColor } from "../../helpers/generateColor";

interface IProps {
	color: string;
}

interface IState {
	color: string;
}

class Box extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			color: this.props.color,
		};
	}

	handleClick(): void {
		const newColor = generateColor();
		this.setState((pre) => {
			return { color: pre.color === newColor ? generateColor() : newColor };
		});
	}
	render(): ReactNode {
		return (
			<div
				onClick={this.handleClick}
				style={{ backgroundColor: this.state.color }}
				className="box"
			></div>
		);
	}
}

export default Box;
