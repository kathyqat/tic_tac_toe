const playerFactory = (name) => {
    const displayName = () => {
        const mainDiv = document.querySelector('#main');
        const nameDisplay = document.createElement('p');
        nameDisplay.setAttribute('id', `${name}`);
        nameDisplay.textContent = name;
        mainDiv.appendChild(nameDisplay);
    };
    return {displayName};
};
  
const gameBoard = (() => {
    'use strict';
    const _clearNames = () => {
        const mainDiv = document.querySelector('#main');
        const names = document.querySelectorAll('p');
        if (names){
            names.forEach((p) => mainDiv.removeChild(p));
        };
    };
    
    const init = () => {
        const startButton = document.querySelector('#startBtn');
        startButton.addEventListener('click', () => {
            _clearNames();
            let username = prompt("Enter Player 1's name");
            const player1 = playerFactory(username);
            player1.displayName();

            username = prompt("Enter Player 2's name");
            const player2 = playerFactory(username);
            player2.displayName();
        });
    };
    return {init};
  })();
  
gameBoard.init();

const displayController = (() => {
    'use strict';
})();