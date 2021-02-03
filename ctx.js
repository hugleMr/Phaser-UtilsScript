var mainAreaBackGraphics = game.add.graphics(0, 0);
    mainAreaBackGraphics.beginFill(0xADA79A, 0.5);
    mainAreaBackGraphics.drawRoundedRect(0, 0, 220, 220, 10);
    mainAreaBackGraphics.endFill();
    mainAreaSprite.addChild(mainAreaBackGraphics);

 var bestSprite = game.add.sprite(90, 10);
    var bestGraphics = game.add.graphics(0, 0);
    bestGraphics.lineStyle(5, 0xA1C5C5);
    bestGraphics.beginFill(0x308C8C);
    bestGraphics.drawRoundedRect(0, 0, 70, 50, 10);
    bestGraphics.endFill();
    bestSprite.addChild(bestGraphics);