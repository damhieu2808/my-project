<template>
  <b-container class="page__body">
    <b-col>
      <h1>Đăng ký xe</h1>
      <b-form>
        <div class="car-form">
          <div class="w-100">
            <b-form-group id="name" label="Nhập tên xe" label-for="name">
              <b-form-input id="name" type="text" v-model="name"></b-form-input>
            </b-form-group>
          </div>
          <div class="w-100">
            <b-form-group id="name" label="Nhập tên xe" label-for="name">
              <b-form-input id="name" type="text" v-model="name"></b-form-input>
            </b-form-group>
          </div>
        </div>
      </b-form>
    </b-col>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      seat: "",
      type: "",
      fuel: "",
      fuelConsumption: "",
      description: "",
      feature: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.page__body{
  margin: 100px 0px 100px;
}
.car-form {
  display: flex;
  gap: 20px;
}
</style>
