<template>
  <div>
    <p
      class="mb-0 login btn btn-transparent btn--m"
      @click="$bvModal.show('modal-login')"
      style="color:white"
    >
      Đăng nhap
    </p>
    <b-modal id="modal-login" hide-footer hide-header size="lg">
      <div class="d-block text-center">
        <div>
          <b-form @submit="onSubmit" v-if="show">
            <p class="title slogan-title">Chào mừng bạn đến với HaNoi CAR</p>
            <b-row>
              <b-col class="col-6 container dangnhap">
               <i class="fa-solid fa-envelope"></i>
                <b-form-group
                  id="email"
                  label="Email"
                  label-for="email"
                  description="We'll never share your email with anyone else."

                >
                  <b-form-input
                    id="email"
                    v-model="form.email"
                    type="email"
                    placeholder="Nhập Email của bạn "
                    required
                  ></b-form-input>
                  
                </b-form-group>

                <b-form-group
                  id="password"
                  label="Mật Khẩu"
                  label-for="password"
                  class="input-form"
                  
                >
                  <b-form-input
                    id="password"
                    v-model="form.name"
                    placeholder="Nhập Mật Khẩu của bạn"
                    required
                  ></b-form-input>
                </b-form-group>
                   
              </b-col>
              
            </b-row>

            <div class="2-button mt-3">
              <b-button type="submit" variant="primary">Đăng nhập</b-button>
              <b-button block @click="$bvModal.hide('modal-login')"
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
        password: ""

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
</Script>
<style lang="scss" scorped>
*{
  padding: 0%;
  margin: 0%;
}
#email{
  margin: px;
  text-align: center
}
#password{
  margin: 10px;
  text-align: center
}
.dangnhap {
  display: inline
}
.login{
  color: white;
  border: 1px solid white;
  &:hover {
    color: green;
    border: 1px solid green;
  }
}
</style>
