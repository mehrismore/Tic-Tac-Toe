let player = 'X'

const gridCells = document.querySelectorAll('.grid-item')

gridCells.forEach(function (cell) {
    cell.addEventListener('click', function(event) {
        let winner = whoIsTheWinner()
        if((event.target.textContent == '') && (winner == false)) {
            event.target.textContent = player
            switchPlayer()
            showCurrentPlayerTurn()
            announceIfThereIsWinner()
        } 
    })
})


