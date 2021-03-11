class Player{
    constructor(){

    }
    getCount(){

     var foodCountref = database.ref("FoodCount")
         foodCountref.on("value",function(data){
         flayerCount = data.val()
            })
        }
            update(name){
                var playerindex = "Player"+playerCount
                database.ref(playerindex).set({Name:name})
            }
            updateCount(count){
                database.ref("/").update({FoodCount:count})
            }
}