import React, { Component } from "react";
import Sim1 from "./sketch1";
import P5Wrapper from "./P5Wrapper";
import ReportCard from "./ReportCard";
import FormButton from "../ReusableComp/FormButton";
import FormBodyRow from "../ReusableComp/FormBodyRow";

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
  fcolIne = ()=>{
      const TMass =this.state.mass1+this.state.mass2;
      return{
        Mass:TMass,
        Velocity: (this.state.velocity1*this.state.mass1+this.state.mass2*this.state.velocity2)/TMass
      };
  };
  render() {
    const { start ,reset } = this.state;
    return (
      <>
        <div className="row">
          <div className="col-xl-8">
            <P5Wrapper sketch={Sim1} p5Props={this.state} />
            <FormButton start={start} reset={reset} onClickR={this.ButtonClickR} onClickS={this.ButtonClick}/>
          </div>

          <div className="col-xl-4">
            <table className="table table-responsive mt-2 fontify">
              <thead className="thead-dark">
                <tr>
                  <td>Select</td>
                  <td>Values</td>
                  <td />
                </tr>
              </thead>
              <tbody>
              <FormBodyRow
                  label={"Height(#1)"}
                  OnMyChange={this.handleChange}
                  name={"height1"}
                  Info={{
                    min:50,
                    max:400,
                    value:this.state.height1,
                    type:"range",
                      disable:start
                  }}
              />
              <FormBodyRow
                  label={"Height(#2)"}
                  OnMyChange={this.handleChange}
                  name={"height2"}
                  Info={{
                    min:50,
                    max:400,
                    value:this.state.height2,
                    type:"range",
                      disable:start
                  }}
              />
              <FormBodyRow
                  label={"Width(#1)"}
                  OnMyChange={this.handleChange}
                  name={"width1"}
                  Info={{
                    min:50,
                    max:200,
                    value:this.state.width1,
                    type:"range",
                      disable:start
                  }}
              />
              <FormBodyRow
                  label={"Width(#2)"}
                  OnMyChange={this.handleChange}
                  name={"width2"}
                  Info={{
                    min:50,
                    max:200,
                    value:this.state.width2,
                    type:"range",
                      disable:start
                  }}
              />
              <FormBodyRow
                  label={"Velocity(#1)"}
                  OnMyChange={this.handleChange}
                  name={"velocity1"}
                  Info={{
                    min:0,
                    max:60,
                    value:this.state.velocity1,
                    type:"range",
                      disable:start
                  }}
              />
              <FormBodyRow
                  label={"Velocity(#2)"}
                  OnMyChange={this.handleChange}
                  name={"velocity2"}
                  Info={{
                    min:0,
                    max:60,
                    value:this.state.velocity2,
                    type:"range",
                      disable:start
                  }}
              />
              <FormBodyRow
                  label={"Mass(#1)"}
                  OnMyChange={this.handleChange}
                  name={"mass1"}
                  Info={{
                    min:0,
                    max:60,
                    value:this.state.mass1,
                    type:"range",
                      disable:start
                  }}
              />
              <FormBodyRow
                  label={"Mass(#2)"}
                  OnMyChange={this.handleChange}
                  name={"mass2"}
                  Info={{
                    min:0,
                    max:60,
                    value:this.state.mass2,
                    type:"range",
                      disable:start
                  }}
              />
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
    const { name } = event.target;
    this.setState({ [name]: true });
    this.setState({ reset: false });
  };
  ButtonClickR = event => {
    const { name } = event.target;
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
    if (this.state.start && !this.state.Inelastic)
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
    else if(this.state.start)return <ReportCard
        info={this.fcolIne()}
        name="Yellow & Green"
        title="After Collison"
        big={true}
    />;
    else return null
  };
}

export default Simulations1;
