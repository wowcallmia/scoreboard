var PLAYERS = [
  {
name: "Dustin Tomlin",
score: 31,
id:1,
  },
  {
name: "John Doe",
score: 33,
id:2,
  },
  {
name: "Some Guy",
score: 34,
id:3,
  },
];

function Header(props) {
  return (
    <div className="header">
    <h1>{props.title}</h1>
    </div>

  );
}
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};
function Counter(props){
  return(
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <div className= "counter-score"> {props.score} </div>
      <button className="counter-action increment"> + </button>
    </div>
  );


}
Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
};

function Player(props){
  return (
    <div className="player">
      <div className="player-name">
      {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} />

      </div>
    </div>
  )
}
Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
};


/*const App = React.createClass({
  render() */ function App(props) {
  return(
    <div className = "scoreboard">
    <Header title={props.title}/>
    <div className="players">
    {props.players.map(function(player){
      return <Player name={player.name} score = {player.score} key={player.id} />
    })}

      </div>
  </div>
);
}
App.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
  })).isRequired,
};
App.defaultProps = {
  title: "scoreboard"
}

ReactDOM.render(
  <App players={PLAYERS} />,
  document.getElementById('root')
)
