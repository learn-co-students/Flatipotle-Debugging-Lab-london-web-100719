import React, { Component } from "react";
import Side from "./Side";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  handleClick = () => {
    this.state.isClicked = !this.state.isClicked;
  };

  render() {
    const { protein, fillings, toppings, sides } = this.props.order;
    return (
      <div className="ui centered raised card">
        <div className="image">
          <img src={require("../images/burrito-bowl.jpg")} alt="burrito bowl" />
        </div>
        <div className="content">
          <b>Protein:</b>
          <br />
          {protein.length > 0 ? protein.join(", ") : "None"}
          <br />
          <b>Fillings:</b>
          <br />
          {fillings.length > 0 ? fillings.join(", ") : "None"}
          <br />
          <b>Toppings:</b>
          <br />
          {toppings.length > 0 ? toppings.join(", ") : "None"}
          <br />
        </div>
        <div className="extra content">
          {sides.length > 0 ? (
            <button className="ui button small" onClick={this.handleClick}>
              View Sides
            </button>
          ) : (
            <p>No sides</p>
          )}

          {/* this is just a shortcut to writing this.state.isClicked ? <Side sides={this.props.sides} /> : null */}
          {this.state.isClicked && <Side sides={this.props.sides} />}
        </div>
      </div>
    );
  }
}

export default Order;
