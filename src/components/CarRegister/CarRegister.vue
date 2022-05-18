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
              <b-form-group
                class="select-city__form"
                id="input-group-1"
                label=""
                label-for="input-1"
              >
                <b-form-select
                  id="input-1"
                  v-model="form.citys"
                  :options="citys"
                  required
                ></b-form-select>
              </b-form-group>
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
    data(){
        return{
            form: {
                citys: null,
                checked: []
            },
            citys: [{text:'Thành phố đăng ký hoạt động với HaNoi-Car', value: null}, 'Thái Bình','Nam Định','Hà Nội', 'Thành phố Hồ Chí Minh'],
            show: true
        }
    },

};
</script>

<style lang="scss" scoped>
.carregister-main {
  
  background-image: url("../../assets/hotay2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 1000px ;
  position: relative;
}   
.carregister-content{
    h1{
        font-family: inherit;
        font-size: 2.35rem;
        font-weight: 750;
        color: #ffffff;
        vertical-align: baseline;
        margin: 10px 10px;
    }
    p{
        margin: 10px 10px;
        font-family: inherit;
        font-size: 1.25rem;
        
        color: #ffffff;
        vertical-align: baseline;

    }
}

.carregister-body__form{
  
    display: flex;
    justify-content: center;
    //background-color: #ffffff;
    .carregister-form{
        margin: 30px 30px;
        width: 70%;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

}
</style>
