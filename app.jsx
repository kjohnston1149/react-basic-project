function Application() {
  return (
    <div className="scoreboard">
      <div className="header">
        <h1>Score Board</h1>
      </div>
      <div className="players">
        <div className="player">
          <div className="player-name">
            Kevin Johnston
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score"> 31 </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>
        <div className="player">
          <div className="player-name">
            Bil Smith
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <div className="counter-score"> 34 </div>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Application/>, document.getElementById('container'));
