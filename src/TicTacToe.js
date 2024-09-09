import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TicTacToe.css";
import Scoreboard from "./components/Scoreboard";
import Board from "./components/Board";

function TicTacToe() {
	const [turn, setTurn] = useState("x");
	const [cellValues, setCellValues] = useState(Array(9).fill(""));
	const [roundWinner, setRoundWinner] = useState();
	const [winner, setWinner] = useState();
	const [xWins, setXwin] = useState(0);
	const [oWins, setOwin] = useState(0);

	useEffect(() => {
		if (roundWinner) {
			alert(`${roundWinner} won the round`);
			setRoundWinner(null); // Reset the round state
			setCellValues(Array(9).fill(""));
		}
	}, [roundWinner]);

	useEffect(() => {
		if (winner) {
			alert(`${winner} won the game`);
			setRoundWinner(null); // Reset the round state
			setWinner(null); // Reset the winner state
			setXwin(0);
			setOwin(0);
			setCellValues(Array(9).fill(""));
		}
	}, [winner]);

	useEffect(() => {
		if (xWins === 3) {
			setWinner("x");
		}
	}, [xWins]);

	useEffect(() => {
		if (oWins === 3) {
			setWinner("o");
		}
	}, [oWins]);

	const isFullNoEmpty = (arr) =>
		arr.every((element) => element !== null && element !== undefined && element !== "");
	const isDraw = () => isFullNoEmpty(cellValues);

	useEffect(() => {
		const win = checkWinner(cellValues);
		if (isDraw() && !win) {
			alert("The round is a draw!");
			setCellValues(Array(9).fill(""));
		}
	}, [cellValues]);

	const handleClick = (num) => {
		if (cellValues[num] !== "") {
			alert("Already Clicked");
			return;
		}

		const newCellValues = [...cellValues];
		newCellValues[num] = turn;
		setCellValues(newCellValues);

		const win = checkWinner(newCellValues);
		if (win === "x") {
			setXwin((prevState) => prevState + 1);
			setRoundWinner("x");
		} else if (win === "o") {
			setOwin((prevState) => prevState + 1);
			setRoundWinner("o");
		}
		setTurn(turn === "x" ? "o" : "x");
	};

	const checkWinner = (newCellValues) => {
		const winningCombos = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let combo of winningCombos) {
			const [a, b, c] = combo;
			if (
				newCellValues[a] &&
				newCellValues[a] === newCellValues[b] &&
				newCellValues[a] === newCellValues[c]
			) {
				return newCellValues[a];
			}
		}
		return null;
	};

	return (
		<div className="gameContainer">
			<h1>TicTacToe App</h1>
			<Scoreboard xWins={xWins} oWins={oWins} />
			<h4 className="my-4">Player {turn}'s turn</h4>
			<Board cellValues={cellValues} onClick={handleClick} />
			<button
				className="btn btn-success mt-5"
				onClick={() => {
					setCellValues(Array(9).fill(""));
				}}
			>
				Reset
			</button>
		</div>
	);
}

export default TicTacToe;
