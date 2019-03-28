import React, { Component } from "react";
import P5Wrapper from "./P5Wrapper";
import Sim2 from "./sketch2";
import ReportCard from "./ReportCard";
import FormButton from "../ReusableComp/FormButton";
import FormBodyRow from "../ReusableComp/FormBodyRow";
import Joi from "joi-browser";
import createValidator from "../Validator/ReactValidator";

class Simulations2 extends Component {
  state = {
    start: false,
    reset: false,
    degree: 30,
    radius: 25,
    velocity: 10,
    Gravitational: 9.9
  };
    schema = {
        radius: Joi.number()
            .required()
            .integer()
            .min(5)
            .max(100)
            .label("Radius"),
        degree: Joi.number()
            .required()
            .min(1)
            .max(90)
            .label("Degree"),
        velocity: Joi.number()
            .required()
            .min(5)
            .max(20)
            .label("Velocity"),
        Gravitational: Joi.number()
            .required()
            .min(5)
            .max(20)
            .label("Gravitational"),
        start: Joi.boolean().required(),
        reset: Joi.boolean().required(),

    };
  col = () => {
    return {
      degree: this.state.degree,
      radius: this.state.radius,
      velocity: this.state.velocity,
      Gravitational: this.state.Gravitational
    };
  };
  fcol = () => {
    return {
      Range:
        (this.state.velocity *
          this.state.velocity *
          Math.sin((2 * (this.state.degree * Math.PI)) / 180)) /
        this.state.Gravitational
    };
  };
  render() {
    const { start, reset } = this.state;
    return (
      <>
        <div className="row">
          <div className="col-xl-8">
            <P5Wrapper sketch={Sim2} p5Props={this.state} />
            <FormButton
              start={start}
              reset={reset}
              onClickR={this.ButtonClickR}
              onClickS={this.ButtonClick}
              error={createValidator(this.state,this.schema)}
            />
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
                  label={"Degree"}
                  OnMyChange={this.handleChange}
                  name={"degree"}
                  Info={{
                    min: 1,
                    max: 90,
                    value: this.state.degree,
                    type: "range",
                    disable: start
                  }}
                />
                <FormBodyRow
                  label={"Radius"}
                  OnMyChange={this.handleChange}
                  name={"radius"}
                  Info={{
                    min: 5,
                    max: 100,
                    value: this.state.radius,
                    type: "range",
                    disable: start
                  }}
                />
                <FormBodyRow
                  label={"Velocity"}
                  OnMyChange={this.handleChange}
                  name={"velocity"}
                  Info={{
                    min: 5,
                    max: 20,
                    value: this.state.velocity,
                    type: "range",
                    disable: start
                  }}
                />
                <FormBodyRow
                  label={"Gravitational"}
                  OnMyChange={this.handleChange}
                  name={"Gravitational"}
                  Info={{
                    min: 5,
                    max: 20,
                    value: this.state.Gravitational,
                    type: "range",
                    disable: start
                  }}
                />
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-deck">
          <ReportCard
            info={this.col()}
            name="Blue"
            title="Initial Information"
          />
          {this.renderFinal()}
        </div>
      </>
    );
  }
  renderFinal = () => {
    if (this.state.start)
      return (
        <>
          <ReportCard info={this.fcol()} name="Blue" title="After The Motion" />
        </>
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

export default Simulations2;
