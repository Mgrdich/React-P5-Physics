import React, { Component } from "react";
import P5Wrapper from "./P5Wrapper";
import simulu from "./sketch3";
import ReportCard from "./ReportCard";

class Simulations3 extends Component {
  state = {
    start: false,
    reset: false,
    degree: 30,
    radius: 25,
    coefficient: 0.1,
    Gravitational: 10,
    Mass: 25
  };
  col = () => {
    return {
      degree: this.state.degree,
      radius: this.state.radius,
      coefficient: this.state.coefficient,
      Gravitational: this.state.Gravitational
    };
  };

  fcol = () => {
    let theta = (this.state.degree * Math.PI) / 180;
    const { Gravitational, Mass, coefficient } = this.state;
    return {
      Vertical_Force: Mass * Gravitational * Math.sin(theta),
      Horizontal_Force: Mass * Gravitational * Math.cos(theta),
      Acceleration:
        Gravitational * (Math.sin(theta) - coefficient * Math.cos(theta)),
      Friction_Force: coefficient * Mass * Gravitational * Math.cos(theta)
    };
  };
  render() {
    const { start } = this.state;
    return (
      <>
        <div className="row">
          <div className="col-8">
            <P5Wrapper sketch={simulu} p5Props={this.state} />
          </div>

          <div className="col-4">
            <table className="table table-responsive mt-2  fontify">
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
                      min={1}
                      max={89}
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
                  <td>Coef. Friction</td>
                  <td>
                    <input
                      min={0.1}
                      max={0.9}
                      type="range"
                      name="coefficient"
                      value={this.state.coefficient}
                      onChange={this.handleChange}
                      disabled={start}
                      step={0.1}
                    />
                  </td>
                  <td>{this.state.coefficient}</td>
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
                      disabled={start}
                      step={1}
                    />
                  </td>
                  <td>{this.state.Gravitational}</td>
                </tr>
                <tr>
                  <td>Mass</td>
                  <td>
                    <input
                      min={1}
                      max={100}
                      type="range"
                      name="Mass"
                      value={this.state.Mass}
                      onChange={this.handleChange}
                      disabled={start}
                      step={1}
                    />
                  </td>
                  <td>{this.state.Mass}</td>
                </tr>
              </tbody>
            </table>
            <form>
              <button
                className="btn btn-dark m-2"
                type="button"
                name="start"
                value={start}
                onClick={this.ButtonClick}
                disabled={this.state.start}
              >
                Start
              </button>
              <button
                className={start ? "btn btn-primary m-2" : "btn btn-dark m-2"}
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
        <div className="card-deck">
          <ReportCard
            info={this.col()}
            name="Blue"
            title="Initial information"
          />
          {this.RenderCol()}
        </div>
      </>
    );
  }
  RenderCol = () => {
    if (this.state.start)
      return (
        <ReportCard info={this.fcol()} name="Blue" title="After The Motion" />
      );
    else return null;
  };
  ButtonClick = event => {
    this.setState({ start: true });
    this.setState({ reset: false });
  };
  ButtonClickR = event => {
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

export default Simulations3;
