import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numberOfVotes : 0
        }
    }
    incNumOfVotes = () => {
         this.setState({
             numberOfVotes : this.state.numberOfVotes + 1
         })
     }
    
    render(){
        return(<>
             <Card style={{ width: '18rem', display : 'inline-block', margin : '15px' }}>
                    <Card.Img style={{ height : '18rem'}} variant="top" src={this.props.img} onClick={this.incNumOfVotes} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            <p>{this.props.description}</p>
                            Number of votes ❤️: {this.state.numberOfVotes};
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
        </>)
    }
}

export default HornedBeast