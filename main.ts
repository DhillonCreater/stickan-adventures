namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Portal = SpriteKind.create()
    export const Fireball = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    music.stopAllSounds()
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.baDing.play()
    animation.runImageAnimation(
    Stickdoode,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 f 1 f f . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 f f f 1 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 f 1 f f . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f f f f f 1 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 f 1 f f . . . . . 
        . . . . f f 1 1 1 1 f . . . . . 
        . . . . f f f f f 1 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 f 1 f f . . . . . 
        . . . . f f 1 1 1 1 f . . . . . 
        . . . . f f f f f 1 f . . . . . 
        . . . f . f f f f f . f . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 f 1 f f . . . . . 
        . . . . f f 1 1 1 1 f . . . . . 
        . f f . f f f f f 1 f . f f . . 
        . . . f . f f f f f . f . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 f 1 f f . . . . . 
        . . . . f f 1 1 1 1 f . . . . . 
        . f f . f f f f f 1 f . f f . . 
        . . . f . f f f f f . f . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 f 1 f f . . . . . 
        . . . . f f 1 1 1 1 f . . . . . 
        . . . . f f f f f 1 f . . . . . 
        . . . f . f f f f f . f . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 f 1 f f . . . . . 
        . . . . f f 1 1 1 1 f . . . . . 
        . . . . f f f f f 1 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 f 1 f f . . . . . 
        . . . . f f 1 1 1 1 f . . . . . 
        . . . . f f f f f 1 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 f 1 f f . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f f f f f 1 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 f 1 f f . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 f f f 1 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `],
    100,
    false
    )
    otherSprite.destroy(effects.halo, 500)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Instructions:                        A button- Jump, Use the left and right buttons to go forward/ backwards. If an enemy touches you then you lose 1 life. If you touch a fireball you lose 2 lives. To kill an enemy jump on it. You can wall jump y jumping onto a wall and jumping off.", DialogLayout.Full)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`door0`, function (sprite, location) {
    effects.confetti.endScreenEffect()
    game.showLongText("Created By Dhillon Flora. Thanks for playing", DialogLayout.Full)
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Stickdoode,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 f 1 f f . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 f f f 1 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 f 1 f f . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 f f f 1 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . f . . . . . f . . . . . 
        . . . . f . . . . . f . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 f 1 f f . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 f f f 1 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . f . . . . . f . . . . . 
        . . . f . . . . . . . f . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 f 1 f f . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 f f f 1 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . f . . . . . f . . . . . 
        . . . . f . . . . . f . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 f 1 f f . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 f f f 1 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `],
    100,
    false
    )
    if (Stickdoode.vy == 0) {
        Stickdoode.vy = -120
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.placeOnRandomTile(Stickdoode, assets.tile`myTile6`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTilemap(tilemap`level1`)
    game.showLongText("CLICK A TO GO ONTO NEXT LEVEL", DialogLayout.Center)
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    Stickdoode.setPosition(9, 62)
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        Killer = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 4 4 4 4 5 5 5 f . . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 e e e 5 5 5 5 f . . 
            . f 5 4 5 e 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 e 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 e 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 e e e 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . . f 5 5 4 4 4 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        Killer,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 4 4 4 4 4 5 5 f . . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 c c c 5 5 5 5 f . . 
            . f 5 4 5 c 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 c 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 c 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 c c c 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . . f 5 4 4 4 4 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . f 5 5 4 4 4 5 5 f . . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 c c c 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 c c c 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . . f 5 4 4 4 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 4 4 5 f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 4 c c c 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 c c c 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . . f 5 4 4 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . f 5 4 c 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 c 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f 5 5 c 4 5 f . . . . 
            . . . . . f 5 5 5 4 5 f . . . . 
            . . . . . f 5 5 5 4 5 f . . . . 
            . . . . . f 5 5 5 4 5 f . . . . 
            . . . . . f 5 5 c 4 5 f . . . . 
            . . . . . f 5 5 5 4 5 f . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 5 4 4 4 5 f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . f 5 5 c c c 4 5 f . . . 
            . . . . f 5 5 5 5 5 4 5 f . . . 
            . . . . f 5 5 5 5 5 4 5 f . . . 
            . . . . f 5 5 5 5 5 4 5 f . . . 
            . . . . f 5 5 c c c 4 5 f . . . 
            . . . . f 5 5 5 5 5 4 5 f . . . 
            . . . . . f 5 5 4 4 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . f 5 5 4 4 4 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . f 5 5 5 c c c 5 4 5 f . . 
            . . . f 5 5 5 5 5 5 5 4 5 f . . 
            . . . f 5 5 5 5 5 5 5 4 5 f . . 
            . . . f 5 5 5 5 5 5 5 4 5 f . . 
            . . . f 5 5 5 c c c 5 4 5 f . . 
            . . . f 5 5 5 5 5 5 5 4 5 f . . 
            . . . . f 5 5 5 4 4 4 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 4 4 4 5 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 5 5 c c c 5 5 4 5 f . 
            . . f 5 5 5 5 5 5 5 c 5 4 5 f . 
            . . f 5 5 5 5 5 5 5 c 5 4 5 f . 
            . . f 5 5 5 5 5 5 5 c 5 4 5 f . 
            . . f 5 5 5 5 c c c 5 5 4 5 f . 
            . . f 5 5 5 5 5 5 5 5 5 4 5 f . 
            . . . f 5 5 5 5 4 4 4 4 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(Killer, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile2`)) {
        myEnemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f . b . . . . . 
            . . f f f f f f f . b . . . . . 
            . . f f f f f f f . b . . . . . 
            . . f 1 f 1 f 1 f . b . . . . . 
            . . f 1 1 1 1 1 f . b . . . . . 
            . . . f f f f f . . b . . . . . 
            . . . . . f . . . e e e . . . . 
            . . . . . f . . . . f . . . . . 
            . . . f f f f f f f f . . . . . 
            . . f . . f . . . . . . . . . . 
            . . f . . f . . . . . . . . . . 
            . . . . f . f . . . . . . . . . 
            . . . f . . . f . . . . . . . . 
            . . f . . . . . f . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(myEnemy, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
        myEnemy.follow(Stickdoode, 70)
        myEnemy.ay = 10000
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile4`)) {
        TP = sprites.create(assets.image`Portal`, SpriteKind.Portal)
        tiles.placeOnTile(TP, value2)
    }
    for (let value of tiles.getTilesByType(assets.tile`fireball`)) {
        fireball = sprites.create(img`
            . . . . . 4 . . . 5 . . . 2 . . 
            . . . . 4 . . . 5 . . . . . . . 
            . . . . 4 . . . . . . 2 . . 2 . 
            . . . . . . . . . . . . . 5 . . 
            . . . 4 4 2 f f f 4 . . . . . . 
            . . 4 4 4 2 4 4 f f 4 . . . . . 
            . 4 4 4 2 2 4 4 4 f 4 4 . 2 . . 
            . 2 2 2 4 4 2 2 5 f 4 2 . . . . 
            . 2 2 4 4 5 4 2 2 4 4 4 . 4 . . 
            . 2 4 4 5 5 4 4 2 2 4 4 . . 4 . 
            . 4 4 4 f 5 4 4 2 4 4 4 2 2 . . 
            . 4 4 4 5 5 4 2 2 4 4 4 . 2 . . 
            . 2 4 5 5 4 4 4 4 4 4 4 2 . 5 . 
            . . 4 4 f f 4 4 4 4 2 . . . . . 
            . . . 4 4 f f 2 4 4 . . . . . . 
            . . . . . . . . 4 . . . . . . . 
            `, SpriteKind.Fireball)
        tiles.placeOnTile(fireball, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runMovementAnimation(
        fireball,
        animation.animationPresets(animation.bobbingRight),
        2000,
        true
        )
        fireball.startEffect(effects.fire, 500)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`door`, function (sprite, location) {
    game.showLongText("CLICK A TO GO ONTO NEXT LEVEL", DialogLayout.Center)
    tiles.setTilemap(tilemap`level2`)
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    Stickdoode.setPosition(9, 85)
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        Killer = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 4 4 4 4 5 5 5 f . . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 e e e 5 5 5 5 f . . 
            . f 5 4 5 e 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 e 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 e 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 e e e 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . . f 5 5 4 4 4 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        Killer,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 4 4 4 4 4 5 5 f . . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 c c c 5 5 5 5 f . . 
            . f 5 4 5 c 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 c 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 c 5 5 5 5 5 5 5 f . . 
            . f 5 4 5 5 c c c 5 5 5 5 f . . 
            . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
            . . f 5 4 4 4 4 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . f 5 5 4 4 4 5 5 f . . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 c c c 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . f 5 4 5 c c c 5 5 5 f . . . 
            . . f 5 4 5 5 5 5 5 5 5 f . . . 
            . . . f 5 4 4 4 5 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 4 4 4 5 f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . f 5 4 c c c 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . f 5 4 c c c 5 5 f . . . . 
            . . . f 5 4 5 5 5 5 5 f . . . . 
            . . . . f 5 4 4 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . f 5 4 c 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . f 5 4 c 5 5 f . . . . . 
            . . . . f 5 4 5 5 5 f . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . f 5 4 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f 5 5 c 4 5 f . . . . 
            . . . . . f 5 5 5 4 5 f . . . . 
            . . . . . f 5 5 5 4 5 f . . . . 
            . . . . . f 5 5 5 4 5 f . . . . 
            . . . . . f 5 5 c 4 5 f . . . . 
            . . . . . f 5 5 5 4 5 f . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 5 4 4 4 5 f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . f 5 5 c c c 4 5 f . . . 
            . . . . f 5 5 5 5 5 4 5 f . . . 
            . . . . f 5 5 5 5 5 4 5 f . . . 
            . . . . f 5 5 5 5 5 4 5 f . . . 
            . . . . f 5 5 c c c 4 5 f . . . 
            . . . . f 5 5 5 5 5 4 5 f . . . 
            . . . . . f 5 5 4 4 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . f 5 5 4 4 4 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . f 5 5 5 c c c 5 4 5 f . . 
            . . . f 5 5 5 5 5 5 5 4 5 f . . 
            . . . f 5 5 5 5 5 5 5 4 5 f . . 
            . . . f 5 5 5 5 5 5 5 4 5 f . . 
            . . . f 5 5 5 c c c 5 4 5 f . . 
            . . . f 5 5 5 5 5 5 5 4 5 f . . 
            . . . . f 5 5 5 4 4 4 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 4 4 4 5 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 5 5 c c c 5 5 4 5 f . 
            . . f 5 5 5 5 5 5 5 c 5 4 5 f . 
            . . f 5 5 5 5 5 5 5 c 5 4 5 f . 
            . . f 5 5 5 5 5 5 5 c 5 4 5 f . 
            . . f 5 5 5 5 c c c 5 5 4 5 f . 
            . . f 5 5 5 5 5 5 5 5 5 4 5 f . 
            . . . f 5 5 5 5 4 4 4 4 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(Killer, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile2`)) {
        myEnemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f . b . . . . . 
            . . f f f f f f f . b . . . . . 
            . . f f f f f f f . b . . . . . 
            . . f 1 f 1 f 1 f . b . . . . . 
            . . f 1 1 1 1 1 f . b . . . . . 
            . . . f f f f f . . b . . . . . 
            . . . . . f . . . e e e . . . . 
            . . . . . f . . . . f . . . . . 
            . . . f f f f f f f f . . . . . 
            . . f . . f . . . . . . . . . . 
            . . f . . f . . . . . . . . . . 
            . . . . f . f . . . . . . . . . 
            . . . f . . . f . . . . . . . . 
            . . f . . . . . f . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(myEnemy, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
        myEnemy.follow(Stickdoode, 70)
        myEnemy.ay = 10000
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile4`)) {
        TP = sprites.create(assets.image`Portal`, SpriteKind.Portal)
        tiles.placeOnTile(TP, value2)
    }
    animation.runImageAnimation(
    TP,
    [img`
        . . . . . . . . . . . . . . . . 
        . 8 . . . . 6 6 6 6 6 . . 6 . . 
        . . . . . 6 9 9 6 8 8 6 6 . . . 
        . . . . 6 8 8 6 9 9 8 8 6 . . . 
        6 . . . 6 8 9 6 6 9 6 8 6 6 . . 
        . 6 . 6 6 6 6 6 6 9 6 6 6 6 . . 
        . . . 6 8 6 6 9 8 6 6 6 6 6 . . 
        . . . 6 8 9 9 9 8 6 9 6 6 6 . . 
        . . . 6 6 8 6 8 8 6 9 8 6 6 . . 
        . . . . 6 6 8 6 6 6 6 8 6 6 8 . 
        . . . . 6 9 8 8 8 8 6 8 6 6 . . 
        6 6 . . 6 6 9 9 9 6 8 6 6 . . . 
        6 . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . 6 6 6 6 6 6 . . . . . 
        . . . 9 . . 8 6 6 . . . . . . . 
        . . 9 . . . . . . . 9 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 6 . . . 9 . 
        . . . . . 6 6 9 9 9 8 6 6 . . . 
        . 8 . . 6 9 8 6 9 8 6 8 6 . . . 
        . 6 . . 6 8 8 6 6 9 9 8 6 6 . . 
        6 . . 6 6 6 6 6 6 9 6 6 6 6 . . 
        . . . 6 6 8 6 8 6 6 6 9 6 6 . . 
        . . . 6 8 9 6 9 8 6 9 9 6 6 . . 
        . . . 6 6 8 9 6 8 6 6 6 6 6 . . 
        . . . . 6 6 8 6 8 6 6 6 8 6 . . 
        . . . . 6 9 8 6 6 8 6 8 8 6 . 8 
        . 6 . . 6 9 9 6 8 6 8 6 6 . . . 
        6 6 . . 6 6 6 8 8 6 6 6 . . . . 
        . . . . . 6 6 6 6 6 6 . . . . . 
        . . 9 . . 8 . 6 6 . . . . . . . 
        . 9 . . . . . . . . . 9 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 8 . . . . 6 6 6 6 6 . . 6 . . 
        . . . . . 6 9 9 6 8 8 6 6 . . . 
        . . . . 6 8 8 6 9 9 8 8 6 . . . 
        6 . . . 6 8 9 6 6 9 6 8 6 6 . . 
        . 6 . 6 6 6 6 6 6 9 6 6 6 6 . . 
        . . . 6 8 6 6 9 8 6 6 6 6 6 . . 
        . . . 6 8 9 9 9 8 6 9 6 6 6 . . 
        . . . 6 6 8 6 8 8 6 9 8 6 6 . . 
        . . . . 6 6 8 6 6 6 6 8 6 6 8 . 
        . . . . 6 9 8 8 8 8 6 8 6 6 . . 
        6 6 . . 6 6 9 9 9 6 8 6 6 . . . 
        6 . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . 6 6 6 6 6 6 . . . . . 
        . . . 9 . . 8 6 6 . . . . . . . 
        . . 9 . . . . . . . 9 . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fireball, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    otherSprite.destroy(effects.ashes, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Stickdoode.y < otherSprite.y) {
        otherSprite.destroy()
        music.buzzer.play()
        info.changeScoreBy(3)
    } else {
        music.zapped.play()
        info.changeLifeBy(-1)
    }
})
let fireball: Sprite = null
let TP: Sprite = null
let myEnemy: Sprite = null
let Killer: Sprite = null
let Stickdoode: Sprite = null
game.showLongText("Welcome to Stickman Adventures", DialogLayout.Bottom)
game.showLongText("Press B button for instructions.", DialogLayout.Bottom)
tiles.setTilemap(tilemap`level3`)
info.setLife(5)
scene.setBackgroundColor(1)
Stickdoode = sprites.create(assets.image`stickman1`, SpriteKind.Player)
controller.moveSprite(Stickdoode, 100, 0)
scene.cameraFollowSprite(Stickdoode)
tiles.placeOnRandomTile(Stickdoode, assets.tile`myTile5`)
for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    Killer = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 4 4 4 4 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 e e e 5 5 5 5 f . . 
        . f 5 4 5 e 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 e 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 e 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 e e e 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 4 4 4 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coin)
    animation.runImageAnimation(
    Killer,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 4 4 4 4 4 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 c c c 5 5 5 5 f . . 
        . f 5 4 5 c 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 c 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 c 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 c c c 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 4 4 4 4 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 5 4 4 4 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 c c c 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 4 5 c c c 5 5 5 f . . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . . 
        . . . f 5 4 4 4 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 4 4 4 5 f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 4 c c c 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . f 5 4 c c c 5 5 f . . . . 
        . . . f 5 4 5 5 5 5 5 f . . . . 
        . . . . f 5 4 4 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 4 c 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . f 5 4 c 5 5 f . . . . . 
        . . . . f 5 4 5 5 5 f . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . f 5 4 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 c 4 5 f . . . . 
        . . . . . f 5 5 5 4 5 f . . . . 
        . . . . . f 5 5 5 4 5 f . . . . 
        . . . . . f 5 5 5 4 5 f . . . . 
        . . . . . f 5 5 c 4 5 f . . . . 
        . . . . . f 5 5 5 4 5 f . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 5 4 4 4 5 f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 c c c 4 5 f . . . 
        . . . . f 5 5 5 5 5 4 5 f . . . 
        . . . . f 5 5 5 5 5 4 5 f . . . 
        . . . . f 5 5 5 5 5 4 5 f . . . 
        . . . . f 5 5 c c c 4 5 f . . . 
        . . . . f 5 5 5 5 5 4 5 f . . . 
        . . . . . f 5 5 4 4 5 f . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . f 5 5 4 4 4 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 c c c 5 4 5 f . . 
        . . . f 5 5 5 5 5 5 5 4 5 f . . 
        . . . f 5 5 5 5 5 5 5 4 5 f . . 
        . . . f 5 5 5 5 5 5 5 4 5 f . . 
        . . . f 5 5 5 c c c 5 4 5 f . . 
        . . . f 5 5 5 5 5 5 5 4 5 f . . 
        . . . . f 5 5 5 4 4 4 5 f . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 4 4 4 4 4 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 c c c 5 5 4 5 f . 
        . . f 5 5 5 5 5 5 5 c 5 4 5 f . 
        . . f 5 5 5 5 5 5 5 c 5 4 5 f . 
        . . f 5 5 5 5 5 5 5 c 5 4 5 f . 
        . . f 5 5 5 5 c c c 5 5 4 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 4 5 f . 
        . . . f 5 5 5 5 4 4 4 4 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(Killer, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value2 of tiles.getTilesByType(assets.tile`myTile2`)) {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f . b . . . . . 
        . . f f f f f f f . b . . . . . 
        . . f f f f f f f . b . . . . . 
        . . f 1 f 1 f 1 f . b . . . . . 
        . . f 1 1 1 1 1 f . b . . . . . 
        . . . f f f f f . . b . . . . . 
        . . . . . f . . . e e e . . . . 
        . . . . . f . . . . f . . . . . 
        . . . f f f f f f f f . . . . . 
        . . f . . f . . . . . . . . . . 
        . . f . . f . . . . . . . . . . 
        . . . . f . f . . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . f . . . . . f . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(myEnemy, value2)
    tiles.setTileAt(value2, assets.tile`transparency16`)
    myEnemy.follow(Stickdoode, 70)
    myEnemy.ay = 10000
}
game.onUpdateInterval(170, function () {
    Stickdoode.setImage(assets.image`stickman1`)
    if (Stickdoode.vx < 0) {
        Stickdoode.image.flipX()
    }
})
game.onUpdate(function () {
    Stickdoode.setImage(img`
        . . . . . f f f f f f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . f 1 1 f 1 f 1 f . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . f 1 f f f f 1 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `)
    if (Stickdoode.vy < 0) {
        Stickdoode.setImage(img`
            . . . . . f f f f f f . . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . f 1 1 f 1 f 1 f . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . f 1 f f f f 1 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . f f f f f f f f f . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . f . . . . . f . . . . . 
            . . . f . . . . . . . f . . . . 
            `)
    } else if (Stickdoode.vy > 0) {
        Stickdoode.setImage(img`
            . . . . . f f f f f f . . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . f 1 1 f 1 f 1 f . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . f 1 f f f f 1 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f . . f . . f . . . . . 
            . . . . f . . f . . f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . f . . . . . f . . . . . 
            . . . . f . . . . . f . . . . . 
            `)
    }
    if ((Stickdoode.isHittingTile(CollisionDirection.Left) || Stickdoode.isHittingTile(CollisionDirection.Right)) && Stickdoode.vy >= 0) {
        Stickdoode.vy = 0
        Stickdoode.ay = 0
        Stickdoode.setImage(img`
            . . . . . f f f f f f . . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . f 1 1 1 1 1 f f . . . . 
            . . . . f 1 1 1 1 1 1 f . . . . 
            . . . . f 1 1 1 1 f f f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f . . . f f . . . 
            . . . . . . . f f f f . . . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        Stickdoode.ay = 200
    }
    if (Stickdoode.vx < 0 || Stickdoode.isHittingTile(CollisionDirection.Left)) {
        Stickdoode.image.flipX()
        Stickdoode.setImage(Stickdoode.image)
    }
})
forever(function () {
    music.setVolume(56)
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playMelody("G A B A C5 F A E ", 200)
})
