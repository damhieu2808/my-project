<template>
  <div class="header">
    <div>
      <img src="../assets/svg/left-header.svg" />
    </div>
    <div class="logo">
      <router-link
        tag="a"
        to="/"
        style="
          text-decoration: none;
          font-size: 20px;
          color: white;
          font-family: inherit;
          font-weight: 900;
        "
      >
        HaNoi Car
      </router-link>
    </div>
    <div class="option text-white">
      <div class="contact">
        <div class="phone">
          <i class="fa-solid fa-phone"></i>
          <span class="text-header">0397345500</span>
        </div>
        <div class="email">
          <i class="fa-solid fa-envelope"></i>
          <i class="fas fa-calendar-star"></i>
          <span class="text-header">xuanhoaluh15@gmail.com</span>
        </div>
        <div>
          <i class="fa-brands fa-facebook-messenger"></i>
          <span class="text-header">Facebook</span>
        </div>
      </div>

      <div class="info">
        <i class="fa-solid fa-circle-info"></i>
        <div class="tutorials_link">
          <router-link tag="a" to="/Tutorials" class="text-header">
            Hướng Dẫn
          </router-link>
        </div>
      </div>
      <div class="auth">
        <Login></Login>
        <Register></Register>
      </div>
      <div class="img-logo-right">
        <img src="../assets/svg/right-header.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import Register from "./Register";
import Login from "./Login.vue";

export default {
  components: {
    Register,
    Login,
  },
};
</script>

<style lang="scss" scoped>
.header {
  min-height: 50px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.option {
  display: flex;
  align-items: center;
  .contact {
    display: flex;
    gap: 50px;
    padding-right: 200px;
  }

  .info {
    display: flex;
    flex-direction: row;

    padding-right: 50px;
    &:hover {
      color: green;
    }
  }
  .auth {
    display: flex;
    flex-direction: row;
    gap: 50px;
    align-items: center;
  }
}
.text-hd {
  font-size: 15px;
  margin: 5px;
}

.text-header {
  text-decoration: none;
  color: white;
  font-size: 15px;
  margin: 5px;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    color: green;
  }
}
.text-margin:hover {
  color: green;
  cursor: pointer;
}

.info:hover {
  color: green;
}
.modal-header {
  .close {
    display: none !important;
  }
}
</style>
