<template>
  <div>
    <p
      class="mb-0 sign-in btn btn-transparent btn--m"
      @click="$bvModal.show('modal-register')"
    >
      Đăng Kí
    </p>
    <b-modal id="modal-register" hide-footer hide-header size="lg">
      <div class="d-block text-center">
        <div>
          <b-form @submit="onSubmit" v-if="show">
            <p class="title">Chao mung ban den voi Hanoi Car</p>
            <b-row>
              <b-col class="col-6">
                <b-form-group
                  id="email"
                  label="Email address:"
                  label-for="input-1"
                  description="We'll never share your email with anyone else."
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="Enter email"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="name"
                  label="Your Name:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    placeholder="Enter name"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>

            <div class="2-button mt-3">
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button block @click="$bvModal.hide('modal-register')"
                >Close Me
              </b-button>
            </div>
          </b-form>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-in {
  color: white;
  border: 1px solid white;
  &:hover {
    color: green;
    border: 1px solid green;
  }
}
</style>
