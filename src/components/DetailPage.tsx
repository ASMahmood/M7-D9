import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

interface State {
  info: object;
  topTracks: object[];
  albumTracks: object[];
}

class DetailPage extends Component<RouteComponentProps, State> {
  state = {
    info: {
      title: "string",
      release_date: "string",
      rank: 0,
      explicit_lyrics: false,
      duration: 0,
      artist: {
        name: "string",
        picture_xl: "string",
        id: 0,
      },
      album: {
        cover_xl: "string",
        title: "string",
        release_date: "string",
        id: 0,
      },
    },
    topTracks: [
      {
        title: "",
        duration: 0,
        album: {
          title: "",
        },
      },
    ],
    albumTracks: [
      {
        title: "",
        duration: 0,
        id: 0,
      },
    ],
  };

  componentDidMount = async () => {
    await this.fetchSong();
    this.fetchTopSongs();
    this.fetchAlbum();
  };

  componentDidUpdate = async (prevProps: object) => {
    if (prevProps !== this.props) {
      await this.fetchSong();
      this.fetchTopSongs();
      this.fetchAlbum();
    }
  };

  fetchSong = async () => {
    try {
      let params: { id?: number } = this.props.match.params;
      let response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/track/${params.id}`,
        {
          headers: {
            "x-rapidapi-key":
              "b5adde9161msh8a1dcb5f94ec12fp19467bjsn5987880f6b6c",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      let parsedResp = await response.json();

      this.setState({ info: parsedResp });
    } catch (error) {
      console.log(error);
    }
  };

  fetchTopSongs = async () => {
    try {
      let response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/artist/${this.state.info.artist.id}/top?limit=12`,
        {
          headers: {
            "x-rapidapi-key":
              "b5adde9161msh8a1dcb5f94ec12fp19467bjsn5987880f6b6c",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      let parsedResp = await response.json();

      this.setState({ topTracks: parsedResp.data });
      console.log(parsedResp);
    } catch (error) {
      console.log(error);
    }
  };

  fetchAlbum = async () => {
    try {
      let response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/album/${this.state.info.album.id}/tracks`,
        {
          headers: {
            "x-rapidapi-key":
              "b5adde9161msh8a1dcb5f94ec12fp19467bjsn5987880f6b6c",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );
      let parsedResp = await response.json();

      this.setState({ albumTracks: parsedResp.data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container id="detail-page" className="mt-5">
        <Row>
          <Col xs={8} id="mainCol">
            <Row>
              <Col xs={12}>
                <h2>{this.state.info.title}</h2>
                <h4>By {this.state.info.artist.name}</h4>
                <h5>
                  Ranked: {this.state.info.rank} • Released:{" "}
                  {this.state.info.release_date} • {this.state.info.duration}s{" "}
                  {this.state.info.explicit_lyrics && "• EXPLICIT"}
                </h5>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={12}>
                <h6>Other tracks by this artist: </h6>
                <ListGroup variant="flush">
                  {this.state.topTracks.length > 0 &&
                    this.state.topTracks.map((track, index) => (
                      <ListGroup.Item
                        key={index}
                        className="trackListing d-flex justify-content-between"
                      >
                        <span className="trackName">
                          {track.title} - {track.album.title}
                        </span>
                        <span className="trackLength">{track.duration}</span>
                      </ListGroup.Item>
                    ))}
                </ListGroup>
              </Col>
            </Row>
          </Col>
          <Col xs={4} id="artistCol">
            <Row>
              <Col xs={12} className="d-flex flex-column align-items-center">
                <img
                  alt="artist"
                  className="img-fluid albumImg"
                  src={this.state.info.album.cover_xl}
                />
                <h5>{this.state.info.album.title}</h5>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h6>Tracklist:</h6>
                <ListGroup variant="flush" id="tracklistRight">
                  {this.state.albumTracks.length > 0 &&
                    this.state.albumTracks.map((track, index) => (
                      <ListGroup.Item
                        key={index}
                        onClick={() =>
                          this.props.history.push("/song/" + track.id)
                        }
                        className="trackListing d-flex justify-content-between"
                      >
                        <span className="trackName">{track.title}</span>
                        <span className="trackLength">{track.duration}</span>
                      </ListGroup.Item>
                    ))}
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DetailPage;
