import { useState } from "react";
import {
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

/*

  square:
    1. value 
    2. position
    3. fire onClick

  board: 
    1. when square clicked, update board values, and evaluate game state.
    2. 
*/

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>My first react native project!</Text>
			<Board />
		</View>
	);
}

type squarePosition = {
	x: number;
	y: number;
};

function Board() {
	/*
    0 - stop game
    1 - X's turn
    2 - O's turn
  */

	const [currentTurn, setCurrentTurn] = useState(1);
	const [gameBoard, setGameBoard] = useState([
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	]);

	function updateBoard() {}

	const onMove = (position: squarePosition) => {
		console.log(position);
		// calculateMove();
	};

	return (
		<View style={styles.board}>
			<Square
				key={0}
				position={[0, 0]}
				value={gameBoard[0][0]}
				onMove={onMove}
			/>
			<Square
				key={1}
				position={[0, 1]}
				value={gameBoard[0][1]}
				onMove={onMove}
			/>
			<Square
				key={2}
				position={[0, 2]}
				value={gameBoard[0][2]}
				onMove={onMove}
			/>
			<Square
				key={3}
				position={[1, 0]}
				value={gameBoard[1][0]}
				onMove={onMove}
			/>
			<Square
				key={4}
				position={[1, 1]}
				value={gameBoard[1][1]}
				onMove={onMove}
			/>
			<Square
				key={5}
				position={[1, 2]}
				value={gameBoard[1][2]}
				onMove={onMove}
			/>
			<Square
				key={6}
				position={[2, 0]}
				value={gameBoard[2][0]}
				onMove={onMove}
			/>
			<Square
				key={7}
				position={[2, 1]}
				value={gameBoard[2][1]}
				onMove={onMove}
			/>
			<Square
				key={8}
				position={[2, 2]}
				value={gameBoard[2][2]}
				onMove={onMove}
			/>
		</View>
	);
}

interface SquareProps {
	value: number;
	position: squarePosition;
	onMove: Function;
}
function Square({ value, position, onMove }: SquareProps) {
	return (
		<TouchableOpacity
			style={styles.square}
			onPress={() => {
				onMove(position);
			}}
		>
			<Text>{value.toString()}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	board: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		width: 300,
		height: 300,
	},
	square: {
		backgroundColor: "red",
		width: 100,
		height: 100,
	},
});

/*
const Square = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.square} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
const Board = ({ squares, onPress }) => { return ( <View style={styles.board}> {

  squares.map((square, i) => ( <Square key={i} value={square} onPress={() => onPress(i)} /> ))} </View> ); }; 

  const styles = StyleSheet.create({ board: { flexDirection: 'row', flexWrap: 'wrap', width: 300, height: 300, }, });
   export default Board;

const Board = ({ squares, onPress }) => {
  return (
    <View style={styles.board}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onPress={() => onPress(i)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
  },
});
export default Board
*/
