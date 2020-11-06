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
    // console.log(country);
    // console.log(fetchData)
    this.setState({data: fetchData, country:country})
    // return fetchData; 
  }
 
    render(){
      const { data, country } = this.state;
        return (      
        <div className = {styles.container}> 
           <Cards data = {data}/>
           <CountryPicker handleCountryChange = {this.changeCountryState} />
           <Charts data={data} country={country} />
        </div>       
        )
    }
}

export default App;