import React from 'react';
import HornedBeast from './HornedBeast';
import hornedBeastData from '../data.json'
 
class Main extends React.Component{

    render(){
        return (<>
           {
               hornedBeastData.map(x=>{
                   return(
                       <HornedBeast  
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