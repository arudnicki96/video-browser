import React from "react";
import SearchBox from "./SearchBox";
import youtube from "./API/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const kayne = async function () {
  const quotes = await fetch("https://api.kanye.rest").then((pos) => {
    return pos.json();
  });

  console.log(quotes.quote);
};

kayne();

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response);
    this.setState({ videos: response.data.items });
    this.setState({ selectedVideo: response.data.items[0] });
  };

  onSelectedVideo = (video) => {
    this.setState({ selectedVideo: video });
    console.log(this.state.selectedVideo);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBox onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
