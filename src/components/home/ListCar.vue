<template>
  <div class="container list-car ">
    <h1 class="my-5">Xe Nổi Bật</h1>
    <div>
      <b-card no-body class="car-card">
        <b-row>
          <b-col class="col-6">
            <p><i class="fa-solid fa-car"></i>Economy</p>
            <p><i class="fa-solid fa-sack-dollar"></i> 700k</p>
            <p><i class="fa-solid fa-person"></i> 5 người</p>
            <p><i class="fa-solid fa-location-dot"></i>Hà Nội</p>
          </b-col>
          <b-col class="col-6">
            <img src="../../assets/02_economy_white.png" />
            <b-button variant="success">Thông tin</b-button>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.list-car {
  width: 100%;
  background-image: url("../../assets/whitebackground.jpg");
  background-repeat: no-repeat;
  .car-card {
    max-width: 400px;
    display: flex;
    align-items: center;
    align-content: center;
  }
}
</style>
