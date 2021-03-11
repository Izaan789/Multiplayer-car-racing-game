class Game{
    construcor(){

    }
    getState(){
    var gameStateref = database.ref("GameState")
    gameStateref.on("value",function(data){
        gamestate = data.val()
    })
    }

    update(state){
        database.ref("/").update({GameState:state})
    }

    start(){
        if (gamestate === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
    }

}