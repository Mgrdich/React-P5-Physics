import React, { Component } from "react";
import P5Wrapper from "./P5Wrapper";
import simulu from "./sketch3";
import ReportCard from "./ReportCard";
import FormButton from "../ReusableComp/FormButton";
import FormBodyRow from "../ReusableComp/FormBodyRow";
import Joi from 'joi-browser';
import createValidator from "../Validator/ReactValidator";

class Simulations3 extends Component {
  state = {
    start: false,
    reset: false,
    degree: 40,
    radius: 25,
    coefficient: 0.1,
    Gravitational: 10,
    Mass: 25
  };
  schema = {
          radius: Joi.number()
              .required()
              .integer()
              .min(25)
              .max(75)
              .label("Radius"),
          degree: Joi.number()
              .required()
              .min(1)
              .max(89)
              .label("Degree"),
      coefficient: Joi.number()
              .required()
              .min(0.1)
              .max(0.9)
              .label("X_Position"),

      Gravitational: Joi.number()
          .required()
          .min(5)
          .max(20)
          .label("Gravitational"),
      Mass: Joi.number()
          .required()
          .min(5)
          .max(100)
          .label("Mass"),
          start: Joi.boolean().required(),
          reset: Joi.boolean().required(),

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
    const { start, reset } = this.state;
    return (
      <>
        <div className="row">
          <div className="col-xl-8">
            <P5Wrapper sketch={simulu} p5Props={this.state} />
            <FormButton
              start={start}
              reset={reset}
              onClickR={this.ButtonClickR}
              onClickS={this.ButtonClick}
              error={createValidator(this.state,this.schema)}
            />
          </div>

          <div className="col-xl-4">
            <table className="table table-responsive mt-2  fontify">
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
                    max: 89,
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
                    min: 25,
                    max: 75,
                    value: this.state.radius,
                    type: "range",
                    disable: start
                  }}
                />
                <FormBodyRow
                  label={"Coef. Friction"}
                  OnMyChange={this.handleChange}
                  name={"coefficient"}
                  Info={{
                    min: 0.1,
                    max: 0.9,
                    value: this.state.coefficient,
                    type: "range",
                    disable: start,
                    step: 0.1
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
                    disable: start,
                      step:0.1
                  }}
                />
                <FormBodyRow
                  label={"Mass"}
                  OnMyChange={this.handleChange}
                  name={"Mass"}
                  Info={{
                    min: 5,
                    max: 100,
                    value: this.state.Mass,
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
