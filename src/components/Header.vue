<template>
  <div class="header">
    <img src="../assets/svg/left-header.svg" />
    <div class="logo">
      <p class="text-white mb-0 text-header container text-logo" style="font-size: 30px">
        HaNoi CAR
      </p>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="option text-white">
      <div class="contact">
        <div class="phone">
          <i class="fa-solid fa-phone"></i>
          <span class="text-header">1900 9217</span>
        </div>
        <div class="email">
          <i class="fa-solid fa-envelope"></i>
          <i class="fas fa-calendar-star"></i>
          <span class="text-header">contact@mioto.vn</span>
        </div>
        <div>
          <i class="fa-brands fa-facebook-messenger"></i>
          <span class="text-header">Facebook</span>
        </div>
      </div>

      <div class="info">
        <i class="fa-solid fa-circle-info"></i>
        <span class="text-margin huongdan">Hướng dẫn</span>
      </div>
      <div class="auth">
        <Login></Login>
        <Register></Register>
      </div>
      <img src="../assets/svg/right-header.svg" />
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
  .logo {
    display: flex;
    align-items: center;
  }
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
    padding-right: 50px;
    &:hover {
      color: green;
    }
  }
  .auth {
    display: flex;
    gap: 50px;
    align-items: center;
  }
}
.text-margin {
  font-size: 15px;
  margin: 5px;
}
.text-header {
  font-size: 15px;
  margin: 5px;
  font-family: Arial, Helvetica, sans-serif;
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
