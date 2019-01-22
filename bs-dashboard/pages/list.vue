<template>
    <v-container 
      grid-list-md 
      text-xs-center>
        <v-flex xs12>
            <div>
                <v-tabs
                  v-model="active"
                  color="cyan"
                  dark
                  slider-color="yellow">
                      <v-tab
                      v-for="n in 4"
                      :key="n"
                      ripple>
                  {{ n }} 課
                </v-tab>

                <v-tab-item
                    v-for="n in 4"
                    :key="n"
                >
                <v-card flat>
                    <v-card-title>
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        append-icon="search"
                        label="検索"
                        single-line
                        hide-details
                    ></v-text-field>
                    </v-card-title>

             <v-expansion-panel 
               popout 
               expand>
    <v-expansion-panel-content
      v-for="(date,i) in dates"
      :key="i"
    >
        <v-icon 
          slot="actions" 
          color="cyan">$vuetify.icons.expand</v-icon>
        <div slot="header" >{{ date }}</div>

            <v-data-table
             :headers="headers"
             :loading="true"
             :items="desserts"
             :search="search"
             class="elevation-1">


            <v-progress-linear 
              slot="progress" 
              color="blue" 
              indeterminate></v-progress-linear>
            
            <template 
              slot="items" 
              slot-scope="props">
              <tr @click="showModal(props.item, openDialog = true)">
                <td class="text-xs-center">{{ props.item.users }}</td>
                <td class="text-xs-center">{{ props.item.pjname }}</td>
                <td class="text-xs-center">{{ props.item.pms }}</td>
                <td class="text-xs-center">{{ props.item.pls }}</td>
                <td class="text-xs-center">{{ props.item.startdate }}</td>
                <td class="text-xs-center">{{ props.item.enddate }}</td>
              </tr>
            </template>
        </v-data-table>      


    </v-expansion-panel-content>
  </v-expansion-panel>


                </v-card>
            </v-tab-item>
            </v-tabs>
        </div>
        </v-flex>
        <Dialog />
    </v-container>
</template>

<script>
import Dialog from '~/components/Dialog.vue'

import { mapMutations } from 'vuex'

const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

  export default {
    components: {
        Dialog
    },
    data () {
      return {
        dialog: false,
        active: null,
        search: '',
        headers: [
          { text: 'ユーザ', value: 'users' },
          { text: '業務名/内容', value: 'pjname' },
          { text: 'PM', value: 'pms' },
          { text: 'PL', value: 'pls' },
          { text: '開始時期', value: 'startdate' },
          { text: '終了時期', value: 'enddate' },
        ],
        dates:[
          '2019-01',
          '2018-12',
          '2018-11',
          '2018-10',
          '2018-09'
        ],
        desserts: [
          {
            value: false,
            classification: '案件',
            agreement: '請負',
            orders: '問題なし',
            users: '大東実業㈱',
            supervision: '4課',
            sales: '向山M',
            pms: 'Aさん',
            pls: 'PAさん',
            kubun: '確定',
            amount: '100',
            pjname: '運行管理システム保守',
            startdate: '',
            enddate:''
          },
          {
            value: false,
            classification: '進捗',
            agreement: '請負',
            orders: '問題なし',
            users: '大東実業㈱',
            supervision: '4課',
            sales: '向山M',
            pms: 'Aさん',
            pls: 'PAさん',
            kubun: '確定',
            amount: '100',
            pjname: '運行管理システム保守',
            startdate: '',
            enddate:''
          },
          {
            value: false,
            classification: '進捗',
            agreement: '請負',
            orders: '問題なし',
            users: '大東実業㈱',
            supervision: '4課',
            sales: '向山M',
            pms: 'Aさん',
            pls: 'PAさん',
            kubun: '確定',
            amount: '100',
            pjname: '運行管理システム保守',
            startdate: '',
            enddate:''
          },
          {
            value: false,
            classification: '進捗',
            agreement: '請負',
            orders: '問題なし',
            users: '大東実業㈱',
            supervision: '4課',
            sales: '向山M',
            pms: 'Aさん',
            pls: 'PAさん',
            kubun: '確定',
            amount: '100',
            pjname: '運行管理システム保守',
            startdate: '',
            enddate:''
          },
          {
            value: false,
            classification: '進捗',
            agreement: '請負',
            orders: '問題なし',
            users: '大東実業㈱',
            supervision: '4課',
            sales: '向山M',
            pms: 'Aさん',
            pls: 'PAさん',
            kubun: '確定',
            amount: '100',
            pjname: '運行管理システム保守',
            startdate: '',
            enddate:''
          },
          {
            value: false,
            classification: '進捗',
            agreement: '請負',
            orders: '問題なし',
            users: '大東実業㈱',
            supervision: '4課',
            sales: '向山M',
            pms: 'Aさん',
            pls: 'PAさん',
            kubun: '確定',
            amount: '100',
            pjname: '運行管理システム保守',
            startdate: '',
            enddate:''
          },
        ]
      }
    },
    methods:{
        showModal(item, isDialog){
          this.toggleModal(isDialog)
        },
        ...mapMutations({ toggleModal :'list/toggleModal'})
    }
  }
</script>

