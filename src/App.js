import React from 'react';
import { Cards, Charts, CountryPicker } from './components'
import { fetchAll } from './api'
import styles from './app.module.css'
import coronaLogo from './images/image.jpg'

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
           <img className={styles.image} src={coronaLogo} alt='covid19' />
           <Cards data = {data}/>
           <CountryPicker handleCountryChange = {this.changeCountryState} />
           <Charts data={data} country={country} />
           <h5> Developed by Femi Abimbola</h5>
        </div>       
        )
    }
}

export default App;