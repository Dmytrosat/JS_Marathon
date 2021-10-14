//Task #0 .............................................
const player1 = {
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Axe', 'Sword', 'Plasma gun', 'Annihilator gun'],
    attack: function() {
        console.log(player1.name + 'Fight...');
    }
};

const player2 = {
    name: 'SUB-ZERO',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Frost Blade', 'Ice Shower', 'Glock 18', 'Rocket Luncher'],
    attack: function() {
        console.log(player2.name + 'Fight...');
    }
};

//Task #1 .............................................

function createPlayer(playerNumber, playerObject) {
    const $player = document.createElement('div');
    $player.classList.add(playerNumber);

    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressBar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = playerObject.hp + '%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = playerObject.name;

    const $img = document.createElement('img');
    $img.src = playerObject.img;

    $player.appendChild($progressBar);
    $player.appendChild($character);
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);
    $character.appendChild($img);

    const arenas = document.querySelector('.arenas');
    arenas.appendChild($player);
}

//Task #2 .............................................

createPlayer('player1', player1, 50);
createPlayer('player2', player2, 80);

player1.attack();
player2.attack();