const appComponent = {
    data() {
        return {
            beerName: '',
            beerABV: Number,
            data: [],
        }
    },
    methods: {
        async getData() {
            await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${this.beerName}&abv_gt=${this.beerABV}`)
                .then(response => this.data = response.data)
                .catch(error => console.log(error))
        }
    }
};

const app = Vue.createApp(appComponent).mount('#app');