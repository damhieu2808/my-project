<template>
  <div class="carregister-main">
    <div class="carregister-body">
      <b-row>
        <b-col col="8" class="carregister-body__title">
          <div class="carregister-content">
            <h1>
              Đăng ký cho thuê trên HaNoi-Car ngay để gia tăng thu nhập hấp dẫn
            </h1>
            <p>Hotline: 19009217 (T2-T7 9AM-9PM)</p>
            <p>
              HaNoi-Car không thu phí khi bạn đăng xe. Chúng tôi chỉ thu phí vận
              hành khi có giao dịch.
            </p>
          </div>
        </b-col>

        <b-col col="4" class="carregister-body__form">
          <div class="carregister-form">
            <div class="carregister-form__header">
              <h3>TƯ VẤN ĐĂNG KÝ XE NGAY</h3>
              <p>
                Vui lòng điền thông tin đầy đủ và chính xác để Mioto liên hệ bạn
                sớm nhất
              </p>
            </div>
            <div class="register-form__group">
              <b-form-select
                class="register-form__input"
                v-model="selected"
                :options="options"
              ></b-form-select>
            </div>
            <div class="register-form__group">
              <b-row>
                <b-col col="8">
                  <input
                    class="register-form__input"
                    type="text"
                    placeholder="Họ và Tên*"
                  />
                </b-col>
                <b-col col="4">
                  <input
                    class="register-form__input"
                    type="text"
                    placeholder="số di động*"
                  />
                </b-col>
              </b-row>
            </div>
            <div class="register-form__group">
              <input
                class="register-form__input"
                type="text"
                placeholder="Địa chỉ email(nếu có)"
              />
            </div>
            <div class="register-form__group">
              <input
                class="register-form__input"
                type="text"
                placeholder="Xe đăng ký cho thuê"
              />
            </div>
            <div class="register-form__group">
              <p>Dịch vụ cho thuê</p>
              <b-form-checkbox class="register-form__checkbox">
                Tự lái
              </b-form-checkbox>
              <b-form-checkbox class="register-form__checkbox">
                Có tài xế
              </b-form-checkbox>
              <b-form-checkbox class="register-form__checkbox">
                Cả 2
              </b-form-checkbox>
            </div>
            <div class="register-form__group">
              <b-form-select
                class="register-form__input"
                v-model="selected"
                :options="options"
                value-fi=""
              ></b-form-select>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="carregister__step"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Thành phố đăng ký hoạt động với HaNoi-Car" },
        { value: "hanoi", text: "Hà Nội" },
        { value: "danang", text: "Đà Nẵng" },
        { value: "tphcm", text: "T.P Hồ Chí Minh" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.carregister-main {
  color: #ffffff;

  background-image: url("https://www.mioto.vn/static/media/bg-owner-register.445d0fdb.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 1000px;
  position: relative;
}
.carregister-content {
  h1 {
    font-family: inherit;
    font-size: 2.35rem;
    font-weight: 750;
    color: white;
    vertical-align: baseline;
    margin: 20px 30px;
  }
  p {
    margin: 20px 30px;
    font-family: inherit;
    font-size: 1.25rem;

    color: #ffffff;
    vertical-align: baseline;
  }
}

.carregister-body__form {
  display: flex;
  justify-content: center;
  //background-color: #ffffff;
  .carregister-form {
    color: black;
    margin: 30px 30px;
    width: 70%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
