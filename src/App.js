import React from 'react';
import { Cards, Charts, CountryPicker } from './components'

class App extends React.Component{
    
    render(){
        return (      
        <div> 
        <h1> The Covid App </h1> 
        <Cards />
        <CountryPicker />
        <Charts />
        </div>       
        )
    }
}

export default App;