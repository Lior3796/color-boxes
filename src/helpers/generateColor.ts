export const generateColor = (): string => {
	const chars: string[] = [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
	];
	let color: string = "#";
	for (let i = 0; i < 6; i++) {
		color += chars[Math.floor(Math.random() * chars.length)];
	}
	return color;
};
