<template>
  <b-container>
    <b-row class="header">
      <b-col class="col-3">
        <p>HOA123</p>
      </b-col>
      <b-col class="col-9">
        <div>
          <div class="phone">
            <span>
              <i class="fa-solid fa-phone"></i>
            </span>
            <span class="mb-0">1900 9217</span>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
}
.col-9 {
  .phone {
    display: flex;
  }
}
</style>
