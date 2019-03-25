import React, { Component } from "react";
import P5Wrapper from "./P5Wrapper";
import Sim2 from "./sketch2";

class Simulations2 extends Component {
  state = {
    start: false,
    reset: false,
    degree: 30,
    radius: 25,
    velocity: 10,
    Gravitational: 9.9
  };
  render() {
    const { start } = this.state;
    return (
      <div className="row">
        <div className="col-9">
          <P5Wrapper sketch={Sim2} p5Props={this.state} />
        </div>

        <div className="col-3">
          <table className="table table-responsive mt-2 fontify">
            <thead className="thead-dark">
              <tr>
                <td>Select</td>
                <td>Values</td>
                <td />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Degree</td>
                <td>
                  <input
                    min={0}
                    max={90}
                    type="range"
                    name="degree"
                    value={this.state.degree}
                    onChange={this.handleChange}
                    disabled={start}
                  />
                </td>
                <td>{this.state.degree}</td>
              </tr>
              <tr>
                <td>Radius</td>
                <td>
                  <input
                    min={25}
                    max={75}
                    type="range"
                    name="radius"
                    value={this.state.radius}
                    onChange={this.handleChange}
                    disabled={start}
                  />
                </td>
                <td>{this.state.radius}</td>
              </tr>
              <tr>
                <td>Velocity</td>
                <td>
                  <input
                    min={5}
                    max={30}
                    type="range"
                    name="velocity"
                    value={this.state.velocity}
                    onChange={this.handleChange}
                    disabled={start}
                  />
                </td>
                <td>{this.state.velocity}</td>
              </tr>
              <tr>
                <td>Gravitation</td>
                <td>
                  <input
                    min={5}
                    max={20}
                    type="range"
                    name="Gravitational"
                    value={this.state.Gravitational}
                    onChange={this.handleChange}
                    step={0.1}
                    disabled={start}
                  />
                </td>
                <td>{this.state.Gravitational}</td>
              </tr>
            </tbody>
          </table>
          <form>
            <button
              className="btn btn-dark m-2"
              type="button"
              name="start"
              value={this.state.start}
              onClick={this.ButtonClick}
              disabled={this.state.start}
            >
              Start
            </button>
            <button
              className={
                start ? "btn btn-primary m-2" : "btn btn-dark m-2"
              }
              type="button"
              name="reset"
              value={this.state.reset}
              onClick={this.ButtonClickR}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    );
  }
  ButtonClick = event => {
    const { value, name } = event.target;
    this.setState({ start: true });
    this.setState({ reset: false });
  };
  ButtonClickR = event => {
    const { value, name } = event.target;
    this.setState({ start: false });
    this.setState({ reset: true });
  };
  handleChange = event => {
    const {
      target: { name, value }
    } = event;
    //console.log(value);
    this.setState({ [name]: value });
  };
}

export default Simulations2;
