import React from "react";

const Scoreboard = ({ xWins, oWins }) => (
	<div className="card p-3 mt-3">
		<h4 className="ms-3">Scoreboard</h4>
		<div className="d-flex justify-content-around">
			<div className="player-score">
				<h5 className="player-label">Player x</h5>
				<h6 className="player-wins">{xWins} wins</h6>
			</div>
			<div className="player-score ms-3">
				<h5 className="player-label">Player o</h5>
				<h6 className="player-wins">{oWins} wins</h6>
			</div>
		</div>
	</div>
);

export default Scoreboard;
