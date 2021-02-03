// Make this item draggable.
node.input.enableDrag();
// Add a handler to remove it using different options when dropped.
node.events.onDragStart.add(this.dragStart, this);

// Add a handler to remove it using different options when dropped.
node.events.onDragStop.add(this.dragStop, this);

this.dragStart = function(sprite, event){
	if(allowDragStart){
	    allowDragStart = false;
	    allowDragStop = true;
	    temPosition.x = sprite.position.x;
	    temPosition.y = sprite.position.y;
	}else{
	    sprite.input.disableDrag();
	}
}

this.dragStop = function(sprite, event){
    var t = this;
    if(allowDragStop){
        allowDragStop = false;
        if(temPosition.x === sprite.position.x && temPosition.y === sprite.position.y){
            allowDragStart = true;
            allowDragStop = false;
        }else{
           
        }
    }
}