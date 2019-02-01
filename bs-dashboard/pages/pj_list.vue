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
      :items="desserts.items"
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
            <td class="text-xs-center">{{ props.item.pj_name }}</td>
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
        "{{ search }}"の検索結果はありません。
      </v-alert>
    </v-data-table>
  </v-card>

    </v-container>
</template>

<script>

import { mapState, mapActions } from 'vuex'

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
        // desserts: [],
      }
    },
    computed: {
      ...mapState({
        desserts: state => state.data.pjData
      }),
    },
    mounted() {
      try {
        this.load();
      } catch (e) {
        throw e;
      }
    },
    methods: {
      ...mapActions({
        execGetItems: 'data/findAll'
      }),
      load() {
          this.execGetItems().then(res => {
        }).catch(err => {
          console.log(err)
        })
      },
    },
  }
</script>