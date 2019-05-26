import React from "react";
import Cover from "./Cover";
import Info from "./Info";

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Cover coverUrl={this.props.dataObject.img_url} />
        <Info dataObject={this.props.dataObject} />
      </div>
    );
  }
}

export default Content;
