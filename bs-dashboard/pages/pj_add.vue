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
                    outline
                    v-model="createBsProject.classification"
                    color="white"
                    item-text="name"
                    placeholder="選択してください。"
                    required></v-select>
                <v-select
                    ref="請負"
                    :rules="[() => !!agreement || '必須項目です。']"
                    :items="agreement"
                    box
                    outline
                    v-model="createBsProject.agreement"
                    color="white"
                    label="請負"
                    placeholder="選択してください。"
                    required></v-select>
                <v-select
                    ref="状況"
                    :rules="[() => !!orders || '必須項目です。']"
                    :items="orders"
                    box
                    outline
                    v-model="createBsProject.orders"
                    color="white"
                    label="状況"
                    placeholder="選択してください。"
                    required></v-select>
                <v-select
                    ref="問題区分"
                    :rules="[() => !!pb_classification || '必須項目です。']"
                    :items="pb_classification"
                    box
                    outline
                    v-model="createBsProject.pb_classification"
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
            <v-text-field
                ref="ユーザ"
                :rules="[
                () => !!createBsProject.users || '必須項目です。',
                () => !!createBsProject.users && createBsProject.users.length <= 150 || '業務名/内容を150文字以内に入力してください。'
                ]"
                counter="150"
                item-text="name"
                v-model="createBsProject.users"
                label="ユーザ"
                placeholder="入力してください。"
                single-line
                outline
                required></v-text-field>
            <v-text-field
                ref="address"
                :rules="[
                () => !!createBsProject.pj_name || '必須項目です。',
                () => !!createBsProject.pj_name && createBsProject.pj_name.length <= 150 || '業務名/内容を150文字以内に入力してください。'
                ]"
                v-model="createBsProject.pj_name"
                item-value="name"
                item-text="name"
                label="業務名/内容"
                placeholder="業務名/内容を入力してください。"
                counter="150"
                single-line
                outline
                required></v-text-field>
            <v-layout 
              align-center 
              justify-center 
              row 
              fill-height 
              wrap>
              <v-flex xs12 sm6>
                <v-select
                    ref="主菅"
                    :rules="[() => !!supervision || '必須項目です。']"
                    :items="supervision"
                    label="主菅"
                    color="white"
                    single-line
                    outline
                    v-model="createBsProject.supervision"
                    placeholder="選択してください。"
                    required></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                    ref="営業"
                    :rules="[() => !!sales || '必須項目です。']"
                    label="営業"
                    item-text="name"
                    v-model="createBsProject.sales"
                    placeholder="入力してください。"
                    single-line
                    outline
                    counter="50"
                    required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout 
              align-center 
              justify-center 
              row 
              fill-height 
              wrap>
              <v-flex xs12 sm6>
                <v-text-field
                    ref="PM"
                    :rules="[() => !!createBsProject.pms || '必須項目です。']"
                    item-text="name"
                    label="PM"
                    v-model="createBsProject.pms"
                    placeholder="入力してください。"
                    single-line
                    outline
                    counter="50"
                    required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                    ref="PL"
                    :rules="[() => !!createBsProject.pls || '必須項目です。']"
                    item-text="name"
                    item-value="name"
                    v-model="createBsProject.pls"
                    label="PL"
                    placeholder="入力してください。"
                    single-line
                    outline
                    counter="50"
                    required></v-text-field>
              </v-flex>
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
                v-model="createBsProject.kubun"
                placeholder="選択してください。"
                required></v-select>
            <v-text-field
                ref="amount"
                v-model="createBsProject.amount"
                label="金額"
                prefix="￥"
                type="Number"
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
          type="submit"
          @click="save">
          保存
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import commonMixin from '../mixins/const_add'
import 'moment/locale/ja'
import moment from 'moment'
import { uuid } from 'vue-uuid';

  export default {
    mixins: [commonMixin],
    data () { 
      return {
        e1: 0,
        createBsProject: {
            agreement: '',
            amount: 0,
            classification: '',
            enddate: '',
            kubun: '',
            orders: '',
            pb_classification: '',
            pj_name: '',
            pls: '',
            pms: '',
            sales: '',
            startdate: '',
            supervision: '',
            users: '',
            uuid: uuid.v4()
        }
      }
    },
    methods: {
        save(){
            console.log(this.createBsProject)
            console.log(uuid.v4())
        }
    },
  }
</script>