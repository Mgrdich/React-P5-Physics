import React, { Component } from "react";
import Sim1 from "./sketch1";
import P5Wrapper from "./P5Wrapper";
import ReportCard from "./ReportCard";

class Simulations1 extends Component {
  state = {
    start: false,
    reset: false,
    height1: 100,
    height2: 100,
    width1: 150,
    width2: 100,
    velocity1: 10,
    velocity2: 20,
    mass1: 20,
    mass2: 15,

  };
  col1 = () => {
    return {
      height: this.state.height1,
      width: this.state.width1,
      Initial_velocity: this.state.velocity1,
      mass: this.state.mass1
    };
  };
  col2 = () => {
    return {
      height: this.state.height2,
      width: this.state.width2,
      Initial_velocity: this.state.velocity2,
      mass: this.state.mass2
    };
  };
  fcol1 = ()=>{
    const TMass =this.state.mass1+this.state.mass2;
    let Vf = (2 * this.state.mass2 * this.state.velocity2 +
        this.state.velocity1 * (this.state.mass1 - this.state.mass2)) /
        (TMass);
   return {
     final_velocity:Vf ,
     mass:this.state.mass1,
   }
  };
  fcol2 = ()=>{
    const TMass =this.state.mass1+this.state.mass2;
    let Vf = (2 * this.state.mass1 * this.state.velocity1+
        this.state.velocity2 * (this.state.mass2 - this.state.mass1)) /
        (TMass);
    return {
      final_velocity:Vf,
      mass:this.state.mass2,
    }
  };
  render() {
    const { start } = this.state;
    return (
      <>
        <div className="row">
          <div className="col-8">
            <P5Wrapper sketch={Sim1} p5Props={this.state} />
          </div>

          <div className="col-4">
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
                  <td>Height(#1)</td>
                  <td>
                    <input
                      type="range"
                      name="height1"
                      min={50}
                      max={300}
                      onChange={this.handleChange}
                      value={this.state.height1}
                      disabled={start}
                    />
                  </td>
                  <td>{this.state.height1}</td>
                </tr>
                <tr>
                  <td>Height(#2)</td>
                  <td>
                    <input
                      type="range"
                      name="height2"
                      min={50}
                      max={300}
                      onChange={this.handleChange}
                      value={this.state.height2}
                      disabled={start}
                    />
                  </td>
                  <td>{this.state.height2}</td>
                </tr>
                <tr>
                  <td>Width(#1)</td>
                  <td>
                    <input
                      type="range"
                      name="width1"
                      min={50}
                      max={200}
                      onChange={this.handleChange}
                      value={this.state.width1}
                      disabled={start}
                    />
                  </td>
                  <td>{this.state.width1}</td>
                </tr>
                <tr>
                  <td>Width(#2)</td>
                  <td>
                    <input
                      type="range"
                      name="width2"
                      min={50}
                      max={200}
                      onChange={this.handleChange}
                      value={this.state.width2}
                      disabled={start}
                    />
                  </td>
                  <td>{this.state.width2}</td>
                </tr>
                <tr>
                  <td>Velocity(#1)</td>
                  <td>
                    <input
                      type="range"
                      name="velocity1"
                      min={0}
                      max={60}
                      onChange={this.handleChange}
                      value={this.state.velocity1}
                      disabled={start}
                    />
                  </td>
                  <td>{this.state.velocity1}</td>
                </tr>
                <tr>
                  <td>Velocity(#2)</td>
                  <td>
                    <input
                      type="range"
                      name="velocity2"
                      min={0}
                      max={60}
                      onChange={this.handleChange}
                      value={this.state.velocity2}
                      disabled={start}
                    />
                  </td>
                  <td>{this.state.velocity2}</td>
                </tr>
                <tr>
                  <td>Mass(#1)</td>
                  <td>
                    <input
                      type="range"
                      name="mass1"
                      min={10}
                      max={100}
                      onChange={this.handleChange}
                      value={this.state.mass1}
                      disabled={start}
                    />
                  </td>
                  <td>{this.state.mass1}</td>
                </tr>
                <tr>
                  <td>Mass(#2)</td>
                  <td>
                    <input
                      type="range"
                      name="mass2"
                      min={10}
                      max={100}
                      onChange={this.handleChange}
                      value={this.state.mass2}
                      disabled={start}
                    />
                  </td>
                  <td>{this.state.mass2}</td>
                </tr>
                <tr>
                  <td>Collison</td>
                  <td>
                    <select onChange={this.handleSelect} disabled={start}>
                      <option value={false}>Elastic</option>
                      <option value={true}>InElastic</option>
                    </select>
                  </td>
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
                disabled={start}
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
            info={this.col1()}
            name="Green"
            title="Initial Information"
          />
          <ReportCard
            info={this.col2()}
            name="Yellow"
            title="Initial Information"
          />
        </div>
        <div className="card-deck">{
          this.renderFinal()
        }</div>
      </>
    );
  }
  ButtonClick = event => {
    const { value, name } = event.target;
    this.setState({ [name]: true });
    this.setState({ reset: false });
  };
  ButtonClickR = event => {
    const { value, name } = event.target;
    this.setState({ start: false });
    this.setState({ [name]: true });
  };
  handleSelect = event => {
    const {
      target: { value }
    } = event;
    if (value === "true") this.setState({ Inelastic: true });
    else this.setState({ Inelastic: false });
  };
  handleChange = event => {
    const {
      target: { name, value }
    } = event;
    //console.log(value);
    this.setState({ [name]: value });
  };
  renderFinal = () => {
    if (this.state.start)
      return (
        <>
          <ReportCard
            info={this.fcol1()}
            name="Green"
            title="After Collison"
          />
          <ReportCard
            info={this.fcol2()}
            name="Yellow"
            title="After Collison"
          />
        </>
      );
    else return null;
  };
}

export default Simulations1;
