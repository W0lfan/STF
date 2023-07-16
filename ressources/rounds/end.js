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