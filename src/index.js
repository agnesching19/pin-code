import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: ''
    };

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.clearCode = this.clearCode.bind(this)
  }

  handleButtonClick(e) {
    const value = e.target.value
    let code = this.state.code
    code += value
    this.setState({ code: code })
  }

  clearCode() {
    this.setState({ code: '' })
  }

  render() {
    return (
      <div>
        <p className='screen'> {this.state.code}</p>
        <button className='square' value={7} onClick={this.handleButtonClick}>7</button>
        <button className='square' value={8} onClick={this.handleButtonClick}>8</button>
        <button className='square' value={9} onClick={this.handleButtonClick}>9</button>
        <button className='square' value={4} onClick={this.handleButtonClick}>4</button>
        <button className='square' value={5} onClick={this.handleButtonClick}>5</button>
        <button className='square' value={6} onClick={this.handleButtonClick}>6</button>
        <button className='square' value={1} onClick={this.handleButtonClick}>1</button>
        <button className='square' value={2} onClick={this.handleButtonClick}>2</button>
        <button className='square' value={3} onClick={this.handleButtonClick}>3</button>
        <button className='square' onClick={this.clearCode}>clear</button>
        <button className='square' value={0} onClick={this.handleButtonClick}>0</button>
        <button className='square' onClick={this.clearCode}>OK</button>
      </div>
    );
  }
}

// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(12),
//     };
//   }
//   handleClick(i) {
//     const squares = this.state.squares.slice();
//     squares[i] = i;
//     this.setState({ squares });
//   }
//   renderSquare(i) {
//     return (
//       <Square
//         className='square'
//         value={this.state.squares[i]}
//         onClick={() => this.handleClick(i)}
//       />
//     );
//   }
//   handleButtonOnClick(e) {
//     e.preventDefault();
//     // const screen = [];
//     const input = e.target.value;
//     // screen.push(input);
//     console.log(input);
//   }
//   render() {
//     return (
//       <div>
//         <form>
//           <div className="screen" type='password' name='option'>
//             <Screen />
//           </div>
//           <div className="board-row">
//             <button className='square' value='7' onClick={this.handleButtonOnClick}>7</button>
//             <button className='square' value='8' onClick={this.handleButtonOnClick}>8</button>
//             <button className='square' value='9' onClick={this.handleButtonOnClick}>9</button>
//           </div>
//           <div className="board-row">
//             <button className='square' value='4' onClick={this.handleButtonOnClick}>4</button>
//             <button className='square' value='5' onClick={this.handleButtonOnClick}>5</button>
//             <button className='square' value='6' onClick={this.handleButtonOnClick}>6</button>
//           </div>
//           <div className="board-row">
//             <button className='square' value='7' onClick={this.handleButtonOnClick}>1</button>
//             <button className='square' value='8' onClick={this.handleButtonOnClick}>2</button>
//             <button className='square' value='9' onClick={this.handleButtonOnClick}>3</button>
//           </div>
//           <div className="board-row">
//             <button className='square' id='clear' onClick={() => alert('click')}>X</button>
//             <button className='square' value='0' onClick={this.handleButtonOnClick}>0</button>
//             <button className='square' id='confirm' type='submit' value='Submit'>OK</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

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
