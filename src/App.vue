<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    <div class="my-4 d-flex">
        <v-btn 
          class="mx-auto"
          color="success"
          @click="loadUsers" 
          normal
          :disabled="users.length > 0"
        >
          Load Users
        </v-btn>
    </div>
      <v-list dense>

        <router-link
          v-for="(user, i) of users"
          :key="user.id.value"
          :to="`/top-devs/user/${i}`"
        >
          <v-list-item>

            <v-list-item-content>
              <v-btn color="indigo" dark>
                <v-icon left>mdi-account-box</v-icon>
                <v-list-item-title>{{user.name.first}} {{user.name.last}}</v-list-item-title>
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <router-view></router-view>
    <v-footer
      color="indigo d-flex"
      app
    >
      <span class="white--text mx-auto">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      resource: null
    }),
    computed:  {
      users () {
        return this.$store.state.users
      }
    },
    methods: {
      async loadUsers () {
        await this.$store.dispatch('loadUsers')
       }
    }
  }
</script>

<style scoped>
  a {
   text-decoration: none;
  }
</style>>