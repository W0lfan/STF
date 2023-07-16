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