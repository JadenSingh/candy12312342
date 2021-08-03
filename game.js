class Game {

constructor(){
}
getState(){
var gameStateRef = database.ref('gameState')
gameStateRef.on("value",function(data){
    gameState =data.val()
})
}
update(state) {
    database.ref('/').update({
        gameState: state
    });
}
 start() {
    if (gameState === 0) {
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if (playerCountRef.exists()) {
            playerCount = playerCountRef.val();
            player.getCount();
        
        form = new Form()
        form.display();}
    }
player1 = createSprite(200,500);
player1.addImage("player1",player1_img);

player2 = createSprite(800,500);
player2.addImage("player2", player2_img);
players=[player1,player2];

}
play(){

form.hide()
Player.getPlayerInfo()

if(allPlayers !==undefined){
var x=200
var y=200
}

var index = 0
for(var plr in allPlayers){

    index=index+1
    


}

}
drawSprites()
}
    

