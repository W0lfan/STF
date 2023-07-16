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
}