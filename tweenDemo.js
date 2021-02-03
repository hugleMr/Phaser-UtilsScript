var temTween = game.add.tween(sprite).to( { x: temPosition.x, y: temPosition.y }, 300, Phaser.Easing.Quartic.Out, true);
temTween.onComplete.add(function(){
    //=====
})