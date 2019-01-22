<template>
  <v-layout 
    row 
    justify-center>
    <v-dialog 
      v-model="dialog" 
      fullscreen 
      hide-overlay 
      transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar 
          dark 
          color="primary">
          <v-btn 
            icon 
            dark 
            @click="showModal(isDialog = false)">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>進捗一覧</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn 
              dark 
              flat 
              @click="addCard()">進捗追加</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        
        <v-container>
          <v-timeline align-top>
            <v-timeline-item
              v-for="(item, i) in items"
              color="#26c6da"
              :key="i"
              fill-dot>
              
              <Card :item='item'/>
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

import 'moment/locale/ja'
import moment from 'moment'

import { mapMutations, mapState, mapActions } from 'vuex'
  export default {
    components: {
        Card
    },
    data: () => ({
     items: [
        {
          color: 'red',
          tittle: '9/28',
          value:'テスト１'
        },
        {
          color: 'red',
          tittle: '9/20',
          value:'テスト2'
        },
        {
          color: 'green',
          tittle: '9/12',
          value:'テスト3'
        },
        {
          color: 'green',
          tittle: '9/4',
          value:'テスト4'
        }
      ]
    }),
    computed: {
      ...mapState({
        dialog: state => state.list.open
      }),
    },
    methods:{
        addCard(){
          this.items.unshift({color: '', tittle: moment().day(4).format('YYYY/MM/DD') , value: ''})
        },
        showModal(isDialog){
          this.toggleModal(isDialog)
        },
        ...mapMutations({ 
          toggleModal :'list/toggleModal',
        })
    },
  }
</script>