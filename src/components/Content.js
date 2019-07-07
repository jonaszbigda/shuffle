import React from "react";
import Cover from "./Cover";
import Info from "./Info";
import Description from "./Description";
import Votes from "./Votes";
import Register from "./Register";
import Login from "./LogIn";
import AddSong from "./AddSong";

class Content extends React.Component {
  render() {
    switch (this.props.mode) {
      case "shuffle":
        return (
          <div className="content">
            <Cover coverUrl={this.props.dataObject.img_url} />
            <Info dataObject={this.props.dataObject} />
            <Votes dataObject={this.props.dataObject} />
            <Description dataObject={this.props.dataObject} />
          </div>
        );

      case "register":
        return (
          <div className="content">
            <Register logIn={this.props.logIn} setMode={this.props.setMode} />
          </div>
        );

      case "login":
        return (
          <div className="content">
            <Login logIn={this.props.logIn} setMode={this.props.setMode} />
          </div>
        );

      case "add":
        return (
          <div className="content">
            <AddSong
              username={this.props.username}
              onUpload={this.props.onUpload}
              setMode={this.props.setMode}
            />
          </div>
        );

      default:
        console.log("error");
    }
  }
}

export default Content;
