const gameBoard = document.querySelector("gameboard")
const playerDisplay = document.querySelector("#player")

const infoDisplay = document.querySelector("info-display")
const width = 8


const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook,
]

const createBoard = () => {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement("div")
        square.classList.add("square")
        square.innerHTML = startPiece
        square.firstChild?.setAttribute("draggable", true)
        square.setAttribute("square-id", i)
        const row = Math.floor((63 - i) / 8 + 1)

        if (row % 2 === 0) {
            square.classList.add(i % 2 === 0 ? "beige" : "brown")
        }
        else {
            square.classList.add(i % 2 === 0 ? "brown" : "beige")
        }

        gameboard.append(square)

        if (i <= 15) {
            square.firstChild.firstChild.classList.add("black")
        }

        if (i >= 48) {
            square.firstChild.firstChild.classList.add("white")
        }
    })

}

createBoard()

const allSquares = document.querySelectorAll("#gameboard .square")

allSquares.forEach(square => {
    square.addEventListener("dragstart", dragStart)
    square.addEventListener("dragover", dragOver)
    square.addEventListener("drop", dragDrop)
})

let startPositionId
let draggedElement

function dragStart(e) {
    startPositionId = e.target.parentNode.getAttribute("square-id")
    draggedElement = e.target
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop(e) {
    e.stopPropagation()
    e.target.parentNode.append(draggedElement)
    e.target.remove()
}

