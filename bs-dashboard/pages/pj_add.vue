<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step 
        :complete="e1 > 1"
        editable 
        step="1">業務進捗</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step 
        :complete="e1 > 2" 
        editable 
        step="2">業務内容</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step 
        editable 
        step="3">金額</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content 
        step="1" 
        style="height:500px">
        <v-card
          ref="form"
          style="height:360px"
          class="mb-5">
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
                    required></v-select>
                <v-select
                    ref="請負"
                    :rules="[() => !!agreement || '必須項目です。']"
                    :items="agreement"
                    box
                    color="white"
                    label="請負"
                    placeholder="選択してください。"
                    required></v-select>
                <v-select
                    ref="状況"
                    :rules="[() => !!orders || '必須項目です。']"
                    :items="orders"
                    box
                    color="white"
                    label="状況"
                    placeholder="選択してください。"
                    required></v-select>
                <v-select
                    ref="問題区分"
                    :rules="[() => !!pb_classification || '必須項目です。']"
                    :items="pb_classification"
                    box
                    color="white"
                    label="問題区分"
                    placeholder="選択してください。"
                    required></v-select>
            </v-card-text>
        </v-card>
         
        <v-fab-transition>
            <v-btn
                @click="e1 = 2"
                color="pink"
                dark
                absolute
                right
                fab>
                <v-icon>chevron_right</v-icon>
            </v-btn>
        </v-fab-transition>
      </v-stepper-content>

      <v-stepper-content 
        step="2" 
        style="height:500px">
        <v-card
          ref="form"
          style="height:360px"
          class="mb-5">
          <v-card-text>
            <v-autocomplete
                ref="ユーザ"
                :rules="[() => !!users || '必須項目です。']"
                :items="users"
                item-text="name"
                label="ユーザ"
                placeholder="選択してください。"
                required></v-autocomplete>
            <v-autocomplete
                ref="address"
                :rules="[
                () => !!pjname || '必須項目です。',
                () => !!pjname && pjname.length <= 250 || '業務名/内容を250文字以内に入力してください。'
                ]"
                :items="pjname"
                item-value="name"
                item-text="name"
                label="業務名/内容"
                placeholder="業務名/内容を入力してください。"
                counter="250"
                required></v-autocomplete>
            <v-layout 
              align-center 
              justify-center 
              row 
              fill-height 
              wrap>
                <v-select
                    ref="主菅"
                    :rules="[() => !!supervision || '必須項目です。']"
                    :items="supervision"
                    label="主菅"
                    color="white"
                    placeholder="選択してください。"
                    required></v-select>
                <v-autocomplete
                    ref="営業"
                    :rules="[() => !!sales || '必須項目です。']"
                    :items="sales"
                    label="営業"
                    item-text="name"
                    placeholder="選択してください。"
                    required></v-autocomplete>
            </v-layout>
            <v-layout 
              align-center 
              justify-center 
              row 
              fill-height 
              wrap>
                <v-autocomplete
                    ref="PM"
                    :rules="[() => !!pms || '必須項目です。']"
                    :items="pms"
                    item-text="name"
                    label="PM"
                    placeholder="選択してください。"
                    required></v-autocomplete>
                <v-autocomplete
                    ref="PL"
                    :rules="[() => !!pls || '必須項目です。']"
                    :items="pls"
                    item-text="name"
                    item-value="name"
                    label="PL"
                    placeholder="選択してください。"
                    required></v-autocomplete>
            </v-layout>
            </v-card-text>
        </v-card>

        <v-fab-transition>
            <v-btn
                color="pink"
                @click="e1 = 1"
                dark
                absolute
                left
                fab>
                <v-icon>chevron_left</v-icon>
            </v-btn>
        </v-fab-transition>

        <v-fab-transition>
            <v-btn
                @click="e1 = 3"
                color="pink"
                dark
                absolute
                right
                fab>
                <v-icon>chevron_right</v-icon>
            </v-btn>
        </v-fab-transition>
      </v-stepper-content>

      <v-stepper-content 
        step="3" 
        style="height:500px">
        <v-card
          ref="form"
          style="height:360px"
          class="mb-5">
          <v-card-text>
            <v-select
                ref="金額区分"
                :rules="[() => !!kubun || '必須項目です。']"
                :items="kubun"
                label="金額区分"
                placeholder="選択してください。"
                required></v-select>
            <v-text-field
                ref="amount"
                :rules="[() => !!amount || '必須項目です。']"
                v-model="amount"
                label="金額"
                placeholder="金額を入力してください。"
                required></v-text-field>  
          </v-card-text>
        </v-card>
        <v-fab-transition>
            <v-btn
                color="pink"
                @click="e1 = 2"
                dark
                absolute
                left
                fab>
                <v-icon>chevron_left</v-icon>
            </v-btn>
        </v-fab-transition>

        <v-btn
          color="primary"
          right
          absolute
          fab
          @click="e1 = 1">
          保存
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>

import 'moment/locale/ja'
import moment from 'moment'

  export default {
    data () {
      return {
        e1: 0,
        classification: [ '案件','進捗','その他'],
        agreement: [ '請負','準委任','派遣','保守', '社内', '無償', 'その他'],
        orders: ['問題なし','問題あり','要注意','終了', '受注', 
        '失注','確度A','確度B','確度C','確度L','確度低','未確認','その他'
        ],
        pb_classification: ['問題なし','顧客クレーム','進捗遅れ','納期遅れ', '低品質', 
        '出荷後不具合','要員不足','計画外作業','マイナスProj','金額不足','交渉難航','工数増加','その他'
        ],
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
      }
    }
  }
</script>