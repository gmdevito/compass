input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("B A G F G A B C5 ", 120)
        basic.showIcon(IconNames.StickFigure)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("C5 B A G F G A B ", 120)
        basic.showIcon(IconNames.StickFigure)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `)
    }
})
