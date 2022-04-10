<template>
  <div class="vender">
    <div class="pt-5 vender-text">
      <h1 class="text-white">Bạn muốn cho thuê xe ô tô</h1>
      <p class="text-white">
        Trở thành đối tác của chúng tôi để có cơ hội kiếm thêm thu nhập hàng
        tháng.
      </p>
      <div class="two-button">
        <b-button>Tìm hiểu ngay</b-button>
        <b-button variant="success">Đăng ký xe</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.vender {
  background-image: url("../../assets/bg-main-2.ba495775.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 400px;
  position: relative;
  .vender-text {
    position: absolute;
    top: 30px;
    right: 30px;
    .two-button {
      display: flex;
      gap: 30px;
    }
  }
}
</style>
