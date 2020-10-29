import React from 'react';
import { Cards, Charts, CountryPicker } from './components'
import { fetchAll } from './api'
import styles from './app.module.css'

class App extends React.Component{

  async componentDidMount() {
   const fetchData = await fetchAll();
   console.log(fetchData);
   return fetchData;
  }
 

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