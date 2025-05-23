import { useEffect, useState } from "react";
import styles from "@/styles/game.module.css"

export default function SnakeGame() {
    useEffect(() => {
        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");
        const gridSize = 10;
        const gridYSize = 6;
        const cellSize = canvas.width / gridSize;
        canvas.style.imageRendering = "pixelated";

        let snake = [{x:10, y:10}];
        let direction = {x: 1, y: 0};
        let apple = {x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize)};

        function updateGame() {
            let head = {x: (snake[0].x + direction.x + gridSize) % gridSize, y: (snake[0].y + direction.y + gridSize) % gridSize};
            snake.unshift(head);

            if(head.x === apple.x && head.y === apple.y) {
                apple = {x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize)};
            } else {
                snake.pop();
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawGrid();

            ctx.fillStyle = "green";
            snake.forEach((segment) => ctx.fillRect(segment.x * cellSize, segment.y * cellSize, cellSize, cellSize));
            
            ctx.fillStyle = "red";
            ctx.fillRect(apple.x * cellSize, apple.y * cellSize, cellSize, cellSize);

            setTimeout(updateGame, 100);
        }

        function drawGrid() {
            ctx.strokeStyle = "#000";
            for(let i = 0; i < canvas.width; i += cellSize) {
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i, canvas.height);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(0, i);
                ctx.lineTo(canvas.width, i);
                ctx.stroke();
            }
        }

        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowUp") direction = {x: 0, y: -1};
            if(event.key === "ArrowDown") direction = {x: 0, y: 1};
            if(event.key === "ArrowLeft") direction = {x: -1, y: 0};
            if(event.key === "ArrowRight") direction = {x: 1, y: 0};
            if(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
                event.preventDefault();
            }
        });

        updateGame();
    }, []);
    return <canvas id="gameCanvas" width="150" height="150" className={styles.gamePart}></canvas>;
}