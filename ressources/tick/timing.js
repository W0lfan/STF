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