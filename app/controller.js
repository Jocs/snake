import { 
		eatAndGenABall, 
		generateBall, 
		balls, 
		snake, 
		moveSnake,
		canIEat
	} from './model'
import {renderBallAndSnake } from './view'

const canvas = document.querySelector('#canvas')
const start = document.querySelector('#start')
const scoreBoard = document.querySelector('#score')
const context = canvas.getContext('2d')

let score = 0
let direction = 'left'
let timer
let isStart = false


canvas.width = 600
canvas.height = 600

// 初始化3个小球
const initGame = function() {
	
	balls.length = 0
	snake.length = 0
	direction = 'left'
	score = 0
	scoreBoard.textContent = score;
	([[13, 15], [14, 15], [15, 15], [16, 15], [17, 15]]).forEach(i => snake.push(i))
	generateBall(3)
	renderBallAndSnake(context)
}

const updateScore = () => scoreBoard.textContent = score

start.addEventListener('click', e => {
	if (isStart) return
	initGame()
	isStart = true
	timer = setInterval(() => {
		moveSnake(snake, direction)
		if (canIEat()) {
			eatAndGenABall(canIEat())
			score++
			updateScore()
		} else {
			snake.pop()
		}
		if (isGameOver()) {
			clearInterval(timer)
			isStart = false;
			alert('game over')
		}
		renderBallAndSnake(context)
	}, 300)
})

function isGameOver() {
	const head = snake[0]
	if (snake[0][0] < 0 || snake[0][1] < 0 || snake[0][0] > 29 || snake[0][1] > 29) return true
	if (snake.slice(1).some(b => b[0] === head[0] && b[1] === head[1])) return true
	return false
}

document.addEventListener('keyup', e => {
	switch (e.keyCode) {
		case 37: {
			if (direction !== 'left' && direction !== 'right') direction = 'left'
			break
		}
		case 38: {
			if (direction !== 'top' && direction !== 'bottom') direction = 'top'
			break
		}
		case 39: {
			if (direction !== 'left' && direction !== 'right') direction = 'right'
			break
		}
		case 40: {
			if (direction !== 'top' && direction !== 'bottom') direction = 'bottom'
			break
		}
	}
}, false)




