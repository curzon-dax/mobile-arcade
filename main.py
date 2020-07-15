def on_button_pressed_a():
    global Coin_Flip, BUTTON_PRESSED, Points, Button_Pressed, Science_Coin_Flip, Button_Pressed_2, Diplomacy_Coin_Flip, Diplomatic_War_Coin_Flip
    basic.show_string("STAR TREK THE GAME: MICROBIT EDITION")
    for index in range(10):
        for index2 in range(4):
            basic.show_leds("""
                . . . # #
                # # . # #
                . # # # .
                . . . . .
                . . . . #
                """)
            basic.show_leds("""
                . . . # #
                # # . # #
                . # # # .
                . . . . .
                . . # . .
                """)
            basic.show_leds("""
                . . . # #
                # # . # #
                . # # # .
                . . . . .
                # . . . .
                """)
        basic.clear_screen()
        Coin_Flip = randint(1, 4)
        if Coin_Flip == 1:
            music.play_melody("B A B A B A B A ", 120)
            basic.show_string("SHIP BATTLE")
            BUTTON_PRESSED = 0
            basic.show_leds("""
                # . . . .
                # . . . .
                . . . . .
                . . . . #
                . . . . #
                """)
            if input.button_is_pressed(Button.A):
                basic.show_leds("""
                    # # . . .
                    # . . . .
                    . . . . .
                    . . . . #
                    . . . . #
                    """)
                basic.show_leds("""
                    # # # . .
                    # # . . .
                    # . . . .
                    . . . # #
                    . . . # #
                    """)
                basic.show_leds("""
                    # # . # .
                    # # . . .
                    # . . # .
                    . . . # #
                    . . . # #
                    """)
                basic.show_leds("""
                    # # . . #
                    # # . # .
                    # . . . .
                    . . . # #
                    . . . # #
                    """)
                basic.show_leds("""
                    # # . . .
                    # # # . .
                    # . . . .
                    . . . # #
                    . . . # #
                    """)
                basic.show_leds("""
                    # . # . .
                    . # . . .
                    # . # . .
                    . . . # #
                    . . . # #
                    """)
                basic.show_leds("""
                    # . # . .
                    . . . . .
                    # . # . .
                    . . . # #
                    . . . # #
                    """)
                basic.show_leds("""
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . # #
                    . . . # #
                    """)
                Points += -1
                BUTTON_PRESSED = 1
                music.play_melody("C5 B A G F E D C ", 120)
                basic.show_string("YOU MISSED")
            else:
                basic.show_leds("""
                    # # . . .
                    # # . . .
                    # . . . .
                    . . . # #
                    . . . # #
                    """)
                if input.button_is_pressed(Button.A):
                    basic.show_leds("""
                        # # . . .
                        # # # . .
                        # . . . .
                        . . . # #
                        . . . # #
                        """)
                    basic.show_leds("""
                        # # . . .
                        # # . # .
                        # . . . .
                        . . . # #
                        . . . # #
                        """)
                    basic.show_leds("""
                        # # . . .
                        # # . . .
                        # . . # .
                        . . . # #
                        . . . # #
                        """)
                    basic.show_leds("""
                        # # . . .
                        # # . . .
                        # . # . #
                        . . . # .
                        . . # . #
                        """)
                    basic.show_leds("""
                        # # . . .
                        # # . . .
                        # . # . #
                        . . . . .
                        . . # . #
                        """)
                    basic.show_leds("""
                        # # . . .
                        # # . . .
                        # . . . .
                        . . . . .
                        . . . . .
                        """)
                    Points += 1
                    BUTTON_PRESSED = 1
                    music.play_melody("C D E F G A B C5 ", 120)
                    basic.show_string("ENEMY SHIP DESTROYED")
                else:
                    basic.show_leds("""
                        # # . . .
                        # # . . .
                        # . . # .
                        . . . # #
                        . . . # #
                        """)
                    basic.show_leds("""
                        # # . . .
                        # # . # .
                        # . . . .
                        . . . # #
                        . . . # #
                        """)
                    basic.show_leds("""
                        # # . . .
                        # # # . .
                        # . . . .
                        . . . # #
                        . . . # #
                        """)
                    basic.show_leds("""
                        # . # . .
                        . # . . .
                        # . # . .
                        . . . # #
                        . . . # #
                        """)
                    basic.show_leds("""
                        # . # . .
                        . . . . .
                        # . # . .
                        . . . # #
                        . . . # #
                        """)
                    basic.show_leds("""
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . # #
                        . . . # #
                        """)
                    Points += -1
                    BUTTON_PRESSED = 1
                    music.play_melody("C5 B A G F E D C ", 120)
                    basic.show_string("SHIP DAMADGED")
        if Coin_Flip == 2:
            music.play_melody("F E F E F D C C5 ", 120)
            Button_Pressed = 0
            basic.show_string("SCIENCE OPERATION")
            basic.show_leds("""
                . . . # #
                # # . # #
                . # # # .
                . . . . .
                . . . . #
                """)
            basic.show_leds("""
                . . . # #
                # # . # #
                . # # # .
                . . . . .
                . . . # #
                """)
            basic.show_leds("""
                . . . # #
                # # . # #
                . # # # .
                . . . . .
                . . # # #
                """)
            basic.show_leds("""
                . . . # #
                # # . # #
                . # # # .
                . . . . .
                . # # # #
                """)
            basic.show_leds("""
                . . . # #
                # # . # #
                . # # # .
                . . . . .
                # # # # #
                """)
            Science_Coin_Flip = randint(1, 2)
            while Button_Pressed == 0:
                if Science_Coin_Flip == 1:
                    if input.button_is_pressed(Button.A):
                        Points += 1
                        music.play_melody("C D E F G A B C5 ", 120)
                        basic.show_string("DATA COLLECTED")
                        Button_Pressed = 1
                    if input.button_is_pressed(Button.B):
                        Points += -1
                        music.play_melody("C5 B A G F E D C ", 120)
                        basic.show_string("DATA DESTROYED")
                        Button_Pressed = 1
                if Science_Coin_Flip == 2:
                    if input.button_is_pressed(Button.A):
                        Points += -1
                        music.play_melody("C5 B A G F E D C ", 120)
                        basic.show_string("DATA DESTROYED")
                        Button_Pressed = 1
                    if input.button_is_pressed(Button.B):
                        Points += 1
                        music.play_melody("C D E F G A B C5 ", 120)
                        basic.show_string("DATA COLLECTED")
                        Button_Pressed = 1
        if Coin_Flip == 3:
            music.play_melody("D C D E F E D C ", 120)
            basic.show_string("AWAY TEAM")
            basic.show_leds("""
                . # # # .
                . . # . .
                # # # # #
                . . # . .
                . # . # .
                """)
            basic.show_leds("""
                . # # # .
                # . # . #
                . # # # .
                . . # . .
                . # . # .
                """)
            basic.show_leds("""
                . # # # .
                . . # . .
                # # # # #
                . . # . .
                . # . # .
                """)
            basic.show_leds("""
                . # # # .
                # . # . #
                . # # # .
                . . # . .
                . # . # .
                """)
            basic.show_leds("""
                . # # # .
                . . # . .
                # # # # #
                . . # . .
                . # . # .
                """)
            if input.is_gesture(Gesture.SHAKE):
                basic.show_leds("""
                    . # # # .
                    . . # . .
                    # # # # #
                    . . # . .
                    . . . . .
                    """)
                basic.show_leds("""
                    . # # # .
                    . . # . .
                    # # # # #
                    . . . . .
                    . . . . .
                    """)
                basic.show_leds("""
                    . # # # .
                    . . # . .
                    . . . . .
                    . . . . .
                    . . . . .
                    """)
                basic.show_leds("""
                    . # # # .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    """)
                basic.show_leds("""
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    """)
                Points += 1
                music.play_melody("C D E F G A B C5 ", 120)
                basic.show_string("AWAY TEAM BEAMED UP")
            else:
                basic.show_leds("""
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    """)
                basic.show_leds("""
                    . . . . .
                    . # # # .
                    . # # # .
                    . # # # .
                    . . . . .
                    """)
                basic.show_leds("""
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    """)
                basic.show_leds("""
                    # # # # #
                    # # # # #
                    # # . # #
                    # # # # #
                    # # # # #
                    """)
                basic.show_leds("""
                    # # # # #
                    # . . . #
                    # . . . #
                    # . . . #
                    # # # # #
                    """)
                basic.show_leds("""
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    """)
                Points += -1
                music.play_melody("C5 B A G F E D C ", 120)
                basic.show_string("AWAY TEAM KILLED")
        if Coin_Flip == 4:
            music.play_melody("C E G F E C F A ", 120)
            basic.show_string("DIPLOMACY MISSION")
            Button_Pressed_2 = 0
            basic.show_leds("""
                # # . # #
                # # . # #
                # . . . #
                # # # # #
                # . . . #
                """)
            basic.show_leds("""
                # # . # #
                # # . # #
                # . # . #
                # # . # #
                # . . . #
                """)
            basic.show_leds("""
                # # . # #
                # # . # #
                # . . . #
                # # # # #
                # . . . #
                """)
            basic.show_leds("""
                # # . # #
                # # . # #
                # . # . #
                # # . # #
                # . . . #
                """)
            basic.show_leds("""
                # # . # #
                # # . # #
                # . . . #
                # # # # #
                # . . . #
                """)
            while Button_Pressed_2 == 0:
                if input.button_is_pressed(Button.A):
                    Diplomacy_Coin_Flip = randint(1, 2)
                    if Diplomacy_Coin_Flip == 1:
                        Points += 2
                        music.play_melody("C D E F G A B C5 ", 120)
                        basic.show_string("PROFITABLE ALLIANCE")
                        Button_Pressed_2 = 1
                    if Diplomacy_Coin_Flip == 2:
                        Points += -1
                        music.play_melody("C5 B A G F E D C ", 120)
                        basic.show_string("ALLIANCE NON-PROFITABLE")
                        Button_Pressed_2 = 1
                if input.button_is_pressed(Button.AB):
                    music.play_melody("C D E F G A B C5 ", 120)
                    Points += 1
                    basic.show_string("NEUTRALITY ESTABLISHED")
                    Button_Pressed_2 = 1
                if input.button_is_pressed(Button.B):
                    Diplomatic_War_Coin_Flip = randint(1, 2)
                    if Diplomatic_War_Coin_Flip == 1:
                        Points += 3
                        music.play_melody("C D E F G A B C5 ", 120)
                        basic.show_string("WAR SUCCESSFUL")
                        Button_Pressed_2 = 1
                    if Diplomatic_War_Coin_Flip == 2:
                        Points += -2
                        music.play_melody("C5 B A G F E D C ", 120)
                        basic.show_string("WAR LOST")
                        Button_Pressed_2 = 1
    for index3 in range(5):
        basic.clear_screen()
        basic.show_number(Points)
        basic.show_leds("""
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            # # . . .
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # # . .
            . # # . .
            # # . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . # # .
            # . # # .
            # # # . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . # #
            # # . # #
            . # # # .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . #
            . # # . #
            . . # # #
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . # # .
            . . . # #
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . # #
            . . . . #
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . # #
            . . . # #
            . . . . #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # # .
            . . # # .
            . . . # #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . # # . .
            . # # . #
            . . # # #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            # # . . .
            # # . # #
            . # # # .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            # . . . .
            # . # # .
            # # # . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . # # . .
            # # . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            # . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        if Points > 1:
            basic.show_string("YOU WIN")
        if Points <= 0:
            basic.show_string("YOU LOSE")
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_string("" + str((Points)))
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Coin_Flip_RPG
    basic.show_string("DRAGON SLAYER: MICROBIT EDITION")
    Coin_Flip_RPG = randint(1, 4)
    if Coin_Flip_RPG == 1:
        basic.show_string("DRACO IGNIS")
    if Coin_Flip_RPG == 2:
        basic.show_string("DRACO AQUA")
    if Coin_Flip_RPG == 3:
        basic.show_string("DRACO TERRA")
    if Coin_Flip_RPG == 4:
        basic.show_string("DRACO CAELI")
input.on_button_pressed(Button.B, on_button_pressed_b)

Coin_Flip_RPG = 0
Diplomatic_War_Coin_Flip = 0
Diplomacy_Coin_Flip = 0
Button_Pressed_2 = 0
Science_Coin_Flip = 0
Button_Pressed = 0
BUTTON_PRESSED = 0
Coin_Flip = 0
Points = 0
Points = 0