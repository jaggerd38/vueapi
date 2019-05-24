import axios from 'axios';

const app = new Vue({
    el: '#app',
    data: {
        fields: [{
            key: 'nombre',
            label: 'nombre'
        }, {
            key: 'apellido',
            label: 'apellido'
        }, {
            key: 'action',
            label: 'Acciones'
        }],
        personas: []
    },
    methods: {
        getPersonas() {
            const path = 'http://127.0.0.1:8000/api/v1/personas/'
            axios.get(path).then((response) => {
                    this.personas = response.data.results
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    created() {
        this.getPersonas()
    },
})