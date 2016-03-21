export const balls = []
export const snake = []

const checkBall = ball => balls.concat(snake).every(item => item[0] !== ball[0] && item[1] !== ball[1])
const random30 = () => Math.floor(Math.random() * 30)

export const generateBall = function(number) {
	while (number--) {
		while (true) {
			let ball = [random30(), random30()]
			if (checkBall) {
				balls.push(ball)
				break
			}
		}
	}
}

export const eatAndGenABall = function(ball) {
	balls.forEach((b, index, arr) => {
		if (b[0] === ball[0] && b[1] === ball[1]) arr.splice(index, 1)
	})
	generateBall(1)
}

export const canIEat = () => {
	const head = snake[0]
	let isBall = false
	balls.forEach(ball => {
		if(ball[0] === head[0] && ball[1] === head[1]) isBall = ball
	})
	return isBall
}

export const moveSnake = (snake, direction) => {
	let newHead = []
	let head = snake[0]
	switch (direction) {
		case 'left': {
			newHead = [head[0] - 1, head[1]]
			break
		}
		case 'right': {
			newHead = [head[0] + 1, head[1]]
			break
		}
		case 'top': {
			newHead = [head[0], head[1] - 1]
			break
		}
		case 'bottom': {
			newHead = [head[0], head[1] + 1]
			break
		} 
	}
	snake.unshift(newHead)
}




