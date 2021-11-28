<template>
  <div class="home">
    <v-list two-line flat>
        <Tasks/>
    </v-list>

  </div>  
</template>

<script>
  import Tasks from '../components/Tasks.vue'

  export default {
    name: 'Todo',
    components: {
      Tasks,
		},
  }
</script>
