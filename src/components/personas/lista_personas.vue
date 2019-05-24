<template>
	<div id="app">
    
    <h1>Lista de Personas</h1>
    
    <TodoPersonas/>
    
    
	</div>
</template>

<script>
    import TodoPersonas from './TodoPersonas.vue'

    export default {
        components: {
            TodoPersonas
        }
    }
</script>