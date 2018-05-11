import React, { Component } from "react";
import web3 from "./web3";
import vote from "./vote";
import Layout from "../components/Layout";
import { Card, Button, Table, Header } from "semantic-ui-react";
import RequestRow from "../components/RequestRow";

class VoteNextIndex extends Component {
  //-----------------------------------------------------------
  // getInitialProps
  //-----------------------------------------------------------
  static async getInitialProps() {
    const owner = await vote.methods.owner().call();

    const numberOfCandididates = await vote.methods
      .getNumberofCandidates()
      .call();

    const candidates = await Promise.all(
      Array(parseInt(numberOfCandididates))
        .fill()
        .map((element, index) => {
          return vote.methods.candidates(index).call();
        })
    );

    return { owner, candidates };
  }

  //-----------------------------------------------------------
  // renderCandidates - should be called with {this.renderCardCandidates()}
  //-----------------------------------------------------------
  renderCardCandidates() {
    const items = this.props.candidates.map(name => {
      return {
        header: name,
        description: name,
        fluid: false
      };
    });

    return <Card.Group items={items} />;
  }

  //-----------------------------------------------------------
  // renderRows
  //-----------------------------------------------------------
  renderRows() {
    return this.props.candidates.map((candidate, index) => {
      return <RequestRow key={index} id={index} candidate={candidate} />;
    });
  }

  //-----------------------------------------------------------
  // render
  //-----------------------------------------------------------
  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h1>Make our Atlantis Better!!</h1>
        <div>Owner: {this.props.owner}</div>

        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Candidate Name</HeaderCell>
              <HeaderCell>Age</HeaderCell>
              <HeaderCell>Voted</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
        <Button floated="right" content="Vote" icon="add circle" primary />
      </Layout>
    );
  }
}

export default VoteNextIndex;
