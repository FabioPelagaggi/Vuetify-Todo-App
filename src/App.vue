<template>
  <v-app id="inspire">
    <v-navigation-drawer 
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            TO-DO List
          </v-list-item-title>
          <v-list-item-subtitle>
            Frameworks AT
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <NewTasks class="pt-6"/>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
      prominent
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>List</v-app-bar-title>

      <v-spacer></v-spacer>

        <v-btn icon class="pr-12">
          <span>Done Tasks:</span>
        </v-btn>

        <v-btn icon>
          {{ this.$store.getters.getTasksDone }}
        </v-btn>

      </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NewTasks from './components/NewTask.vue'
  export default {
    components: {
      NewTasks
		},
    data: () => ({
      drawer: null,
      items: [
          { title: 'Todo', icon: 'mdi-lead-pencil', to: '/'},
          { title: 'About', icon: 'mdi-brain', to: '/about'},
        ],
      
    }),
  }
</script>