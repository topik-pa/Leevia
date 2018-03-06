<template>
  <main class="container">
    <div class="row">
      <div class="description col-sm-7">
        <h1>{{title}}</h1>
        <p>{{paragraph}}</p>
        <p class="note" v-html="note"></p>
      </div>
      <div class="col-sm-5">
        <registration></registration>
      </div>
    </div>
  </main>
</template>

<script>
import Registration from '@/components/Registration'
export default {
  name: 'Home',
  components: {
    Registration
  },
  data () {
    return {
      title: 'Vinci un viaggio a Parigi',
      paragraph: 'Compila il form con i tuoi dati e partecipa all\'estrazioone di un viaggio a Parigi!',
      note: 'Concorso valido dal 20/10/2017. Per info consulta il <a href="#">regolamento</a>.'
    }
  }
}
</script>

<style lang="scss" scoped>
  $backgroundColor: #001e38;
  main {
    background-color: $backgroundColor;
  }
  .container {
    color: #FFFFFF;
    font-size: 120%;
    h1 {
      font-size: 260%;
      text-transform: uppercase;
      font-weight: bold;
    }
    .note {
      font-size: 70%;
      a {
        color: #FFFFFF;
        text-decoration: underline;
      }
    }
    .description {
      padding: 20% 10%;
    }
  }
</style>
