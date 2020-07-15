let Diplomatic_War_Coin_Flip = 0
let Diplomacy_Coin_Flip = 0
let Button_Pressed_2 = 0
let Science_Coin_Flip = 0
let BUTTON_PRESSED = 0
let Coin_Flip = 0
let Points = 0
let START_BUTTON_PRESSED = 0
basic.showString("MOBILE ARCADE")
while (START_BUTTON_PRESSED == 0) {
    if (input.buttonIsPressed(Button.B)) {
        START_BUTTON_PRESSED = 1
    }
    if (input.buttonIsPressed(Button.A)) {
        START_BUTTON_PRESSED = 1
        basic.showString("STAR TREK: MICROBIT EDITION")
        music.playMelody("E B C5 A B G A F ", 120)
        for (let index = 0; index < 10; index++) {
            for (let index = 0; index < 4; index++) {
                basic.showLeds(`
                    . . . # #
                    # # . # #
                    . # # # .
                    . . . . .
                    . . . . #
                    `)
                basic.showLeds(`
                    . . . # #
                    # # . # #
                    . # # # .
                    . . . . .
                    . . # . .
                    `)
                basic.showLeds(`
                    . . . # #
                    # # . # #
                    . # # # .
                    . . . . .
                    # . . . .
                    `)
            }
            basic.clearScreen()
            Coin_Flip = randint(1, 4)
            if (Coin_Flip == 1) {
                music.playMelody("B A B A B A B A ", 120)
                basic.showString("SHIP BATTLE")
                BUTTON_PRESSED = 0
                basic.showLeds(`
                    # . . . .
                    # . . . .
                    . . . . .
                    . . . . #
                    . . . . #
                    `)
                if (input.buttonIsPressed(Button.A)) {
                    basic.showLeds(`
                        # # . . .
                        # . . . .
                        . . . . .
                        . . . . #
                        . . . . #
                        `)
                    basic.showLeds(`
                        # # # . .
                        # # . . .
                        # . . . .
                        . . . # #
                        . . . # #
                        `)
                    basic.showLeds(`
                        # # . # .
                        # # . . .
                        # . . # .
                        . . . # #
                        . . . # #
                        `)
                    basic.showLeds(`
                        # # . . #
                        # # . # .
                        # . . . .
                        . . . # #
                        . . . # #
                        `)
                    basic.showLeds(`
                        # # . . .
                        # # # . .
                        # . . . .
                        . . . # #
                        . . . # #
                        `)
                    basic.showLeds(`
                        # . # . .
                        . # . . .
                        # . # . .
                        . . . # #
                        . . . # #
                        `)
                    basic.showLeds(`
                        # . # . .
                        . . . . .
                        # . # . .
                        . . . # #
                        . . . # #
                        `)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . # #
                        . . . # #
                        `)
                    Points += -1
                    BUTTON_PRESSED = 1
                    music.playMelody("C5 B A G F E D C ", 120)
                    basic.showString("YOU MISSED")
                } else {
                    basic.showLeds(`
                        # # . . .
                        # # . . .
                        # . . . .
                        . . . # #
                        . . . # #
                        `)
                    if (input.buttonIsPressed(Button.A)) {
                        basic.showLeds(`
                            # # . . .
                            # # # . .
                            # . . . .
                            . . . # #
                            . . . # #
                            `)
                        basic.showLeds(`
                            # # . . .
                            # # . # .
                            # . . . .
                            . . . # #
                            . . . # #
                            `)
                        basic.showLeds(`
                            # # . . .
                            # # . . .
                            # . . # .
                            . . . # #
                            . . . # #
                            `)
                        basic.showLeds(`
                            # # . . .
                            # # . . .
                            # . # . #
                            . . . # .
                            . . # . #
                            `)
                        basic.showLeds(`
                            # # . . .
                            # # . . .
                            # . # . #
                            . . . . .
                            . . # . #
                            `)
                        basic.showLeds(`
                            # # . . .
                            # # . . .
                            # . . . .
                            . . . . .
                            . . . . .
                            `)
                        Points += 1
                        BUTTON_PRESSED = 1
                        music.playMelody("C D E F G A B C5 ", 120)
                        basic.showString("ENEMY SHIP DESTROYED")
                    } else {
                        basic.showLeds(`
                            # # . . .
                            # # . . .
                            # . . # .
                            . . . # #
                            . . . # #
                            `)
                        basic.showLeds(`
                            # # . . .
                            # # . # .
                            # . . . .
                            . . . # #
                            . . . # #
                            `)
                        basic.showLeds(`
                            # # . . .
                            # # # . .
                            # . . . .
                            . . . # #
                            . . . # #
                            `)
                        basic.showLeds(`
                            # . # . .
                            . # . . .
                            # . # . .
                            . . . # #
                            . . . # #
                            `)
                        basic.showLeds(`
                            # . # . .
                            . . . . .
                            # . # . .
                            . . . # #
                            . . . # #
                            `)
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . # #
                            . . . # #
                            `)
                        Points += -1
                        BUTTON_PRESSED = 1
                        music.playMelody("C5 B A G F E D C ", 120)
                        basic.showString("SHIP DAMADGED")
                    }
                }
            }
            if (Coin_Flip == 2) {
                music.playMelody("F E F E F D C C5 ", 120)
                BUTTON_PRESSED = 0
                basic.showString("SCIENCE OPERATION")
                basic.showLeds(`
                    . . . # #
                    # # . # #
                    . # # # .
                    . . . . .
                    . . . . #
                    `)
                basic.showLeds(`
                    . . . # #
                    # # . # #
                    . # # # .
                    . . . . .
                    . . . # #
                    `)
                basic.showLeds(`
                    . . . # #
                    # # . # #
                    . # # # .
                    . . . . .
                    . . # # #
                    `)
                basic.showLeds(`
                    . . . # #
                    # # . # #
                    . # # # .
                    . . . . .
                    . # # # #
                    `)
                basic.showLeds(`
                    . . . # #
                    # # . # #
                    . # # # .
                    . . . . .
                    # # # # #
                    `)
                Science_Coin_Flip = randint(1, 2)
                while (BUTTON_PRESSED == 0) {
                    if (Science_Coin_Flip == 1) {
                        if (input.buttonIsPressed(Button.A)) {
                            Points += 1
                            music.playMelody("C D E F G A B C5 ", 120)
                            basic.showString("DATA COLLECTED")
                            BUTTON_PRESSED = 1
                        }
                        if (input.buttonIsPressed(Button.B)) {
                            Points += -1
                            music.playMelody("C5 B A G F E D C ", 120)
                            basic.showString("DATA DESTROYED")
                            BUTTON_PRESSED = 1
                        }
                    }
                    if (Science_Coin_Flip == 2) {
                        if (input.buttonIsPressed(Button.A)) {
                            Points += -1
                            music.playMelody("C5 B A G F E D C ", 120)
                            basic.showString("DATA DESTROYED")
                            BUTTON_PRESSED = 1
                        }
                        if (input.buttonIsPressed(Button.B)) {
                            Points += 1
                            music.playMelody("C D E F G A B C5 ", 120)
                            basic.showString("DATA COLLECTED")
                            BUTTON_PRESSED = 1
                        }
                    }
                }
            }
            if (Coin_Flip == 3) {
                music.playMelody("D C D E F E D C ", 120)
                basic.showString("AWAY TEAM")
                basic.showLeds(`
                    . # # # .
                    . . # . .
                    # # # # #
                    . . # . .
                    . # . # .
                    `)
                basic.showLeds(`
                    . # # # .
                    # . # . #
                    . # # # .
                    . . # . .
                    . # . # .
                    `)
                basic.showLeds(`
                    . # # # .
                    . . # . .
                    # # # # #
                    . . # . .
                    . # . # .
                    `)
                basic.showLeds(`
                    . # # # .
                    # . # . #
                    . # # # .
                    . . # . .
                    . # . # .
                    `)
                basic.showLeds(`
                    . # # # .
                    . . # . .
                    # # # # #
                    . . # . .
                    . # . # .
                    `)
                if (input.isGesture(Gesture.Shake)) {
                    basic.showLeds(`
                        . # # # .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . . . .
                        `)
                    basic.showLeds(`
                        . # # # .
                        . . # . .
                        # # # # #
                        . . . . .
                        . . . . .
                        `)
                    basic.showLeds(`
                        . # # # .
                        . . # . .
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                    basic.showLeds(`
                        . # # # .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                    Points += 1
                    music.playMelody("C D E F G A B C5 ", 120)
                    basic.showString("AWAY TEAM BEAMED UP")
                } else {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        `)
                    basic.showLeds(`
                        . . . . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . . . . .
                        `)
                    basic.showLeds(`
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        `)
                    basic.showLeds(`
                        # # # # #
                        # # # # #
                        # # . # #
                        # # # # #
                        # # # # #
                        `)
                    basic.showLeds(`
                        # # # # #
                        # . . . #
                        # . . . #
                        # . . . #
                        # # # # #
                        `)
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                    Points += -1
                    music.playMelody("C5 B A G F E D C ", 120)
                    basic.showString("AWAY TEAM KILLED")
                }
            }
            if (Coin_Flip == 4) {
                music.playMelody("C E G F E C F A ", 120)
                basic.showString("DIPLOMACY MISSION")
                Button_Pressed_2 = 0
                basic.showLeds(`
                    # # . # #
                    # # . # #
                    # . . . #
                    # # # # #
                    # . . . #
                    `)
                basic.showLeds(`
                    # # . # #
                    # # . # #
                    # . # . #
                    # # . # #
                    # . . . #
                    `)
                basic.showLeds(`
                    # # . # #
                    # # . # #
                    # . . . #
                    # # # # #
                    # . . . #
                    `)
                basic.showLeds(`
                    # # . # #
                    # # . # #
                    # . # . #
                    # # . # #
                    # . . . #
                    `)
                basic.showLeds(`
                    # # . # #
                    # # . # #
                    # . . . #
                    # # # # #
                    # . . . #
                    `)
                while (Button_Pressed_2 == 0) {
                    if (input.buttonIsPressed(Button.A)) {
                        Diplomacy_Coin_Flip = randint(1, 2)
                        if (Diplomacy_Coin_Flip == 1) {
                            Points += 2
                            music.playMelody("C D E F G A B C5 ", 120)
                            basic.showString("PROFITABLE ALLIANCE")
                            Button_Pressed_2 = 1
                        }
                        if (Diplomacy_Coin_Flip == 2) {
                            Points += -1
                            music.playMelody("C5 B A G F E D C ", 120)
                            basic.showString("ALLIANCE NON-PROFITABLE")
                            Button_Pressed_2 = 1
                        }
                    }
                    if (input.buttonIsPressed(Button.B)) {
                        Diplomatic_War_Coin_Flip = randint(1, 2)
                        if (Diplomatic_War_Coin_Flip == 1) {
                            Points += 3
                            music.playMelody("C D E F G A B C5 ", 120)
                            basic.showString("WAR SUCCESSFUL")
                            Button_Pressed_2 = 1
                        }
                        if (Diplomatic_War_Coin_Flip == 2) {
                            Points += -2
                            music.playMelody("C5 B A G F E D C ", 120)
                            basic.showString("WAR LOST")
                            Button_Pressed_2 = 1
                        }
                    }
                }
            }
        }
        for (let index = 0; index < 5; index++) {
            basic.clearScreen()
            basic.showNumber(Points)
            basic.showLeds(`
                # . . . .
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # # . . .
                # # . . .
                # . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . # # . .
                . # # . .
                # # . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . # # .
                # . # # .
                # # # . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . # #
                # # . # #
                . # # # .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . #
                . # # . #
                . . # # #
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . # # .
                . . . # #
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . # #
                . . . . #
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . #
                . . . . #
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . # #
                . . . # #
                . . . . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # .
                . . # # .
                . . . # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # . .
                . # # . #
                . . # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # # . . .
                # # . # #
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                # . # # .
                # # # . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . # # . .
                # # . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # . . .
                # . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            if (Points > 1) {
                basic.showString("YOU WIN")
            }
            if (Points <= 0) {
                basic.showString("YOU LOSE")
            }
        }
        basic.clearScreen()
    }
}
