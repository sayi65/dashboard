<template>
    <v-card
    color="#26c6da"
    dark
    class="mx-auto"
    max-width="700">

        <v-card-title class="title white--text">
            <div class="text-sm-left">
                <v-chip
                :close='close'
                :color="item.color">
                 問題なし
                </v-chip>
            </div>
            {{ item.tittle }}
        </v-card-title>

        <v-card-text class="white">
            <v-textarea
            light
            solo
            :outline='outline'
            :readonly='readonly'
            name="input-7-1"
            class="black--text"
            :value="item.value"
            hint="進捗入力"
            ></v-textarea>

            <v-btn fab dark small
            color="indigo"
            class="mx-0"
            @click="toggleBtn(item)"
            outline>
                <v-icon dark>edit</v-icon>
            </v-btn>
        </v-card-text>
    </v-card>
</template>

<script>

  export default {
    // props:{
    //     item:{
    //         type:Object,
    //         required:false,
    //         default: () => ({
    //                 color: 'red',
    //                 tittle: '大東1',
    //                 value:'テスト１'
    //         })
    //     }
    // },
    props: ['item'],
    data: () => ({
     close:false,
     outline:false,
     readonly:true
    }),
    methods:{
        // toggleBtn(item, event){
        //   this.close =!this.close
        //   this.outline =!this.outline
        //   this.readonly = !this.readonly
        // }
    },
  }
</script>