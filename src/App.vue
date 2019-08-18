<template>
  <div>
    <p>Here will be the select component</p>
    <Select :options="options" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Select from './components/Select/Select';

@Component({
  components: {
    Select,
  },
})
export default class App extends Vue {
  public options = [
    {
      name: "Banan",
      pris: 20,
      id: 0,
    },
    {
      name: "Eple",
      pris: 15,
      id: 1,
    },
    {
      name: "Pære",
      pris: 12,
      id: 2,
    }        
  ];
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
