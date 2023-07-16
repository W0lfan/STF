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