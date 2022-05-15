namespace SpriteKind {
    export const pet = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Food, effects.ashes, 500)
})
let kalan: Sprite = null
let dog: Sprite = null
scene.setBackgroundImage(assets.image`map`)
dog.follow(kalan, 75)
kalan = sprites.create(assets.image`Kalan`, SpriteKind.Player)
controller.moveSprite(kalan, 100, 100)
let donut = sprites.create(assets.image`smallDonut`, SpriteKind.Food)
dog = sprites.create(assets.image`dog0`, SpriteKind.pet)
let couch = sprites.create(assets.image`couchFront0`, SpriteKind.Food)
let cake = sprites.create(assets.image`smallCake`, SpriteKind.Food)
let computer = sprites.create(assets.image`computer1`, SpriteKind.Food)
let ice_cream = sprites.create(assets.image`smallIceCream`, SpriteKind.Food)
kalan.setBounceOnWall(true)
ice_cream.setBounceOnWall(true)
dog.setBounceOnWall(true)
computer.setBounceOnWall(true)
donut.setBounceOnWall(true)
cake.setBounceOnWall(true)
couch.setBounceOnWall(true)
kalan.vy = -25
scene.cameraFollowSprite(kalan)
ice_cream.vy = -25
dog.vy = -25
computer.vy = -25
cake.vy = -25
donut.vy = -25
couch.vy = -25
