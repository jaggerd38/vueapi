<template>
  <li>
    {{ persona.nombre }} - {{ persona.apellido }}
    <button @click="$emit('remove', persona.id)">
      X
    </button>
  </li>
</template>

<script>
export default {
  props: {
    persona: {
      type: Object,
      required: true
    }
  }
}
</script>