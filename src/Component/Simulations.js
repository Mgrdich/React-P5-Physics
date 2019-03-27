import React from "react";
import infoSketches from "../information/MySketches";
import Card from "../ReusableComp/Card";
import Table from "../ReusableComp/Table";

class Simulations extends React.Component {
  state = {
    SelectedSketch: {},
    sketches: []
  };
  componentDidMount() {
    this.setState({ sketches: infoSketches() });
    this.setState({SelectedSketch:infoSketches()[0]})
  }

  columns = [
    {
      label: "Title",
      path: "title"
    },
    {
      label: "Catagory",
      path: "Catagory"
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

  handleSelect(item) {
    this.setState({ SelectedSketch: item });
  }
  RenderCard (){
    const {SelectedSketch} =this.state;
    if(Object.keys(SelectedSketch).length>0)
      return (<Card data ={SelectedSketch} Footer={true}/>);
    else
      return null;
  }

  render() {
    return (
      <>
        <div className="row">
        <Table columns={this.columns} data={this.state.sketches} col={4} />

        <div className="m-2 col">
          {this.RenderCard()}
        </div>
        </div>
      </>
    );
  }
}

export default Simulations;
