import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InfoCard from "./InfoCard";
import SearchBar from "./SearchBar";

export default class HomePage extends Component {
  state = {
    query: "",
    dataArray: [],
  };

  getInput = (query: string) => {
    this.setState({ query: query });
    this.fetchData(query);
  };

  fetchData = async (query: string) => {
    try {
      let response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`,
        {
          headers: {
            "x-rapidapi-key":
              "b5adde9161msh8a1dcb5f94ec12fp19467bjsn5987880f6b6c",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      let parsedResp = await response.json();

      this.setState({ dataArray: parsedResp.data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col className="d-flex justify-content-center" xs={12}>
            <SearchBar search={this.getInput} />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={12}>
            {this.state.dataArray.length > 0 && (
              <h1>Search results for: {this.state.query}</h1>
            )}
          </Col>
        </Row>
        <Row>
          {this.state.dataArray.length > 0 &&
            this.state.dataArray.slice(0, 24).map((info, index) => (
              <Col key={index} className="mb-5" xs={12} md={4} lg={3}>
                {console.log(info)}
                <InfoCard info={info} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}
