import axios from 'axios'


export default axios.create({
    
  baseURL: `https://nounoubackend.herokuapp.com`,
    headers: { 
        'Authorization': localStorage.getItem('token') 
        
      }
})