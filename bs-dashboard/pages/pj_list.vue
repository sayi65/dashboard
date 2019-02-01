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
      :loading="progress"
      class="elevation-1"
    >
    <v-progress-linear 
        slot="progress" 
        color="blue"
        indeterminate
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
import commonMixin from '../mixins/const_list'
  export default {
    name:'pj_list',
    watchQuery: [
      'search'
    ],
    mixins: [commonMixin],
    data () {
      return {
        search: '',
        progress: false,
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
      // this.progress = false
    },
    methods: {
      ...mapActions({
        execGetItems: 'data/findAll'
      }),
      load() {
        this.progress = true
        console.log(this.progress)
        // this.execGetItems().then(res => {
        //   this.progress = false
        // }).catch(err => {
        //   console.log(err)
        // })
      },
    },
  }
</script>