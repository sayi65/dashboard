<template>
    <v-container 
        grid-list-md 
        text-xs-center>
         <v-card>
    <v-card-title>
      検索
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="検索"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    >
    <v-progress-linear 
        slot="progress" 
        color="blue" 
        ></v-progress-linear>

      <template 
        slot="items"
        slot-scope="props">
            <td>{{ props.item.classification }}</td>
            <td class="text-xs-center">{{ props.item.agreement }}</td>
            <td class="text-xs-center">{{ props.item.orders }}</td>
            <td class="text-xs-center">{{ props.item.users }}</td>
            <td class="text-xs-center">{{ props.item.pjname }}</td>
            <td class="text-xs-center">{{ props.item.sales }}</td>
            <td class="text-xs-center">{{ props.item.pms }}</td>
            <td class="text-xs-center">{{ props.item.pls }}</td>
            <td class="text-xs-center">{{ props.item.kubun }}</td>
            <td class="text-xs-center">{{ props.item.amount }}</td>
            <td class="text-xs-center">{{ props.item.startdate }}</td>
            <td class="text-xs-center">{{ props.item.enddate }}</td>
      </template>
      <v-alert 
        slot="no-results" 
        :value="true" 
        color="error" 
        icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>

    </v-container>
</template>

<script>
  export default {
    name:'pj_list',
    watchQuery: [
            'search'
    ],
    data () {
      return {
        search: '',
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
          { text: 'ユーザ', 
            align: 'left',
            value: 'users' },
          { text: '業務名/内容', 
            align: 'left',
            value: 'pjname' },
          { text: '営業', 
            align: 'left',
            value: 'sales' },
          { text: 'PM',
            align: 'left',
            value: 'pms' },
          { text: 'PL', 
            align: 'left',
            value: 'pls' },
          { text: '金額区分', 
            align: 'left',
            value: 'kubun' },
          { text: '金額', 
            align: 'left',
            value: 'amount' },
          { text: '開始時期', 
            align: 'left',
            value: 'startdate' },
          { text: '終了時期', 
            align: 'left',
            value: 'enddate' },
        ],
        desserts: [
        {
            value: false,
            classification: '案件',
            agreement: '請負',
            orders: '問題なし',
            users: '大東実業㈱aaaa',
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
          }
        ]
      }
    },
    asyncData({ query, error }) {
      console.log(query.search)
      return {search : query.search}
    },
  }
</script>