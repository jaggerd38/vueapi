<template>
	<div>
		<BaseInputText v-model="newTodoText" @keydown.enter="getPersonas"/>
	
    <ul v-if="personas.length">
			<TodoListItem v-for="persona in personas" :key="persona.id" :persona="persona"/>
	</ul>
    </div>
</template>

<script>
import BaseInputText from './BaseInputText.vue'
import TodoListItem from './TodoListItem.vue'

import axios from 'axios';

let nextTodoId = 1

export default {
	components: {
		BaseInputText, TodoListItem
	},
  data () {
    return {
			newTodoText: '',
            personas: [
				    {
                        apellido: 'yyt',
                        documento:"345635",
                        edad: 23,
                        fecha_nacimiento:"06/03/1990",
                        guid:"da21ff8e-6b6f-11e9-a69d-b8975a5c0906",
                        id:1775,
                        municipio:1,
                        nacionalidad:1,
                        nombre: nextTodoId++,
                        nombre_completo:"345635",
                        sexo:"F",
                        tipo_documento:"P",
                        usuario_creacion:"wordpressidei",
                        usuario_modificacion:"wordpressidei"
				    },
				    {
                       apellido: 'wwww',
                        documento:"345635",
                        edad: 23,
                        fecha_nacimiento:"06/03/1990",
                        guid:"da21ff8e-6b6f-11e9-a69d-b8975a5c0906",
                        id:125,
                        municipio:1,
                        nacionalidad:1,
                        nombre: nextTodoId++,
                        nombre_completo:"345635",
                        sexo:"F",
                        tipo_documento:"P",
                        usuario_creacion:"wordpressidei",
                        usuario_modificacion:"wordpressidei"				    },
				    {
                       apellido: 'essss',
                        documento:"345635",
                        edad: 23,
                        fecha_nacimiento:"06/03/1990",
                        guid:"da21ff8e-6b6f-11e9-a69d-b8975a5c0906",
                        id:1735,
                        municipio:1,
                        nacionalidad:1,
                        nombre: nextTodoId++,
                        nombre_completo:"asdf",
                        sexo:"F",
                        tipo_documento:"P",
                        usuario_creacion:"wordpressidei",
                        usuario_modificacion:"wordpressidei"
				    }
            ],
            recibidos: [],
            persona: []
    }
  },
	methods: {
        getPersonas() {
            const path = 'http://127.0.0.1:8000/api/v1/personas/'
            axios.get(path).then((response) => {
                    this.recibidos = response.data.results
                    console.log(this.recibidos)
                    
                    this.recibidos.map((persona) => {
                        this.personas.push(persona);
                    });
                })
                .catch((error) => {
                    console.log(error)
                })
        }
	}
}
</script>