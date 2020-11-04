import React from 'react';
import { Cards, Charts, CountryPicker } from './components'
import { fetchAll } from './api'
import styles from './app.module.css'

class App extends React.Component{

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
   const fetchData = await fetchAll();
   this.setState({ data: fetchData })
   return fetchData;
  }

  changeCountryState = async (country) => {
    const fetchData = await fetchAll(country);
    console.log(country);
    console.log(fetchData)
    return fetchData;
  }
 
    render(){
      const { data } = this.state;
        return (      
        <div className = {styles.container}> 
           <Cards data = {data}/>
           <CountryPicker handleCountryChange = {this.changeCountryState} />
           <Charts />
        </div>       
        )
    }
}

export default App;