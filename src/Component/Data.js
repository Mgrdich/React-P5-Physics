import React, { Component } from "react";
import Table from "../ReusableComp/Table";
import Card from "../ReusableComp/Card";
import DataScientist from "../information/DataConstants";
import ListGroup from "../ReusableComp/ListGroup";
import { profession } from "../information/DataConstants";
import Searchbox from "../ReusableComp/Searchbox";
import { SimplifyByReg } from "../utility/SearchRegExp";

class Data extends Component {
  state = {
    SelectedSketch: {},
    sketches: [],
    selectedProfession: {
      profession: "All",
      id: 0
    },
    search: ""
  };
  columns = [
    {
      label: "Name",
      path: "title"
    },
    {
      label: "Profession",
      path: "profession"
    },
    {
      key: "Buttons1",
      content: item => {
        return (
          <button
            className={
              this.state.SelectedSketch === item
                ? "btn btn-warning btn-sm"
                : "btn btn-primary btn-sm"
            }
            onClick={() => this.handleSelect(item)}
          >
            Select
          </button>
        );
      }
    }
  ];
  componentDidMount() {
    this.setState({ SelectedSketch: DataScientist()[0] });
    const array = DataScientist().splice(1,DataScientist().length);
    //console.log(array);
    this.setState({ sketches: array });

  }
  TableData() {
    const { profession } = this.state.selectedProfession;
    const { sketches } = this.state;
    if (profession !== "All") {
      const array = sketches.filter(item => {
        return item.profession === profession;
      });
      if (this.state.search !== "") {
        return SimplifyByReg(array, this.state.search);
      } else return array;
    } else {
      if (this.state.search !== "")
        return SimplifyByReg(sketches, this.state.search);
      else return sketches;
    }
  }
  render() {
    // const profession = ["Physicist", "Mathematician", "Engineer"];

    return (
      <>
        <div className="row">
          <div className="col-xl-3 col-sm-5 col-12">
            <Searchbox onChange={this.handleChange} />
            <ListGroup
              items={profession()}
              onItemSelect={this.handleProfessionSelect}
              selectedItem={this.state.selectedProfession}
            />
          </div>
          <div className="col-xl-9 col-sm-12 col-12 ">
            <Table columns={this.columns} data={this.TableData()} col={10} />
          </div>
        </div>
        <div className="row middle">
          <div className="m-5 col-8 middle">{this.RenderCard()}</div>
        </div>
      </>
    );
  }
  RenderCard() {
    const { SelectedSketch } = this.state;
    if (Object.keys(SelectedSketch).length > 0)
      return <Card data={SelectedSketch} Footer={false} />;
    else return null;
  }
  handleSelect(item) {
    this.setState({ SelectedSketch: item });
  }
  handleProfessionSelect = item => {
    //  console.log("I am Handler:" + item);
    this.setState({ selectedProfession: item });
  };
  handleChange = event => {
    const { currentTarget } = event;
    this.setState({ search: currentTarget.value });
  };
}

export default Data;
