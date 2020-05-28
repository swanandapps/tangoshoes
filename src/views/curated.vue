<template lang="">
    <div>
      <el-menu   id="el-menu2" class="el-menu-demo" mode="horizontal" >

<div id="menu-tabs">
<router-link  style="text-decoration:none;color:#a52b2b" to="/"     >:: <word   style="color:black" >Home</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/store"     >:: <word style="color:black"  >Products</word> ::</router-link>



 
 
  <router-link style="text-decoration:none;color:#a52b2b;z-index:2000" to="" > ::  <word @click="showtypes()" style="color:#a52b2b">Art-Curated</word> ::</router-link>

<transition name="fade">
<div v-if="show_art_types" id="art-types">
<router-link style="text-decoration:none;color:#a52b2b;background: transparent;z-index:2000" to="/created" ><el-button style="color:#a52b2b"> ::  <word style="color:black;background: transparent;">Created</word> ::</el-button></router-link>
<router-link style="text-decoration:none;color:#a52b2b;background: transparent;z-index:2000" to="/curated" > <el-button style="color:#a52b2b">::  <word style="color:black;background: transparent;">Curated</word> ::</el-button></router-link></div>
</transition>

<router-link  style="text-decoration:none;color:#a52b2b" to="/services"     >:: <word style="color:black" >Services</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/events"     >:: <word style="color:black" >Events</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/about"     >:: <word  style="color:black">About</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/contact"     >:: <word style="color:black" >Contact</word> ::</router-link>
</div>
 </el-menu>


   <el-row id="created-quote1">
At Aprakrta we not only just create bespoke art but also curate it!
    </el-row>

 <el-row id="created-quote2">

We frequently collaborate with like-minded Artists and Designers and provide our platform to showcase their master-pieces.

  
    </el-row>

<el-row id="created-quote3">
Select from a range of finely curated abstract paintings, photographs, sculptures, etc. and activate and enhance the dead walls, furniture and passive zones of your spaces!
  
    </el-row>

<h1 id="interior-h1">::  <word style="color:black">Paintings</word> ::</h1>
 <el-row  id="products" >

  <el-col  id="store-col" style="padding:0px" v-for="(user,index) in paintings" :key="index" >

          <div class="grid-content bg-purple " >
 <img alt="image" onContextMenu="return false;" id="productimages" @click="showproduct(user,index)" :src="user.image">

    </div>

           <p  id="productname">{{user.name}}</p>

           <p id="productprice">{{user.price}} ₹ </p>


    </el-col>



</el-row>








    </div>
</template>

<script>
import db from '../components/firebaseinit.js'
import { storage, functions } from 'firebase';
import firebase from 'firebase';

export default {
   data() {
      return {
       
        value: '',
        show_art_types:false,
        paintings:[]
    
       
      }
    },
 
methods: {
  showproduct(product,index) {
      


      //console.log(product.id)
      this.$router.push('/productdetails/' + product.id)

      //Updating the count

  db.collection("products").doc(product.id).update({
    clicked_count:product.clicked_count+1
})
.then(function() {
    //console.log("Document successfully written!");
   
})
.catch(function(error) {
    //console.error("Error writing document: ", error);
});
 
    },
  showtypes(){


if(this.show_art_types==false){

 this.show_art_types=true
}

else if(this.show_art_types==true){

  this.show_art_types=false
}
   
  }
},

created() {
  
var productsRef = db.collection('products').where('type', '==', 'paintings');
var allproducts = productsRef.get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      ////console.log(doc.id, '=>', doc.data());

var data=doc.data()

data.id=doc.id
this.paintings.push(data)

    });
  })
  .catch(err => {
    //console.log('Error getting documents', err);
  });



//console.log(this)

},


 
  
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Cantarell');
#created-quote1,#created-quote2,#created-quote3,#created-quote4{

   text-align: center;
    padding-left: 22%;
    padding-right: 22%;
    font-size: 129%;
    margin-top: 3%;
}
img:hover {
  transform: scale(1.1);
  transition: 0.8s;
}
#interior-h1{

color: #a52b2b;
    font-size: 180%;
    text-align: center;
    margin-top: 5%;
    margin-bottom: 5%;
    font-family: 'Cantarell', sans-serif;
}
#store-col {
  background-color: white;
  padding: 0px 0px 0px 0px;
 
  margin-left: 0%;
  text-align: center;
  width: 25%;
}
#productimages {
  margin-top: 9%;
    width: 75%;
    height: 360px;
    cursor: pointer;
        object-fit: cover;
}
#productname{


  font-size: 100%;
   font-weight: bold;
   text-align: center;
      font-family: 'Cantarell', sans-serif;
      margin-top: 8%
}
#productprice{


  font-size: 100%;
   font-weight: bold;
   text-align: center;
      font-family: 'Cantarell', sans-serif;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


#art-types{
         padding-left: 62%;
    padding-right: 21%;
    /* padding-bottom: 5%; */
    position: absolute;
    top: 125%;
    left: -29%;
    z-index: 200;
}
#art-types :nth-child(2){

 margin-left: 7px;
background: rgba(255, 255, 255, 0.6);
border-radius: 15px 5px;
margin-top: 4%

}
#art-types :nth-child(1){

  margin-left: 0px;
background: rgba(255, 255, 255, 0.6);
border-radius: 5px 15px;
margin-top: -2%

}
#el-menu2 {

  margin-top: 2%;
 
 text-align: center;
  font-size: 90%;
  box-shadow: 0px;
  width: 100%;
      background-color: transparent;
          border: 0px;
    
}
#menu-tabs a{

 margin-top: 3.5%;
    margin-left: 6%;
    font-size: 136%;
}


@media screen and (max-width: 480px) {
     #art-types :nth-child(2){

 margin-left: 0px;
background: rgba(255, 255, 255, 0.6);
border-radius: 15px 5px;
margin-top: 4%

}
  #art-types{
       padding-left: 62%;
    padding-right: 21%;
    display: grid;
    /* padding-bottom: 5%; */
    position: absolute;
    top: 20%;
    left: -32%;
    z-index: 200;
}

  #interior-h1{

  color: #a52b2b;
    font-size: 150%;
   text-align: center;
    margin-top: 17%;
    margin-bottom: 15%;
}
    #productname{


margin-top: 8%
}
#productprice{


  font-size: 100%;
   font-weight: bold;
   text-align: center;
      font-family: 'Cantarell', sans-serif;
}
  #productimages {
        height: 263px;
    width: 100%;
    margin-left: 0%;
    cursor: pointer;
    border: none
  }

    
    #store-col {
         width: 49%;
    height: 400px;
    margin-left: 1%;

   
  }
  #products {
    width: 100%;
       
       display: block;
       margin-left: 0%

  }
    
  #el-menu2 {
        font-size: 129%;
    width: 100%;
    margin-left: 0px;
        margin-top: 6%;
        height: 360px;
 background-image: url("../assets/300 x 360/y edit - for Art - Curated.jpg");
 background-size: cover
   
  }
#menu-tabs a{

    margin-top: 3.5%;
    font-size: 94%;
    margin-left: 2%;
}


#menu-tabs{
  display:grid;text-align-last: center;
    /* left: 5%; */
    padding-left: -13%;
          margin-left: -69%;
    font-size: 78%;
        margin-top: -5%;
}

#created-quote1{

      margin-top: 7%;
    text-align: center;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 90%;
       font-family: 'Cantarell', sans-serif;

}
#created-quote2{

      margin-top: 7%;
    text-align: center;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 90%;
    
       font-family: 'Cantarell', sans-serif;

}
#created-quote3{

      margin-top: 7%;
    text-align: center;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 120%;
    font-style: italic;
    font-weight: bold;
       font-family: 'Cantarell', sans-serif;
   
}

}
</style>
