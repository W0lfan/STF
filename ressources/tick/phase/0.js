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