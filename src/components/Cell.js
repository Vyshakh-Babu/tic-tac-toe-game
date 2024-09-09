import React from "react";

const Cell = ({ num, value, onClick }) => (
	<td className="gameGrid border" onClick={() => onClick(num)}>
		{value}
	</td>
);

export default Cell;
