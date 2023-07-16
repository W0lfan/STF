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