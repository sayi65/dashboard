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
                <v-avatar slot="icon">
                 <v-btn 
                  fab 
                  dark 
                  small
                  @click="showSnackbar(item)"
                  color="error">
                  <v-icon dark>delete</v-icon>
                </v-btn>
              </v-avatar>

             <Card :item='item' @set="setData"/> 
            </v-timeline-item>
          </v-timeline>
        </v-container>

        <v-divider></v-divider>
      </v-card>
      
      <v-snackbar
      v-model="snackbar"
      >
      ({{text}})の進捗を削除しますか？
      <v-btn
        dark
        flat
        @click="deleteItem"
      >
      はい
      </v-btn>
      <v-btn
        dark
        flat
        @click="snackbar = false"
      >
        いいえ
      </v-btn>
    </v-snackbar>
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
      snackbar: false,
      text: '削除しますか？',
      isEditMode:false,
      deleteData :{},
     items: [
        {
          status: 1,
          tittle: '9/28',
          value:'テスト１'
        },
        {
          status: 1,
          tittle: '9/20',
          value:'テスト2'
        },
        {
          status: 0,
          tittle: '9/12',
          value:'テスト3'
        },
        {
          status: 0,
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
          if(this.isEditMode){
            if(this.items[0].tittle != moment().day(4).format('YYYY/MM/DD')){
              this.items.unshift({status: 0, tittle: moment().day(4).format('YYYY/MM/DD') , value: '', isNew: true})
            }
          }else{
            console.log("ため")
          }
          
        },
        showSnackbar(item){
          this.snackbar = true
          this.text = item.tittle
          this.deleteData = item
        },
        deleteItem(){
          //TODO remove data
          let noJohn = this.items.filter( el => el.tittle !== this.deleteData.tittle ); 
          this.items = noJohn
        },
        showModal(isDialog){
          this.toggleModal(isDialog)
        },
        ...mapMutations({ 
          toggleModal :'list/toggleModal',
        }), 
        setData(data) {
          this.isEditMode = data
        }
    },
  }
</script>