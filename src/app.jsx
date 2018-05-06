import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      changeDue: '',
      alert: '',
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };

    this.onCalculate = this.onCalculate.bind(this);
    this.handleReceived = this.handleReceived.bind(this);
    this.handleDue = this.handleDue.bind(this);
  }

  handleDue(e) {
    this.setState({ amountDue: e.target.value });
  }

  handleReceived(e) {
    this.setState({ amountReceived: e.target.value });
  }

  onCalculate(e) {
    var amountDue = this.state.amountDue;
    var amountReceived = this.state.amountReceived;
    let change = amountReceived - amountDue;
    let dollars = Math.floor(change);
    var cents = (change - dollars) * 100;

    this.setState({ twenties: Math.floor(dollars / 20) });
    dollars = dollars % 20;

    this.setState({ tens: Math.floor(dollars / 10) });
    dollars = dollars % 10;

    this.setState({ fives: Math.floor(dollars / 5) });
    dollars = dollars % 5;

    this.setState({ ones: dollars });

    //cents
    this.setState({ quarters: Math.floor(cents / 25) });
    cents = cents % 25;

    this.setState({ dimes: Math.floor(cents / 10) });
    cents = cents % 10;

    this.setState({ nickels: Math.floor(cents / 5) });
    cents = cents % 5;

    this.setState({ pennies: Math.floor(cents) });

    this.setState({ changeDue: `The total change due is $${(change).toFixed(2)}` });

  }

  render() {
    return (
      <div className='container'>
        <h1>Change calculator</h1>
        <hr />
        <div className='row'>
          <div className='col-sm-4'>
            <div className='panel panel-default'>
              <div className='panel panel-heading panel-title'>Enter Information</div>
              <div className='panel-body'>
                <strong>How much is due?</strong>
                <br />
                <input
                  type='number'
                  name='amountDue'
                  placeholder='$0.00 USD'
                  onChange={this.handleDue}
                  value={this.state.amountDue} />
              </div>
              <div className='panel-body'>
                <strong>How much was received?</strong>
                <br />
                <input
                  type='number'
                  name='amountReceived'
                  placeholder='$0.00 USD'
                  onChange={this.handleReceived}
                  value={this.state.amountReceived} />
              </div>
              <div className='panel panel-default'>
                <div className='panel panel-footer'>
                  <button type='button'
                    className='btn btn-primary'
                    onClick={this.onCalculate}>Calculate</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='alert'>
              <div className='alert alert-success'>{this.state.changeDue}</div>
                <div className='container change-column'>
                  <div className='row'>
                    <div className='col-sm-3'>Twenties <br /><span>{this.state.twenties}</span></div>
                    <div className='col-sm-3'> Tens  <br /><span>{this.state.tens}</span></div>
                    <div className='col-sm-3'> Fives  <br /><span>{this.state.fives}</span></div>
                    <div className='col-sm-3'> Ones  <br /><span>{this.state.ones}</span></div>
                  </div>
                  <div className='row bottom'>
                    <div className='col-sm-3'> Quarters  <br /><span>{this.state.quarters}</span></div>
                    <div className='col-sm-3'> Dimes  <br /><span>{this.state.dimes}</span></div>
                    <div className='col-sm-3'> Nickels  <br /><span>{this.state.nickels}</span></div>
                    <div className='col-sm-3'> Pennies  <br /><span>{this.state.pennies}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
