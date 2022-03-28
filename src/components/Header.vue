<template>
  <b-container>
    <div class="header">
      <div class="logo">
        <p class="text-white mb-0">MIOTO</p>
      </div>
      <div class="option text-white">
        <div class="phone">
          <i class="fa-solid fa-phone"></i>
          <span>1900 9217</span>
        </div>
        <div class="email">
          <i class="fa-solid fa-envelope"></i>
          <span>contact@mioto.vn</span>
        </div>
        <div>
          <i class="fa-brands fa-facebook-messenger"></i>
          <span>Facebook</span>
        </div>
        <div>
          <i class="fa-solid fa-circle-info"></i>
          <span> Huong dan </span>
        </div>
        <p class="mb-0">Dang nhap</p>
        <p class="mb-0">Dang ky</p>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  min-height: 50px;
  background-color: black;
  display: flex;
  align-items: center;
  gap: 100px;
}
.option {
  display: flex;
  align-items: center;
  gap: 50px;
  
}
</style>
