<template>
  <div>
    <p
      class="mb-0 sign-in btn btn-transparent btn--m"
      @click="$bvModal.show('modal-register')"
      style="color:white"
    >
      Đăng Kí
     
    </p>
    <b-modal id="modal-register" class="modal__body" hide-footer hide-header size="lg">
      <div class="register-form__container">
        <div class="register-form__header">
          <h1 class="register-form__heading">Đăng ký tài khoản</h1>
      <!--<div class="d-block text-center">
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
      </div>-->
        </div>
        <div class="register-form__form">
          <div class="register-form__group">
            <input type="text" class="register-form__input" placeholder="Điện thoại hoặc Email">
          </div>
          <div class="register-form__group">
            <input type="text" class="register-form__input" placeholder="Tên hiển thị">
          </div>
          <div class="register-form__group">
            <input type="Password" class="register-form__input" placeholder="Mật khẩu">
          </div>
          <div class="register-form__group">
            <input type="password" class="register-form__input" placeholder="Xác nhận mật khẩu">
          </div>
        </div>
        <div class="register-form__aside">
          <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">
            <p class="register-form__policy-text">
            tôi đã đọc và đồng ý với chính sách của 
            <a href="" class="register-form__text-link">HaNoi Car</a>.
          </p>
          </b-form-checkbox>
        </div>
        <div class="register-form__controls">
          <button class="btn btn--back" block @click="$bvModal.hide('modal-register')">TRỞ LẠI</button>
          <button class="btn btn--primary">Đăng Ký</button>
        </div>
        </div>
        <div class="register-form__socials">
          <a href="https://www.facebook.com/hieu.damxuan.7" class="btn btn--with-icon-fb">
            <i class="fa-brands fa-facebook-square"></i>
            Kết nối với Facebook
          </a>
          <a href="https://www.facebook.com/hieu.damxuan.7" class="btn btn--with-icon-gg">
            <i class="fa-brands fa-google"></i>
            Kết nối với Google
          </a>
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
:root {
  --primary-color:#ee4d2d;
  --white-color:#fff;
  --black-color:#000;
  --text-color: #333;
  --border-color: #dbdbdb;
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
.modal__body{
  width: 500px;
}
.register-form__container{
  padding: 32px;
}
.register-form__heading{
  display: flex;
  justify-content: center;
  font: inherit;
  font-weight: 800;
  line-height: 1.5;
  font-size: 2rem;
}
.register-form__input{
  width: 100%;
  height: 50px;
  margin-top: 16px;
  padding: 0 12px;
  border: 1px solid var(--border-color);
  border-radius: 2px;
  outline: none;
}
.register-form__input:focus{
  border-color: #888;
}
.register-form__aside{
  margin-top: 10px;
  .register-form__policy-text{
    margin-left: 5px;
    font-weight: 400;
  }
}
.register-form__text-link{
    text-decoration: none;
    color: #ce3232;
    font-size: 1.5rem;
    font-weight: 600;
}
.register-form__controls{
  margin-top: 50px;
  display: flex;
  justify-content: flex-end
}
.btn.btn--back{
  min-width: 142px;
  height: 32px;
  border: none;
  border-radius: 3px;
  background-color: #ccc1c1f8;
  margin-right: 3px;
  
}
.btn.btn--primary {
  
  min-width: 142px;
  height: 32px;
  background-color: rgb(127, 209, 127);
  margin-left: 3px;
}
.register-form__socials{
  display: flex;
  justify-content: center;
}
.btn.btn--with-icon-fb{
  
  margin-right: 2px;
  background-color: #4267b2;
  font-size: 14px;
  color: #fff;
  border-radius: 3px;
}
.btn.btn--with-icon-gg{
  margin-left: 2px;
  background-color: #cf3f30;
  font-size: 14px;
  color: #fff;
  border-radius: 3px;
  box-shadow: none
}
</style>
