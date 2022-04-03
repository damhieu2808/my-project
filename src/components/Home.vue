<template>
  <div class="home">
    <div class="banner">
      <div class="search-box">
        <p class="title">MIOTO - CÙNG BẠN TRÊN MỌI HÀNH TRÌNH</p>
        <div>
          <b-card no-body>
            <b-tabs pills card vertical>
              <b-tab active>
                <template #title>
                  <img src="../assets/xe_tu_lai.png" />
                  <p>Xe tự lái</p>
                </template>
                <div>
                  <b-form-group label="Địa điểm" label-for="input-1">
                    <div class="location">
                      <i class="fa-solid fa-location-dot"></i>
                      <b-form-input
                        id="input-1"
                        v-model="text"
                        placeholder="Nhập thành phố, quận, địa chỉ..."
                        style="outline: none"
                      ></b-form-input>
                    </div>
                  </b-form-group>
                </div>
              </b-tab>
              <b-tab title="Tab 2">
                <b-card-text>Tab contents 2</b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.location {
  display: flex;
  align-items: center;
}
</style>
