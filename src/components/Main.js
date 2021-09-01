import React from "react";
import HornedBeast from "./HornedBeast";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <>
        <Row xs={1} md={4}>
          {this.props.fData.map((x) => {
            return (
              <HornedBeast
                showModel={this.props.showModel}
                data={x}
                title={x.title}
                img={x.image_url}
                description={x.description}
              />
            );
          })}
        </Row>
      </>
    );
  }
}

export default Main;
