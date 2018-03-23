<template>
  <section>
    <form>
      <div v-for="(input, index) in form" v-bind:key="index">
        <div v-if="input.wrapper" class="inputs-wrapper">
          <div>{{input.text}}</div>
          <div v-for="(subinput, index) in input.inputs" v-bind:key="index">
            <input :type="subinput.type" :name="subinput.id" :value="subinput.value" :id="subinput.id + index">
            <label :for="subinput.id + index">{{subinput.label}}</label>
          </div>
        </div>
        <div v-else class="form-group">
          <label :for="input.id">{{input.label}}</label>
          <select v-if="input.type == 'select'" class="form-control" :id="input.id" :name="input.id">
            <option v-for="(option, index) in input.options" v-bind:key="index" :value="option.value">{{option.text}}</option>
          </select>
          <input v-else-if="input.type == 'radio'" :type="input.type" :id="input.id" :name="input.id"/>
          <input v-else :type="input.type" class="form-control" :id="input.id" :placeholder="input.placeholder" :name="input.id"/>
        </div>
      </div>
      <div v-if="submitted">
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
      submitted: false,
      form: {
        1: {
          label: 'Nome',
          type: 'text',
          id: 'name',
          placeholder: 'Mario'
        },
        2: {
          label: 'Cognome',
          type: 'text',
          id: 'surname',
          placeholder: 'Rossi'
        },
        3: {
          label: 'Email',
          type: 'email',
          id: 'email',
          placeholder: 'mariorossi@leeviamail.com'
        },
        4: {
          label: 'Tel',
          type: 'tel',
          id: 'tel',
          placeholder: '0225258545'
        },
        5: {
          label: 'Data di nascita',
          type: 'text',
          id: 'born',
          placeholder: 'June 21, 1991'
        },
        6: {
          label: 'Sei mai stato a Parigi?',
          type: 'select',
          id: 'everbeen',
          options: {
            1: {
              value: 'yes',
              text: 'Sì',
              selected: true
            },
            2: {
              value: 'no',
              text: 'No'
            },
            3: {
              value: 'other',
              text: 'Forse'
            }
          }
        },
        7: {
          wrapper: 'privacy',
          text: 'ACCETTO il regolamento ed acconsento...',
          inputs:
            [{
              value: 'yes',
              type: 'radio',
              label: 'Sì',
              id: 'privacy',
              checked: true
            },
            {
              value: 'no',
              type: 'radio',
              label: 'No',
              id: 'privacy'
            }]
        }
      }
    }
  },
  methods: {
    joinUs: function (e) {
      e.preventDefault()
      this.submitted = true
      this.$emit('formSubmitted')
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
