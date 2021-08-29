import React from 'react';

class HornedBeast extends React.Component{
    render(){
        return(<>
        <div className= 'window'>
            <h2>{this.props.title}</h2>
            <div>{}</div>
            <img src={this.props.img} alt={this.props.title} title={this.props.title} />
            <p>{this.props.description}</p>
        </div>
        </>)
    }
}

export default HornedBeast