import React from 'react';
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer';
import hornedBeastData from './data.json'
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        display : false,
        selectedData : {}
    }
}
showModel = (data) => this.setState({display : true, selectedData : data})
closeModel = () => this.setState({display : false})
  render(){
    return (<> <div>
      <Header />
      <Main data= {hornedBeastData} showModel= {this.showModel} />
      <SelectedBeast show= {this.state.display} data={this.state.selectedData} close={this.closeModel}/>
      <Footer />
    </div>
    </>)
    
  }
};

export default App 