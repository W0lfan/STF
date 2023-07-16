# Starblast Arena: Team Fights
## About
The Starblast Arena is an exciting mode in Starblast where players engage in team-based battles against each other. Currently, each match can accommodate up to 12 players. This mode utilizes vanilla ships, providing a level playing field for all participants.

One key feature of the Starblast Arena is ship lock customization. When a player chooses a ship to use in battle, they will be unable to select that same ship again, unless the round count reaches 7 or more. This adds an element of strategy and variety to the gameplay, as players must carefully consider their ship choices throughout the match.


## What's new?
In this enhanced version of the Starblast Arena, we have made **improvements** to enhance code **readability** and added detailed comments throughout to provide a better understanding of its functionality.

We have also revamped some of the user interfaces (UI) to improve the overall user experience. Additionally, the code now supports a wide range of custom parameters, allowing for greater flexibility and customization.


## How I can customize the mode
You can modify certain game parameters in the Starblast Arena to customize your gameplay experience. Here are the available parameters and their descriptions:
```js
game.custom.InitialTime = 10; // The time before the ship selection phase starts
game.custom.StartingTime = 15; // The time before the round starts
game.custom.MapReducing = 15; // The time before the map size reduces

// In the game.custom._p.Inner
MaximumRounds // The number of rounds played in a single game. Note that the current code may not support a high number of rounds, as the end scoreboard may not fit all the elements.
AutoLock // Set to true or false. If true, players are forced to choose a team; if false, players have the option to choose or not choose a team.
Spectating // Set to true or false. If true, spectators are allowed to observe the rounds.
ShipLock // Set to true or false. If true, chosen ships are locked in subsequent rounds and can only be selected again after 7 plays.
```


## Contact
Please note that the information provided here is based on the existing version of the Starblast Arena. For any future updates or changes, it's recommended to consult the [official Starblast Arena server](https://discord.gg/Q5RTE3GF9Y ).


### Special thanks
- Naf, *game coding*
- Glitch & Koromgo, *ideas*
- All mod contributors, *game contributions*
- All initial players
