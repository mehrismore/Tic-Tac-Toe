const switchPlayer = function() {
    if(player == 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
    return player
}

const showCurrentPlayerTurn = function() {
    const turn = document.createElement('div')
    turn.textContent = `It's player ${player}'s turn`

    document.querySelector('#billboard').innerHTML = ''
    document.querySelector('#billboard').appendChild(turn)
}

const whoIsTheWinner = function() {
    const cell0 =  document.querySelector('#cell0').textContent
    const cell1 =  document.querySelector('#cell1').textContent
    const cell2 =  document.querySelector('#cell2').textContent
    const cell3 =  document.querySelector('#cell3').textContent
    const cell4 =  document.querySelector('#cell4').textContent
    const cell5 =  document.querySelector('#cell5').textContent
    const cell6 =  document.querySelector('#cell6').textContent
    const cell7 =  document.querySelector('#cell7').textContent
    const cell8 =  document.querySelector('#cell8').textContent

    // Check vertically
    if(((cell0 == cell3) && (cell3 == cell6) && (cell0 == cell6)) && (cell0 != '')) {
        return cell0
    } else if ((cell1 == cell4) && (cell4 == cell7) && (cell1 == cell7) && (cell1 != '')) {
        return cell1
    } else if((cell2 == cell5) && (cell5 == cell8) && (cell2 == cell8) && (cell2 != '')) {
        return cell2
        // Check horizontally
    } else if (((cell0 == cell1) && (cell1 == cell2) && (cell0 == cell2)) && (cell0 != '')) {
        return cell0
    } else if (((cell3 == cell4) && (cell4 == cell5) && (cell3 == cell5)) && (cell3 != '')) {
        return cell3
    } else if (((cell6 == cell7) && (cell7 == cell8) && (cell6 == cell8)) && (cell6 != '')) {
        return cell6
        // Check diagonally (left to right)
    } else if (((cell0 == cell4) && (cell4 == cell8) && (cell0 == cell8)) && (cell0 != '')) {
        return cell0
        // Check diagonally (right to left)
    } else if (((cell2 == cell4) && (cell4 == cell6) && (cell2 == cell6)) && (cell2 != '')) {
        return cell2
    } else if ((cell0 != '') && (cell1 != '') && (cell2 != '')&& (cell3 != '') && (cell4 != '') && (cell5 != '') && (cell6 != '') && (cell7 != '') && (cell8 != '')){
        return 'Draw'
    }
    else {
        return false
    }
}

const announceIfThereIsWinner = function() {
    const announcement = document.querySelector("#announce")
    announcement.innerHTML = ''
    let winner = whoIsTheWinner()
    if ((winner !== false ) && (winner !== 'Draw')) {
        announcement.textContent = `The Winner Is: ${winner}`
    }  else if(winner == 'Draw') {
        announcement.textContent = winner
    }
}