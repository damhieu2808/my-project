<template>
  <div class="container body">
    <div class="search-box">
      <p class="slogan">HNCAR cung ban tren moi neo duong</p>
    </div>
    <div>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Xe tự Lái" active>
        <b-card-text>Tab contents 1</b-card-text>
        <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="địa điểm:"
        label-for="input-1"
       
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type=""
          placeholder="Nhập TP, quận, địa chỉ..."
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Bắt đầu" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder=""
          required
        ></b-form-input>
      </b-form-group>

        <b-form-group id="input-group-2" label="kết thúc" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder=""
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Tìm xe ngay</b-button>
      
    </b-form>

  </div>
      </b-tab>
      <b-tab title="Xe có tài xế">
        <b-card-text>Tab contents 2</b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped lang="scss">
.search-box {
 padding: 5px;
 margin: 5px;
}

</style>
