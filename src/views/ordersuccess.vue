<template>
    <div>
        


       
<h3 id="thanks-note" style="padding-top:5%;padding-left:7%">Order Successfully Placed, Thank you for Shopping with Us <img alt="image" id
="thanks-img"  src="../assets/checkmark.gif"> </h3>



<p style="padding-left:7%">Estimated Delivery - In Next {{date}} Days</p>

 <el-row id="col-order"   >


 <el-col id="summary-col" :span="12">


          <div id="order-summary" class="grid-content bg-purple-light">


          <h3>Order Summary :  {{Math.round(total -total*code2/100)}}</h3>
          <div id="order-summ-div" v-for="(product,index) in cartproducts" :key="index">
          <img alt="image" id="order-summ-img" onContextMenu="return false;" :src="cartproducts[index].image">
 <div id="productdata">
          <p id="productname2" >{{cartproducts[index].name}}</p>
           <p id="productprice2" >{{cartproducts[index].price}} x {{cartproducts[index].quantity}}  </p>
             <p id="productprice2" >Total :{{cartproducts[index].quantity*cartproducts[index].price}} ₹ </p>


          </div>
          </div>
          </div>
          </el-col>

 <el-col id="shipment-col" :span="12">
<div style="margin-top:3%;margin-left:3%">




  <div class="text item">
          <h3>Shipment Address</h3>
         <b>Order Placed on : </b>{{orderdatastore.orderdate.toString().slice(0,15)}} - {{orderdatastore.orderdate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}}<br>

     
 
  <b>Name : </b>{{this.$store.state.orderdatastore.firstname}}

   {{this.$store.state.orderdatastore.lastname}}<br>
 <b> Email Address :</b> {{this.$store.state.orderdatastore.email}}<br>
  <b>Contact Number :</b> {{this.$store.state.orderdatastore.number}}<br>
  <b> Address :</b> {{this.$store.state.orderdatastore.address}}<br>
  <b> Payment Mode :</b> {{this.$store.state.orderdatastore.payment_mode}}<br>
  
  </div>

</div>
 </el-col>


</el-row>



    </div>
</template>


<script>

 import { mapState } from "vuex";
import db from '../components/firebaseinit.js'


export default {

    data() {
        return {
            date:''
        }
    },
  
    computed: {
    ...mapState(["cartproducts", "code2",'orderdatastore','final_cartproducts']),
    total() {
      return this.cartproducts.reduce(
        (acc, item) => (acc += parseFloat(item.price * item.quantity)),
        0
      );
    }
    },


created(){

  console.log(this.$store.state.orderdatastore)
let tempthis=this
    db.collection("dispatchdate").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        var data = doc.data()
          tempthis.date= data.date

    });
  })
console.log(this)




}
}
</script>




<style scoped>

#thanks-img{
  height: 85px;
    width: 9%;
}
#col-order {
  border: 1px solid;
  margin-left: 7%;
  margin-top: 2%;
  width: 90%;
    background-color: rgba(250, 250, 250, 0.952);
}
#h1 {
  margin-bottom: 5%;
}
#ordercard {
  margin-left: 30%;
}
#productprice {
  margin-top: -3%;
}
#order-summ-div {
  margin-top: 5%;
}
#checkout-row {
  margin-top: 4%;
}
#order-summ-img {
  width: 15%;
  height: 90px;
}
#checkout-form {
  margin-left: 10%;
  margin-right: 5%;
}
#order-summary {
  margin-left: 6%;
  background-color: rgba(250, 250, 250, 0.952);
 
  padding: 5% 5% 5% 5%;
}
#productdata {
  margin-left: 2%;
  margin-top: 1%;
  position: absolute;

  display: inline-block;
}

@media screen and (max-width: 480px) {
  #submit-proceed {
    width: 90%;
    text-align: center;
    left: -16%;
    font-size: 75%;
  }
  h1 {
    font-size: 140%;
    color: black;
  }
  #checkout-form {
    width: 170%;
    font-size: 80%;
    margin-top: 5%;
  }

 #col-order{

      display: grid
 }
 #shipment-col{

   margin-top: 15%;
   width: 100%;
   margin-bottom: 6%;
   font-size: 79%;
 }
 #col-order[data-v-43ddaf8f] {
    border: 1px solid;
    margin-left: 0%;
    margin-top: 2%;
    width: 100%;
    background-color: rgba(250, 250, 250, 0.952);
}

 #summary-col{


   width: 100%;
   
 }

 #order-summary{

   margin-left: 0px;
   
 }
 #order-summ-img{

   width: 40%;
   height: 130px;
 }
 #productdata[data-v-43ddaf8f] {
    margin-left: 4%;
    margin-top: 1%;
    position: absolute;
    display: inline-block;
    font-size: 79%;
}

#thanks-note{

  font-size: 90%;
  color: black;
    display: flex;
    font-family: auto

}

#thanks-img{

      height: 72px;
    width: 24%;
    margin-top: -7%;
}


}
</style>
