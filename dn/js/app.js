import axios from 'axios';

methods: {
    fetchData() {
      const apiUrl = 'https://pokeapi.co/api/v2/pokemon/1';
  
      axios.get(apiUrl)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        })
    }
    mounted() {
        this.fetchData();
      }
  }
