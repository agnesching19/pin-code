import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      randomPins: ''
    };

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.clearCode = this.clearCode.bind(this)
  }

  handleButtonClick(e) {
    const value = e.target.value;
    let code = this.state.code;
    code += value;

    if (code.split('').length === 1) {
      this.setState({ code: code });
    } else if (code.split('').length === 2) {
      this.setState({ code: '*' + code.split('')[1] });
    } else if (code.split('').length === 3) {
      this.setState({ code: '**' + code.split('')[2] });
    } else if (code.split('').length === 4) {
      this.setState({ code: '***' + code.split('')[3] });
    }
  }

  checkPin() {
    // Set up for checking pin with API later
    console.log('hey');
  }

  clearCode() {
    this.setState({ code: '' });
  }

  render() {
    return (
      <div>
        <p className='screen'>{this.state.code}</p>
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
        <button className='square' onClick={this.checkPin}>OK</button>
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
