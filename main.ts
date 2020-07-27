/**
 * New Game Here:
 */
let Diplomatic_War_Coin_Flip = 0
let Diplomacy_Coin_Flip = 0
let Button_Pressed_2 = 0
let Science_Coin_Flip = 0
let Points = 0
let BUTTON_PRESSED = 0
let Coin_Flip = 0
let game_choice_button_pressed = 0
let Movie_start_pressed = 0
let START_BUTTON_PRESSED = 0
basic.showString("MICRO COMPUTER")
while (START_BUTTON_PRESSED == 0) {
    if (input.buttonIsPressed(Button.B)) {
        START_BUTTON_PRESSED = 1
        Movie_start_pressed = 0
        basic.showString("Micro Movie")
        while (Movie_start_pressed == 0) {
            if (input.buttonIsPressed(Button.A)) {
                Movie_start_pressed = 1
                basic.showString("Star Trek: The Lost")
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
                basic.showString("Star Trek")
                for (let index = 0; index < 3; index++) {
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
                basic.showLeds(`
                    . . . # .
                    . . # # #
                    . . . # .
                    . . # # #
                    . . . # .
                    `)
                basic.showLeds(`
                    # . . # .
                    # . # # #
                    . . . # .
                    . . # # #
                    . . . # .
                    `)
                basic.showLeds(`
                    # . . # .
                    # . # # #
                    . . . # .
                    . # # # #
                    . . . # .
                    `)
                basic.showLeds(`
                    # . . # .
                    # . # # #
                    . . . # .
                    # . # # #
                    . . . # .
                    `)
                basic.showLeds(`
                    # . . # .
                    # . # # #
                    # . . # .
                    . . # # #
                    . . . # .
                    `)
                basic.showLeds(`
                    # . . # .
                    # . # # #
                    . . . # .
                    . . # # #
                    . . . # .
                    `)
                basic.showLeds(`
                    . . . # .
                    # . # # #
                    # . . # .
                    . . # # #
                    . . . # .
                    `)
                basic.showLeds(`
                    # . . # .
                    # . # # #
                    . . . # .
                    . . # # #
                    . . . # .
                    `)
                basic.showLeds(`
                    . . . # .
                    . . # # #
                    . . . # .
                    . . # # #
                    . . . # .
                    `)
                for (let index = 0; index < 3; index++) {
                    basic.showLeds(`
                        # # . . .
                        # # . # #
                        . # # # .
                        . . . . .
                        # . . . .
                        `)
                    basic.showLeds(`
                        # # . . .
                        # # . # #
                        . # # # .
                        . . . . .
                        . . # . .
                        `)
                    basic.showLeds(`
                        # # . . .
                        # # . # #
                        . # # # .
                        . . . . .
                        . . . . #
                        `)
                }
                for (let index = 0; index < 3; index++) {
                    basic.showLeds(`
                        . . . # .
                        . . # # #
                        . . . # .
                        . . # # #
                        . . . # .
                        `)
                    basic.showLeds(`
                        . . # . .
                        . # # # .
                        . . # . .
                        . # # # .
                        . . # . .
                        `)
                    basic.showLeds(`
                        . # . . .
                        # # # . .
                        . # . . .
                        # # # . .
                        . # . . .
                        `)
                }
                basic.showLeds(`
                    # # . . .
                    # # . # #
                    . # # # .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    # . . . .
                    # . # # .
                    # # # . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . # # . .
                    # # . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    # # . . .
                    # . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    # . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . #
                    . . . . .
                    . . . . #
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . #
                    . . . # #
                    . . . . #
                    . . . # #
                    . . . . #
                    `)
                basic.showLeds(`
                    . . . # .
                    . . # # #
                    . . . # .
                    . . # # #
                    . . . # .
                    `)
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    . . # . .
                    . # # # .
                    . . # . .
                    `)
                basic.showLeds(`
                    . # . . .
                    # # # . .
                    . # . . .
                    # # # . .
                    . # . . .
                    `)
                basic.showLeds(`
                    # . . . .
                    # # . . .
                    # . . . .
                    # # . . .
                    # . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    # . . . .
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
                basic.showLeds(`
                    # . . . .
                    # . . . #
                    . . . . .
                    . . . . #
                    . . . . .
                    `)
                basic.showLeds(`
                    # # . . #
                    # # . # #
                    # . . . #
                    . . . # #
                    . . . . #
                    `)
                basic.showLeds(`
                    # # . . #
                    # # . # #
                    # . . . #
                    . . . # #
                    . . . . #
                    `)
                basic.showLeds(`
                    # # . . #
                    # # . # #
                    # # . . #
                    . . . # #
                    . . . . #
                    `)
                basic.showLeds(`
                    # # . . #
                    # # . # #
                    # . . . #
                    . # . # #
                    . . . . #
                    `)
                basic.showLeds(`
                    # # . . #
                    # # . # #
                    # . . . #
                    . . # # #
                    . . . . #
                    `)
                basic.showLeds(`
                    # # . . #
                    # # . # #
                    # . . . #
                    . . . # #
                    . . . . #
                    `)
                basic.showLeds(`
                    # # . # #
                    # # . . #
                    # . . # #
                    . . . . #
                    . . . . .
                    `)
                basic.showLeds(`
                    # # . . #
                    # # . # #
                    # . . . #
                    . . . # #
                    . . . . #
                    `)
                basic.showLeds(`
                    # # . . .
                    # # . . #
                    # . . . .
                    . . . . #
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
                    # . . . .
                    # . . . .
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
                basic.showString("The End!")
            }
            if (input.buttonIsPressed(Button.B)) {
                Movie_start_pressed = 1
                basic.showString("Mission Impossible: Sting")
                basic.showLeds(`
                    # # # . .
                    # # # . .
                    # # # . .
                    # # # . .
                    # # # . .
                    `)
                basic.showLeds(`
                    # . # . .
                    # # # . .
                    # # # . .
                    # # # . .
                    # # # . .
                    `)
                basic.showLeds(`
                    . # . . .
                    # . # . .
                    # # # . .
                    # # # . .
                    # # # . .
                    `)
                basic.showLeds(`
                    # # # . .
                    . # . . .
                    # . # . .
                    # # # . .
                    # # # . .
                    `)
                basic.showLeds(`
                    . # . . .
                    # # # . .
                    . # . . .
                    # . # . .
                    # # # . .
                    `)
                basic.showLeds(`
                    # # # . .
                    . # . . .
                    # # # . .
                    . # . . .
                    # . # . .
                    `)
                basic.showString("Mission Impossible")
                basic.showLeds(`
                    # . # # #
                    # . . . .
                    # . . . .
                    # . . . .
                    # . . . .
                    `)
                basic.showLeds(`
                    # . . # .
                    # . # # #
                    # . . . .
                    # . . . .
                    # . . . .
                    `)
                basic.showLeds(`
                    # . # # #
                    # . . # .
                    # . # # #
                    # . . . .
                    # . . . .
                    `)
                basic.showLeds(`
                    # . . # .
                    # . # # #
                    # . . # .
                    # . # # #
                    # . . . .
                    `)
                basic.showLeds(`
                    # . # . #
                    # . . # .
                    # . # # #
                    # . . # .
                    # . # # #
                    `)
                basic.showLeds(`
                    # . . . .
                    # . # . #
                    # . . # .
                    # . # # #
                    # . . # .
                    `)
                basic.showLeds(`
                    # . . . .
                    # . . . .
                    # . # . #
                    # . . # .
                    # . # # #
                    `)
                basic.showLeds(`
                    # . . . .
                    # . . . .
                    # . . . .
                    # . # . #
                    # . . # .
                    `)
                basic.showLeds(`
                    # . . . .
                    # . . . .
                    # . . . .
                    # . . . .
                    # . # . #
                    `)
                basic.showLeds(`
                    # . . . .
                    # . . . .
                    # . . . .
                    # . . . .
                    # . . . .
                    `)
                basic.showLeds(`
                    . . # # #
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . # .
                    . . # # #
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . # # # #
                    . . . # .
                    . . # # #
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . # . # .
                    . # # # #
                    . . . # .
                    . . # # #
                    . . . . .
                    `)
                basic.showLeds(`
                    . # # . #
                    . # . # .
                    . # # # #
                    . . . # .
                    . . # # #
                    `)
                basic.showLeds(`
                    . . . # .
                    . . . # .
                    . . . # .
                    . # . # .
                    . # # # #
                    `)
                basic.showLeds(`
                    . . . # .
                    . . . # .
                    # # # # .
                    . # . # .
                    . # # # .
                    `)
                basic.showLeds(`
                    . # # # #
                    . . # . #
                    . # # # #
                    . . # . .
                    . # . # .
                    `)
                basic.showLeds(`
                    . # # # #
                    . . # . #
                    . # # # .
                    . . # . .
                    . # . # .
                    `)
                basic.showLeds(`
                    . # # # #
                    . . # . .
                    . # # # .
                    . . # . .
                    . # . # .
                    `)
                basic.showLeds(`
                    . # # # .
                    . . # . .
                    . # # # .
                    . . # . .
                    . # . # .
                    `)
                basic.showLeds(`
                    # # # . .
                    . # . # #
                    # # # # .
                    . # . . .
                    # . # . .
                    `)
                basic.showLeds(`
                    # # . . .
                    # . # # .
                    # # # . .
                    # . . . .
                    . # . . .
                    `)
                basic.showLeds(`
                    # . . . .
                    . # # . .
                    # # . . .
                    . . . . .
                    # . . . .
                    `)
                basic.showLeds(`
                    # . . . .
                    . # # # .
                    # # . . .
                    . . . . .
                    # . . . .
                    `)
                basic.showLeds(`
                    # . . . .
                    . # # . #
                    # # . . .
                    . . . . .
                    # . . . .
                    `)
                basic.showLeds(`
                    . . # # #
                    # . . # .
                    . . . # #
                    . . # # .
                    . . . . #
                    `)
                basic.showLeds(`
                    . . # # #
                    . # . # .
                    . . . # #
                    . . # # .
                    . . . . #
                    `)
                basic.showLeds(`
                    . . # # #
                    . . # # .
                    . . . # #
                    . . # # .
                    . . . . #
                    `)
                basic.showLeds(`
                    . . . # #
                    . # . # #
                    . . # . .
                    # # . # .
                    . # . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # . # . #
                    . # # # #
                    # . # . #
                    `)
                basic.showString("The End")
            }
        }
    }
    if (input.isGesture(Gesture.Shake)) {
        START_BUTTON_PRESSED = 1
        for (let index = 0; index < 2; index++) {
            basic.clearScreen()
            basic.showString("Heading:")
            basic.clearScreen()
            input.calibrateCompass()
            basic.clearScreen()
            basic.showNumber(input.compassHeading())
            basic.clearScreen()
            basic.showString("Temperature")
            basic.clearScreen()
            basic.showNumber(input.temperature() * 1.8 + 32)
            basic.clearScreen()
            basic.showString("Light:")
            basic.clearScreen()
            basic.showNumber(input.lightLevel())
            basic.clearScreen()
            basic.showString("Time:")
            basic.clearScreen()
            basic.showNumber(Math.round(input.runningTime() / 1000))
            basic.clearScreen()
            basic.showString("Force:")
            basic.clearScreen()
            basic.showNumber(input.magneticForce(Dimension.X))
            basic.clearScreen()
        }
    }
    if (input.buttonIsPressed(Button.A)) {
        game_choice_button_pressed = 0
        while (game_choice_button_pressed == 0) {
            if (input.buttonIsPressed(Button.B)) {
                game_choice_button_pressed = 1
                basic.showString("Tokyo Night")
                for (let index = 0; index < 10; index++) {
                	
                }
            }
            if (input.buttonIsPressed(Button.A)) {
                START_BUTTON_PRESSED = 1
                basic.showString("STAR TREK: MICROBIT EDITION")
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
                                basic.showString("SHIP DAMADGED")
                            }
                        }
                    }
                    if (Coin_Flip == 2) {
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
                                    basic.showString("DATA COLLECTED")
                                    BUTTON_PRESSED = 1
                                }
                                if (input.buttonIsPressed(Button.B)) {
                                    Points += -1
                                    basic.showString("DATA DESTROYED")
                                    BUTTON_PRESSED = 1
                                }
                            }
                            if (Science_Coin_Flip == 2) {
                                if (input.buttonIsPressed(Button.A)) {
                                    Points += -1
                                    basic.showString("DATA DESTROYED")
                                    BUTTON_PRESSED = 1
                                }
                                if (input.buttonIsPressed(Button.B)) {
                                    Points += 1
                                    basic.showString("DATA COLLECTED")
                                    BUTTON_PRESSED = 1
                                }
                            }
                        }
                    }
                    if (Coin_Flip == 3) {
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
                            basic.showString("AWAY TEAM KILLED")
                        }
                    }
                    if (Coin_Flip == 4) {
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
                                    basic.showString("PROFITABLE ALLIANCE")
                                    Button_Pressed_2 = 1
                                }
                                if (Diplomacy_Coin_Flip == 2) {
                                    Points += -1
                                    basic.showString("ALLIANCE NON-PROFITABLE")
                                    Button_Pressed_2 = 1
                                }
                            }
                            if (input.buttonIsPressed(Button.B)) {
                                Diplomatic_War_Coin_Flip = randint(1, 2)
                                if (Diplomatic_War_Coin_Flip == 1) {
                                    Points += 3
                                    basic.showString("WAR SUCCESSFUL")
                                    Button_Pressed_2 = 1
                                }
                                if (Diplomatic_War_Coin_Flip == 2) {
                                    Points += -2
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
    }
}
basic.showString("MOBILE TOOL CODED BY: Jonathan Gordon")
basic.showString("STAR TREK: INSPIRED BY: Star Trek by Gene Roddenberry")
basic.showString("PROGRAM CODED USING: Microsoft Make-Code for micro:bit ")
basic.showString("THANK YOU FOR USING!")
