<template>
  <div class="body">
    <div class="imgbackground">
      <div class="search-box mb-5">
        <br />
        <br />
        <br />
        <p class="slogan">HaNoi CAR - CÙNG BẠN TRÊN MỌI NẺO ĐƯỜNG</p>
      </div>
      <div class="search_car container">
        <b-card no-body class="tab-box container">
          <b-tabs card class="tabs col-4">
            <b-tab title="Xe tự Lái" class="xetulai" active>
              <div>
                <b-form @submit="onSubmit" v-if="show">
                  <b-form-group>
                    <label for="place"> Địa điểm</label>
                    <b-form-input
                      id="place1"
                      v-model="form.place"
                      type="text"
                      placeholder="Nhập thành phố, quận, địa chỉ..."
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group>
                    <label for="date-start">Bắt đầu</label>
                    <b-form-datepicker
                      id="date-start"
                      v-model="form.date_start"
                      class="mb-2"
                    ></b-form-datepicker>
                  </b-form-group>
                  <b-form-group>
                    <label for="date-end">Kết thúc</label>
                    <b-form-datepicker
                      id="date-end"
                      v-model="form.date_end"
                      class="mb-2"
                    ></b-form-datepicker>
                  </b-form-group>

                  <b-button type="submit" variant="primary">
                    <i class="fa-solid fa-magnifying-glass"></i> Tìm xe ngay
                  </b-button>
                </b-form>
              </div>
            </b-tab>
            <b-tab title="Xe có tài xế" class="xecotaixe">
              <div>
                <b-form @submit="onSubmit" v-if="show">
                  <b-form-group>
                    <label for="place"> Địa điểm</label>
                    <b-form-input
                      id="place1"
                      v-model="form.place"
                      type="text"
                      placeholder="Nhập thành phố, quận, địa chỉ..."
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group>
                    <label for="date-start">Bắt đầu</label>
                    <b-form-datepicker
                      id="date-start"
                      v-model="form.date_start"
                      class="mb-2"
                    ></b-form-datepicker>
                  </b-form-group>
                  <b-form-group>
                    <label for="date-end">Kết thúc</label>
                    <b-form-datepicker
                      id="date-end"
                      v-model="form.date_end"
                      class="mb-2"
                    ></b-form-datepicker>
                  </b-form-group>

                  <b-button type="submit" variant="primary">
                    <i class="fa-solid fa-magnifying-glass"></i> Tìm xe ngay
                  </b-button>
                </b-form>
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
    <div class="introduce mt-5">
      <h3 class="title">TÍNH NĂNG NỔI BẬT</h3>
      <div class="introduce-body">
        <carousel-3d
          :autoplay="true"
          :autoplay-timeout="3000"
          :controls-visible="true"
          :controls-prev-html="'&#x2039; '"
          :controls-next-html="'&#x203A;'"
          :controls-width="10"
          :controls-height="30"
          :clickable="false"
        >
          <slide :index="0">
            <img src="../../assets/thu-tuc/step-1.jpg" />
          </slide>
          <slide :index="1">
            <img src="../../assets/thu-tuc/step-2.jpg" />
          </slide>
          <slide :index="2">
            <img src="../../assets/thu-tuc/step-3.jpg" />
          </slide>
          <slide :index="3">
            <img src="../../assets/thu-tuc/step-4.jpg" />
          </slide>
          <slide :index="4">
            <img src="../../assets/thu-tuc/step-5.jpg" />
          </slide>
          <slide :index="5">
            <img src="../../assets/thu-tuc/step-6.jpg" />
          </slide>
        </carousel-3d>
      </div>
    </div>

    <div class="tutorial mt-5">
      <div class="container pt-5 pb-2">
        <h3 class="title">Hướng dẫn thuê xe</h3>
        <div class="tutorial-body">
          <div class="img-box text-center">
            <img src="../../assets/huong-dan/step-1.svg" />
            <p>Đặt xe với Hanoi Car</p>
          </div>
          <div class="img-box text-center">
            <img src="../../assets/huong-dan/step-2.svg" />
            <p>Nhận hoặc giao xe tận nơi</p>
          </div>
          <div class="img-box text-center">
            <img src="../../assets/huong-dan/step-3.svg" />
            <p>Trải nghiệm chuyến đi</p>
          </div>
          <div class="img-box text-center">
            <img src="../../assets/huong-dan/step-4.svg" />
            <p>Kết thúc giao dịch</p>
          </div>
        </div>
        <div class="tutorials_link">
          <router-link
            tag="a"
            to="/Tutorials"
            class="text-header"
            style="text-decoration: none; color: black; font-weight: 700"
          >
            <p class="xem-them">Xem thêm ></p>
          </router-link>
        </div>
      </div>
    </div>
    <div>
      <Vender></Vender>
    </div>
    <div>
      <ListCar></ListCar>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import ListCar from "./ListCar.vue";
import Vender from "./Vender.vue";
export default {
  components: {
    Carousel3d,
    Slide,
    ListCar,
    Vender,
  },
  data() {
    return {
      form: {
        place: "",
        date_start: "",
        date_end: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style scoped lang="scss">
.imgbackground{
  height: 100%;
  background-image: url("../../assets/hotay.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  margin-bottom: 20px;
}
.search-box {
  padding-top: 20px;
}

.slogan {
  text-align: center;
  font-size: 2.5rem;
  line-height: 50px;
  color: rgb(75, 77, 82);
  font-weight: 700;
  margin-bottom: 1.5rem;
}
.body {
  background-image: url("../../assets/whitebackground.jpg");

  background-size: cover;
  background-repeat: no-repeat;
}
.introduce {
  .title {
    color: #534c4c;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  .introduce-body {
    .carousel-3d-slide {
      height: unset !important;
    }

    .carousel-3d-slide {
      box-shadow: 0 6px 6px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    }
    .prev[data-v-05517ad0] {
      left: 244px !important;
      top: 0px !important;
    }
    .next[data-v-05517ad0] {
      right: 225px !important;
      top: 0px !important;
    }
    .Next slide span {
      font-size: 20px;
    }
    .carousel-3d-container .next span {
      font-size: 40px;
    }
    .carousel-3d-container .prev span {
      font-size: 40px;
    }
    .carousel-3d-slide {
      width: 400px !important;
    }
  }
}
.tutorial {
  background-color: #e5f6ea;
  .title {
    color: #534c4c;
    text-transform: uppercase;
    font-size: 1.5 rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  .tutorial-body {
    display: flex;
    justify-content: space-evenly;

    .img-box {
      img {
        height: 200px;
        width: 200px;
      }
      p {
        margin-top: 15px;
        color: #197428;
        font-weight: 600;
        font-size: 1rem;
        line-height: 24px;
        margin-bottom: 0.5rem;
      }
    }
  }
  .xem-them {
    margin-top: 15px;
    text-align: right;
  }
}
.tab-box {
  display: block;
  width: 60%;
  padding: 10px;
  border-width: 15px;
  border-style: solid;
  border-color: gray;
  align-items: center;
}
.xetulai {
  color: rgb(36, 82, 82);
  background-color: rgb(218, 231, 227);
}
.tabs {
  color: aquamarine;
  margin: 2px;
  display: block;
  width: 100%;
}
.slogan {
  font: inherit;
  font-style: inherit;
  font-variant-ligatures: inherit;
  font-variant-caps: inherit;
  font-variant-numeric: inherit;
  font-variant-east-asian: inherit;
  font-weight: inherit;
  font-stretch: inherit;

  line-height: inherit;
  font-family: inherit;
  font-weight: 700;
  font-size: 2.25rem;
  color: rgb(56, 29, 29);
}
</style>
