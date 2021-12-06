const playerFactory = (name,playerNum) => {
    const displayName = () => {
        const nameDisplay = document.querySelector(`#${playerNum}`);
        nameDisplay.textContent = name;
    };
    return {displayName};
};
  
const gameBoard = (() => {
    'use strict';
    const _displayNames = () => {
        let username = prompt("Enter Player 1's name");
        const player1 = playerFactory(username,'player1');
        player1.displayName();
        username = prompt("Enter Player 2's name");
        const player2 = playerFactory(username,'player2');
        player2.displayName();
    };
    
    const _clearNames = () => {
        const player1 = playerFactory('','player1');
        player1.displayName();
        const player2 = playerFactory('','player2');
        player2.displayName();
    };
    
    const _drawGameBoard = () => {
        const gameBoardDiv = document.querySelector('#gameBoard');
        for (let i=0; i<9; i++){
            const boardSection = document.createElement('div');
            boardSection.setAttribute('id', `section${i}`);
            boardSection.setAttribute('class', 'boardSection');
            
            const boardMarker = document.createElement('p');
            boardMarker.setAttribute('id', `marker${i}`);
            boardMarker.setAttribute('class', 'boardMarker');
            
            if (i%2==0){
                boardMarker.textContent = 'X';
                //const markerText = document.createTextNode('X');
                //boardMarker.appendChild(markerText);
            } else {
                boardMarker.textContent = 'O';
            };
            boardSection.appendChild(boardMarker);
            gameBoardDiv.appendChild(boardSection);
        }
    };
    
    const init = () => {
        _drawGameBoard();
        const startButton = document.querySelector('#startBtn');
        startButton.addEventListener('click', () => {
            _clearNames();
            _displayNames();
        });
    };
    
    return {init};
})();
  
gameBoard.init();
  
const displayController = (() => {
    'use strict';
})();