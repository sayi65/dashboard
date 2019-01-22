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
            <v-btn dark flat @click="showModal(isDialog = false)">進捗追加</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        
        <v-container>
          <v-timeline align-top>
            <v-timeline-item
              v-for="(item, i) in items"
              color="#26c6da"
              :key="i"
              fill-dot>
              <span slot="opposite">Tus eu perfecto</span>
              
              <card :item='item'/>

            </v-timeline-item>
          </v-timeline>
        </v-container>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import Card from '~/components/Card.vue'

import { mapMutations, mapState, mapActions } from 'vuex'
  export default {
    components: {
        Card
    },
    data: () => ({
     items: [
        {
          color: 'red',
          tittle: '大東1',
          value:'テスト１'
        },
        {
          color: 'red',
          tittle: '大東2',
          value:'テスト2'
        },
        {
          color: 'green',
          tittle: '大東3',
          value:'テスト3'
        },
        {
          color: 'green',
          tittle: '大東4',
          value:'テスト4'
        }
      ]
    }),
    computed: {
      // dialog () {
      //   return this.$store.state.list.open
      // },
      ...mapState({
        dialog: state => state.list.open
      }),
    },
    methods:{
        showModal(isDialog){
          this.toggleModal(isDialog)
        },
        ...mapMutations({ 
          toggleModal :'list/toggleModal',
          // showItem: 'dialog/showItem'
        })
    },
  }
</script>