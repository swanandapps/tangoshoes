<template>
   <div v-if="this.$store.state.admin_access==true">

<el-row id="admin-menu">

<el-col :span="2">


  
<el-button  @click="show_addproduct()" size="large">
<md-icon>add</md-icon>Add New Product
</el-button>
</el-col>
<el-col :span="2">
  <el-button @click="showupdatedate()"  size="large">
 <md-icon>update</md-icon> Update Dispatch Date
</el-button>
</el-col>
<el-col :span="2">
  <el-button @click="show_orders()"  size="large">
 <md-icon>local_shipping</md-icon> Orders 

 <span>{{orders_count}}</span>
</el-button>
</el-col>

<!--
<el-col :span="2">
  <el-button @click="show_analytics()"  size="large">
 <md-icon>trending_up</md-icon>Analytics 
</el-button>
</el-col>
-->
<el-col :span="2">
  <el-button @click="show_remove()"  size="large">
 <md-icon> delete_forever</md-icon>Remove Products
</el-button>
</el-col>

<!--
<el-col style="margin-top:2%" :span="2">
  <el-button @click="show_enquiry()"  size="large">
 <md-icon>question_answer</md-icon>Enquiries
</el-button>
</el-col>
-->


</el-row>

<!--<h1 style="text-align:center;margin-top:5%">Add New Product</h1>
-->

<div  v-if="this.addproduct==true">



<el-form id="addprodform" ref="form" :model="form" label-width="120px">
  <el-form-item label="Product Name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="Product Price">
   
    <el-input v-model="form.price"></el-input>

  </el-form-item>

    <el-form-item label="Product Type">
    <el-select v-model="form.type" placeholder="Please Select Product Type">
      <el-option label="Casuals" value="casuals"></el-option>
      <el-option label="Loafer" value="loafer"></el-option>
       <el-option label="Sneaker" value="sneaker"></el-option>
        <el-option label="Sports" value="sports"></el-option>
       
    </el-select>
  </el-form-item>

<el-form-item label="Image">
  
    <input type="file" @change="onFileChange">

  </el-form-item>


  <el-form-item label="Product Description">
    <el-input type="textarea" v-model="form.description"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>

 

  </div>
  <!--
<h1 style="text-align:center;margin-top:5%">Update Product Delivery in Days</h1>
-->
<div v-if="this.updatedate==true">
  <form  id="dispatchform">

 <el-input id="inputdispatch"
      v-model="dispatchdate"
    hint
      label="Dispatch Date"
      required

    ></el-input>
    <el-button @click="submitdate"> Update Date</el-button>

  </form>
  </div>

 
<div style="margin-top:8%" v-if="this.showorders==true">
<orders ></orders>
</div>


<!-- Remove Products Module-->

<div v-if="this.removeorders==true" >
 

  <el-row  id="products" >

  <el-col  id="store-col" style="padding:0px" v-for="(product,index) in products" :key="index" :offset="1" :span="6">

          <div style="display:grid" class="grid-content bg-purple " >
<img id="productimages"  :src="product.image">

<p  id="productname">{{product.name}}</p>

    
<el-button id='deletebtn' @click="deleteproduct(product,index)">Delete Product</el-button>
<el-button id='deletebtn' @click="changeprice(product,index)">Change Price</el-button>
 
         

          </div>
    </el-col>
  </el-row>
</div>


<el-row id="analytic" v-if="this.analytics==true">


  <el-col id="analytic-1" span="12">

    <h1 ><md-icon>remove_red_eye</md-icon> Most Viewed Products </h1>
    
  <el-table
    :data="tableData3"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="rank"
      label="Rank"
      width="120">
    </el-table-column>
    <el-table-column
      prop="clicked_count"
      label="Popularity Score"
      width="180">
    </el-table-column>
    <el-table-column
      prop="clicked_count_number"
      label="Total Views"
      width="180">
    </el-table-column>
    <el-table-column
      prop="product"
      label="Product Name"
       width="280">
    </el-table-column>
  </el-table>


</el-col>


 <el-col id="analytic-2" span="12">
     <h1><md-icon>done</md-icon> Most Sold Products</h1>
  <el-table
    :data="table_sold_count"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      type="index"
      label="Rank"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sold_count"
      label="Sold Percentage"
      width="180">
    </el-table-column>
       <el-table-column
      prop="sold_count_number"
      label="Total Quantitiy Sold"
      width="180">
    </el-table-column>
    <el-table-column
      prop="product"
      label="Product Name"
       width="280">
    </el-table-column>
  </el-table>


</el-col>
</el-row>



<el-row v-if="this.show_enquiries==true">


<el-col id="enquiry-col" v-for="(element,index) in enquiry" :key="element">

<h3 style="text-align:center;margin-top:3%">{{index+1}}</h3>

Name : <p>{{element.name}}</p>
Contact : <p>{{element.number}}</p>
Email: <p>{{element.email}}</p>
Message: <p>{{element.message}}</p>
</el-col>




</el-row>
  
  
</div>




  
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
import db from '../components/firebaseinit.js'
import { storage, functions } from 'firebase';
import firebase from 'firebase';
import orders from '../components/orders.vue';
import axios from 'axios'

export default {
  data() {
    return {


     addproduct:false,
     updatedate:false,
     showorders:false,
     removeorders:false,
     analytics:false,
     show_enquiries:false,

     products:[],
     product_id:'',
     changed_price:'',
     orders_count:'',
     enquiry:[],
    
      
    
   form: {
      name: "",
      price: "",
      image: "",
      description: "",
      type: "",
      date:''
    },
    tableData3: [
        ],
         table_sold_count: [
        ],
    };
  },
  components: {
    orders
  },
  computed: {
    ...mapState(["orders", "disdate","admin_access"])
  },
  mixins: [validationMixin],

  validations: {
    name: { required },
    price: { required },
    image: { required },
    description: { required },
    type: { required }
  },

 
    
  

  methods: {
     changeprice(product,index) {
        this.$prompt('Please Input New Price', 'Tip', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          inputPattern: /^\d+$/,
          inputErrorMessage: 'Invalid Price'
        }).then(value => {
            this.changed_price=value,
            //////console.log(this.changed_price.value)
 this.product_id = product.id;
      let tempthis = this;
      //////console.log(product.id);

    
  db.collection("products").doc(product.id).update({
    price:tempthis.changed_price.value
})
.then(function() {
    //////console.log("Document successfully written!");
    tempthis.$swal("Updated!", "Price is Updated", "success");
})
.catch(function(error) {
    //////console.error("Error writing document: ", error);
});




          this.$message({
            type: 'success',
            message: 'Price Successfully Changed!',

          
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Input canceled'
          });       
        });
      },
show_analytics(){
this.tableData3=[]
this.table_sold_count=[]
this.addproduct=false,
this.showorders=false,

 this.updatedate=false,
  this.removeorders=false,
  this.analytics=true,
  this.show_enquiries=false

let x=this.products.sort(function (a, b) {
  return a.clicked_count - b.clicked_count;
}).reverse();

let total_clicks=0
let total_sold=0
this.products.forEach(product=>{


  

total_clicks=total_clicks+product.clicked_count,
total_sold=total_sold+product.sold_count

})


this.products.forEach((product,index)=>{


  this.tableData3.push({

  clicked_count:Math.round((product.clicked_count/total_clicks)*100) +'%',
  product:product.name,
  clicked_count_number:product.clicked_count,
  rank:index+1
})


})

let z=this.products.sort(function (a, b) {
  return a.sold_count - b.sold_count;
}).reverse();


z.forEach(product=>{

this.table_sold_count.push({

sold_count:Math.round((product.sold_count/total_sold)*100)+'%',
  product:product.name,
  sold_count_number:product.sold_count 
 

})



})


//////console.log(this.table_sold_count)



},
show_addproduct(){

this.addproduct=true,
this.showorders=false,

 this.updatedate=false,
  this.removeorders=false,
  this.analytics=false,
  this.show_enquiries=false

},

showupdatedate(){


this.showorders=false,
this.addproduct=false,
 this.updatedate=true,
  this.removeorders=false,
  this.analytics=false,
  this.show_enquiries=false
 

},

show_orders(){


this.showorders=true,
this.addproduct=false,
 this.updatedate=false,
  this.removeorders=false,
  this.analytics=false,
  this.show_enquiries=false
 

},

show_remove(){

this.removeorders=true,
this.showorders=false,
this.addproduct=false,
this.updatedate=false,
this.analytics=false,
this.show_enquiries=false
 
  

},
show_enquiry(){


this.removeorders=false,
this.showorders=false,
this.addproduct=false,
this.updatedate=false,
this.analytics=false,
this.show_enquiries=true
 
  

},

deleteproduct(product,index){


 this.product_id = product.id;
      let tempthis = this;
      //////console.log(product.id);

      this.products.splice(index, 1);

      db
        .collection("products")
        .doc(tempthis.product_id)
        .delete()
        .then(function() {
          //////console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          //////console.error("Error removing document: ", error);
        });

},
 onFileChange(e) {
     
let tempthis=this
     var file = e.target.files[0]
var storageref = firebase.storage().ref('images/'+ file.name)

storageref.put(file).then(function(snapshot) {


//file double upload , check it?
//storageref.put(file)



  if(snapshot.state == "success"){

storageref.getDownloadURL().then(function(url) {



  tempthis.main_image = url 
  console.log(url)
 console.log(tempthis.main_image);
  tempthis.$swal("Success!", "Image Successfully Added", "success");

  })
  }
});



  
      },


    onSubmit() {
      let tempthis=this
       var date = new Date().toString().slice(4,15);
      this.$v.$touch();
      const productdata = {
        name: this.form.name,
        price: this.form.price,
        image: tempthis.main_image,
        description: this.form.description,
        quantity: "",
        type: this.form.type
      };
      //////console.log(productdata);

  db.collection("products").add({
        name: tempthis.form.name,
        price: tempthis.form.price,
        image: tempthis.main_image,
        description: tempthis.form.description,
        quantity: "",
        type: tempthis.form.type,
        date:date,
        clicked_count:0,
        sold_count:0
       
        }).then(function(docRef) {
    //////console.log("Document written with ID: ", docRef.id);
     tempthis.$swal("Success", "Product Has Been Added Sucesfully", "success");
   
})
.catch(function(error) {
    //////console.error("Error adding document: ", error);
      tempthis.$swal("Error!", "Error While Adding Product, Try Again", "error");
});


}


     ,

    ...mapMutations(["ADD_DATE"]),
    submitdate: function() {

      let tempthis=this
      const disdate = {
        date: this.dispatchdate
      };
      this.$swal({
        title: "Update the Dispatch Date",

        type: "info",
        showCancelButton: true,
        confirmButtonColor: "black",
        cancelButtonColor: "Red",
        confirmButtonText: "Yes, Update!"
      }).then(result => {
        if (result.value) {
          
         db.collection("dispatchdate").doc("yqFDg02NzmiDfGMjkd5m").set({
    date:tempthis.dispatchdate
})
.then(function() {
    //////console.log("Document successfully written!");
    tempthis.$swal("Updated!", "Dispatch Date is Updated", "success");
})
.catch(function(error) {
    //////console.error("Error writing document: ", error);
});
           
            
        }
      });
    },

    clear() {
      this.$v.$reset();
      this.name = "";
      this.price = "";
      this.description = "";
      this.image = "";
      this.type = "";
      this.select = null;
      this.checkbox = false;
    }
  },
  
/*remaining firestore
  beforeCreate() {
    axios
      .get("https://aprakrta-48342.firebaseio.com/userdata.json")
      .then(res => {
        const data = res.data;
        //////console.log(res.data);

        for (let key in data) {
          const order = data[key];
          order.id = key;
          this.orders.push(order);
        }
      });
  }*/


    beforeCreate() {
if(this.$store.state.admin_access==true)
{
 this.$notify.success({
          title: "Login Successful",
          message: "Welcome to Admin Panel",
          offset: 40,
          duration: 2100
        });
}
let tempthis=this

    db.collection("products").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc,index) {
        // doc.data() is never undefined for query doc snapshots
        
        
        var data = doc.data()
       
           
          tempthis.products.push(data);
          data.id=doc.id
        //tempthis.filter.push(data);
        

    });

    //////console.log(tempthis)
  
});
db.collection("enquiry").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc,index) {
        // doc.data() is never undefined for query doc snapshots
        
        
        var data = doc.data()
       
           
          tempthis.enquiry.push(data);
          data.id=doc.id
        //tempthis.filter.push(data);
        

    });

    //////console.log(tempthis)
  
});



   
  
},




};
</script>
<style scoped >

#enquiry-col{

  width: 33%;
  text-align: center;
  border: solid 1px ;
  height: 350px;
  margin-top: 5%
}
#analytic{
  display: block
}
#analytic-1{

  padding-top:3%;width:50%;padding-left:3%
}
#analytic-2{

  padding-top:3%;width:46%;padding-left:3%
}

#analytic-1 h1,#analytic-2 h1{


text-align:centre;padding-bottom:3%
}
#products{

  margin-top: 5%
}
 #deletebtn {
    margin-top: 2%;
    margin-left: 10%;
    width: 80%;
    font-size: 90%
  }

#productname {
  margin-top: 7%;
 
  font-size: 100%;
   margin-left: 10%;
}

#productimages {
    width: 80%;
    height: 263px;
    margin-left: 10%;
    margin-top: 9%;
    margin-bottom: 3%;
   
}
 #store-col {
    width: 20%;
    height: 466px;
    margin-left: 5%
  }
#admin-menu{

  text-align: center;
  margin-top: 5%;
  text-align: center;
    padding-top: 1%;
    padding-bottom: 3%;
    border-bottom: solid 1px black
 
}

#admin-menu .el-col
{
      width: 19.83333%;
}
#dispatchform {
  margin-left: 30%;
  margin-top: 5%;
  width: 40%;
  margin-bottom: 5%;
}
#orders-col {
  display: -webkit-inline-box;
}
#boxcard {
  margin-left: 15%;
  margin-top: 8%;
}
.el-col-8 {
  display: -webkit-inline-box;
}
.el-card box-card {
  width: 30%;
  margin-left: 10%;
}
#addprodform {
  width: 50%;
  margin: 5% 30%;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
.line2 {
  width: 100%;
  height: 47px;
 
  margin-bottom: 5%;
  border-bottom: 1px solid black;
}

@media screen and (max-width: 480px) {
#analytic{
  display: grid
}
#enquiry-col{

  width: 100%;
  text-align: center;
  border: solid 1px ;
  height: 350px;
  margin-top: 5%
}
#addprodform{
      width: 94%;
  
    margin-top: 13%;
    margin-left: 0%
}
#admin-menu{
  display: grid
}

#admin-menu .el-col{

  width: 100%;
}
#admin-menu .el-col button{

  width: 100%;
  margin-top: 4%
}

#products{
  display: grid
}

#products .el-col{

  width: 100%
}

}
</style>
