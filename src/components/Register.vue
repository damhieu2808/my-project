<template>
  <div>
    <p
      class="mb-0 sign-in btn btn-transparent btn--m"
      @click="$bvModal.show('modal-register')"
      style="color:white"
    >
      Đăng Kí
     
    </p>
    <b-modal id="modal-register" hide-footer hide-header size="lg">
      <div class="d-block text-center">
        <div>
          <b-form @submit="onSubmit" v-if="show">
            <p class="title slogan-title">Chào mừng bạn đến với HaNoi CAR</p>
            <b-row>
              <b-col class="col-6">
                <b-form-group
                  id="email"
                  label="Email"
                  label-for="input-1"
                  description="We'll never share your email with anyone else."
                  
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="Nhập Email của bạn "
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="name"
                  label="Họ Tên"
                  label-for="input-2"
                  class="input-form"
                  style=""
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    placeholder="Nhập User Name của bạn"
                    required
                  ></b-form-input>
                </b-form-group>
                   
              </b-col>
              <b-col class="col-6">
                <b-form-group
                  id="phonenumber"
                  label="Số điện thoại"
                  label-for="input-3"
                  description=""
                  class="input-number input-form"
                >
                  <b-form-input
                    id="input-3"
                    v-model="form.number"
                    type="number"
                    placeholder="Nhập SĐT của bạn "
                    required
                  ></b-form-input>
                </b-form-group>
                   
                <b-form-group
                  id="password"
                  label="Mật Khẩu"
                  label-for="input-4"
                  description=""
                  class="input-pw input-form mt-4"
                >
                  <b-form-input
                    id="input-4"
                    v-model="form.pw"
                  
                    placeholder="Nhập mật khẩu của bạn "
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>

            <div class="2-button mt-3">
              <b-button type="submit" variant="primary">Đăng Ký</b-button>
              <b-button block @click="$bvModal.hide('modal-register')"
                >Đóng
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
        phonenumber:"",
        password:""
      },
      show: true
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>

<style lang="scss" scoped>
*{
  padding: 0%;
  margin: 0%;
}
.sign-in {
  color: white;
  border: 1px solid white;
  &:hover {
    color: green;
    border: 1px solid green;
  }
}
.slogan-title {
  font-family: initial;
  color: #141414;
  font-weight: 700;
  font-size: 30px;
}
b-col {
  display: flex;
}
</style>
