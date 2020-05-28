<template>
<div>

<el-row id="checkout-row">
         <el-col :span="12">

          <div id="order-summary" class="grid-content bg-purple-light">


          <h3>Order Summary :  {{Math.round(form.total)}} ₹ </h3>
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
  <el-col :span="12"><div class="grid-content bg-purple">

       
       
         <el-form  id="checkout-form" ref="form" :model="form" :rules="rules"  >

           <el-form-item label="FirstName" prop="firstname">
    <el-input
      v-model="form.firstname"
      
      :counter="15"
      
      required
    ></el-input>
    </el-form-item >

    <el-form-item label="LastName" prop="lastname">
     <el-input
      v-model="form.lastname"
      
      :counter="15"
      
      required
    ></el-input>
    </el-form-item>


    <el-form-item label="E-mail" prop="email">
    <el-input
      v-model="form.email"
      
      required
    ></el-input>
    </el-form-item>
    <el-form-item label="Contact Number" prop="number">
    <el-input
      v-model="form.number"
      
      
      required
    ></el-input>
</el-form-item>
<el-form-item label="Address" prop="address">
    <el-input
      v-model="form.address"

      
      

      required
    ></el-input>
    </el-form-item>

<el-form-item label="Payment Options :" prop="radios">
<el-radio-group style="color:black" v-model="form.radios" :mandatory="false">
      <el-radio label="Cash on Delivery" value="Cash on Delivery"></el-radio>
      <el-radio label="Online Payment" value="Online Payment (Prepaid)"></el-radio>
    </el-radio-group>
    </el-form-item>

    <el-button aria-label="Submit Order" id='submit-proceed'
      
     @click="submitForm('form')"
    >
      Confirm Order
    </el-button>

  </el-form>
          </div></el-col>

</el-row>





</div>


</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
import db from '../components/firebaseinit.js'
import { storage, functions } from 'firebase';
import firebase from 'firebase';
export default {
data: () => ({
  

  form:{  timestamp:'',
    contains_paintings:false,
    contains_homedecor:false,
    contains_pottery:false,
    contains_sculpture:false,
    valid: true,
    year:'',
    month:'',
    week:'',
    showbill:false,
    total:'',
    radios:'',
    itemsordered: {
      itemnames:[],
      itemquantity:[],
      itemtype:[],
      products_id:[],
      sold_count:[]
    },
    firstname: "",
    lastname: "",
  
    email: "",
  
    number: "",

    address: "",
  },
   rules: {
          firstname: [
            { required: true, message: 'Please input  name', trigger: 'blur' },
            { min: 2, max: 20, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          lastname: [
            { required: true, message: 'Please input  name', trigger: 'blur' },
            { min: 2, max: 20, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
        number:[
      {required: true,}
    ],
      
          email: [
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
    ],
          radios: [
            { required: true, message: 'Please select Payment Method', trigger: 'change' }
          ],
          address: [
            { required: true, message: 'Please input  form', trigger: 'blur' }
          ]
        },

        
 
  }),


 
  computed: {
    ...mapState(["cartproducts", "code2",'orderdatastore','final_cartproducts','promo_applied']),
   
  },
  created: function() {
    console.log(this.cartproducts);
      this.form.total= this.cartproducts.reduce(
        (acc, item) => (acc += parseFloat(item.price * item.quantity)),
        0
      );
    for (let i = 0; i < this.cartproducts.length; i++) {
      //this.$data.itemsordered[i].push(this.cartproducts[i].name);

     
      this.$data.form.itemsordered.itemnames.push(this.cartproducts[i].name);
      this.$data.form.itemsordered.itemquantity.push(this.cartproducts[i].quantity);
        this.$data.form.itemsordered.itemtype.push(this.cartproducts[i].type);
        this.$data.form.itemsordered.products_id.push(this.cartproducts[i].id);
        this.$data.form.itemsordered.sold_count.push(this.cartproducts[i].sold_count);


    }
    ////console.log(this.$data.itemsordered.itemnames);

    //Getting unique 
    

   //console.log(this)


    this.form.timestamp = new Date()
      

    //console.log(this.form.timestamp);
  },

  
  methods: {

    submitForm(formName) {

      //console.log(this.$refs)
        this.$refs[formName].validate((valid) => {
          if (valid) {
           


  var date = new Date();

      var firestore_date = db.app.firebase_.firestore.Timestamp.fromDate(
        date
      ).toDate();
 //console.log(date)
      
      this.form.timestamp=firestore_date

      this.form.month= date.toString().slice(4,7)
      this.form.year= date.toString().slice(11,15)
      let x= date.toString().slice(8,10)
      //console.log(x)
    if(x<8){
this.form.week=1
    //console.log(x)
    }
    else if(x<15){
      this.form.week=2
      //console.log(x)
    }
    else if(x<22)
 {

   this.form.week=3
   //console.log(x)
 }
 else{

   this.form.week=4
   //console.log(x)
 }

   //console.log(this.form);
    


      
        // Native form submission is not yet supported



/*let distinct_types= this.$data.form.itemsordered.itemtype.filter((x, i, a) => a.indexOf(x) == i);

//console.log(distinct_types)

    if(distinct_types.includes('home decor')){
this.form.contains_homedecor=true

    }
     if(distinct_types.includes('sculpture')){

this.form.contains_paintings=true

    }
     if(distinct_types.includes('pottery')){

this.form.contains_pottery=true

    }
    if(distinct_types.includes('paintings')){

this.form.contains_paintings=true

   }

   */

let tempthis=this

let orderdata={
 firstname: tempthis.form.firstname,
          lastname: tempthis.form.lastname,
          email: tempthis.form.email,
          number: tempthis.form.number,
          address: tempthis.form.address,
          itemsordered: tempthis.$data.form.itemsordered,
          ordertotal: tempthis.form.total,
          payment_mode:tempthis.form.radios,
          orderdate: tempthis.form.timestamp,
          month:tempthis.form.month,
          year:tempthis.form.year,
          week:tempthis.form.week,
         
}

tempthis.$store.state.orderdatastore=orderdata
console.log('orderdata: ', orderdata);

//console.log(orderdata.itemsordered.products_id)

/*
orderdata.itemsordered.products_id.forEach((product,index) => {
  
db.collection("products").doc(product).update({
    
sold_count:orderdata.itemsordered.sold_count[index]+1


})
.then(function() {

    //console.log("Document successfully written!");

    
    
})
.catch(function(error) {
    //console.error("Error writing document: ", error);
});



});

*/
   console.log('db.collection("orders"): ', db.collection("orders"));

 db.collection("orders").add(orderdata).then(function(docRef) {

    console.log("Document written with ID: ", docRef.id);
    
   tempthis.$router.push('/ordersuccess')
})
.catch(function(error) {
    //console.error("Error adding document: ", error);
   
});










          } else {
            alert('error submit!!');
            return false;
          }
        });


   //tempthis.$router.push('/ordersuccess')



      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
 ,
  
  
};
</script>
<style scoped>
#bill{

  width: 50%;
    height: 478px;
    margin-top: -32%;
    margin-left: 25%;
    position: absolute;
    z-index: 3000;
    background-color: white;
    border: black solid 1px;
   
}
input {
  font-size: 200%;
}
#submit-proceed {
  margin-left: 25%;
  margin-top: 10%;
  width: 50%;
  height: 50px;
  font-size: 130%;
  background-color: black;
  color: white;
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
  border: solid 1px black;
  padding: 5% 5% 5% 5%;
}
#productdata {
  margin-left: 2%;
  margin-top: 1%;
  position: absolute;

  display: inline-block;
}

@media screen and (max-width: 320px) {


h3{


  font-size: 120%
}



}

@media screen and (max-width: 480px) {
  #submit-proceed {
       width: 89%;
  
    font-size: 75%;
    margin-left: 5%;
 
    margin-bottom: 5%;
}
  
  #productdata {
    margin-left: 10%;
    margin-top: -3%;
  width: 59%
}
  #order-summ-img[data-v-fd530f40] {
    width: 25%;
    height: 100px;
}
  h1 {
    font-size: 140%;
    color: black;
  }
  #checkout-form {
    width: 170%;
    font-size: 80%;
    margin-top: 5%;
        margin-left: 16%;
  }

  #checkout-row {
    display: grid;
    
  }
  #order-summary {
        width: 191%;
    margin-left: 8%;
    font-size: 80%;
  }
}
</style>
