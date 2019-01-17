<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="showModal(isDialog = false)">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>進捗一覧</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="showModal(isDialog = false)">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        
        <v-container>
          <v-timeline align-top>
            <v-timeline-item
              v-for="(item, i) in items"
              color="#26c6da"
              :icon="item.icon"
              :key="i"
              fill-dot
            >
              <v-card
                color="#26c6da"
                dark
                class="mx-auto"
                max-width="700"
              >
                <v-card-title class="title">
                  <div class="text-sm-left">
                    <v-chip
                      text-color="white"
                      close
                      color="red">問題なし</v-chip>
                  </div>
                  Lorem Ipsum Dolor</v-card-title>
                <v-card-text class="white text--primary">
                  <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
                  <v-btn
                    :color="item.color"
                    class="mx-0"
                    outline
                  >
                    編集
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-container>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapMutations } from 'vuex'
  export default {
    data: () => ({
     items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star'
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant'
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon'
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer'
        }
      ]
    }),
    computed: {
      dialog () {
        return this.$store.state.list.open
      }
    },
    methods:{
        showModal(isDialog){
          this.toggleModal(isDialog)
        },
        ...mapMutations({ toggleModal :'list/toggleModal'})
    },
  }
</script>