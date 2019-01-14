<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
          <v-select
            ref="区分"
            :rules="[() => !!classification || '必須項目です。']"
            :items="classification"
            label="区分"
            box
            color="white"
            item-text="name"
            placeholder="選択してください。"
            required
          ></v-select>
          <v-select
            ref="契約"
            :rules="[() => !!agreement || '必須項目です。']"
            :items="agreement"
            box
            color="white"
            label="契約"
            placeholder="選択してください。"
            required
          ></v-select>
          <v-select
            ref="確定"
            :rules="[() => !!orders || '必須項目です。']"
            :items="orders"
            box
            color="white"
            label="確定"
            placeholder="選択してください。"
            required
          ></v-select>
          <v-autocomplete
            ref="ユーザ"
            :rules="[() => !!users || '必須項目です。']"
            :items="users"
            item-text="name"
            label="ユーザ"
            placeholder="選択してください。"
            required
          ></v-autocomplete>
          <v-select
            ref="主菅"
            :rules="[() => !!supervision || '必須項目です。']"
            :items="supervision"
            label="主菅"
            box
            color="white"
            placeholder="選択してください。"
            required
          ></v-select>
          <v-autocomplete
            ref="営業"
            :rules="[() => !!sales || '必須項目です。']"
            :items="sales"
            label="営業"
            item-text="name"
            placeholder="選択してください。"
            required
          ></v-autocomplete>
          <v-autocomplete
            ref="PM"
            :rules="[() => !!pms || '必須項目です。']"
            :items="pms"
            item-text="name"
            label="PM"
            placeholder="選択してください。"
            required
          ></v-autocomplete>
          <v-autocomplete
            ref="PL"
            :rules="[() => !!pls || '必須項目です。']"
            :items="pls"
            item-text="name"
            item-value="name"
            label="PL"
            placeholder="選択してください。"
            required
          ></v-autocomplete>
          <v-select
            ref="金額区分"
            :rules="[() => !!kubun || '必須項目です。']"
            :items="kubun"
            label="金額区分"
            placeholder="選択してください。"
            required
          ></v-select>
          <v-text-field
            ref="amount"
            :rules="[() => !!amount || '必須項目です。']"
            v-model="amount"
            label="金額"
            placeholder="金額を入力してください。"
            required
          ></v-text-field>             
          <v-autocomplete
            ref="address"
            :rules="[
              () => !!pjname || '必須項目です。',
              () => !!pjname && pjname.length <= 250 || '業務名/内容を250文字以内に入力してください。',
              addressCheck
            ]"
            :items="pjname"
            item-value="name"
            item-text="name"
            label="業務名/内容"
            placeholder="業務名/内容を入力してください。"
            counter="250"
            required
          ></v-autocomplete>
        </v-card-text>

  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 lg6>
        <v-menu
          v-model="menu1"
          :close-on-content-click="false"
          full-width
          max-width="290"
        >
          <v-text-field
            slot="activator"
            :value="computedDateFormattedStartDate"
            label="開始時期"
          ></v-text-field>
          <v-date-picker
            v-model="startdate"
            @change="menu1 = false"
            locale="jp-ja"
          ></v-date-picker>
        </v-menu>
      </v-flex>

      <v-flex xs12 lg6>
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          full-width
          max-width="290"
        >
          <v-text-field
            slot="activator"
            :value="computedDateFormattedEndDate"
            clearable
            label="終了時期"
          ></v-text-field>
          <v-date-picker
            v-model="enddate"
            @change="menu2 = false"
            locale="jp-ja"
          ></v-date-picker>
        </v-menu>
      </v-flex>
    </v-layout>
  </v-container>


        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <v-btn flat>Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <v-btn
                slot="activator"
                icon
                class="my-0"
                @click="resetForm"
              >
                <v-icon>refresh</v-icon>
              </v-btn>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" flat @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import 'moment/locale/ja'
import moment from 'moment'


  export default {
    data: () => ({
      classification: [ '案件','進捗','その他'],
      agreement: [ '請負','保守'],
      orders: ['問題なし', '受注'],
      users:[
        {name:'大東実業㈱', id:1},
        {name:'CASIO', id:2},
      ],
      pjname:[
        {name:'運行管理システム保守', id:1},
        {name:'ClassPad　.Net', id:2},
      ],
      supervision:['1課','2課','3課','4課'],
      sales:[
        {name: '向山M', id:1},
        {name: '宮崎M', id:2}
      ],
      pms:[
        {name:'Aさん', id:1},
        {name:'Bさん', id:2},
      ],
      pls:[
        {name:'PAさん', id:1},
        {name:'PBさん', id:2},
      ],
      kubun:['確定',''],
      amount:'',

      startdate: new Date().toISOString().substr(0, 10),
      enddate: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false
    }),

    computed: {
      computedDateFormattedStartDate () {
        return this.startdate ? moment(this.startdate).format('dddd, MMMM Do YYYY') : ''
      },
      computedDateFormattedEndDate () {
        return this.enddate ? moment(this.enddate).format('dddd, MMMM Do YYYY') : ''
      }
    }
  }
</script>
