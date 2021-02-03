/////======== add text
var squareStyle = { font: "bold 20px Arial", fill: "#FFFFFF", boundsAlignH: "center", boundsAlignV: "middle" };
var squareText = game.add.text(-45/2, -45/2, value, squareStyle);
var bestTitle = game.add.text(0, 5, "BEST", titleStyle);
    bestTitle.setTextBounds(0, 0, 70, 50);
    bestSprite.addChild(bestTitle);

/////======== add 

game.load.image('background', 'assets/bg.png');

game.add.tileSprite(0, 0, game.width, game.height, 'background');

var logo = game.add.image(0, 0, 'logo');
    logo.reset((game.width - logo.width) / 2, (game.height - logo.height) / 2 - 50);

var startBtn = game.add.button(0, 0, 'btnStart', this.startGame, this);
    startBtn.reset((game.width - startBtn.width) / 2, (game.height - startBtn.height) / 2 + 100);

