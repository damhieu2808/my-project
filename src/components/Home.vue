<template>
  <div class="home">
    <div class="banner">
      <div class="search-box">
        <p class="title sub-header">HaNoiCAR - CÙNG BẠN TRÊN MỌI HÀNH TRÌNH</p>
        <div class="container tab-search">
          <b-card no-body>
            <b-tabs pills card vertical>
              <b-tab active>
                <template #title>
                  <img src="../assets/xe_tu_lai.png" />
                  <p class="text-tab">Xe tự lái</p>
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
                   <div class="form-search has-timer">
                      <label class="home-label">Bắt Đầu</label>
                      <div class="d-flex">
                        <div class="wrap-input home-datetimerange">
                          <div class="react-bootstrap-daterangepicker-container" style="display: inline-block;">
                            <span class="value">
                              "06/04/2022"
                              <i class="i-chevron-down" style="position: static;"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </b-tab>
              <b-tab title="Xe lái tự dộng">
                
                  <img src="../assets/xe_tu_lai.png" />
                  <p class="text-tab">Xe lai tu dong</p>
                
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
.tab-search{
  padding: 5px;
 background-color: gray;
}
.location {
  display: flex;
  align-items: center;
}
.sub-header{
  display: flex;
  font-size: 40px;
  justify-content: center;
  line-height: 50px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.25rem;
  margin-top: 6rem;
}
.fa-location-dot{
  margin: 5px;
  color: green;
}
</style>
