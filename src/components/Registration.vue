<template>
  <section>
    <form>
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" class="form-control" id="name" placeholder="Mario">
      </div>
      <div class="form-group">
        <label for="surname">Cognome</label>
        <input type="text" class="form-control" id="surname" placeholder="Rossi">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" placeholder="mariorossi@leeviamail.com">
      </div>
      <div class="form-group">
        <label for="telephone">Telefono</label>
        <input type="tel" class="form-control" id="telephone" placeholder="3397777777">
      </div>
      <div class="form-group">
        <label for="born">Data di nascita</label>
        <input type="text" class="form-control" id="born" placeholder="June 21, 1991">
      </div>
      <div class="form-group">
        <label for="everbeen">Sei mai stato a parigi</label>
        <select class="form-control" id="everbeen">
          <option>Si</option>
          <option>No</option>
          <option>Non ricordo</option>
        </select>
      </div>
      <div class="privacy-1">
        <p>ACCETTO il regolamento ed acconsento....</p>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="privacy-1" id="privacy-1-Y" value="Y" checked>
          <label class="form-check-label" for="privacy-1-Y">
            Si
          </label>
          <input class="form-check-input" type="radio" name="privacy-1" id="privacy-1-Y" value="N">
          <label class="form-check-label" for="privacy-2-Y">
            No
          </label>
        </div>
      </div>
      <div class="privacy-2">
        <p>ACCETTO il regolamento ed acconsento....</p>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="privacy-2" id="privacy-2-Y" value="Y" checked>
          <label class="form-check-label" for="privacy-2-Y">
            Si
          </label>
          <input class="form-check-input" type="radio" name="privacy-2" id="privacy-2-Y" value="N">
          <label class="form-check-label" for="privacy-2-Y">
            No
          </label>
        </div>
      </div>
      <div v-if="registered">
        <div class="thanks">{{greeting}}</div>
      </div>
      <div class="cta" v-else>
        <a href="#" class="btn btn-primary" @click="joinUs">Partecipa!</a>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      greeting: 'Grazie per esserti iscritto!',
      registered: false
    }
  },
  methods: {
    joinUs: function (e) {
      e.preventDefault()
      this.registered = true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables.scss";
  form {
    background: #FFFFFF;
    padding: 30px;
    color: $secondary-color;
    margin: 30px;
    border: 2px solid $secondary-color;
    border-radius: 5px;
    label {
      text-transform: uppercase;
      font-weight: normal;
    }
    .btn {
      width: 100%;
      margin: 20px auto;
      display: block;
      background-color: $primary-color;
      border: none;
      text-transform: uppercase;
      color: $secondary-color;
      font-weight: bold;
      padding: 15px;
      font-size: 125%;
    }
    .thanks {
      font-size: 170%;
      text-align: center;
      margin: 20px 0;
      border: 1px solid $primary-color;;
      padding: 10px;
      color: $primary-color;
    }
  }
</style>
