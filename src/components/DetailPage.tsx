import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";

interface State {
  info: any;
}

class DetailPage extends Component<RouteComponentProps, State> {
  state = {
    info: {},
  };

  componentDidMount = () => {
    this.fetchSong();
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
      console.log(parsedResp);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return <div></div>;
  }
}

export default DetailPage;
