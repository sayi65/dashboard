<template>
  <v-layout 
    row 
    wrap>
    <v-flex 
      sm6 
      xs12 
      md6 
      lg3>
      <v-card
        class="mt-3 mx-auto"
        sm6 
        xs12 
        md6 
        lg3
      >
        <v-sheet
          class="v-sheet--offset mx-auto"
          color="cyan"
          elevation="12"
          max-width="calc(100% - 32px)"
        >
          <v-icon x-large>show_chart</v-icon>      
        </v-sheet>

        <v-card-text class="pt-0">
          <p class="caption grey--text font-weight-light text-xs-right pt-3 mb-0">PJ数</p>
          <p class="text-xs-right display-1 mb-0">{{ count }}<small class="caption grey--text font-weight-light text-xs-right ml-1">件</small></p>
          <v-divider class="my-2"/>
          <span class="caption grey--text font-weight-light">全てのプロジェクトを表示</span>
        </v-card-text>
      </v-card>
    </v-flex>  
    <v-flex 
      sm6 
      xs12 
      md6 
      lg3>
      <v-card
        class="mt-3 mx-auto"
      >
        <v-sheet
          class="v-sheet--offset mx-auto"
          color="red"
          elevation="12"
          max-width="calc(100% - 32px)"
        >
          <v-icon x-large>error_outline</v-icon>      
        </v-sheet>

        <v-card-text class="pt-0">
          <p class="caption grey--text font-weight-light text-xs-right pt-3 mb-0">PJ進捗</p>
          <p class="text-xs-right display-1">4/{{ count }}</p>
          <v-divider class="my-2"/>
          <span class="caption grey--text font-weight-light">進捗に<code>問題あり</code>のPJ数</span>
        </v-card-text>
      </v-card>  
    
    </v-flex>
  </v-layout>


</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      count: state => state.count
    })
  },
  async asyncData({ store }) {
    await store.dispatch('getPJCount')
  }
}
</script>
<style>
.v-sheet--offset {
  top: -20px;
  /* float: left; */
  position: absolute;
  padding: 15px;
  margin-left: 15px !important;
}

.flex {
  padding: 15px;
}
</style>
