<template>
    <div class="Footer_main">
        <b-container class="footer__items">
            <b-row cols="5" class="footer__columns">
                <b-col class="footer__items-columns">HaNoi Car
                    <div class="footer__items-column">
                        <i class="fa-brands fa-facebook" style="margin-right: 10px"></i>
                        <i class="fa-brands fa-instagram" style="margin-right: 10px"></i>
                        <i class="fa-brands fa-twitter" style="margin-right: 10px"></i>
                        <i class="fa-brands fa-google-plus" style="margin-right: 10px"></i>
                        <i class="fa-brands fa-youtube-square" style="margin-right: 10px"></i>
                    </div>
                </b-col>
                <b-col class="footer__items-columns"></b-col>
                <b-col class="footer__items-columns">Chính sách
                    <div class="footer__items-column">
                        
                            <p class="footer__item-column">giới thiệu về HaNoi Car</p>
                            <p class="footer__item-column">Chính sách và quy định</p>
                            <p class="footer__item-column">Quy chế Hoạt động</p>
                            <p class="footer__item-column">Bảo Mật thông tin</p>
                            <p class="footer__item-column">Giải quyết tranh chấp</p>
                        
                    </div>
                </b-col>
                <b-col class="footer__items-columns"> Tìm hiểu thêm
                    <div class="footer__items-column">
                        <p class="footer__item-column">Hướng dẫn chung</p>
                        <p class="footer__item-column">Hướng dẫn đặt xe</p>
                        <p class="footer__item-column">Hướng dẫn dành cho chủ xe</p>
                        <p class="footer__item-column">Hướng dẫn thanh toán</p>
                        <p class="footer__item-column">Hỏi và trả lời</p>
                        <p class="footer__item-column">HaNoi Car Blog</p>
                    </div>
                </b-col>
                <b-col class="footer__items-columns"> Đối tác
                    <div class="footer__items-column">
                        <p class="footer__item-column">Đăng ký chủ xe HaNoi Car</p>
                        <p class="footer__item-column">Đăng ký GPS Tracking 1.2</p>
                        <p class="footer__item-column">Đăng ký bảo hiểm vật chất và Bảo
                        hiểm TNDS xe ô tô. </p>
                        
                    </div>
                </b-col>
            </b-row>
        </b-container>
    <hr  width="30%" size="50px" align="center" color="red" />
        <b-container class="footer-body">
            <b-row >
                <b-col cols="12" md="8" class="payments">    
                   <p class="payments_tilte"> CÁCH THỨC THANH TOÁN </p>
                    <div class="payments_imgs">
                        <div class="payments_img">
                            <img class="viettel_img" src="https://www.mioto.vn/static/media/viettelpay.4f72df72.svg" alt="">
                        </div>
                        <div class="payments_img">
                            <img class="momo_img" src="https://www.mioto.vn/static/media/momo.319dac36.png" alt="">
                        </div>
                        <div class="payments_img">
                            <img class="visa_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADSCAYAAABkWJYfAAAABHNCSVQICAgIfAhkiAAAAF96VFh0UmF3IHByb2ZpbGUgdHlwZSBBUFAxAAAImeNKT81LLcpMVigoyk/LzEnlUgADYxMuE0sTS6NEAwMDCwMIMDQwMDYEkkZAtjlUKNEABZiYm6UBoblZspkpiM8FAE+6FWgbLdiMAAAfVklEQVR4nO3dW3Ib17UG4H+1SdB2LgVPIAeeQAJOwAYnEFBFwlXn5Zh6FFkVixOwSp4AFFURfBSdF1cMukRkAoQ1AaEyAaEygSDOyZEIUL3OQwMgSBEkLt1r7974vyqnFF7QLZHotS9rrQ0QEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREFQlzfANHKqh2VEUdFQIuIsHn/N+gbxFEXUdxD86CT/Q0S3Y0BhChr1eMS1rSMCJtQfAGgBEFp6ddVdAF0IXiFGK9xedFG67C39OsSzchtANk5rji9/iIu33W8fZOOR7RGLtFF61F37u+rHe0B8nnq93ObvrxY6B6XtdPYRqRVqFRSCRazSoLKGRQ/46f9M7PruubTs2TZGWK1XsTax+VrH/vpUXvJu8rEmrMrV49LiPTc2fUXtfbxFoC269v4QPW4BI3PEaldAFmTLQDdub9PUYfA6j5fGF3nKmhA9pIPiP0QLQlWjyF4jFoDUJxBtIXmwYnxndipHe0BavdzvpeM/2cutaM9AN8AUgb0xucaAPQEcfS9T8HEXQBZ0/L9X+Qh0TJ8DCCF+AkgdsEDeoKf9ttzf9vOcQViFeS0g9Z+N9NLVOtFrG/sAfgmeXh7tios2AZkG7tHdQjOAPw5qP2Tar04HJDkV+2oDOBFEjiGFG2IdqFShGgp+ZzsIdI97Dae4XT/0Nn9TnAXQCA9QL8DgOG6MCCouLufGQk+c30LH9g5rgC6Z3Y91R4G0dOFvle0mvLdTKfSzuy1q/UiChuHUP2T4WxqcSJFAHsA9lA76iAJJCdO7ykNhY1DwMN//2q9ONNSd+2oDMU5RIpQ7UHkOfoX9Q++t3pcwrrWIdhOZpdHFfT7W66X090FkGQa1v7g49Xj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" alt="">
                        </div>
                    </div>
                </b-col>
                
                <b-col cols="6" md="4" class="certify">
                    <p class="payments_tilte"> CÁCH THỨC THANH TOÁN </p>
                    <div class="payments_img">
                        <img class="certify_img" src="https://www.mioto.vn/static/media/bo-cong-thuong.dd6d6139.png" alt="">
                    </div>
                </b-col>
            </b-row>
        </b-container>



        <hr  width="30%" size="10px" align="center" color="red" class="cut_line" />



        
        <b-container class="footer_end">
            <b-row>
                <b-col cols="6" md="4">
                    <div class="coppyright">
                        <i class="fa-solid fa-copyright" style="margin-right:5px"></i> 
                        <p> Công ty cổ phần HaNoi Car Viet Nam</p>
                    </div>
                </b-col>

                <b-col cols="12" md="8">
                    <div class="address">
                        <p class="address_text">Địa chỉ: KĐT Văn Quán, Hà Đông, Hà Nội.</p>
                    </div>
                    <div class="info ">
                        <p class="info_text">Mã số thuế: 8578485786</p>
                        <p class="info_text">Email: xuanhoaluh15@gmail.com</p>
                        <p class="info_text">Số điện thoại: 0397345500</p>
                    </div>
                     <div class="bank ">
                        <p class="bank_text">Tên TK: LUU XUAN HOA</p>
                        <p class="bank_text">Số TK: 12210001720600</p>
                        <p class="bank_text">Ngân hàng BIDV-CN Hà Thành</p>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Footer'
};
</script>



 <style lang="scss" scoped>
 *{
     margin: 0%;
     padding: 0%;
     background-color: black;
     color: white
 }
 
.footer__items-columns{
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 10px;
    display: block;
    margin-bottom: 30px;
    color: #fff;
    font-size: 1.125em;
    font-weight: 800;
    line-height: 1.5;
    font-family: inherit;
    
}
.footer__items-column{
    margin-top: 40px;
    cursor: pointer;
}

.footer__item-column{
    display: block;
    margin-bottom: 10px;
    color: #fff;
    font-size: 1em;
    font-weight: 300;
    line-height: 1.5;
    font-family: inherit;
    cursor: pointer;
}
.footer__item-column:hover{
    color: rgb(82, 214, 82)
}

.payments_tilte{
    font-size: 1.125rem;
    font-family: inherit;
    margin-left: 50px;
    margin-bottom: 20px;
    font-weight: 700;
}
.payments_imgs{
    
    display: flex;
    

}
.visa_img {
    width: 100%;
    margin: 10px 10px;
    padding: 5px 5px;
   
    border-radius: 5px;
    height: 90px;
}
.viettel_img{
    width: 100%;
    height: 90px;
    margin: 10px 10px;


}
.momo_img{
    width: 90%;
    height: 90px;
    margin: 10px 10px;
}
.certify_img{
    width: 80%;
    margin: 10px 10 px;
}

.coppyright{
    margin: 10px 0px;
    padding: 5px 0px;
    display: flex;
    font-family: inherit;
    font-size: 1.125rem;
   
}
.cut-line{
    z-index: 1;
    position: relative;
}
.address{
    margin: 10px 0px;
    padding: 5px 0px;
    display: flex;
    font-family: inherit;
    font-size: 1.125rem;
    .address_text{
        cursor: pointer;
    }
    .address_text:hover{
        color: rgb(82, 214, 82)
    }

   
}
.info{
    display: flex;
    
    margin-bottom: 10px;
    .info_text{
        margin-right: 30px;  
        cursor: pointer;  
    }
    .info_text:hover{
        color: rgb(82, 214, 82)
    }
}
.bank{
    display: flex;
    margin-bottom: 100px;
    .bank_text{
        margin-right: 30px;  
        cursor: pointer;  
    }
    .bank_text:hover{
        color: rgb(82, 214, 82)
    }
}
 </style>
 