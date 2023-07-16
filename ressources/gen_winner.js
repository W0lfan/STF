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