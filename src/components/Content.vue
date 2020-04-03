<template>
    <v-content class="content">
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <v-card
              shaped
              elevation="10"
              color="#C7C8FF"
              class="mx-auto py-3"
              max-width="800"
              height="600px"
              v-if="user"
            >
              <div class="user__img">
                  <v-img
                    class="mx-auto my-4 "
                    max-width="200px"
                    max-height="200px"
                    :src="this.user.picture.large"
                  >
                </v-img>
              </div>
              

              <v-card-subtitle class="mx-auto mb-3 font-weight-bold headline">
                  {{user.name.first}} 
                  {{user.name.last}}
                </v-card-subtitle>

              <v-card-text class="text--primary">
                <div class="mb-2">Address: 
                    {{user.location.street.number}} 
                    {{user.location.street.name}}, 
                    {{user.location.city}},
                    {{user.location.country}},
                    {{user.location.postcode}}
                </div>

                <div class="mb-2">Email: {{user.email}}</div>

                <div class="mb-2">Gender: {{user.gender}}</div>

                <div class="mb-2">Birth date: {{(user.dob.date).slice(0, 10)}}</div>

                <div class="mb-2">Phone: {{user.phone}}</div>
              </v-card-text>
            </v-card>
            <h1 v-else>Users page</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>

<script>
export default {
    computed: {
        user () {
            return this.$store.state.users.find((_, i) => i === Number(this.$route.params.id));
        }
    },
    methods: {
      click () {
        console.log(this.$store.getters.user)
      }
    }
}
</script>

<style scoped>
  .v-image {
      border-radius: 20px;
  }
</style>