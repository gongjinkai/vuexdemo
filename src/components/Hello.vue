<template>
  <div class="hello">
    counter is :{{$store.state.count}}
    <button @click="inc">+</button>
    <button @click="dec">-</button>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'hello',
  computed: mapGetters([
  ]),
  methods: mapActions([
    'inc',
    'dec'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
