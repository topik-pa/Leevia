<template>
  <main class="container">
    <div class="row">
      <div class="description col-md-7">
        <h1>{{title}}</h1>
        <p>{{paragraph}}</p>
        <p class="note" v-html="note"></p>
        <transition name="fade">
          <div v-if="isFormSubmitted" class="congrats">
            {{congrats}}
          </div>
        </transition>
      </div>
      <div class="col-md-5">
        <registration v-on:formSubmitted="formSubmitted"></registration>
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
      note: 'Concorso valido dal 20/10/2017. Per info consulta il <a id="regolamento" href="#">regolamento</a>.',
      congrats: 'Congratulazioni, i tuoi dati sono stati inviati!',
      isFormSubmitted: false
    }
  },
  methods: {
    formSubmitted: function () {
      this.isFormSubmitted = true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables.scss";
  main {
    background-color: $secondary-color;
  }
  .container {
    color: $text-color;
    text-align: center;
    h1 {
      font-size: 450%;
      text-transform: uppercase;
      font-weight: bold;
    }
    p {
      font-size: 180%;
    }
    .note {
      font-size: 110%;
    }
    .description {
      padding: 5% 30px;
    }
    .congrats {
      color: $primary-color;
      font-size: 150%;
      margin-top: 80px;
      text-transform: uppercase;
      font-weight: bold;
      text-shadow: 0 0 2px #fff;
      letter-spacing: 1px;
    }
    .row {
      background-image: url('../assets/images/img_2-resize-min-reverse.jpg');
      background-repeat: no-repeat;
      background-size: 200%;
      background-position: 23% 0%;
    }
  }
  @media only screen and (min-width: 768px) {
    .container {
      text-align: left;
      h1 {
        font-size:700%;
      }
      .description {
        padding: 5% 55px;
      }
      .row {
        background-size: cover;
        background-position: 0 0;
      }
    }
  }
</style>
