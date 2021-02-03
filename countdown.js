game.time.events.repeat(Phaser.Timer.SECOND , 15, this.refreshTime, this)
this.refreshTime = function(){
    this.leftTime--;
    if(this.leftTime === 0) {
        window.alert("XXX!");
        
    }
}