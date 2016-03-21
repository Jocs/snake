import {balls, snake} from './model'

const RADIUS = 10
const WIDTH = 600
const HEIGHT = 600

const renderBall = function(ball, color, ctx) {
	ctx.fillStyle = color
	const x = (ball[0] * 2 + 1) * RADIUS
	const y = (ball[1] * 2 + 1) * RADIUS
	const r = RADIUS
	const startAngle = 0
	const endAngle = Math.PI * 2
	const direction = true
	ctx.beginPath()
	ctx.arc(x, y, r, startAngle, endAngle, direction)
	ctx.fill()
}

export const renderBallAndSnake = function(ctx) {
	ctx.clearRect(0, 0, WIDTH, HEIGHT)
	balls.forEach(ball => renderBall(ball, 'rgb(253, 185, 38)', ctx))
	snake.forEach(ball => renderBall(ball, 'rgb(42, 249, 51)', ctx))
}

