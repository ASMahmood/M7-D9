import React, { Component, FormEvent } from "react";
import { Form, Button } from "react-bootstrap";

interface Props {
  search: (query: string) => void;
}

interface State {
  query: string;
}

class SearchBar extends Component<Props, State> {
  state = {
    query: "",
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.search(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="w-75">
        <Form.Group className="d-flex">
          <Form.Control
            type="text"
            placeholder="What would you like to find?"
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.currentTarget.value })}
          />
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default SearchBar;
