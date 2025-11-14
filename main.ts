controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mainCharacter.vy = -100
})
function defineCharacters () {
	
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let mainCharacter: Sprite = null
let Gravity = 20
mainCharacter = sprites.create(img`
    3 3 3 . . 3 . 3 . 3 3 3 . 3 3 . 
    3 . . . . 3 . 3 . . 3 . . 3 . 3 
    3 3 3 . . 3 3 . . . 3 . . 3 3 . 
    . . 3 . . 3 . 3 . . 3 . . 3 . 3 
    3 3 3 . . 3 . 3 . 3 3 3 . 3 3 . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 . . 3 3 3 . . . . 
    . . . . . 3 . 3 . . 3 . . . . . 
    . . . . . 3 3 . . . 3 . . . . . 
    . . . . . 3 . 3 . . 3 . . . . . 
    . . . . . 3 3 . . 3 3 3 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 . . 3 3 3 . . . . 
    . . . . . 3 . 3 . . 3 . . . . . 
    . . . . . 3 . 3 . . 3 . . . . . 
    . . . . . 3 3 . . 3 3 3 . . . . 
    `, SpriteKind.Player)
mainCharacter.setVelocity(500, 300)
forever(function () {
    mainCharacter.setBounceOnWall(true)
})
