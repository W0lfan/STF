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