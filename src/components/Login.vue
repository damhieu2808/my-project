<template>
  <div>
    <p
      class="mb-0 login btn btn-transparent btn--m"
      @click="$bvModal.show('modal-login')"
      style="color: white"
    >
      Đăng Nhập
    </p>
    <b-modal id="modal-login" class="modal" hide-footer hide-header size="lg">
      <div class="login-form__header">
        <h3 class="login-form__heading">Đăng nhập</h3>

        <!--<div>
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
        </div>-->
      </div>
      <div class="login-form__form">
        
          <div class="login-form__group has-ico-email">
            <i class="fa-solid fa-envelope"></i>
            <input
              type="text"
              class="login-form__input"
              placeholder="Nhập địa Email"
              v-model="email"
            />
          </div>

          <div class="login-form__group has-ico-password">
            <i class="fa-solid fa-lock"></i>
            <input
              type="Password"
              class="login-form__input"
              placeholder="Mật khẩu"
              v-model="password"
            />
          </div>
       
      </div>
      <div class="login-form__aside">
        <p class="login-form__policy-text">
          Bạn chưa là thành viên?
          <a href="" class="login-form__policy-link">Hãy đăng ký ngay!</a>
        </p>
      </div>
       <input type="button" @click="login" value="login" />
       <p v-if="msg">{{ msg }}</p>
      <p class="login-form-text__socials">Hoặc đăng nhập bằng tài khoản</p>
      <div class="login-form__socials">
        <a
          href="https://www.facebook.com/hieu.damxuan.7"
          class="btn btn--with-icon-fb"
        >
          <i class="fa-brands fa-facebook-square"></i>
          Facebook
        </a>
        <a
          href="https://www.facebook.com/hieu.damxuan.7"
          class="btn btn--with-icon-gg"
        >
          <i class="fa-brands fa-google"></i>
          Google
        </a>
      </div>
    </b-modal>
  </div>
</template>

<script>
import auth from '@/auth.js'
export default {
  data() {
    return {
      email: '',
      password: '',
      msg: ''
    };
  },
  methods: {
    async login() {
      try {
        const credentials = {
          email: this.email,
          password: this.password
        };
        const response = await auth.login(credentials);
        this.msg = response.msg;
        const token = response.token;
        const user = response.user;
        this.$store.dispatch('login', { token, user });
        this.$router.push('/');
      } catch (error) {
        this.msg = error;
      }
    }
  }
};
</script>
<style lang="scss" scorped>
* {
  padding: 0%;
  margin: 0%;
}
:root {
  --primary-color: #ee4d2d;
  --white-color: #fff;
  --black-color: #000;
  --text-color: #333;
  --border-color: #dbdbdb;
}
#email {
  margin: px;
  text-align: center;
}
#password {
  margin: 10px;
  text-align: center;
}
.dangnhap {
  display: inline;
}
.login {
  color: white;
  border: 1px solid white;
  &:hover {
    color: green;
    border: 1px solid green;
  }
}
.tab-box {
  padding: 10px;
  border-width: 5px;
  border-color: gray;
}

.login-form__heading {
  display: flex;
  justify-content: center;
  font: inherit;
  font-weight: 800;
  line-height: 1.5;
  font-size: 2rem;
}
.btn.btn--primary {
  min-width: 142px;
  height: 32px;
  background-color: #00a550;
  margin-left: 3px;
}
.login-form__form {
  padding: 0px 48px;
}
.login-form__input {
  width: 100%;
  height: 50px;
  margin-top: 16px;
  border: 1px solid var(--border-color);
  border-radius: 2px;
  outline: none;
  padding-left: 25px;
}
.login-form__input:focus {
  border-color: #888;
}
.login-form__aside {
  margin-top: 20px;
  padding: 0px 10px;
}
.btn.btn--with-icon-fb {
  margin-right: 2px;
  background-color: #4267b2;
  font-size: 14px;
  color: #fff;
  border-radius: 3px;
}
.btn.btn--with-icon-gg {
  margin-left: 2px;
  background-color: #cf3f30;
  font-size: 14px;
  color: #fff;
  border-radius: 3px;
  box-shadow: none;
}
.login-form__controls {
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.login-form-text__socials {
  display: flex;
  justify-content: center;
  margin: 20px 0px;
}
.login-form__socials {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.login-form__form .login-form__group.has-ico-email i {
  position: absolute;
  top: 104px;
  padding-left: 5px;
  z-index: 1;
}
.login-form__form .login-form__group.has-ico-password i {
  position: absolute;
  top: 168px;
  padding-left: 5px;
  z-index: 1;
}
</style>
