import React, { Component } from "react";
import Table from "../ReusableComp/Table";
import Card from "../ReusableComp/Card";
import DataScientist from "../information/DataConstants";
import ListGroup from "../ReusableComp/ListGroup";
import { profession } from "../information/DataConstants";

class Data extends Component {
  state = {
    SelectedSketch: {},
    sketches: [],
    selectedProfession: {
      profession: "All",
      id: 0
    }
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
            className="btn btn-primary btn-sm"
            onClick={() => this.handleSelect(item)}
          >
            Select
          </button>
        );
      }
    }
  ];
  componentDidMount() {
    this.setState({ sketches: DataScientist() });
    this.setState({ SelectedSketch: DataScientist()[0] });
  }
  TableData() {
    const { profession } = this.state.selectedProfession;
    const { sketches } = this.state;
    if (profession !== "All") {
      return sketches.filter(item => {
        return item.profession === profession;
      });
    } else return sketches;
  }
  render() {
    // const profession = ["Physicist", "Mathematician", "Engineer"];

    return (
      <>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={profession()}
              onItemSelect={this.handleProfessionSelect}
              selectedItem={this.state.selectedProfession}
            />
          </div>
          <div className="col">
            <Table columns={this.columns} data={this.TableData()} />
          </div>
        </div>
        <div className="row">
          <div className="m-5 col-5 middle">{this.RenderCard()}</div>
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
    console.log("I am Handler:" + item);
    this.setState({ selectedProfession: item });
  };
}

export default Data;
