import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import vote from "../pages/vote";
import web3 from "../pages/web3";

class RequestIndex extends Component {
  render() {
    const { id, candidate } = this.props;
    const { Row, Cell } = Table;

    return (
      <Row>
        <Cell>{id}</Cell>
        <Cell>{web3.utils.hexToAscii(candidate.name)}</Cell>
        <Cell>{candidate.age}</Cell>
        <Cell />
      </Row>
    );
  }
}

export default RequestIndex;
