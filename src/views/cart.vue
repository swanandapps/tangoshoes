<template>
<div>

<div id="totalorder">
    <div id="order-maths" >Order Total : {{total}} - {{(total*code)/100}} (Discount)= {{total-(total*code)/100}} ₹ (inclusive of all taxes)</div>
   <div id="proceed-div">
    <router-link to="/checkout" > <el-button aria-label="Proceed for checkout"  id="proceed-div-btn"  >Proceed</el-button></router-link>
    </div>
  </div>
 
  <!-- <el-row id="promo" style="margin-top:5%">
<el-col  style="width:50%;margin-left:5%"  :span="12" >

<el-input id="promovalue"
      v-model="promo"
      :rules="promorules"
      label="Enter Coupon Code"
      required
    ></el-input>
</el-col>
    <el-col style="width:30%"  :span="12">
            <el-button aria-label="Apply Promo" @click="usepromo()" id="promobtn">Apply Promo </el-button>
            </el-col>

   </el-row>
   -->

        <el-row v-for="(products,index) in cartproducts" :key="index" :offset="1"  id="products"  >


 <el-row id="cartproducts">
                <h4 id="product1">Product</h4>
                <h4  id="product2">Price</h4>
                <h4  id="product3">Quantity</h4>

        </el-row>

<el-row id="cartproducts">

                  <el-col id="col-img"><img alt="image" onContextMenu="return false;" id="productimages" :src="products.image"></el-col>
    <el-col id="productname"><p>{{products.name}}</p></el-col>

    <el-col id="col-test">

           <p>{{products.price*products.quantity}} ₹ </p>
           </el-col>
<el-col id="counter-product" >
<el-button aria-label="remove from cart" @click="subq(index)"  small id="subq" ><md-icon>remove</md-icon></el-button>
<h4 id="productquan">{{products.quantity}}</h4>

<el-button aria-label="add to cart" @click="addq(index)" small id="addq" ><md-icon>add</md-icon></el-button>
</el-col>

 <el-button id="removeicon" @click="remove(index)">Remove</el-button>



    </el-row>


</el-row>


<el-row id="proceed-mobile">


<router-link to="/checkout" ><md-icon style="font-size:200%" id="proceed-mobile-btn">arrow_forward</md-icon></router-link>

</el-row>

    </div>

</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      code: 0,
      promo:''
    };
  },

  methods: {
    remove: function(index) {

     
     
     this.$swal({
        title: "Remove from Cart?",

        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "black",
        cancelButtonColor: "Red",
        confirmButtonText: "Yes, Remove it!"
      }).then(result => {
        if (result.value) {
          this.$swal("Removed!", "Cart is Updated", "success");
          this.cartproducts.splice(index, 1);
        }
      });

      
    },
    addq: function(index) {
      this.cartproducts[index].quantity++;
    },
    subq: function(index) {
      let flag = 1;
      if (this.cartproducts[index].quantity < 2) {
        flag = 0;
      }
      if (flag == 1) {
        this.cartproducts[index].quantity--;
      }
    },

    usepromo: function() {

   /*   console.log(this.promo)
      
      if (this.promo == "NEW20") {
        this.code = 20;
        this.$notify.success({
          title: "Success, NEW20 Promocode Applied",

          offset: 140,
          duration: 1400
        });

        this.$store.state.promo_applied=true

        document.getElementById("promo").style.display = "none";
      } else {
        this.$notify.error({
          title: "Incorrect Code, Try Again",

          offset: 40,
          duration: 2000
        });
      }
    }

    */
    }
  },

  beforeCreate() {
    this.$store.state.promo_applied=false
    console.log(this.quantity);
    console.log(this.$store.state.cartproducts)
  },
  computed: {
    ...mapState(["cartproducts", "quantity", "code","promo_applied"]),

    total() {
      return this.cartproducts.reduce(
        (acc, item) => (acc += parseFloat(item.price * item.quantity)),
        0
      );
      //console.log(sum)
    }
  }
};
</script>
<style scoped>
#order-maths{


  width: 80%;
  font-size: 150%;
  margin-top: 1%;
  padding-left: 2%;
  
  
}
#proceed-div{

width: 40%;
text-align: center


}
#proceed-div-btn{
margin-top: 2%;
width: 30%;
font-size: 120%

}
#addq{

  width: 34%;
 height: 48px;
}
#subq{
width: 34%;
height: 48px;

}
#proceed-mobile{

  display: none
}
#promobtn {
  margin-top: 12;
  width: 70%;
  height: 40px;
  margin-left: 3%;
}
#shop-head {
  margin-top: 3%;
  margin-left: 5%;
}
#productquan {
      margin-top: 7%;
    margin-left: 16%;
    font-size: 144%;
}
#row2 {
  display: none;
}
#product1 {
  margin-left: 3%;
}
#product2 {
  margin-left: 45%;
}
#product3 {
  margin-left: 19.5%;
}
#counter-product {
  margin-bottom: 1%;
}
#col-test {
  margin-left: 10%;
  margin-top: 1%;
  font-size: 130%;
}
#removeicon {
  margin-right: 5%;
  cursor: pointer;
  height: 39px;
}
#removeicon:hover {
  color: red;
}
#addq:hover {
  color: white;
  background-color: black;
}
#subq:hover {
  color: white;
  background-color: black;
}
#row-textinfo {
  display: inline-flex;
}
#col-img {
  margin-left: 2%;
  width: 98%
}

#checkoutbtn {
  margin-right: 3%;
  width: 35%;
  border: none;
}
#totalorder {
  background-color: black;
  color: white;
  top: 10%;
  height: 60px;
  
  box-shadow: 0px 0px 0px 0px;
  display: flex
}
#cartproducts {
  margin-left: 1%;
  display: inline-flex;
  margin-top: 2%;
  width: 100%;
}
#products {
  width: 90%;
  border: solid 0.5px;
  margin-top: 2%;
  margin-left: 5%
}
#ordertotal {
  display: inline-block;
  margin-left: 90%;
  margin-top: -40%;
  width: 25%;
  height: 400px;
}
#checkout {
  display: inline-block;
}
#addremove {
  display: inline-block;
  margin-left: -10%;
}
#productname {
  font-size: 110%;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin-left: -2%;
}
#productdata {
  margin-left: 2%;
  margin-top: 3%;
  position: absolute;

  display: inline-block;
}
#productimages {
  width: 47%;
  height: 120px;
  margin-top: -2%;
}
a {
  background-color: white;
  text-decoration: none;
  color: black;
}


@media screen and (max-width: 320px) { 


  #proceed-mobile{

   display: block;
    width: 100%;
    margin: 0;
    /* height: 200px; */
    background-color: black;
  }
  #productdata {
  margin-left: 2%;
  margin-top: 3%;
  position: absolute;

  display: inline-block;
  width: 60%
}

  #proceed-mobile-btn{

        width: 100%;
    background-color: black;
    color: white;
    font-size: 201%;
    /* top: -15%; */
    position: fixed;
    top: 92%;
        height: 51px;
  }
  #promobtn {
   width: 124%;
    height: 40px;
    margin-left: 7%;
    margin-top: -2%;

  }
  #checkoutbtn {
  display: none
}
  
  #shop-head {
    margin-top: 5%;
  }
  #addq {
    margin-left: 13%;
        height: 50px;
    padding: 10px 15px;
  }
  #productquan {
       margin-top: 5%;
    margin-left: 9%;
  }
  #totalorder {
    font-size: 60%;
   
  }
  h1 {
    font-size: 90%;
    text-align: center;
  }
  #product1,
  #product2,
  #product3 {
    display: none;
  }
  #cartproducts {
    display: grid;
  }
  #productimages {
    width: 30%;
    margin-left: 30%;
    margin-top: 3%;
  }
  #productname {
    font-size: 80%;
    margin-left: 5%;
    margin-top: 5%;
    width: 95%
  }
  #col-test {
    font-size: 90%;
    margin-left: 5%;
    width: 95%
  }
  #counter-product {
    display: inline-flex;
    margin-left: 6%;
    width: 94%
  }

  #removeicon {
    margin-bottom: 5%;
    /* text-align: center; */
    margin-right: 48%;
    height: 39px;
    margin: 0

  }
  #proceed-div{
    display: none
  }
  #order-maths{
        width: 100%;
    font-size: 150%;
    margin-top: 3%;
    padding-left: 2%;
  }
  #products{
    width: 98%;
    border: solid 0.5px;
    margin-top: 5%;
    margin-left: 1%;
    margin-bottom: 30%
  }
}
@media screen and (min-width: 321px) and (max-width: 480px) { 


  #proceed-mobile{

   display: block;
    width: 100%;
    margin: 0;
    /* height: 200px; */
    background-color: black;
  }
  #productdata {
  margin-left: 2%;
  margin-top: 3%;
  position: absolute;

  display: inline-block;
  width: 60%
}

  #proceed-mobile-btn{

        width: 100%;
    background-color: black;
    color: white;
    font-size: 201%;
    /* top: -15%; */
    position: fixed;
    top: 92%;
        height: 51px;
  }
  #promobtn {
   width: 124%;
    height: 40px;
    margin-left: 7%;
    margin-top: -2%;

  }
  #checkoutbtn {
  display: none
}
  
  #shop-head {
    margin-top: 5%;
  }
  #addq {
    margin-left: 13%;
        height: 50px;
    padding: 10px 15px;
  }
  #productquan {
       margin-top: 5%;
    margin-left: 9%;
  }
  #totalorder {
    font-size: 60%;
   
  }
  h1 {
    font-size: 90%;
    text-align: center;
  }
  #product1,
  #product2,
  #product3 {
    display: none;
  }
  #cartproducts {
    display: grid;
  }
  #productimages {
    width: 30%;
    margin-left: 30%;
    margin-top: 3%;
  }
  #productname {
    font-size: 80%;
    margin-left: 5%;
    margin-top: 5%;
    width: 95%
  }
  #col-test {
    font-size: 90%;
    margin-left: 5%;
    width: 95%
  }
  #counter-product {
    display: inline-flex;
    margin-left: 6%;
    width: 94%
  }

  #removeicon {
    margin-bottom: 5%;
    /* text-align: center; */
    margin-right: 48%;
    height: 39px;
margin: 0
  }
  #proceed-div{
    display: none
  }
  #order-maths{
        width: 100%;
    font-size: 150%;
    margin-top: 3%;
    padding-left: 2%;
  }
  #products{
    width: 98%;
    border: solid 0.5px;
    margin-top: 5%;
    margin-left: 1%;
  }
}
</style>

