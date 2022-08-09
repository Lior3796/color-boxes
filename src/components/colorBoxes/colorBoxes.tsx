import { Component, ReactNode } from "react";
import Box from "../box/box";
import { generateColor } from "../../helpers/generateColor";

interface IProps {
	boxes: string[];
}

class ColorBoxes extends Component<IProps> {
	constructor(props: IProps) {
		super(props);
	}

	render(): ReactNode {
		return (
			<div className="color-boxes">
				{this.props.boxes.map((i, key) => (
					<Box key={key} color={i} />
				))}
			</div>
		);
	}
}

export default ColorBoxes;
