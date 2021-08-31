import React from 'react';
import HornedBeast from './HornedBeast';

 
class Main extends React.Component{

    render(){
        return (<>
           {
               this.props.data.map(x=>{
                   return(
                       <HornedBeast  
                       showModel = {this.props.showModel}
                       data={x}
                       title= {x.title} 
                       img= {x.image_url}
                       description= {x.description}/>
                   )
               })
           }
        </>)
    }
}

export default Main