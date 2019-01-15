<template>
    <v-container grid-list-md text-xs-center>
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

             <v-expansion-panel popout expand>
    <v-expansion-panel-content
      v-for="(item,i) in 5"
      :key="i"
    >
        <v-icon slot="actions" color="cyan">$vuetify.icons.expand</v-icon>
        <div slot="header" :open="open">2019-01-11</div>
            <v-data-table
             :headers="headers"
             :loading="true"
             :items="desserts"
             :search="search"
            class="elevation-1"
    >
            <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
            
            <template slot="items" slot-scope="props">

            <td>{{ props.item.classification }}</td>
            <td class="text-xs-right">{{ props.item.agreement }}</td>
            <td class="text-xs-right">{{ props.item.orders }}</td>
            <td class="text-xs-right">{{ props.item.users }}</td>
            <td class="text-xs-right">{{ props.item.sales }}</td>
            <td class="text-xs-right">{{ props.item.pms }}</td>
            <td class="text-xs-right">{{ props.item.pls }}</td>
            <td class="text-xs-right">{{ props.item.kubun }}</td>
            <td class="text-xs-right">{{ props.item.amount }}</td>
            <td class="text-xs-right">{{ props.item.pjname }}</td>
            <td class="text-xs-right">{{ props.item.startdate }}</td>
            <td class="text-xs-right">{{ props.item.enddate }}</td>
            </template>
        </v-data-table>      


    </v-expansion-panel-content>
  </v-expansion-panel>


                </v-card>
            </v-tab-item>
            </v-tabs>
            <Dialog />
        </div>
        </v-flex>
    </v-container>
</template>

<script>
import Dialog from '~/components/Dialog.vue'

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
        items:[
        {
          id: 1,
          name: 'Applications :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' }
          ]
        },
        {
          id: 2,
          name: 'Applications2 :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' }
          ]
        },
        ],
        headers: [
          {
            text: '区分',
            align: 'left',
            value: 'classification'
          },
          { text: '契約',
            align: 'left',
            value: 'agreement' },
          { text: '確定',
            align: 'left',
            value: 'orders' },
          { text: 'ユーザ', value: 'users' },
          { text: '営業', value: 'sales' },
          { text: 'PM', value: 'pms' },
          { text: 'PL', value: 'pls' },
          { text: '金額区分', value: 'kubun' },
          { text: '金額', value: 'amount' },
          { text: '業務名/内容', value: 'pjname' },
          { text: '開始時期', value: 'startdate' },
          { text: '終了時期', value: 'enddate' },
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
        showModal(){
        }
    }
  }
</script>

