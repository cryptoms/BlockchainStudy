import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Button, Checkbox, Form, Input, Message } from "semantic-ui-react";
import web3 from "../web3";
import vote from "../vote";
import { Router } from "../../routes";

class VoteNextNewCandidate extends Component {
  state = {
    value: "",
    candidateName: "",
    candidateAge: "",
    errorMessage: "",
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true });

    try {
      const accounts = await web3.eth.getAccounts();
      await vote.methods
        .createCandidates(
          web3.utils.asciiToHex(this.state.candidateName),
          this.state.candidateAge
        )
        .send({
          from: accounts[0]
        });

      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, errorMessage: "" });
  };

  render() {
    return (
      <Layout>
        <h1>Create a candidate.</h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <Input
              size="small"
              icon="tags"
              iconPosition="left"
              labelPosition="right"
              label={{ basic: true, content: "Name" }}
              value={this.state.candidateName}
              onChange={event =>
                this.setState({ candidateName: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <Input
              size="small"
              icon="tags"
              iconPosition="left"
              labelPosition="right"
              label={{ basic: true, content: "Age" }}
              value={this.state.candidateAge}
              onChange={event =>
                this.setState({ candidateAge: event.target.value })
              }
            />
          </Form.Field>
          <Message error header="Opps!" content={this.state.errorMessage} />
          <Button type="submit" loading={this.state.loading} primary>
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default VoteNextNewCandidate;
