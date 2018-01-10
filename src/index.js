import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: this.props.value,
//       name: this.props.name,
//     };
//   }
//   render() {
//     return (
//       <button className="square" name={this.props.name} onClick={this.props.onClick}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(12),
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = i;
    this.setState({squares: squares});
  }
  renderSquare(i) {
    return (
      <button
        className='square'
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      >
        {i}
      </button>
    );
  }
  handleEnterPin(i) {
    let pinCount
    let status = ''

    if (pinCount === 0) {
      pinCount ++;
      status = this.handleClick(i).text();
    }
    return status;
  }
  render() {
    // const status = '****';
    return (

      <div>
        <form>
          <input className="pin-input" type='text' name='option' />
          <div className="board-row">
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
          </div>
          <div className="board-row">
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
          </div>
          <div className="board-row">
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
          </div>
          <div className="board-row">
            {this.renderSquare('clear')}
            {this.renderSquare(0)}
            <button className='square'>enter</button>
          </div>
        </form>
      </div>
    );
  }
}

class EnterPin extends React.Component {
  render() {
    return (
      <div className="pin">
        <div className="pin-board">
          <Board />
        </div>
        <div className="pin-info">
          <div>{/* status */}</div>

        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <EnterPin />,
  document.getElementById('root')
);
