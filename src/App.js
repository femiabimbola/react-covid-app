import React from 'react';
import { Cards, Charts, CountryPicker } from './components'
import styles from './app.module.css'

class App extends React.Component{
    
    render(){
        return (      
        <div className = {styles.container}> 
          <h1> The Covid App </h1> 
           <Cards />
           <CountryPicker />
           <Charts />
        </div>       
        )
    }
}

export default App;