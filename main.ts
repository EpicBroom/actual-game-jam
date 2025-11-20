namespace SpriteKind {
    export const portal = SpriteKind.create()
}
function setWorld1 () {
    world = 1
    scene.setBackgroundImage(img`
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333353333333333333333333333333333333333333333333333333333333333333333333333333333333533333333333
        3333333333333333333333353333333333333333333333333333333333333333333555333333333333333333333333333333333533333333333333333333333333333333333333333335553333333333
        3333333333333333333333555333333333333333333333333333333333333333335555533333333333333333333333333333335553333333333333333333333333333333333333333355555333333333
        3333333333333333333333353333333333333333333333333333333333333333333555333333333333333333333333333333333533333333333333333333333333333333333333333335553333333333
        3333333333333333333333333333333333333333333333333111333333333333333535333333333333333333333333333333333333333333333333333333333331113333333333333335353333333333
        33333d11d3333333333333333333333333333333333333331111133333333333333333333333333333333d11d33333333333333333333333333333333333333311111333333333333333333333333333
        33331111113333333333333333333333333333333331133111111d3333333333333333333333333333331111113333333333333333333333333333333331133111111d33333333333333333333333333
        3331111111d33333333333333333333333333333331111d1111111133333333333333333333333333331111111d33333333333333333333333333333331111d111111113333333333333333333333333
        33311111111d11333333333333333333333333333d1111111111111d33333333333333333333333333311111111d11333333333333333333333333333d1111111111111d333333333333333333333333
        331111111111111333333333333333333333333d11111111111111111d3333333333333333333333331111111111111333333333333333333333333d11111111111111111d3333333333333333333333
        1d1111111111111d31113333333333333333333333333333333333333333333366633333333333311d1111111111111d3111333333333333333333333333333333333333333333336663333333333331
        1111111111111111111113333333333333333333333333333333333333333336776633333333331111111111111111111111133333333333333333333333333333333333333333367766333333333311
        1111111111166666111113333333333333533333333333333333333333333366777633333333331111111111111666661111133333333333335333333333333333333333333333667776333333333311
        111111111166777661111111d333333335553333333333333333333333333367777663333333d111111111111166777661111111d333333335553333333333333333333333333367777663333333d111
        3333333336677777663333333333333355555333333333333333333333333367777763333333333333333333366777776633333333333333555553333333333333333333333333677777633333333333
        3333333336777777763333333333333335553333333333333333333333333367777763333333333333333333367777777633333333333333355533333333333333333333333333677777633333333333
        3333333366777777766333333333333335353333333333333333333333333367777763333333333333333333667777777663333333333333353533333333333333333333333333677777633333333333
        3333333367777777776333333333333333333333333333333335333333333367777763333333333333333333677777777763333333333333333333333333333333353333333333677777633333333333
        3333333367777777776333366333333333333333333333333355533333333367777763333333333333333333677777777763333663333333333333333333333333555333333333677777633333333333
        3333333367777777776333677633333333333333333333333335333336633367777763333333333333333333677777777763336776333333333333333333333333353333366333677777633333333333
        3333333367777777776336677663333333333333333333333333333367763367777763333333333333333333677777777763366776633333333333333333333333333333677633677777633333333333
        3333333367777777776336777763333333333333333333333333333367763367777763333333333333333333677777777763367777633333333333333333333333333333677633677777633333333333
        3333333367777777776336777763333333333333333333333333333367763367777763333333333333333333677777777763367777633333333333333333333333333333677633677777633333333333
        6666333367777777776666777763333333333666666333333333333367763367777763333333333666663333677777777766667777633333333336666663333333333333677633677777633333333336
        7776633367777777777777777763333333336666666633333333333367763367777763336633336677766333677777777777777777633333333366666666333333333333677633677777633366333366
        7777633367777777777777777633333333366666666663333333333367763367777763367663366777776333677777777777777776333333333666666666633333333333677633677777633676633667
        7777763367777777777777776633333333366666666663333333333367763367777763367763367777777633677777777777777766333333333666666666633333333333677633677777633677633677
        7777763367777777776666666333333333666666666663333333333367763367777763367763367777777633677777777766666663333333336666666666633333333333677633677777633677633677
        7777776367777777776333333333333333666666666663333333333367776667777763677763367777777763677777777763333333333333336666666666633333333333677766677777636777633677
        7777776367777777776333333333333333666666666666333333333366777777777766677766667777777763677777777763333333333333336666666666663333333333667777777777666777666677
        7777776367777777776333666666666333666666666666333333333336677777777776677666677777777763677777777763336666666663336666666666663333333333366777777777766776666777
        7777776667777777776366677777776663666666666666333333333333666677777777777666677777777766677777777763666777777766636666666666663333333333336666777777777776666777
        7777776667777777776667777777777766666666666666333366666633333677777777777666677777777766677777777766677777777777666666666666663333666666333336777777777776666777
        7777776667777777776677777777777776666666666666366677777666333677777777776666677777777766677777777766777777777777766666666666663666777776663336777777777766666777
        7777777667777777776777777777777777666666666666667777777776633677777766666666677777777776677777777767777777777777776666666666666677777777766336777777666666666777
        7777777667777777766777777777777777666666666666677777777777663677777766666666677777777776677777777667777777777777776666666666666777777777776636777777666666666777
        7777777667777777767777777777777777766666666666777777777777766677777766666666677777777776677777777677777777777777777666666666667777777777777666777777666666666777
        7777777667777777667777777777777777766666666666777777777777766677777766666666677777777776677777776677777777777777777666666666667777777777777666777777666666666777
        7777777667777777677777777777777777776666666666777777777777766677777766666666677777777776677777776777777777777777777766666666667777777777777666777777666666666777
        7777777667777733333333777777777777776666666666777777773333333377777766666666677777777776677777333333337777777777777766666666667777777733333333777777666666666777
        777777766777333dddddd3333777777777776666666666777777333dddddd3333777666666666777777777766777333dddddd3333777777777776666666666777777333dddddd3333777666666666777
        7777777666333ddddddddddd33377777777766666666667777333ddddddddddd33376666666667777777777666333ddddddddddd33377777777766666666667777333ddddddddddd3337666666666777
        77777776633ddddddddddddddd3337777777666666666677733ddddddddddddddd3336666666677777777776633ddddddddddddddd3337777777666666666677733ddddddddddddddd33366666666777
        7777777333dddddddddddddddddd3333777766666666666333dddddddddddddddddd3333666667777777777333dddddddddddddddddd3333777766666666666333dddddddddddddddddd333366666777
        33777333ddddddddddddddddddddddd33333333333666333ddddddddddddddddddddddd33333333333777333ddddddddddddddddddddddd33333333333666333ddddddddddddddddddddddd333333333
        d33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33dddddd33333ddddddddddddddddddddddddddd33ddddd
        ddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333dddddddddd33ddddddddddddddddddddddddd333ddddddd
        ddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33ddddddddddddddd33ddddddddddddddddddddd33dddddddddd
        ddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33ddddddddddddddddddd333dddddddddddddddd33dddddddddddd
        dddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddddddddddddd333ddddddddddd33dddddddddddddd
        dddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddddddddddddddd333ddddddd33dddddddddddddddd
        dddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddddddddddddddddd333ddd33dddddddddddddddddd
        dddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level2world1`)
    } else if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level1world1`)
    } else {
    	
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (world == 1) {
        portalRay = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mainCharacter, 500, 0)
    } else {
        portalRay = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 4 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mainCharacter, 500, 0)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    levelTransition = 1
    level += 1
    load_world()
    levelTransition = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (world == 1) {
        portalRay = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mainCharacter, -500, 0)
    } else {
        portalRay = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mainCharacter, -500, 0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal, function (sprite, otherSprite) {
    if (touchingPortal == 0) {
        touchingPortal = 1
        load_world()
        pauseUntil(() => !(mainCharacter.overlapsWith(PortalBoundary)))
        touchingPortal = 0
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
function load_world () {
    if (levelTransition == 0) {
        if (world == 1) {
            setWorld2()
        } else {
            setWorld1()
        }
        if (portalOrientation == 0) {
            if (world == 1) {
                PortalBoundary.setImage(img`
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    `)
            } else {
                PortalBoundary.setImage(img`
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    `)
            }
        } else {
            if (world == 1) {
                PortalBoundary.setImage(img`
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    `)
            } else {
                PortalBoundary.setImage(img`
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    `)
            }
        }
    } else {
        setWorld1()
        tiles.placeOnTile(mainCharacter, tiles.getTileLocation(1, 11))
        scaling.scaleToPercent(PortalBoundary, 0, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }
}
scene.onHitWall(SpriteKind.Projectile, function (sprite2, location) {
    if (!(tiles.tileAtLocationEquals(location, sprites.dungeon.floorLight0))) {
        scaling.scaleToPercent(PortalBoundary, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        if (portalRay.isHittingTile(CollisionDirection.Left)) {
            tiles.placeOnTile(PortalBoundary, tiles.getTileLocation(location.column + 1, location.row))
            if (world == 1) {
                PortalBoundary.setImage(img`
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    8 . . . . . . . . . . . . . . . 
                    `)
            } else {
                PortalBoundary.setImage(img`
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    4 . . . . . . . . . . . . . . . 
                    `)
            }
            portalOrientation = 0
        } else {
            tiles.placeOnTile(PortalBoundary, tiles.getTileLocation(location.column - 1, location.row))
            if (world == 1) {
                PortalBoundary.setImage(img`
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    . . . . . . . . . . . . . . . 8 
                    `)
            } else {
                PortalBoundary.setImage(img`
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    . . . . . . . . . . . . . . . 4 
                    `)
            }
            portalOrientation = 1
        }
    }
})
function setWorld2 () {
    world = 2
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffff
        fffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffff222ffffffffff
        ffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffff22222fffffffff
        fffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffff222ffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffdddfffffffffffffff2f2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddfffffffffffffff2f2ffffffffff
        fffffddddfffffffffffffffffffffffffffffffffffffffdddddffffffffffffffffffffffffffffffffddddfffffffffffffffffffffffffffffffffffffffdddddfffffffffffffffffffffffffff
        ffffddddddfffffffffffffffffffffffffffffffffddffdddddddffffffffffffffffffffffffffffffddddddfffffffffffffffffffffffffffffffffddffdddddddffffffffffffffffffffffffff
        fffddddddddfffffffffffffffffffffffffffffffdddddddddddddffffffffffffffffffffffffffffddddddddfffffffffffffffffffffffffffffffdddddddddddddfffffffffffffffffffffffff
        fffdddddddddddfffffffffffffffffffffffffffdddddddddddddddfffffffffffffffffffffffffffdddddddddddfffffffffffffffffffffffffffdddddddddddddddffffffffffffffffffffffff
        ffdddddddddddddffffffffffffffffffffffffdddddddddddddddddddffffffffffffffffffffffffdddddddddddddffffffffffffffffffffffffdddddddddddddddddddffffffffffffffffffffff
        ddddddddddddddddfdddffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffdddddddddddddddddfdddffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffd
        dddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffff75577ffffffffffdddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffff75577ffffffffffdd
        ddddddddddd77777dddddfffffffffffff2fffffffffffffffffffffffffff775557ffffffffffddddddddddddd77777dddddfffffffffffff2fffffffffffffffffffffffffff775557ffffffffffdd
        dddddddddd7755577ddddddddffffffff222ffffffffffffffffffffffffff7555577fffffffdddddddddddddd7755577ddddddddffffffff222ffffffffffffffffffffffffff7555577fffffffdddd
        fffffffff775555577ffffffffffffff22222fffffffffffffffffffffffff7555557ffffffffffffffffffff775555577ffffffffffffff22222fffffffffffffffffffffffff7555557fffffffffff
        fffffffff755555557fffffffffffffff222ffffffffffffffffffffffffff7555557ffffffffffffffffffff755555557fffffffffffffff222ffffffffffffffffffffffffff7555557fffffffffff
        ffffffff77555555577ffffffffffffff2f2ffffffffffffffffffffffffff7555557fffffffffffffffffff77555555577ffffffffffffff2f2ffffffffffffffffffffffffff7555557fffffffffff
        ffffffff75555555557ffffffffffffffffffffffffffffffff2ffffffffff7555557fffffffffffffffffff75555555557ffffffffffffffffffffffffffffffff2ffffffffff7555557fffffffffff
        ffffffff75555555557ffff77fffffffffffffffffffffffff222fffffffff7555557fffffffffffffffffff75555555557ffff77fffffffffffffffffffffffff222fffffffff7555557fffffffffff
        ffffffff75555555557fff7557fffffffffffffffffffffffff2fffff77fff7555557fffffffffffffffffff75555555557fff7557fffffffffffffffffffffffff2fffff77fff7555557fffffffffff
        ffffffff75555555557ff775577fffffffffffffffffffffffffffff7557ff7555557fffffffffffffffffff75555555557ff775577fffffffffffffffffffffffffffff7557ff7555557fffffffffff
        ffffffff75555555557ff755557fffffffffffffffffffffffffffff7557ff7555557fffffffffffffffffff75555555557ff755557fffffffffffffffffffffffffffff7557ff7555557fffffffffff
        ffffffff75555555557ff755557fffffffffffffffffffffffffffff7557ff7555557fffffffffffffffffff75555555557ff755557fffffffffffffffffffffffffffff7557ff7555557fffffffffff
        7777ffff7555555555777755557ffffffffff777777fffffffffffff7557ff7555557ffffffffff77777ffff7555555555777755557ffffffffff777777fffffffffffff7557ff7555557ffffffffff7
        55577fff7555555555555555557fffffffff77777777ffffffffffff7557ff7555557fff77ffff7755577fff7555555555555555557fffffffff77777777ffffffffffff7557ff7555557fff77ffff77
        55557fff755555555555555557fffffffff7777777777fffffffffff7557ff7555557ff7577ff77555557fff755555555555555557fffffffff7777777777fffffffffff7557ff7555557ff7577ff775
        555557ff755555555555555577fffffffff7777777777fffffffffff7557ff7555557ff7557ff755555557ff755555555555555577fffffffff7777777777fffffffffff7557ff7555557ff7557ff755
        555557ff75555555557777777fffffffff77777777777fffffffffff7557ff7555557ff7557ff755555557ff75555555557777777fffffffff77777777777fffffffffff7557ff7555557ff7557ff755
        5555557f75555555557fffffffffffffff77777777777fffffffffff7555777555557f75557ff7555555557f75555555557fffffffffffffff77777777777fffffffffff7555777555557f75557ff755
        5555557f75555555557fffffffffffffff777777777777ffffffffff7755555555557775557777555555557f75555555557fffffffffffffff777777777777ffffffffff775555555555777555777755
        5555557f75555555557fff777777777fff777777777777fffffffffff775555555555775577775555555557f75555555557fff777777777fff777777777777fffffffffff77555555555577557777555
        5555557775555555557f7775555555777f777777777777ffffffffffff77775555555555577775555555557775555555557f7775555555777f777777777777ffffffffffff7777555555555557777555
        5555557775555555557775555555555577777777777777ffff777777fffff75555555555577775555555557775555555557775555555555577777777777777ffff777777fffff7555555555557777555
        5555557775555555557755555555555557777777777777f77755555777fff75555555555777775555555557775555555557755555555555557777777777777f77755555777fff7555555555577777555
        55555557755555555575555555555555557777777777777755555555577ff755555577777777755555555557755555555575555555555555557777777777777755555555577ff7555555777777777555
        555555577555555557755555555555555577777777777775555555555577f7555555777777777555555555577555555557755555555555555577777777777775555555555577f7555555777777777555
        5555555775555555575555555555555555577777777777555555555555577755555577777777755555555557755555555755555555555555555777777777775555555555555777555555777777777555
        5555555775555555775555555555555555577777777777555555555555577755555577777777755555555557755555557755555555555555555777777777775555555555555777555555777777777555
        5555555775555555755555555555555555557777777777555555555555577755555577777777755555555557755555557555555555555555555577777777775555555555555777555555777777777555
        5555555775555522222222555555555555557777777777555555552222222255555577777777755555555557755555222222225555555555555577777777775555555522222222555555777777777555
        5555555775552222222222222555555555557777777777555555222222222222255577777777755555555557755522222222222225555555555577777777775555552222222222222555777777777555
        5555555777222222222222222225555555557777777777555522222222222222222577777777755555555557772222222222222222255555555577777777775555222222222222222225777777777555
        5555555772222222222222222222255555557777777777555222222222222222222227777777755555555557722222222222222222222555555577777777775552222222222222222222277777777555
        5555555222222222222222222222222255557777777777722222222222222222222222227777755555555552222222222222222222222222555577777777777222222222222222222222222277777555
        2255522222222222222222222222222222222222227772222222222222222222222222222222222222555222222222222222222222222222222222222277722222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `)
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level1world2`)
    } else if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level2world2`)
    } else {
    	
    }
}
let portalOrientation = 0
let portalRay: Sprite = null
let mainCharacter: Sprite = null
let PortalBoundary: Sprite = null
let world = 0
let touchingPortal = 0
let level = 0
let levelTransition = 0
levelTransition = 0
level = 1
let touchingGround = 1
touchingPortal = 0
world = 1
let Gravity = 20
PortalBoundary = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.portal)
mainCharacter = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . f f f f . . . . . 
    . . f f f f f c f f . . . 
    . f f f f f c c f f f . . 
    . f f c f b b f f f f . . 
    . c c f f d d b f f c . . 
    . f f f d d d d d c c . . 
    . d f b f d d f b f d . . 
    . . f 1 f d d f 1 f . . . 
    . . f d d d d d d f . . . 
    . . . e e e e e f f f . . 
    . . . d d c f f 1 1 1 f . 
    . . . d b f 1 1 1 1 1 f . 
    . . . f f 4 1 1 1 f f . . 
    . . . e e f 8 f f . . . . 
    . . . e f . f 4 4 . . . . 
    `, SpriteKind.Player)
let statusbar = statusbars.create(60, 10, StatusBarKind.Health)
setWorld1()
scene.cameraFollowSprite(mainCharacter)
tiles.placeOnTile(mainCharacter, tiles.getTileLocation(2, 11))
statusbar.setColor(7, 2, 7)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar.setOffsetPadding(-43, 5)
statusbar.setBarBorder(1, 15)
statusbar.positionDirection(CollisionDirection.Bottom)
forever(function () {
    mainCharacter.vx = controller.dx(5000)
    mainCharacter.vy += Gravity
})
forever(function () {
    if (touchingGround == 1 && controller.up.isPressed()) {
        touchingGround = 0
        mainCharacter.vy = -200
        pauseUntil(() => mainCharacter.isHittingTile(CollisionDirection.Bottom))
        touchingGround = 1
    }
})
forever(function () {
    if (mainCharacter.tileKindAt(TileDirection.Center, assets.tile`myTile3`) || mainCharacter.tileKindAt(TileDirection.Bottom, assets.tile`myTile3`)) {
        statusbar.value += -75
        pause(500)
    } else {
        if (!(statusbar.value == statusbar.max)) {
            statusbar.value += 10
        }
    }
})
