// Team Stats
//We want to create and extract information about your favorite sports team. 
//Basketball, soccer, tennis, or water polo, you pick it. 
//It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

//Once created, you can manipulate these data structures as well as gain insights from them. For example,
// you might want to get the total number of games your team has played, or the average score of all of their games.

const team = {
  _players:[{
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
},{
  firstName: 'Roger',
  lastName: 'Acosta',
  age: 30
},{
  firstName: 'Darianela',
  lastName: 'Piñeiro',
  age: 31
}
  ],
  _games:[{
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
},{
  opponent: 'Magallanes',
  teamPoints: 30,
  opponentPoints: 65
},{
  opponent: 'Cardenales',
  teamPoints: 72,
  opponentPoints: 50
}],
get players(){
  return this._players
},
get games(){
  return this._games
},
addPlayer(firstName,lastName,age){
  const player = {
    firstName,
    lastName,
    age
  };
this.players.push(player)
},
addGame(opponent,teamPoints,opponentPoints){
  const newGame = {
    opponent,
    teamPoints,
    opponentPoints
  };
   this._games.push(newGame)
}
}
team.addPlayer('Steph','Curry',28)
team.addPlayer('Lisa','Leslie',44)
team.addPlayer('Bugs','Bunny',76)

team.addGame('Aguilas', 20, 18);
team.addGame('Tiburones', 10, 25);
team.addGame('Caribes', 15, 12);

console.log(team._players)
console.log(team._games)