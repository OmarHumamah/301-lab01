import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import hornedBeastData from "./data.json";
import SelectedBeast from "./components/SelectedBeast";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      selectedData: {},
      filteredBest: hornedBeastData,
    };
  }
  showModel = (data) => this.setState({ display: true, selectedData: data });
  closeModel = () => this.setState({ display: false });
  selectB = (event) => {
    this.setState({
      filteredBest: hornedBeastData.filter(
        (n) => n.horns === parseInt(event.target.value)
      ),
    });
    console.log(parseInt(event.target.value));
    console.log(hornedBeastData.filter((n) => n.horns === 100));
  };
  selectAll = () => {
    this.setState({
      filteredBest: hornedBeastData,
    });
  };
  render() {
    return (
      <>
        <div>
          <Header />
          <Form onChange={this.selectB}>
            <Form.Group controlId="horns">
              <Form.Select aria-label="Select beast horns number:">
                <option>Select beast horns number:</option>
                <option value="1">One horn</option>
                <option value="2">Two horns</option>
                <option value="3">Three horns</option>
                <option value="100">Wow</option>
              </Form.Select>
            </Form.Group>
          </Form>
          <Main fData={this.state.filteredBest} showModel={this.showModel} />
          <SelectedBeast
            show={this.state.display}
            data={this.state.selectedData}
            close={this.closeModel}
          />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
