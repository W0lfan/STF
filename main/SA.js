game.custom.InitialTime = 10;
game.custom.StartingTime = 15;
game.custom.MapReducing = 15;

game.custom.value_wait_count = game.custom.InitialTime;
game.custom.FinalWinner="";

game.custom._p = {
    Inner: {

        // Inner Max - DO NOT CHANGE
        MAX : 12,

        // Max amount of rounds, infinite in progress
        MaximumRounds: 7,
        
        // Max amount of players
        MaximumPlayers: 12,

        // Allow players to pick gems even if their cargo is full
        GemGathering : true,
        
        // Autolock
        AutoLock : true,

        // Allow spectators
        Spectating: true,
        
        // Ship Lock
        ShipLock : true,
        
        // Initial Round
        Round: 0,
        
        // Game Round Count
        AmountRound: 0,
        
        Ships: [
            // Starting ship, spectator ship:
            /* Fly */
            '{"name":"Fly","level":1,"model":1,"size":1,"zoom":0.5,"specs":{"shield":{"capacity":[100,100],"reload":[3,3]},"generator":{"capacity":[1,1],"reload":[1,1]},"ship":{"mass":60,"speed":[145,145],"rotation":[130,130],"acceleration":[120,120]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,0,0,0,0,0,0,0,0],"height":[0,0,0,0,0,0,0,0,0],"propeller":true,"texture":[4,63,10,1,1,1,12,17]}},"wings":{"main":{"length":[0,0],"width":[0,0,0],"angle":[-10,10],"position":[0,20,10],"doubleside":true,"offset":{"x":0,"y":10,"z":5},"bump":{"position":30,"size":20},"texture":[11,63]}},"typespec":{"name":"Fly","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[100,100],"reload":[3,3]},"generator":{"capacity":[1,1],"reload":[1,1]},"ship":{"mass":60,"speed":[145,145],"rotation":[130,130],"acceleration":[120,120]}},"shape":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"lasers":[],"radius":0.6}}',

            // Fighting ships:
            /* Advanced Fighter */
            '{"name":"Advanced-Fighter","level":6,"model":1,"size":2,"specs":{"shield":{"capacity":[200,350],"reload":[4,6]},"generator":{"capacity":[120,200],"reload":[50,60]},"ship":{"mass":400,"speed":[70,80],"rotation":[30,50],"acceleration":[70,100]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-100,-80,-90,-50,0,50,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,15,25,40,25,20,0],"height":[0,5,10,30,25,20,10,0],"propeller":true,"texture":[4,4,1,1,10,1,1],"laser":{"damage":[90,150],"rate":1,"type":2,"speed":[180,240],"number":1,"recoil":150,"error":0}},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-35,"z":33},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-20,10,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,12,15,10,0],"height":[0,12,18,12,0],"propeller":false,"texture":[7,9,9,7]},"side_propellers":{"section_segments":10,"offset":{"x":30,"y":30,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-50,-20,0,20,80,70],"z":[0,0,0,0,0,0]},"width":[15,20,10,25,10,0],"height":[10,15,15,10,5,0],"angle":0,"propeller":true,"texture":[3,63,4,10,3]},"cannons":{"section_segments":12,"offset":{"x":70,"y":50,"z":-30},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,50,55],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,15,10,0],"height":[0,5,15,15,10,5,0],"angle":0,"propeller":false,"texture":[4,4,10,4,63,4],"laser":{"damage":[6,12],"rate":3,"type":1,"speed":[100,150],"number":1,"error":0}},"cannons2":{"section_segments":12,"offset":{"x":95,"y":50,"z":-40},"position":{"x":[0,0,0,0],"y":[-50,-20,40,50],"z":[0,0,0,0]},"width":[2,5,5,2],"height":[2,15,15,2],"angle":0,"propeller":false,"texture":6,"laser":{"damage":[4,10],"rate":3,"type":1,"speed":[100,150],"number":1,"error":0}}},"wings":{"main":{"length":[100,30,20],"width":[100,50,40,30],"angle":[-25,20,25],"position":[30,70,50,50],"bump":{"position":-20,"size":20},"offset":{"x":0,"y":0,"z":0},"texture":[11,11,63],"doubleside":true},"winglets":{"length":[40],"width":[40,20,30],"angle":[10,-10],"position":[-50,-70,-65],"bump":{"position":0,"size":30},"texture":63,"offset":{"x":0,"y":0,"z":0}}},"typespec":{"name":"Advanced-Fighter","level":6,"model":1,"code":601,"specs":{"shield":{"capacity":[200,350],"reload":[4,6]},"generator":{"capacity":[120,200],"reload":[50,60]},"ship":{"mass":400,"speed":[70,80],"rotation":[30,50],"acceleration":[70,100]}},"shape":[4,3.65,3.454,3.504,3.567,2.938,1.831,1.707,1.659,1.943,1.92,1.882,1.896,3.96,5.654,5.891,6.064,5.681,5.436,5.573,5.122,4.855,4.675,4.626,4.479,4.008,4.479,4.626,4.675,4.855,5.122,5.573,5.436,5.681,6.064,5.891,5.654,3.96,3.88,1.882,1.92,1.943,1.659,1.707,1.831,2.938,3.567,3.504,3.454,3.65],"lasers":[{"x":0,"y":-4,"z":0.4,"angle":0,"damage":[90,150],"rate":1,"type":2,"speed":[180,240],"number":1,"spread":0,"error":0,"recoil":150},{"x":2.8,"y":0,"z":-1.2,"angle":0,"damage":[6,12],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.8,"y":0,"z":-1.2,"angle":0,"damage":[6,12],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.8,"y":0,"z":-1.6,"angle":0,"damage":[4,10],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.8,"y":0,"z":-1.6,"angle":0,"damage":[4,10],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":6.064}}',
            /* Scorpion */
            '{"name":"Scorpion","level":6,"model":2,"size":2,"specs":{"shield":{"capacity":[225,400],"reload":[5,7]},"generator":{"capacity":[80,175],"reload":[38,50]},"ship":{"mass":450,"speed":[75,90],"rotation":[50,70],"acceleration":[80,100]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-90,-40,-30,0,50,100,120,110],"z":[-10,-5,0,0,0,0,20,20]},"width":[0,12,20,15,25,10,5],"height":[0,10,15,25,15,10,5],"texture":[1,4,63,11,11,4],"propeller":false},"tail":{"section_segments":14,"offset":{"x":0,"y":70,"z":50},"position":{"x":[0,0,0,0,0,0],"y":[-70,-25,-10,20,40,50],"z":[0,0,0,0,-10,-20]},"width":[0,5,35,25,5,5],"height":[0,5,25,20,5,5],"texture":[6,4,63,10,4],"laser":{"damage":[50,100],"rate":0.9,"type":2,"speed":[170,230],"number":1,"angle":0,"error":0,"recoil":100}},"cockpit":{"section_segments":8,"offset":{"x":13,"y":-44,"z":12},"position":{"x":[-5,0,0,0,0],"y":[-15,-5,0,5,15],"z":[0,0,0,1,0]},"width":[0,8,10,8,0],"height":[0,5,5,5,0],"texture":[6,5],"propeller":false},"deco":{"section_segments":8,"offset":{"x":70,"y":0,"z":-10},"position":{"x":[0,0,0,10,-5,0,0,0],"y":[-115,-80,-100,-60,-30,-10,20,0],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,10,15,15,20,10,0],"height":[1,5,15,20,35,30,10,0],"texture":[6,6,1,1,11,2,12],"laser":{"damage":[2,3],"rate":1.8,"type":1,"speed":[130,170],"number":2,"angle":5,"error":0},"propeller":true},"wingends":{"section_segments":8,"offset":{"x":105,"y":-80,"z":-10},"position":{"x":[0,2,4,2,0],"y":[-20,-10,0,10,20],"z":[0,0,0,0,0]},"width":[2,3,6,3,2],"height":[5,15,22,17,5],"texture":4,"angle":0,"propeller":false}},"wings":{"main":{"length":[80,30],"width":[40,30,20],"angle":[-10,20],"position":[30,-50,-80],"texture":63,"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}},"font":{"length":[80,30],"width":[20,15],"angle":[-10,20],"position":[-20,-40],"texture":4,"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}}},"typespec":{"name":"Scorpion","level":6,"model":2,"code":602,"specs":{"shield":{"capacity":[225,400],"reload":[5,7]},"generator":{"capacity":[80,175],"reload":[38,50]},"ship":{"mass":450,"speed":[75,90],"rotation":[50,70],"acceleration":[80,100]}},"shape":[3.6,2.846,2.313,2.192,5.406,5.318,5.843,5.858,5.621,4.134,3.477,3.601,3.622,3.464,3.351,3.217,1.458,1.391,1.368,1.37,1.635,2.973,3.47,3.911,4.481,4.804,4.481,3.911,3.47,2.973,1.635,1.37,1.368,1.391,1.458,3.217,3.351,3.464,3.622,3.601,3.477,4.134,5.621,5.858,5.843,5.318,5.406,2.192,2.313,2.846],"lasers":[{"x":0,"y":0,"z":2,"angle":0,"damage":[50,100],"rate":0.9,"type":2,"speed":[170,230],"number":1,"spread":0,"error":0,"recoil":100},{"x":2.8,"y":-4.6,"z":-0.4,"angle":0,"damage":[2,3],"rate":1.8,"type":1,"speed":[130,170],"number":2,"spread":5,"error":0,"recoil":0},{"x":-2.8,"y":-4.6,"z":-0.4,"angle":0,"damage":[2,3],"rate":1.8,"type":1,"speed":[130,170],"number":2,"spread":5,"error":0,"recoil":0}],"radius":5.858}}',
            /* Maurauder */
            '{"name":"Marauder","level":6,"model":3,"size":1.4,"specs":{"shield":{"capacity":[210,350],"reload":[8,11]},"generator":{"capacity":[85,160],"reload":[25,40]},"ship":{"mass":250,"speed":[70,110],"rotation":[60,80],"acceleration":[80,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-20,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-65,-75,-55,-40,0,30,60,80,90,80],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,6,18,23,30,25,25,30,35,0],"height":[0,5,10,12,12,20,15,15,15,0],"texture":[6,4,1,10,1,1,11,12,17],"propeller":true,"laser":{"damage":[10,16],"rate":10,"type":1,"speed":[170,200],"recoil":0,"number":1,"error":0}},"cockpit":{"section_segments":[40,90,180,270,320],"offset":{"x":0,"y":-85,"z":22},"position":{"x":[0,0,0,0,0,0],"y":[15,35,60,95,125],"z":[-1,-2,-1,-1,3]},"width":[5,12,14,15,5],"height":[0,12,15,15,0],"texture":[8.98,8.98,4]},"outriggers":{"section_segments":10,"offset":{"x":25,"y":0,"z":-10},"position":{"x":[-5,-5,8,-5,0,0,0,0,0,0],"y":[-100,-125,-45,0,30,40,70,80,100,90],"z":[10,10,5,5,0,0,0,0,0,0,0,0]},"width":[0,6,10,10,15,15,15,15,10,0],"height":[0,10,20,25,25,25,25,25,20,0],"texture":[13,4,4,63,4,18,4,13,17],"laser":{"damage":[4,8],"rate":3,"type":1,"speed":[110,140],"recoil":0,"number":1,"error":0},"propeller":true},"intake":{"section_segments":12,"offset":{"x":25,"y":-5,"z":10},"position":{"x":[0,0,5,0,-3,0,0,0,0,0],"y":[-10,-30,-5,35,60,70,85,100,85],"z":[0,-6,0,0,0,0,0,0,0,0]},"width":[0,5,10,10,15,10,10,5,0],"height":[0,15,15,20,20,15,15,5,0],"texture":[6,4,63,4,63,18,4,17]}},"wings":{"main":{"length":[20,70,35],"width":[50,55,40,20],"angle":[0,-20,0],"position":[20,20,70,25],"texture":[3,18,63],"doubleside":true,"bump":{"position":30,"size":15},"offset":{"x":0,"y":0,"z":13}},"spoiler":{"length":[20,45,0,5],"width":[40,40,20,30,0],"angle":[0,20,90,90],"position":[60,60,80,80,90],"texture":[10,11,63],"doubleside":true,"bump":{"position":30,"size":18},"offset":{"x":0,"y":0,"z":30}},"font":{"length":[37],"width":[40,15],"angle":[-10],"position":[0,-45],"texture":[63],"doubleside":true,"bump":{"position":30,"size":10},"offset":{"x":35,"y":-20,"z":10}},"shields":{"doubleside":true,"offset":{"x":12,"y":60,"z":-15},"length":[0,15,45,20],"width":[30,30,65,65,30,30],"angle":[30,30,90,150],"position":[10,10,0,0,10],"texture":[4],"bump":{"position":0,"size":4}}},"typespec":{"name":"Marauder","level":6,"model":3,"code":603,"specs":{"shield":{"capacity":[210,350],"reload":[8,11]},"generator":{"capacity":[85,160],"reload":[25,40]},"ship":{"mass":250,"speed":[70,110],"rotation":[60,80],"acceleration":[80,120]}},"shape":[2.665,3.563,3.573,2.856,2.359,2.03,2.85,2.741,2.228,1.71,1.404,1.199,1.11,3.408,3.491,3.521,3.44,3.385,3.439,3.481,3.181,2.932,2.962,2.944,2.85,2.244,2.85,2.944,2.962,2.932,3.181,3.481,3.439,3.385,3.44,3.521,3.491,3.408,1.11,1.199,1.404,1.71,2.228,2.741,2.85,2.03,2.359,2.856,3.573,3.563],"lasers":[{"x":0,"y":-2.66,"z":0.28,"angle":0,"damage":[10,16],"rate":10,"type":1,"speed":[170,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.56,"y":-3.5,"z":-0.28,"angle":0,"damage":[4,8],"rate":3,"type":1,"speed":[110,140],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.56,"y":-3.5,"z":-0.28,"angle":0,"damage":[4,8],"rate":3,"type":1,"speed":[110,140],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.573}}',
            /* Condor */
            '{"name":"Condor","level":6,"model":4,"size":1.5,"specs":{"shield":{"capacity":[225,400],"reload":[7,10]},"generator":{"capacity":[70,130],"reload":[30,48]},"ship":{"mass":200,"speed":[75,105],"rotation":[50,70],"acceleration":[80,120]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-110,-95,-100,-100,-45,-40,-25,-23,15,20,55,80,100,90],"z":[-10,-9,-8,-7,-6,-4,-2,0,0,0,0,0,0,0]},"width":[0,2,5,10,25,27,27,25,25,27,40,35,30,0],"height":[0,2,5,10,25,27,27,25,25,27,20,15,10,0],"texture":[6,2,3,10,5,63,5,2,5,3,63,11,4],"propeller":true,"laser":{"damage":[30,60],"rate":2,"type":2,"speed":[150,200],"number":1,"angle":0,"error":0}},"cannons":{"section_segments":12,"offset":{"x":75,"y":30,"z":-25},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,50,55],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,10,10,0],"height":[0,5,15,15,10,5,0],"angle":0,"laser":{"damage":[3,6],"rate":4,"type":1,"speed":[100,130],"number":1,"angle":0,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-60,"z":8},"position":{"x":[0,0,0,0],"y":[-25,-8,20,65],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,12,15,5],"texture":[9]}},"wings":{"back":{"offset":{"x":0,"y":25,"z":10},"length":[90,40],"width":[70,50,30],"angle":[-30,40],"position":[0,20,0],"texture":[11,63],"doubleside":true,"bump":{"position":10,"size":20}},"front":{"offset":{"x":0,"y":55,"z":10},"length":[90,40],"width":[70,50,30],"angle":[-30,-40],"position":[-60,-20,-20],"texture":[11,63],"doubleside":true,"bump":{"position":10,"size":10}}},"typespec":{"name":"Condor","level":6,"model":4,"code":604,"specs":{"shield":{"capacity":[225,400],"reload":[7,10]},"generator":{"capacity":[70,130],"reload":[30,48]},"ship":{"mass":200,"speed":[75,105],"rotation":[50,70],"acceleration":[80,120]}},"shape":[3.3,3.015,2.45,1.959,1.658,1.477,1.268,1.11,1.148,1.237,2.34,2.448,2.489,3.283,3.363,3.501,3.586,3.333,3.496,3.502,3.154,2.52,3.016,3.132,3.054,3.006,3.054,3.132,3.016,2.52,3.154,3.502,3.496,3.333,3.586,3.501,3.363,3.283,2.49,2.448,2.34,1.237,1.148,1.11,1.268,1.477,1.658,1.959,2.45,3.015],"lasers":[{"x":0,"y":-3.3,"z":0,"angle":0,"damage":[30,60],"rate":2,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.25,"y":-0.6,"z":-0.75,"angle":0,"damage":[3,6],"rate":4,"type":1,"speed":[100,130],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.25,"y":-0.6,"z":-0.75,"angle":0,"damage":[3,6],"rate":4,"type":1,"speed":[100,130],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.586}}',
            /* A-Speedster*/
            '{"name":"A-Speedster","level":6,"model":5,"size":1.5,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-95,0,0,70,65],"z":[0,0,0,0,0,0]},"width":[0,10,40,20,20,0],"height":[0,5,30,30,15,0],"texture":[6,11,5,63,12],"propeller":true,"laser":{"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"recoil":50,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"cannons":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"winglets":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":[4],"bump":{"position":10,"size":30}}},"typespec":{"name":"A-Speedster","level":6,"model":5,"code":605,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"shape":[3,2.914,2.408,1.952,1.675,1.49,1.349,1.263,1.198,1.163,1.146,1.254,1.286,1.689,2.06,2.227,2.362,2.472,2.832,3.082,3.436,3.621,3.481,2.48,2.138,2.104,2.138,2.48,3.481,3.621,3.436,3.082,2.832,2.472,2.362,2.227,2.06,1.689,1.286,1.254,1.146,1.163,1.198,1.263,1.349,1.49,1.675,1.952,2.408,2.914],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.16,"y":-0.277,"z":1.35,"angle":-10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.16,"y":-0.277,"z":1.35,"angle":10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.621}}',
            /* Rock-Tower */
            '{"name":"Rock-Tower","level":6,"model":6,"size":2.1,"specs":{"shield":{"capacity":[300,500],"reload":[8,11]},"generator":{"capacity":[75,115],"reload":[35,45]},"ship":{"mass":450,"speed":[75,90],"rotation":[50,70],"acceleration":[80,90]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-85,-70,-60,-20,-25,40,85,70],"z":[-10,-8,-5,0,0,0,0,0,0]},"width":[0,40,45,10,12,30,30,20,0],"height":[0,10,12,8,12,10,25,20,0],"texture":[4,63,4,4,4,11,10,12],"propeller":true},"cockpit":{"section_segments":12,"offset":{"x":0,"y":30,"z":20},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-30,-20,0,10,20,30],"z":[0,0,0,0,0,0]},"width":[0,10,15,15,10,5],"height":[0,10,15,15,10,5],"texture":9,"propeller":false},"dimeds_banhammer":{"section_segments":6,"offset":{"x":25,"y":-70,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-20,-10,-20,0,10,12],"z":[0,0,0,0,0,0]},"width":[0,0,5,7,6,0],"height":[0,0,5,7,6,0],"texture":[6,6,6,10,12],"angle":0,"laser":{"damage":[4,6],"rate":8,"type":1,"speed":[150,230],"number":1,"error":5}},"propulsors":{"section_segments":8,"offset":{"x":30,"y":50,"z":0},"position":{"x":[0,0,5,5,0,0,0],"y":[-45,-50,-20,0,20,50,40],"z":[0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,0],"height":[0,15,20,25,20,10,0],"texture":[11,2,3,4,5,12],"angle":0,"propeller":true}},"wings":{"main":{"length":[55,15],"width":[60,40,30],"angle":[-10,20],"position":[30,40,30],"texture":63,"doubleside":true,"offset":{"x":0,"y":20,"z":-5},"bump":{"position":30,"size":20}},"finalizer_fins":{"length":[20],"width":[20,10],"angle":[-70],"position":[-42,-30],"texture":63,"doubleside":true,"offset":{"x":35,"y":-35,"z":0},"bump":{"position":0,"size":30}}},"typespec":{"name":"Rock-Tower","level":6,"model":6,"code":606,"specs":{"shield":{"capacity":[300,500],"reload":[8,11]},"generator":{"capacity":[75,115],"reload":[35,45]},"ship":{"mass":450,"speed":[75,90],"rotation":[50,70],"acceleration":[80,90]}},"shape":[3.78,3.758,3.974,3.976,3.946,3.508,1.532,1.64,1.556,1.426,1.347,1.298,1.269,1.764,1.894,2.075,3.269,3.539,3.933,3.989,4.058,4.127,4.524,4.416,3.634,3.577,3.634,4.416,4.524,4.127,4.058,3.989,3.933,3.539,3.269,2.075,1.894,1.764,1.68,1.298,1.347,1.426,1.556,1.64,1.532,3.508,3.946,3.976,3.974,3.758],"lasers":[{"x":1.05,"y":-3.78,"z":-0.42,"angle":0,"damage":[4,6],"rate":8,"type":1,"speed":[150,230],"number":1,"spread":0,"error":5,"recoil":0},{"x":-1.05,"y":-3.78,"z":-0.42,"angle":0,"damage":[4,6],"rate":8,"type":1,"speed":[150,230],"number":1,"spread":0,"error":5,"recoil":0}],"radius":4.524}}',
            /* O-Defender */
            '{"name":"O-Defender","level":6,"model":7,"size":2.2,"specs":{"shield":{"capacity":[400,550],"reload":[10,13]},"generator":{"capacity":[70,100],"reload":[25,40]},"ship":{"mass":500,"speed":[70,80],"rotation":[30,40],"acceleration":[60,80]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[-90,-88,0,90,91],"z":[0,0,0,0,0]},"width":[5,6,25,10,20],"height":[2,10,40,20,20],"texture":[63,1,10],"propeller":true,"laser":{"damage":[35,60],"rate":2,"type":2,"speed":[130,180],"number":1,"angle":0,"error":0}},"side":{"section_segments":10,"offset":{"x":50,"y":0,"z":0},"position":{"x":[-40,-5,15,25,20,0,-50],"y":[-100,-70,-40,-10,20,50,90],"z":[0,0,0,0,0,0,0]},"width":[5,20,20,20,20,20,5],"height":[15,25,30,30,30,25,0],"texture":[0,1,2,3,4,63]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":18},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,30,40],"z":[0,0,0,0,0]},"width":[0,5,10,10,0],"height":[0,5,10,12,0],"texture":[9]},"top_propulsor":{"section_segments":15,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0],"y":[80,95,100,90],"z":[0,0,0,0]},"width":[5,20,10,0],"height":[5,15,5,0],"propeller":true,"texture":[1,63,12]},"bottom_propulsor":{"section_segments":15,"offset":{"x":0,"y":0,"z":-10},"position":{"x":[0,0,0,0],"y":[80,95,100,90],"z":[0,0,0,0]},"width":[5,20,10,0],"height":[5,15,5,0],"propeller":true,"texture":[1,63,12]}},"wings":{"join":{"offset":{"x":0,"y":20,"z":0},"length":[80,0],"width":[130,50],"angle":[-1],"position":[0,-30],"texture":[8],"bump":{"position":-20,"size":15}}},"typespec":{"name":"O-Defender","level":6,"model":7,"code":607,"specs":{"shield":{"capacity":[400,550],"reload":[10,13]},"generator":{"capacity":[70,100],"reload":[25,40]},"ship":{"mass":500,"speed":[70,80],"rotation":[30,40],"acceleration":[60,80]}},"shape":[4.409,4.448,4.372,4.204,4.119,4.136,4.174,4.107,4.066,4.094,4.073,4.141,4.16,4.062,4.015,3.966,3.83,3.76,3.742,3.591,3.502,3.494,3.575,4.291,4.422,4.409,4.422,4.291,3.575,3.494,3.502,3.591,3.742,3.76,3.83,3.966,4.015,4.062,4.16,4.141,4.073,4.094,4.066,4.107,4.174,4.136,4.119,4.204,4.372,4.448],"lasers":[{"x":0,"y":-3.96,"z":0,"angle":0,"damage":[35,60],"rate":2,"type":2,"speed":[130,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.448}}',
            /* Barracuda */
            '{"name":"Barracuda","level":6,"model":8,"size":2.4,"specs":{"shield":{"capacity":[300,400],"reload":[8,12]},"generator":{"capacity":[100,150],"reload":[8,14]},"ship":{"mass":675,"speed":[70,90],"rotation":[30,45],"acceleration":[130,150],"dash":{"rate":2,"burst_speed":[160,200],"speed":[120,150],"acceleration":[70,70],"initial_energy":[50,75],"energy":[20,30]}}},"bodies":{"body":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-90,-100,-60,-10,0,20,50,80,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,20,25,35,40,40,35,30,0],"height":[0,5,40,45,40,60,70,60,30,0],"texture":[10,2,10,2,3,13,13,63,12],"propeller":true},"front":{"section_segments":8,"offset":{"x":0,"y":-20,"z":0},"position":{"x":[0,0,0,0,0],"y":[-90,-85,-70,-60,-20],"z":[0,0,0,0,0]},"width":[0,40,45,10,12],"height":[0,15,18,8,12],"texture":[8,63,4,4,4],"propeller":true},"propeller":{"section_segments":10,"offset":{"x":40,"y":40,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,20,15,0],"height":[0,10,15,15,15,10,10,18,8,0],"texture":[4,4,10,3,3,63,4,63,12],"propeller":true},"sides":{"section_segments":6,"angle":90,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-80,-75,-60,-50,-10,10,50,60,75,80],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,30,35,10,12,12,10,35,30,0],"height":[0,10,12,8,12,12,8,12,10,0],"texture":[4,63,4,4,4,4,4,63,4]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-20,"z":30},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-50,-20,0,10,30,50],"z":[0,0,0,0,0,0]},"width":[0,12,18,20,15,0],"height":[0,20,22,24,20,0],"texture":[9]}},"wings":{"top":{"doubleside":true,"offset":{"x":0,"y":20,"z":15},"length":[70],"width":[70,30],"angle":[90],"position":[0,30],"texture":[63],"bump":{"position":10,"size":30}},"top2":{"doubleside":true,"offset":{"x":0,"y":51,"z":5},"length":[70],"width":[50,20],"angle":[90],"position":[0,60],"texture":[63],"bump":{"position":10,"size":30}}},"typespec":{"name":"Barracuda","level":6,"model":8,"code":608,"specs":{"shield":{"capacity":[300,400],"reload":[8,12]},"generator":{"capacity":[100,150],"reload":[8,14]},"ship":{"mass":675,"speed":[70,90],"rotation":[30,45],"acceleration":[130,150],"dash":{"rate":2,"burst_speed":[160,200],"speed":[120,150],"acceleration":[70,70],"initial_energy":[50,75],"energy":[20,30]}}},"shape":[5.28,5.25,5.332,5.393,4.944,1.997,1.745,1.556,1.435,3.587,3.81,3.779,3.838,3.84,3.779,3.81,3.587,3.205,3.571,3.9,5.132,5.888,5.835,5.551,4.886,5.808,4.886,5.551,5.835,5.888,5.132,3.9,3.571,3.205,3.587,3.81,3.779,3.838,3.84,3.779,3.81,3.587,1.435,1.556,1.745,1.997,4.944,5.393,5.332,5.25],"lasers":[],"radius":5.888}}',

            // Admin ship:
            /* Admin */
            (function() {
                var r = Function('return(function(){var model;return model={name:\'Fly\',level:7.9,model:1,size:1.05,specs:{shield:{capacity:[700,700],reload:[1000,1000]},generator:{capacity:[9999,999],reload:[10000,10000]},ship:{mass:999,speed:[150,150],rotation:[150,150],acceleration:[150,150]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-65,-60,-50,-20,10,30,55,75,60],z:[0,0,0,0,0,0,0,0,0]},width:[0,8,10,30,25,30,18,15,0],height:[0,6,8,12,20,20,18,15,0],propeller:true,texture:[4,63,10,1,1,1,12,17]},cockpit:{section_segments:12,offset:{x:0,y:0,z:20},position:{x:[0,0,0,0,0,0,0],y:[-15,0,20,30,60],z:[0,0,0,0,0]},width:[0,13,17,10,5],height:[0,18,25,18,5],propeller:false,texture:[7,9,9,4,4]},cannon:{section_segments:6,offset:{x:0,y:-15,z:-10},position:{x:[0,0,0,0,0,0],y:[-40,-50,-20,0,20,30],z:[0,0,0,0,0,20]},width:[0,5,8,11,7,0],height:[0,5,8,11,10,0],angle:0,laser:{damage:[1000,1000],rate:10,type:1,speed:[180,180],number:1,error:0},propeller:false,texture:[3,3,10,3]}},wings:{main:{length:[60,20],width:[100,50,40],angle:[-10,10],position:[0,20,10],doubleside:true,offset:{x:0,y:10,z:5},bump:{position:30,size:20},texture:[11,63]}}}}).call(this);')();
                return r.typespec = Object.assign({
                    name: r.name,
                    level: r.level,
                    model: r.model,
                    code: r.level * 100 + r.model,
                    specs: r.specs,
                    next: null != r.next ? r.next : void 0
                }, JSON.parse('{"shape":[1.368,1.368,1.093,0.965,0.883,0.827,0.791,0.767,0.758,0.777,0.847,0.951,1.092,1.667,1.707,1.776,1.856,1.827,1.744,1.687,1.525,1.415,1.335,1.606,1.603,1.578,1.603,1.606,1.335,1.415,1.525,1.687,1.744,1.827,1.856,1.776,1.707,1.667,1.654,0.951,0.847,0.777,0.758,0.767,0.791,0.827,0.883,0.965,1.093,1.368],"lasers":[{"x":0,"y":-1.365,"z":-0.21,"angle":0,"damage":[1000,1000],"rate":10,"type":1,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":1.856}')), JSON.stringify(r)
            })(),
        ],
    },

    // Game components, DO NO TOUCH
    Global: {
        Seconds: 0,
        Phase: 0,
        LastPhase: 30,
        MoreInfos: "Waiting for players"
    },
    Map: {
        MaxReducing: 8,
        TimeReducing: game.custom.MapReducing,
        Reducing: 2,
        Pattern: "9999999999999999999999999999999\n" +
            "9999999999999999999999999999999\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "99                           99\n" +
            "9999999999999999999999999999999\n" +
            "9999999999999999999999999999999"
    },
    InnerTeams: {
        1: {
            Color: {
                hue: 180,
                name: "Blue",
                hex: ["rgba(0, 88, 191, 0.4)"],
                lighter: ["rgba(0, 56, 255, 0.8)"],
                leader : "Lucina",
                superlighter: ["rgba(39, 166, 245, 0.05 )"]

            },
            Players: {
                InnerLeft: 0,
                InnerPresent: 0,
                InnerPlaying: 0,
                InnerReady: 0
            },
            Points: {
                Global: [],
                ActualRound: 0,
                All: 0,
            }
        },
        2: {
            Color: {
                hue: 0,
                name: "Red",
                hex: ["rgba(197, 0, 0, 0.4)"],
                lighter: ["rgba(235, 0, 0, 0.8)"],
                leader: "Zoltar",
                superlighter: ["rgba(255, 0, 0, 0.05)"]
            },
            Players: {
                InnerLeft: 0,
                InnerPresent: 0,
                InnerPlaying: 0,
                InnerReady: 0
            },
            Points: {
                Global: [],
                ActualRound: 0,
                All: 0
            }
        }
    },
    Functions: {
        Positions: function(c = 6) {
            var b = 0;
            b = c % 2 === 0 ? 6 : 5;
            var a = [];
            for (let d = 0; d < b + (-(c % 2) + 1); d++) a.push(-10 * b + (5 * b - 10 + 10 * (b % 2)) * d + ((-10 * b + (5 * b - 10 + 10 * (b % 2)) * d) > 0 ? -10 : ((-10 * b + (5 * b - 10 + 10 * (b % 2)) * d) === 0 ? 0 : 10)));
            c % 2 === 0 && a.splice(Math.round(a.length / 2 - 1), 1);
            var f = [2, 2, 1, 1, 0, 0];
            for (let e = 1; e < f[c - 1] + 1; e++) a.splice(0, 1), a.splice(a.length - 1, 1);
            return a;
        },

        // Map reduction
        Reduction: function(a = 3) {
            var b = [];
            let _m = 30; // Map size
            for (let c = 0; c < _m + 1; c++) {
                for (let d = 0; d < _m + 1; d++) d <= a || c <= a || d >= _m + 1 - a || c >= _m + 1 - a ? b.push("9") : b.push(" ");
                b.push("\n");
            }
            return b.join("");
        },

        // Random number
        R: function(x, n) {
            return Math.random() * (n - x) + x;
        },
        Ship: {
            Init: function(s) {
                s.set({
                    collider: true,
                    shield: 100,
                    type: 101,
                    x: 0,
                    y: 0,
                    r: 0 + 90 * game.custom._p.Functions.R(0, 0.5),
                    idle: true
                });
                s.custom.playedRounds = 0;
                s.custom._p = {
                    Stats: {
                        Kills: {
                            Total: 0,
                            Round: []
                        },
                        Deaths: {
                            Total: 0
                        },
                        Inner: {
                            Waiting: false,
                            Spectator: true,
                            Team: -1,
                            Seconds: game.custom._p.Inner.InnerKick,
                            Playing: false,
                            Died: false,
                            ShipInfos: {
                                Random: false,
                                Last: []
                            },
                            StatusDeath: false
                        }
                    }
                };
                s.custom.Init = true;
            }
        }
    }
};
let s = [601, 602, 603, 604, 605, 606, 607, 608];
let _s = ["A-Fighter", "Scorpion", "Marauder", "Condor", "A-Speedster", "Rock-Tower", "O-Defender", "Barracuda"];
const Mode = {
    Creator : "Naf",
    Version : "1.0.0",
};



var terminal = game.modding.terminal;
var color_echo = function(message, color, style, background) {
  if (!color) {
    color = "";
  }
  if (!style) {
    style = "";
  }
  if (!background) {
    background = "";
  }
  terminal.echo(`[[${style};${color};${background}]${message}]`);
};

function InitEcho() {
    color_echo(`The Starblast Arena - V. ${Mode.Version}`,'red','g');
    color_echo(`Made by ${Mode.Creator}\n`,'grey','i');
    color_echo(`Game parameters -`,'grey','');
    color_echo(`Rounds : ${game.custom._p.Inner.MaximumRounds}
Team lock : ${game.custom._p.Inner.AutoLock}
Ship lock : ${game.custom._p.Inner.ShipLock}
Spectating : ${game.custom._p.Inner.Spectating}\n`,'red','g');
    color_echo(`Important infos -`,'grey','');
    color_echo(`This modding console will be used by the mod in order to print 
important game informations. Please do not end this terminal while the mod
is running.
`,'white','');
};
InitEcho()


var Vocabulary = {
    Infos: [
        [
            "SA/AS", "Retreat", "Attack", "Regroup",
            "Love", "Defend", "Yes", "No",
            "Me", "You", "Follow", "GG",
            "Thanks", "Sorry", "No problem", "Hmm"
        ],
        [
            "\u003a", "\u003b", "\u0049", "\u0031",
            "\u0024", "\u0025", "\u004c", "\u004d",
            "\u003f", "\u003e", "\u0050", "GG",
            "\u0041", "\u00a1", "\u00a2", "\u004b"
        ],
        ["K", "R", "A", "B", "W", "D", "Y", "N", "E", "O", "F", "G", "X", "S", "P", "Q"]
    ],
    Mod: []
};
Vocabulary.Infos[0].forEach(Text => {
    Index = Vocabulary.Infos[0].indexOf(Text);
    Vocabulary.Mod.push({
        text: Text,
        icon: Vocabulary.Infos[1][Index],
        key: Vocabulary.Infos[2][Index]
    });
});



this.options = {
    root_mode: "",
    map_size: 30,
    custom_map: game.custom._p.Map.Pattern,
    radar_zoom: 1,
    weapons_store: false,
    max_level: 1,
    starting_ship: 801,
    ships: game.custom._p.Inner.Ships,
    friendly_colors: 2,
    max_players: 20,
    asteroids_strength: 1000000,
    map_name: "The Starblast Arena",
    vocabulary: Vocabulary.Mod,
    reset_tree: true,
    speed_mod: 1.2,
    lives: 5
};





// COMPONENT MANAGEMENT
let Sync = function(c, g) {
    g.setUIComponent(c);
};
let Unsync = function(c, g) {
    c.forEach(t => {
        g.setUIComponent({
            id: `${t}`,
            visible: false
        });
    });
};


let Lobby = {
    id: "Lobby",
    position: [37.5, 75, 25, 10],
    clickable: true,
    shortcut: "L",
    visible: true,
    components: [{
            type: "box",
            position: [0, 0, 100, 100],
            fill: "rgba(151, 151, 151, 0.2)",
            stroke: "rgba(249, 0, 0, 0.8)",
            width: 4
        },
        {
            type: "box",
            position: [5, 15, 1, 30],
            fill: "#CDE",
            stroke: "#CDE",
            width: 2
        },
        {
            type: "text",
            position: [0, 14.5, 40, 35],
            value: "PLAY",
            color: "#CDE"
        },
        {
            type: "text",
            position: [5, 40, 80, 60],
            value: "Press this button to enter fights",
            color: "#CDE"
        },
        {
            type: "text",
            position: [54, 54, 80, 40],
            value: `[L]`,
            color: "#CDE"
        }
    ]
};

var WaitersCount = {
                id: "WaitersCount",
                position: [42.5, 85, 20, 5],
                visible: true,
                components: [{
                    type: "text",
                    position: [0, 25, 70, 60],
                    value: `${game.custom._p.InnerTeams[1].Players.InnerReady + game.custom._p.InnerTeams[2].Players.InnerReady}/${game.custom._p.Inner.MaximumPlayers} WAITING`,
                    color: "#CDE"
                }, 
                {
                    type: "text",
                    position: [32.5, 20, 70, 70],
                    value: `(`,
                    color: "#CDE"
                }, 
                {
                    type: "text",
                    position: [40, 20, 70, 70],
                    value: `${game.custom._p.InnerTeams[1].Players.InnerReady}`,
                    color: game.custom._p.InnerTeams[1].Color.lighter
                }, 
                {
                    type: "text",
                    position: [50, 20, 70, 70],
                    value: `${game.custom._p.InnerTeams[2].Players.InnerReady}`,
                    color: game.custom._p.InnerTeams[2].Color.lighter
                }, 
               {
                    type: "text",
                    position: [57.5, 20, 70, 70],
                    value: `)`,
                    color: "#CDE"
                }, 
                ]
};


// Winner generation
let GenWinner = function(n = game.custom._p.Inner.MaximumRounds, y = false) {
    /*
        We first check if the amount of points per team (generated during the game)
        is equal to the number of rounds played
    */
    if (game.custom._p.InnerTeams[1].Points.Global.length >= game.custom._p.Inner.Round && game.custom._p.InnerTeams[2].Points.Global.length >= game.custom._p.Inner.Round) {
        
        // Gathering all the points
        let P = [
            game.custom._p.InnerTeams[1].Points.Global,
            game.custom._p.InnerTeams[2].Points.Global
        ];

        // An object per team
        let M = [{
                Wins: 0,
                Loss: 0,
                Total: 0
            },
            {
                Wins: 0,
                Loss: 0,
                Total: 0
            }
        ];
        let W = [];
        for (let i = 0; i < 2; i++) { // i < 2 because of 2 teams only
            for (let k = 0; k < n; k++) { // n is the max amount of rounds

                /*

                    This part of the function allows the code to understand the properties 
                    of each object of the rounds won or lost by the teams.

                    The code checks if the team won the k round (from 0 to max rounds - 1).
                    If so, M[team_id].Wins = M[team_id].Wins + 1.
                    Otherwise, M[team_id].Loss = M[team_id].Loss + 1.
                    Then, the amounf of points won in each round is added the M[team_id].Total (points).

                */

                if (P[i][k].won) M[i].Wins++;
                else M[i].Loss++;
                M[i].Total += P[i][k].points;
            }
        }
        for (let i = 0; i < n; i++) {

            /*

                This part of the function allows the code to understand who won each round, with the teams name.
                The code check if the points of any team is higher than the other one.
                If so, the highest team wins the round and it's name is added to the W variable. 
                If there is equality or no win, the W variable gets a "None" win.

            */

            const winningTeam = P[0][i].points > P[1][i].points ? 
                game.custom._p.InnerTeams[1].Color.name: 
                game.custom._p.InnerTeams[2].Color.name;
            W.push(winningTeam || "None");
        }

        /*

            Once we gathered all the informations of each win/loss and the total points of the rounds, 
            we try to see who is the winner.
            In order to achieve this, we see if any team has more points or wins than the other one.
            If so, the winner is stored in the Winner variable.
            Otherwise, there is "None" winner.

            If the aim of function is not to gather the amount of wins but only the winner name,
            y will be stated as false. Otherwise, if y = true, the function will return the amount 
            of wins of each team.

        */

        let Winner;
        if (M[0].Wins > M[1].Wins || M[0].Total > M[1].Total) Winner = game.custom._p.InnerTeams[1].Color.name;
        else if (M[0].Wins < M[1].Wins || M[0].Total < M[1].Total) Winner = game.custom._p.InnerTeams[2].Color.name;
        else Winner = "None";
        if (!y) {
            return [Winner, W];
        } else if (y) {
            return [Winner, [M[0].Wins, M[1].Wins]];
        }
    }
};




let GenerateEndScoreboard = function(game) {
    let P = [
        game.custom._p.InnerTeams[1].Points.Global,
        game.custom._p.InnerTeams[2].Points.Global
    ];
    let M = [{
            Wins: 0,
            Loss: 0,
            Total: 0
        },
        {
            Wins: 0,
            Loss: 0,
            Total: 0
        }
    ];
    let E = GenWinner();
    let Winner = E[0];
    game.custom.FinalWinner = Winner;
    let W = E[1];
    let NoOposition = 20;
    let Center = 15;
    for (let i = 0; i < game.custom._p.Inner.MaximumRounds; i++) {
        for (let ship of game.ships) {
            Sync({
                id: "RoundPannel" + i,
                position: [Center + 20, NoOposition + 20 + i * 5, 20, 10],
                visible: true,
                components: [{
                        type: "box",
                        position: [5, 0, 20, 40],
                        fill: "rgba(255,255,255,0.2)"
                    },
                    {
                        type: "text",
                        position: [0, 0, 25, 40],
                        value: `#${i+1}`,
                        color: "#CDE"
                    },
                ]
            }, ship);
            Sync({
                id: "RoundPannelPoints" + i,
                position: [Center + 26, NoOposition + 20 + i * 5, 20, 10],
                visible: true,
                components: [{
                        type: "box",
                        position: [0, 0, 20, 40],
                        fill: "rgba(255,255,255,0.1)",
                        stroke: game.custom._p.InnerTeams[1].Color.hex,
                        width: 5
                    },
                    {
                        type: "text",
                        position: [-2, 0, 25, 40],
                        value: `${P[0][i].points}`,
                        color: "#CDE",
                    },
                    {
                        type: "box",
                        position: [25, 0, 20, 40],
                        fill: "rgba(255,255,255,0.1)",
                        stroke: game.custom._p.InnerTeams[2].Color.hex,
                        width: 5
                    },
                    {
                        type: "text",
                        position: [23, 0, 25, 40],
                        value: `${P[1][i].points}`,
                        color: "#CDE",
                    },
                ]
            }, ship);
            let f;
            Sync({
                id: "RoundPannelWinner" + i,
                position: [Center + 40, NoOposition + 20 + i * 5, 40, 10],
                visible: true,
                components: [{
                        type: "box",
                        position: [5, 0, 20, 40],
                    fill: W[i] == game.custom._p.InnerTeams[1].Color.name ? game.custom._p.InnerTeams[1].Color.hex : (W[i] == game.custom._p.InnerTeams[2].Color.name ? game.custom._p.InnerTeams[2].Color.hex : "rgba(255,255,255,0.4)")
                    },
                    {
                        type: "text",
                        position: [6, 0, 25, 40],
                        value: `${W[i]}`,
                        color: "#CDE",
                        align: "left"
                    },
                ]
            }, ship);
        }
    }
    for (let ship of game.ships) {
        Sync({
            id: "RoundPannelWinner",
            position: [Center + 30, NoOposition + 5, 40, 10],
            visible: true,
            components: [{
                    type: "box",
                    position: [2.5, 50, 20, 40],
                    fill: W[i] == game.custom._p.InnerTeams[1].Color.name ? game.custom._p.InnerTeams[1].Color.hex : (W[i] == game.custom._p.InnerTeams[2].Color.name ? game.custom._p.InnerTeams[2].Color.hex : "rgba(255,255,255,0.4)")
                },

                {
                    type: "text",
                    position: [0, 0, 25, 40],
                    value: `Winner`,
                    color: "#CDE",
                },
                {
                    type: "text",
                    position: [0, 50, 25, 40],
                    value: Winner,
                    color: "#CDE",
                },

            ]
        }, ship);
        Sync({
            id: "Congratulations",
            position: [35, NoOposition + 50, 50, 50],
            visible: true,
            components: [{
                    type: "text",
                    position: [0, 0, 60, 60],
                    value: `Congratulations to everyone!`,
                    color: "#CDE",
                    align: "center"
                },
                {
                    type: "text",
                    position: [10, 20, 40, 40],
                    value: "Thanks for playing SA! ❤️",
                    color: "#CDE",
                    align: "center"
                },
                {
                    type: "text",
                    position: [0, 35, 60, 60],
                    value: "A mod brought to you by Wolfan, Glitch and Korom.",
                    color: "#CDE",
                    align: "center"
                },
            ]
        }, ship);
    }
};

let Timer = {
    id: "Timer",
    position: [43.5, 1, 20, 10],
    visible: true,
    components: [{
            type: "text",
            position: [5, 0, 60, 60],
            value: `${game.custom._p.Global.Seconds}`,
            color: "#CDE"
        },
        {
            type: "text",
            position: [5, 40, 60, 60],
            value: `${game.custom._p.Global.MoreInfos}`,
            color: "#CDE"
        },
    ]
};

// RADAR
/*

    Note : rework radar positioning

*/
let RadarPos = [
    [4, 7, 88, 86],
    [10, 10, 80, 80],
    [13, 13, 73, 73],
    [16, 16, 68, 68],
    [20, 20, 61, 61],
    [23, 23, 54, 54],
    [27, 27, 47, 47],
    [30, 30, 40, 40],
    [34, 34, 32, 32]
];
let Radar = {
    id: "radar_background",
    position: [2, 10, 5, 5],
    visible: true,
    components: [{
        type: "box",
        position: [4, 7, 88, 86],
        fill: "rgba(151, 151, 151, 0.1)",
        stroke: "rgba(249, 0, 0, 0.8)",
        width: 4
    }]
};



let InnerEndRound = function(game) {
    /*

        This function aims to end the active round. 

    */
    for (let i = 1; i < 3; i++) { // From team 1 to 2
        /*

            Generating an object gathering all informations for the teams: amount of points and if the 
            team won or not.

        */
        let m = {
            points: game.custom._p.InnerTeams[i].Points.ActualRound,
            won: null
        };

        const team1Points = game.custom._p.InnerTeams[i].Points.ActualRound;
        const team2Points = game.custom._p.InnerTeams[(i) % 2 + 1].Points.ActualRound;
        
        
        if (team1Points > team2Points) {
            m.won = true;
            game.custom._p.InnerTeams[i].Points.All++;
        } else {
            m.won = false;
        }
        
        game.custom._p.InnerTeams[i].Points.Global.push(m);
    }

    /*

        Setting the global variables and the teams variables 

    */
    game.custom._p.InnerTeams[1].Points.ActualRound = 0; // Current round = 0
    game.custom._p.InnerTeams[2].Points.ActualRound = 0; // Current round = 0
    game.custom._p.InnerTeams[1].Players.InnerReady = 0; // No players are ready to play
    game.custom._p.InnerTeams[2].Players.InnerReady = 0; // No players are ready to play
    game.custom._p.Inner.AmountRound = 0;
    game.custom._p.Global.Seconds = 0;
    game.custom._p.Global.MoreInfos = "Waiting for players";
    game.custom._p.Map.Reducing = 2;
    game.custom.Rnd_Points = 2;
    Radar.components[0].position = RadarPos[0];
    for (let ship of game.ships) {
        /*

            All ships set back
        
        */
        ship.set({
            x: 0,
            y: 0,
            idle: false,
            collider: false,
            type: 101,
            crystals: 0,
            stats: 11111111
        });
        ship.setUIComponent(Radar);
        ship.custom._p.Stats.Inner.Waiting = false;
        ship.custom._p.Stats.Inner.Spectator = true;
        Sync(Lobby, ship);
        Unsync(['Points',"Timer"], ship);
        Unsync(["601", "602", "603", "604", "605", "606", "607", "608"], ship);
        Sync({
            id: "Timer",
            position: [43.5, 1, 20, 10],
            visible: true,
            components: [{
                    type: "text",
                    position: [5, 0, 60, 60],
                    value: `${game.custom._p.Global.Seconds}`,
                    color: "#CDE"
                },
                {
                    type: "text",
                    position: [5, 40, 60, 60],
                    value: `${game.custom._p.Global.MoreInfos}`,
                    color: "#CDE"
                },
            ]
        }, ship);
        if (ship.custom._p.Stats.Inner.ShipInfos.Last.length >= s.length) {
            ship.custom._p.Stats.Inner.ShipInfos.Last = [];
        }
    }
    game.custom._p.Global.Phase = 0; // Returning to the waiting for players phase
    game.custom._p.Global.Seconds = 0; // 0 seconds, init
    game.setCustomMap(game.custom._p.Map.Pattern); // Reseting the map to its original pattern
    if (game.custom._p.Inner.Round >= game.custom._p.Inner.MaximumRounds) {
        /*

            In case the maximum amount of rounds is reached, 
            we end the game with phase 10, for 30 seconds.
            All ships are now spectators, not waiting, set to type 101,
            without collider and without the idle mode,
            and the game generates the end scoreboard.

        */
        game.custom._p.Global.Seconds += 30;
        game.custom._p.Global.Phase = 10;
        game.custom._p.Global.MoreInfos = "Closing game";
        for (let ship of game.ships) {
            Unsync(s, ship);
            Unsync(["Points", "Timer", "WaitersCount","Lobby"], ship);

            ship.set({
                x: 0,
                y: 0,
                type: 101,
                collider: false,
                idle: false,
                crystals: 0,
            })
            ship.custom._p.Stats.Inner.Waiting = false;
            ship.custom._p.Stats.Inner.Spectator = true;
            ship.custom.countedThisRound = false;
            GenerateEndScoreboard(game);
        }
    }
};

let TimerRoundStart = function(game) {
    /*

        This timer is made in order to wait for the start of the rounds.

    */
    if (game.custom.value_starting_wait === true && game.custom.value_wait_count > 0) {
        for (let ship of game.ships) {
            Sync({
                id: "Timer",
                position: [43.5, 1, 20, 10],
                visible: true,
                components: [{
                        type: "text",
                        position: [5, 0, 60, 60],
                        value: `${game.custom.value_wait_count}`,
                        color: "#CDE"
                    },
                    {
                        type: "text",
                        position: [5, 40, 60, 60],
                        value: `Starting the round`,
                        color: "#CDE"
                    },
                ]
            }, ship);
        }
        game.custom.value_wait_count--;
    }
}

function generateRandom(min, max, exclude) {
    let random;
    while (!random) {
        const x = Math.floor(Math.random() * (max - min + 1)) + min;
        if (exclude.indexOf(x) === -1) random = x;
    }
    return random;
}
var teamsSCORES = [
    [], // team 0
    [], // team 1
];
let Scoreboard = function(game) {
    let scoreboard = {
        id: "scoreboard",
        components: [

        ]
    };
    scoreboard.components = [];
    if (game.custom._p.Global.Phase != 10) {
        scoreboard.components.push(
        {
            type: "box",
            position: [50.5, 0, 0.5, 100],
            fill: "rgba(255,255,255,1)"
        },
          {
            type: "box",
            position: [0, 0, 49, 10],
            fill: game.custom._p.InnerTeams[1].Color.superlighter,
        }, {
            type: "box",
            position: [51, 0, 49, 10],
            fill: game.custom._p.InnerTeams[2].Color.superlighter,
        },
          {
            type: "text",
            position: [51, 0, 49, 10],
            value: game.custom._p.InnerTeams[2].Color.name,
            color: '#CDE'
          }, 
          {
            type: "text",
            position: [0, 0, 49, 10],
            value: game.custom._p.InnerTeams[1].Color.name,
            color: '#CDE',
          }, 
        );
        teamsSCORES.forEach(team => team.splice(0));
        for (let ship of game.ships) {
            if (ship.custom._p && ship.custom._p.Stats.Inner.Team !== -1) {
                let team = teamsSCORES[ship.custom._p.Stats.Inner.Team];
                if (team) team.push(ship);
            }
        }
        teamsSCORES.forEach(team => team.sort((a, b) => b.score - a.score).splice(10));
        teamsSCORES.forEach((team, index) => {
            let teamOffsetY = 50 * index;
            teamOffsetY += 12;
            let offset = index === 0 ? 5 : 55;
            let offsetplus = index === 0 ? 0 : 1;
            team.forEach((ship, sIndex) => {
                scoreboard.components.push(
                  {
                    type: "text",
                    position: [32 + offsetplus + offset, 11+  sIndex * 10.5, 15, 7],
                    value: ship.custom._p.Stats.Kills.Total,
                    color: "#CDE"
                    }, 
                  {
                    type: "text",
                    position: [offset, 11+  sIndex * 10.5, 34, 7],
                    value: ship.name,
                    align:"left",
                    color: ship.custom._p.Stats.Inner.Waiting ? "rgba(173, 255, 129, 1)":"rgba(255,255,255,1)"
                }, )
            })
        })
    }
    game.setUIComponent(scoreboard);
};


let OkHide = {
    id: "OkHide",
    position: [42.5, 30, 15, 7],
    visible: true,
    clickable: true,
    shortcut: "H",
    components: [{
            type: "box",
            position: [0, 0, 88, 86],
            fill: "rgba(255, 255, 255, 0.1)",
            stroke: "rgba(255, 255, 255, 0.1)",
            width: 4
        },
        {
            type: "text",
            value: "LET'S GO!",
            position: [6, 20, 50, 50],
            color: "rgba(255, 255, 255, 0.8)",
        },
        {
            type: "text",
            value: "[H]",
            position: [55, 35, 45, 35],
            color: "rgba(255, 255, 255, 0.8)",
        }
    ]
};

var tick = function(game) {
    if (game.step % 15 === 0) {
        /*
            Always update the scoreboard in order to track score count.
        */
        Scoreboard(game);

        // If the phase is still the waiting for players to duel phase
        for (let ship of game.ships) {
            ship.setUIComponent(Radar);
            if (ship.custom.Init != true) {
                ship.custom.ship_check = 0;
                game.custom._p.Functions.Ship.Init(ship);
            } else {
                ship.set({
                    score: ship.custom._p.Stats.Kills.Total
                })
            }

            /*

                In case the ship still has no team to go into: this shows 
                the possible teams to join and is always actualized in order
                to keep the lock good.

            */
            if (ship.custom._p.Stats.Inner.Team === -1) {
                for (let i = 0; i < 2; i++) {
                    const autoLock = game.custom._p.Inner.AutoLock;
                    const team1Players = game.custom._p.InnerTeams[i + 1].Players.InnerPresent;
                    const team2Players = game.custom._p.InnerTeams[(i + 1) % 2 + 1].Players.InnerPresent;
                    
                    let v;
                    if (autoLock && team1Players > team2Players) {
                        v = "Full";
                    } else {
                        v = `Press ${i+1}`;
                    }

                    Sync({
                        id: `Team${i}`,
                        position: [40 + i * 10, 45, 8, 14],
                        clickable: true,
                        shortcut: `${i+1}`,
                        visible: true,
                        components: [{
                                type: "box",
                                position: [0, 0, 100, 100],
                                fill: game.custom._p.InnerTeams[i + 1].Color.hex,
                                stroke: "#CDE",
                                width: 2
                            },
                            {
                                type: "text",
                                position: [10, 28, 80, 30],
                                value: game.custom._p.InnerTeams[i + 1].Color.name,
                                color: "#CDE"
                            },
                            {
                                type: "text",
                                position: [20, 70, 60, 20],
                                value: v,
                                color: "#CDE"
                            }
                        ]
                    }, ship);
                }
            }


            if (game.custom._p.Global.Phase === 0) { 

                // If the ship is well initialized and has a team between 1 and 2
                if (ship.custom.Init && ship.custom._p.Stats.Inner.Team != -1) {
                    // Constantly showing the amount of players ready to play
                    // Note : remake the WaitersCount board UI
                    const ReadyOne = game.custom._p.InnerTeams[1].Players.InnerReady;
                    const ReadyTwo = game.custom._p.InnerTeams[2].Players.InnerReady;
                    const Estimaton = Math.min(ReadyOne,ReadyTwo);
                    let Estimating = "";
                    if (Estimaton === 0) {
                        Estimating = ""
                    } else {
                        Estimating = `Next round is estimated to be a ${Estimaton}vs${Estimaton}`;
                    }
                    ship.setUIComponent({
                      id: "WaitersCount",
                      position: [36, 68, 28, 5],
                      visible: true,
                      components: [{
                        type: "text",
                        position: [0, 0, 100, 100],
                        value: Estimating,
                        color: "#CDE"
                      }]
                    });
                }
            } 
        }

        /*

            This part manages the result showing in the lobby.

        */
        if (game.custom._p.InnerTeams[1].Points.Global.length >= game.custom._p.Inner.Round && game.custom._p.InnerTeams[2].Points.Global.length >= game.custom._p.Inner.Round) {
            let W = GenWinner(game.custom._p.Inner.Round, true);
            let c = "";
            if (W[0] === "None") {
                c = "#CDE";
            } else {
                if (W[0] === game.custom._p.InnerTeams[1].Color.name) {
                    c = game.custom._p.InnerTeams[1].Color.lighter;
                } else {
                    c = game.custom._p.InnerTeams[2].Color.lighter;
                }
            }
            for (let ship of game.ships) {
                let Sentencing = "";
                if (game.custom._p.Inner.Round === 0) {
                  Sentencing = "No rounds yet";
                } else {
                  Sentencing = `Next : round ${game.custom._p.Inner.Round != 0 ? game.custom._p.Inner.Round + 1: 0} of ${game.custom._p.Inner.MaximumRounds}`;
                }
                Sync({
                    id: `Rounds`,
                    position: [82.5, 29, 15, 25],
                    visible: true,
                    components: [{
                            type: "text",
                            position: [20, 50, 60, 20],
                            value: Sentencing,
                            color: "#CDE"
                        },
                        {
                            type: "text",
                            position: [5, 65, 90, 20],
                            value: `Leading team: ${W[0]}`,
                            color: c
                        }
                    ]
                }, ship);
            }
        }

        /*

            Constantly checking for the ongoing round, in case it ends.
            If so, InnerEndRound is triggered.

        */
        if (game.custom._p.Global.Phase >= 1) {
            if (
                (   
                    game.custom._p.InnerTeams[1].Points.ActualRound >= game.custom.Rnd_Points / 2 ||
                    game.custom._p.InnerTeams[2].Points.ActualRound >= game.custom.Rnd_Points / 2
                ) 
                && game.custom.Rnd_Points >= 2) {
                InnerEndRound(game);
                echo('ENDING ROUND');
            }
            if (game.custom._p.InnerTeams[1].Points.Global.length >= game.custom._p.Inner.Round && game.custom._p.InnerTeams[2].Points.Global.length >= game.custom._p.Inner.Round) {
                let W = GenWinner(game.custom._p.Inner.Round, true);
                let c = "";
                if (W[0] === "None") {
                    c = "#CDE";
                } else {
                    if (W[0] === game.custom._p.InnerTeams[1].Color.name) {
                        c = game.custom._p.InnerTeams[1].Color.lighter;
                    } else {
                        c = game.custom._p.InnerTeams[2].Color.lighter;
                    }
                }
            }
            for (let ship of game.ships) {
                let max_cargo = Math.round(ship.type/100) ** 2 * 20;
                if (ship.crystals === max_cargo && game.custom._p.Inner.GemGathering === true) {
                    ship.set({crystals : ship.crystals - 1});
                }
            }
        }

        /*

            This part of the code manages the way the Lobby works.

        */

        if (game.custom._p.Global.Phase === 0) {
            const teamOneReady = game.custom._p.InnerTeams[1].Players.InnerReady;
            const teamTwoReady = game.custom._p.InnerTeams[2].Players.InnerReady;

            /*

                If enough players are waiting, trigger the timing
            
            */
            if (teamOneReady >= 1 && teamTwoReady >= 1 && (teamOneReady + teamTwoReady >= 2)) {
                game.custom.value_starting_wait = true;
            }

            /*

                BUT, if there is actually not enough players anymore, stop the timing.

            */
            if (game.custom.value_starting_wait === true && (teamOneReady < 1 || teamTwoReady < 1)) {
                game.custom.value_starting_wait = false;
                game.custom.value_wait_count = game.custom.InitialTime;
                for (let ship of game.ships) {
                    Unsync(["Timer"], ship);
                }
            }


                /*

                    If the timer happen to lower to 0, the second phase of the game is triggered.

                */
                if (game.custom.value_starting_wait && game.custom.value_wait_count === 0) {
                    game.custom.value_starting_wait = false;
                    game.custom.value_wait_count = game.custom.InitialTime;
                    /*
                        The following part of the function gets the lower amount of 
                        players wanting to play in a team (for example, if one team
                        has 2 players and the other 3, the first team will be picked)
                        in order to understand the max amount of players for this round.
                        There are two teams, so the amount is multiplicated by 2.
                    */
                    let MaxPlayRnd = Math.min(teamOneReady, teamTwoReady) * 2;

                    if (MaxPlayRnd > game.custom._p.Inner.MAX) MaxPlayRnd = game.custom._p.Inner.MAX;

                    game.custom.Rnd_Points = MaxPlayRnd;

                    function PlayingShips() {
                        let WaitingUsers = [
                            [],
                            []
                        ];
                        for (let ship of game.ships) {
                            // If the player is waiting
                            if (ship.custom._p.Stats.Inner.Waiting) {
                                // The game add it to the waiting list
                                WaitingUsers[ship.team].push(ship);
                            }
                        }
                        const WaitersTeamOne = WaitingUsers[0];
                        const WaitersTeamTwo = WaitingUsers[1];

                        // Randomly sorting each player
                        WaitersTeamOne.sort((a, b) => 0.5 - Math.random());
                        WaitersTeamTwo.sort((a, b) => 0.5 - Math.random());

                        echo('Converting the all-list of "I wish to play" players: see console.');
                        console.log(WaitingUsers);

                        let PositionRendering = game.custom._p.Functions.Positions(MaxPlayRnd / 2);
                        let a = [
                            MaxPlayRnd / 2,
                            MaxPlayRnd / 2
                        ];
                        

                        for (let i = 0; i < 2; i++) {
                            for (let ship of WaitingUsers[i]) {
                                // If the ship actually waits, exists, and is in a proper team
                                if (ship.custom._p.Stats.Inner.Waiting && a[ship.team] != 0 && ship) {
                                    // Reminder : "s" is the variable storing all the vanilla ships
                                    // Selecting a random ship in the list of the non-used ships of the player
                                    let RandomShip = generateRandom(s[0], s[s.length - 1], ship.custom._p.Stats.Inner.ShipInfos.Last);

                                    ship.custom.ship_check = RandomShip;

                                    ship.set({
                                        y: ship.team === 1 ? 200 : -200,
                                        x: PositionRendering[a[ship.team] - 1],
                                        shield: 1000,
                                        generator: 1000,
                                        // Correct angle to face each-others
                                        angle: ship.team === 1 ? 90 : 270,
                                        vx: 0,
                                        vy: 0,
                                        crystals: 500,
                                        idle: true,
                                        type: RandomShip,
                                        stats: 66666666
                                    });
                                    a[ship.team]--;

                                    ship.custom.countedThisRound = true;
                                    echo('Check: team N°' + ship.team + " now has " + a[ship.team] + " slot left to complete.")

                                    for (let i = 0; i < s.length; i++) {
                                        let Stats = [
                                            JSON.parse(game.custom._p.Inner.Ships[i + 1]).specs.shield.capacity[1],
                                            JSON.parse(game.custom._p.Inner.Ships[i + 1]).specs.generator.capacity[1],
                                            JSON.parse(game.custom._p.Inner.Ships[i + 1]).specs.ship.speed[1],
                                        ];
                                        Sync({
                                            id: `${s[i]}`,
                                            position: [8 + i * 9, 80, 8, 14],
                                            clickable: true,
                                            shortcut: `${i+1}`,
                                            visible: true,
                                            components: [{
                                                    type: "box",
                                                    position: [0, 0, 100, 100],
                                                    fill: 
                                                        game.custom._p.Inner.ShipLock === true ? 
                                                        (ship.custom._p.Stats.Inner.ShipInfos.Last.includes(s[i]) ?  "rgba(82, 81, 81, 0.66)" : game.custom._p.InnerTeams[ship.team + 1].Color.hex)
                                                        : game.custom._p.InnerTeams[ship.team + 1].Color.hex,
                                                    stroke: "#CDE",
                                                    width: 2
                                                },
                                                {
                                                    type: "text",
                                                    position: [20, 15, 60, 20],
                                                    value: _s[i],
                                                    color: "#CDE"
                                                },
                                                {
                                                    type: "text",
                                                    position: [5, 50, 90, 80],
                                                    value: `🛡${Stats[0]}  🗲${Stats[1]}  💨${Stats[2]}`,
                                                    color: "rgba(255,255,255,1)"
                                                },

                                                {
                                                    type: "text",
                                                    position: [20, 30, 60, 50],
                                                    value: game.custom._p.Inner.ShipLock === true ? (
                                                        ship.custom._p.Stats.Inner.ShipInfos.Last.includes(s[i]) ? `[✖]` : `[${i+1}]`) :
                                                        `[${i+1}]`
                                                        ,
                                                    color: "rgba(255,255,255,0.4)"
                                                },

                                            ]
                                        }, ship);
                                    }
                                } else if (ship.custom._p.Stats.Inner.Waiting && a[ship.team] === 0) {
                                    if (ship.type < 600) {
                                        ship.custom._p.Stats.Inner.Waiting = false;
                                        U(ship, ship.custom._p.Stats.Inner.Waiting)
                                    }
                                }
                            }
                        }
                    }
                    PlayingShips();

                    /*
                    
                        Reminder of the initial condition:
                            game.custom.value_starting_wait && game.custom.value_wait_count === 0 

                        So, if the conditions are ok AND if the amount of played rounds do not 
                        exceed the maximum amount of rounds, the game can start a new round.

                    */
                    if (game.custom._p.Inner.Round <= game.custom._p.Inner.MaximumRounds) {
                        // A new round starts
                        game.custom._p.Inner.Round++;
                        game.custom._p.Global.Phase = 1;

                        // The users get to choose a ship 
                        game.custom._p.Global.Seconds += game.custom.StartingTime;

                        game.custom._p.InnerTeams[1].Points.ActualRound = 0;
                        game.custom._p.InnerTeams[2].Points.ActualRound = 0;
                        for (let ship of game.ships) { 
                            Sync({
                            id: `Rounds`,
                            position: [82.5, 27, 15, 25],
                            visible: true,
                            components: [{
                                    type: "text",
                                    position: [20, 50, 60, 20],
                                    value: `Round ${game.custom._p.Inner.Round} of ${game.custom._p.Inner.MaximumRounds}`,
                                    color: "#CDE"
                                }]
                            },ship);
                            Unsync(["Lobby", "WaitersCount"], ship);
                        };
                    }
                }
        } 
    }
    if (game.step % 60 === 0) {
        // Timer to wait until the round starts
        TimerRoundStart(game);

        // Timer : if the global timing is >= 1 
        if (game.custom._p.Global.Seconds >= 1) {
            game.custom._p.Global.Seconds--;
            for (let ship of game.ships) {
                Sync({
                    id: "Timer",
                    position: [44, 1, 20, 10],
                    visible: true,
                    components: [{
                            type: "text",
                            position: [5, 0, 60, 60],
                            value: `${game.custom._p.Global.Seconds}`,
                            color: "#CDE"
                        },
                        {
                            type: "text",
                            position: [5, 40, 60, 60],
                            value: `${game.custom._p.Global.MoreInfos}`,
                            color: "#CDE"
                        },
                    ]
                }, ship);
            }
        } 
        // Else, if it reaches 0
        else if (game.custom._p.Global.Seconds < 1) {
            // If the game is in the "waiting to fight" phase:
            if (game.custom._p.Global.Phase === 1) {
                for (let ship of game.ships) {
                    ship.setUIComponent({id:"WaitersCount",visible:false})
                    if (ship.custom._p.Stats.Inner.Waiting) {
                        ship.set({
                            idle: false,
                            collider: true,
                            y: ship.team === 1 ? 200 : -200,
                            x: ship.x,
                            shield: 1000,
                            generator: 1000,
                            angle: ship.team === 1 ? 90 : 270,
                            vy: 0,
                            vx: 0,
                            crystals: 500,
                            stats: 66666666
                        });
                        // Pushing the lasty used ship
                        ship.custom._p.Stats.Inner.ShipInfos.Last.push(ship.custom.ship_check);

                        // Hiding the ships components
                        Unsync(s, ship);

                        // Adding 1 to the played rounds of the ship
                        ship.custom.playedRounds++;
                    }
                    // Spectator ships goes in the middle of the map
                    if (ship.type < 600 && game.custom._p.Inner.Spectating === true) {
                        ship.set({idle:false,x:0,y:0});
                    }
                    // Initializing the points count
                    Sync({
                        id: "Points",
                        position: [35, 10, 40, 10],
                        visible: true,
                        components: [{
                                type: "text",
                                position: [0, 25, 70, 60],
                                value: `${game.custom._p.InnerTeams[1].Points.ActualRound}`,
                                color: game.custom._p.InnerTeams[1].Color.hex
                            },
                            {
                                type: "text",
                                position: [5, 25, 70, 60],
                                value: `-`,
                                color: "#CDE"
                            },
                            {
                                type: "text",
                                position: [10, 25, 70, 60],
                                value: `${game.custom._p.InnerTeams[2].Points.ActualRound}`,
                                color: game.custom._p.InnerTeams[2].Color.hex
                            },
                        ]
                    }, ship);
                }

                // Setting the amount of seconds until the map become smaller
                game.custom._p.Global.Seconds = game.custom._p.Map.TimeReducing;

                // Fight phase
                game.custom._p.Global.Phase = 2;
                game.custom._p.Global.MoreInfos = "Reducing map";

            } 

            // Reminder : if seconds hits 0
            else if (game.custom._p.Global.Phase === 2) {
                // If the amount of reducing has not reached the maximum amount of reducing
                if (game.custom._p.Map.Reducing < game.custom._p.Map.MaxReducing) {
                    // Makes the map smaller
                    game.setCustomMap(game.custom._p.Functions.Reduction(game.custom._p.Map.Reducing));

                    // Adding one to the map reduction
                    game.custom._p.Map.Reducing++;

                    // Re-setting the amount of seconds until the map gets smaller
                    game.custom._p.Global.Seconds = game.custom._p.Map.TimeReducing;

                    // Actualizing the red barrier on the radar
                    Radar.components[0].position = RadarPos[game.custom._p.Map.Reducing - 2];
                    for (let ship of game.ships) ship.setUIComponent(Radar);
                } 

                // If the amount of reducing has reached the maximum amount of reducing 
                else {
                    // Setting the last round phase
                    game.custom._p.Global.Phase = 3;
                    game.custom._p.Global.MoreInfos = "Ending round";

                    // Setting the seconds to the last phase time (deathmatch until the round ends)
                    game.custom._p.Global.Seconds = game.custom._p.Global.LastPhase;

                }
            } 
            
            // Reminder : if seconds hits 0
            /* 
            
                If the phase is 3 and the seconds hits 0, it means the round
                ended with players who are still alive. So, the round ends 
                automatically.

            */
            else if (game.custom._p.Global.Phase === 3) {
                InnerEndRound(game);
            } 
            
            /* 
            
                If the timer of the phase 10 hits 0, it means the whole game ends

            */
            else if (game.custom._p.Global.Phase === 10) {
                for (let ship of game.ships) {
                    if (ship.custom._p.Stats.Inner.Team != -1) {
                        ship.gameover({
                            "Game ended": [`${game.custom.FinalWinner} won!`],
                            "Your team": [ship.team === 0 ?  game.custom._p.InnerTeams[1].Color.name : game.custom._p.InnerTeams[2].Color.name],
                            " ": " ",
                            "Kills": [ship.custom._p.Stats.Kills.Total],
                            "Deaths ": [ship.custom._p.Stats.Deaths.Total],
                            "K/D ~": [`${Math.round(ship.custom._p.Stats.Kills.Total / ship.custom._p.Stats.Deaths.Total)} / ${Math.round(ship.custom._p.Stats.Deaths.Total / ship.custom._p.Stats.Kills.Total)}`],
                            " ": " ",
                            "Team Rounds": [game.custom._p.InnerTeams[ship.team + 1].Points.All],
                            "Played Rounds": [ship.custom.playedRounds],
                            " ": " ",
                            "A mod brought to you by": "Naf, Glitch, Korom",
                        })
                    } else {
                        ship.gameover({
                            "Game ended": "",
                            "":"",
                            "Thanks for joining!":""
                        });
                    }

                }
            }
        }
    }

};

let U = function(ship, p) {
    ship.setUIComponent({
        id: "Lobby",
        position: [37.5, 75, 25, 10],
        clickable: true,
        shortcut: "L",
        visible: true,
        components: [{
                type: "box",
                position: [0, 0, 100, 100],
                fill: "rgba(151, 151, 151, 0.2)",
                stroke: p ? "rgba(249, 0, 0, 0.8)" : "rgba(0, 249, 2, 0.8)",
                width: 4
            },
            {
                type: "box",
                position: [5, 15, 1, 30],
                fill: "#CDE",
                stroke: "#CDE",
                width: 2
            },
            {
                type: "text",
                position: [0, 14.5, 40, 35],
                value: p ? "PLAY" : "LEAVE",
                color: "#CDE"
            },
            {
                type: "text",
                position: [5, 40, 80, 60],
                value: p ? "Press this button to enter fights" : "Press this button to leave fights",
                color: "#CDE"
            },
            {
                type: "text",
                position: [54, 54, 80, 40],
                value: `[L]`,
                color: "#CDE"
            }
        ]
    });
};

function ActualizePoints(game) {
    for (let ship of game.ships) {
        Sync({
            id: "Points",
            position: [35, 10, 40, 10],
            visible: true,
            components: [{
                    type: "text",
                    position: [0, 25, 70, 60],
                    value: `${game.custom._p.InnerTeams[1].Points.ActualRound}`,
                        color: game.custom._p.InnerTeams[1].Color.hex
                },
                {
                    type: "text",
                    position: [5, 25, 70, 60],
                    value: `-`,
                    color: "#CDE"
                },
                {
                    type: "text",
                    position: [10, 25, 70, 60],
                    value: `${game.custom._p.InnerTeams[2].Points.ActualRound}`,
                        color: game.custom._p.InnerTeams[2].Color.hex
                },
            ]
        }, ship);
    }
} 

function SetSpectate(ship) {
    ship.set({
        x: 0,
        y: 0,
        type: 101,
        collider:false
    });
    ship.custom._p.Stats.Inner.Died = false;
    ship.custom._p.Stats.Inner.Spectator = true;
    ship.custom._p.Stats.Inner.Waiting = false;
    ship.custom.countedThisRound = false;
    
} 

this.event = function(event, game) {
    let ship = event.ship;
    let killer = event.killer;
    let component = event.id;
    const Phase = game.custom._p.Global.Phase;
    const MaxPlayers = game.custom._p.Inner.MaximumPlayers;

    switch (event.name) {
        case "ui_component_clicked":
            if (component.includes("Team")) {
                let n = Number(component.replace('Team', ''));
                n++;
                let Condition = false;
                if (game.custom._p.Inner.AutoLock === true) {
                    if (game.custom._p.InnerTeams[n].Players.InnerPresent <= game.custom._p.InnerTeams[(n) % 2 + 1].Players.InnerPresent) {
                        Condition = true;
                    }
                } else {
                    Condition = true;
                }
                if (Condition) {
                    ship.custom._p.Stats.Inner.Team = Number(n) - 1;
                    
                    Unsync(["Team0", "Team1"], ship);
                    ship.set({
                        collider: false,
                        idle: false,
                        team: Number(n) - 1,
                        hue: game.custom._p.InnerTeams[Number(n)].Color.hue
                    });
                    game.custom._p.InnerTeams[Number(n)].Players.InnerPresent += 1;
                    ship.instructorSays("Welcome, fighter, to the Team duels!.\nIf you want to take part in a fight, use the 'Lobby' button (to get in or out a round).\nGood luck and enjoy your fights!", n === 1 ? game.custom._p.InnerTeams[1].Color.leader : game.custom._p.InnerTeams[2].Color.leader);
                    OkHide.components[0].fill = game.custom._p.InnerTeams[n].Color.hex;
                    ship.setUIComponent(OkHide);
                    Sync(Lobby, ship);
                }
            } 
            
            else if (component.includes('6') && ship.type != Number(component)) {
                if (
                    game.custom._p.Inner.ShipLock === false ||
                    (game.custom._p.Inner.ShipLock === true && ship.custom._p.Stats.Inner.ShipInfos.Last.includes(Number(component)) !== true)) {
                        ship.custom.ship_check = Number(component);
                        ship.set({
                            type: ship.custom.ship_check,
                            stats: 66666666,
                            crystals: 500,
                            generator: 0,
                            shield: 1000
                        });
                }

            } 
            
            else if (component === "Lobby") {
                if (Phase === 0 && ship.alive && ship.custom._p.Stats.Inner.Died === false && ship.custom._p.Stats.Inner.Team != -1) {
                    let p = ship.custom._p.Stats.Inner.Waiting;
                    U(ship, p);
                    ship.custom._p.Stats.Inner.Waiting = !p;
                    game.custom._p.InnerTeams[ship.team + 1].Players.InnerReady += p ? -1 : 1;
                }
            } 
            
            else if (component === "OkHide") {
                ship.hideInstructor();
                ship.setUIComponent({
                    id: "OkHide",
                    visible: false
                });
            }

            break;
        case "ship_destroyed":
            if (game.custom._p.Global.Phase >= 2 && game.custom._p.Global.Phase < 10) {
                if (killer) {
                    killer.custom._p.Stats.Kills.Total++;
                    if (!killer.custom._p.Stats.Kills.Round[game.custom._p.Inner.Round - 1]) {
                        killer.custom._p.Stats.Kills.Round.push(1);
                    } else {
                        killer.custom._p.Stats.Kills.Round[game.custom._p.Inner.Round - 1]++;
                    }
                }
                if (ship.custom.countedThisRound && ship.custom._p.Stats.Inner.Waiting === true){ 
                  game.custom._p.InnerTeams[((ship.team + 1) % 2 + 1)].Points.ActualRound++;
                  ActualizePoints(game);
                };
            }

            ship.custom._p.Stats.Inner.Died = true;
            ship.custom._p.Stats.Inner.Spectator = true;
            ship.custom._p.Stats.Deaths.Total++;
            ship.custom._p.Stats.Inner.Waiting = false;
            ship.custom.countedThisRound = false;

            break;
        case "ship_spawned":
            SetSpectate(ship);
            if (game.custom._p.Global.Phase > 1 && game.custom._p.Inner.Spectating === false) {
                ship.set({
                    idle:true
                });
            }
            break;
        case "ship_disconnected":
            if (ship.custom._p.Stats.Inner.Team != -1) {
              let team = ship.team;

              if (ship.custom._p.Stats.Inner.Waiting === true) game.custom._p.InnerTeams[team + 1].Players.InnerReady--;
              game.custom._p.InnerTeams[team + 1].Players.InnerPresent--;

              if (game.custom._p.Global.Phase >= 1 && ship.type >= 600 && ship.custom._p.Stats.Inner.Waiting === true && ship.custom.countedThisRound) {
                ship.custom.countedThisRound = false;
                ActualizePoints(game);
              } else if (game.custom._p.Global.Phase === 1 && ship.custom._p.Stats.Inner.Waiting) {
                  for (let ship of game.ships) {
                    SetSpectate(ship);
                    Unsync( s, ship);
                    Sync(Lobby, ship);
                  }
                  game.custom._p.Global.Phase = 0; // Returning to the waiting for players phase
                  game.custom._p.Global.Seconds = 0; // 0 seconds, init
                  game.setCustomMap(game.custom._p.Map.Pattern); // Reseting the map to its original pattern
              }
            }
            break;
    }
};



// Ship disconnecting code
var internals_init = function() {
    if (game.custom.internals_init) {
        return;
    }
    const modding = game.modding;
    const internals = Object.values(modding).find(val => val && typeof val.shipDisconnected === "function");
    if (!internals) {
        modding.terminal.error("Error: modding internals object not found");
        return;
    }
    if (!internals.shipDisconnected.old) {
        function shipDisconnected({
            id
        } = {}) {
            if (modding.context.event && id) {
                var ship = game.findShip(id);
                if (ship) {
                    modding.context.event({
                        name: "ship_disconnected",
                        ship
                    }, game);
                }
            }
            return shipDisconnected.old.apply(this, arguments);
        }
        shipDisconnected.old = internals.shipDisconnected;
        internals.shipDisconnected = shipDisconnected;
    }
    game.custom.internals_init = true;
};

this.tick = function(game) {
    this.tick = tick;
    internals_init();
    this.tick(game);
};
