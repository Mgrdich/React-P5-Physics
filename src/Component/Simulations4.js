import React, { Component } from "react";
import Sim4 from "./sketch4";
import P5Wrapper from "./P5Wrapper";
import FormButton from "../ReusableComp/FormButton";
import FormBodyRow from "../ReusableComp/FormBodyRow";
import ReportCard from "./ReportCard";
import Joi from "joi-browser";
import createValidator from "../Validator/ReactValidator";

class Simulations4 extends Component {
  state = {
    start: false,
    reset: false,
    radius: 25,
    xspeed: 20,
    yspeed: 10,
    Sticky: false,
    xPos: 50,
    YPos: 200,
    disapear: false
  };

  schema = {

    radius: Joi.number()
      .required()
      .integer()
      .min(0)
      .max(100)
      .label("Radius"),
    xspeed: Joi.number()
      .required()
      .min(0)
      .max(50)
      .label("X_direction_speed"),
    yspeed: Joi.number()
      .required()
      .min(0)
      .max(50)
      .label("Y_direction_speed"),
    xPos: Joi.number()
      .required()
      .integer()
      .min(this.state.radius)
      .max(window.innerWidth / 1.5 - this.state.radius)
      .label("X_Position"),
    YPos: Joi.number()
      .required()
      .integer()
      .min(this.state.radius)
      .max(window.innerHeight / 1.5 - this.state.radius)
      .label("Y_Position"),
    start: Joi.boolean().required(),
    reset: Joi.boolean().required(),
    Sticky: Joi.boolean().required(),
    disapear: Joi.boolean().required()
  };

  col = () => {
    return {
      radius: this.state.radius,
      X_direction_speed: this.state.xspeed,
      Y_direction_speed: this.state.yspeed,
      X_Position: this.state.xPos,
      Y_Position: this.state.YPos
    };
  };
  render() {
    const { start, reset, radius, xspeed, yspeed } = this.state;

    return (
      <>
        <div className="row">
          <div className="col-xl-8">
            <P5Wrapper sketch={Sim4} p5Props={this.state} />
            <FormButton
              start={start}
              reset={reset}
              onClickR={this.ButtonClickR}
              onClickS={this.ButtonClick}
              error={createValidator(this.state, this.schema)}
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
                  name={"radius"}
                  label={"Radius"}
                  OnMyChange={this.handleChange}
                  Info={{
                    min: 0,
                    max: 100,
                    value: radius,
                    type: "range",
                    disable: start
                  }}
                />
                <FormBodyRow
                  name={"xspeed"}
                  label={"Speed (X)"}
                  OnMyChange={this.handleChange}
                  Info={{
                    min: 0,
                    max: 50,
                    value: xspeed,
                    type: "range",
                    disable: start
                  }}
                />
                <FormBodyRow
                  name={"yspeed"}
                  label={"Speed (Y)"}
                  OnMyChange={this.handleChange}
                  Info={{
                    min: 0,
                    max: 50,
                    value: yspeed,
                    type: "range",
                    disable: start
                  }}
                />
                <FormBodyRow
                  name={"xPos"}
                  label={"Position (X)"}
                  OnMyChange={this.handleChange}
                  Info={{
                    min: radius,
                    max: window.innerWidth / 1.5 - radius,
                    value: this.state.xPos,
                    type: "range",
                    disable: start
                  }}
                />
                <FormBodyRow
                  name={"YPos"}
                  label={"Position (Y)"}
                  OnMyChange={this.handleChange}
                  Info={{
                    min: radius,
                    max: window.innerHeight / 1.5 - radius,
                    value: this.state.YPos,
                    type: "range",
                    disable: start
                  }}
                />
                <tr>
                  <td>Drawing</td>
                  <td>
                    <select onChange={this.handleSelect} disabled={start}>
                      <option value={true}>No Trail</option>
                      <option value={false}>Trail</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <ReportCard
            info={this.col()}
            name="Blue"
            title="Initial information"
            big={true}
          />
        </div>
      </>
    );
  }

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
    /* if (Object.keys(createValidator(this.state, this.schema)).length > 0)
      this.setState({ disapear:true });*/
  };
  handleSelect = event => {
    const {
      target: { value }
    } = event;
    if (value === "true") this.setState({ Sticky: false });
    else this.setState({ Sticky: true });
  };
}

export default Simulations4;
