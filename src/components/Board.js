import React from "react";
import Cell from "./Cell";

const Board = ({ cellValues, onClick }) => (
	<table className="border">
		<tbody>
			<tr>
				<Cell num={0} value={cellValues[0]} onClick={onClick} />
				<Cell num={1} value={cellValues[1]} onClick={onClick} />
				<Cell num={2} value={cellValues[2]} onClick={onClick} />
			</tr>
			<tr>
				<Cell num={3} value={cellValues[3]} onClick={onClick} />
				<Cell num={4} value={cellValues[4]} onClick={onClick} />
				<Cell num={5} value={cellValues[5]} onClick={onClick} />
			</tr>
			<tr>
				<Cell num={6} value={cellValues[6]} onClick={onClick} />
				<Cell num={7} value={cellValues[7]} onClick={onClick} />
				<Cell num={8} value={cellValues[8]} onClick={onClick} />
			</tr>
		</tbody>
	</table>
);

export default Board;
