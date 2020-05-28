<template lang="">
    <div>
      <el-menu   id="el-menu2" class="el-menu-demo" mode="horizontal" >

<div id="menu-tabs">
<router-link  style="text-decoration:none;color:#a52b2b" to="/"     >:: <word   style="color:black" >Home</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/store"     >:: <word style="color:black"  >Products</word> ::</router-link>



 
 
  <router-link style="text-decoration:none;color:#a52b2b;z-index:2000" to="" > ::  <word @click="showtypes()" style="color:#a52b2b">Art-Created</word> ::</router-link>

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


In today’s fast paced world, unfortunately most of our contemporary working and living spaces are compact and vaccum-sealed. These spaces don’t breathe and hence creates a passive environment. Being confined to such passive zones not only reduces the productivity and induces lethargy but also has adverse effects on the physical and psychological health. 
Appropriate inclusion of greens & art in such zones can activate the dull space and create a healthy and happy environment.
    </el-row>

 <el-row id="created-quote2">

Aprakrta’s bespoke creations are designed to activate and reinvigorate the passive zones of the spaces you use in your daily lives.
  
    </el-row>

<el-row id="created-quote3">
Aprakrta also specializes in creating bespoke designs using a fine fusion of different materials and special plants. These creations are conceived as “Living Art”, which infuse your spaces with both “Greens and Art” thus upscaling it to positive, productive, healthy and happy spaces!
  
    </el-row>


<el-row id="created-quote2">

Active spaces create happy and healthy environments!
  
    </el-row>
    

<el-row id="created-quote4">

Activate your spaces by adding <b>Aprakrta’s space décor products </b>like – 
  
    </el-row>

<h1 id="interior-h1">::  <word style="color:black">Miniature Gardens</word> ::</h1>

 <el-row  id="products" >

  <el-col  id="store-col" style="padding:0px" v-for="(user,index) in miniature_garden" :key="index" >
{{user}}
          <div class="grid-content bg-purple " >
 <img alt="image" onContextMenu="return false;" id="productimages" @click="showproduct(user,index)" :src="user.image">

    </div>

           <p  id="productname">{{user.name}}</p>

           <p id="productprice">{{user.price}} ₹ </p>


    </el-col>



</el-row>



<h1 id="interior-h1">::  <word style="color:black">Terrariums</word> ::</h1>

 <el-row  id="products" >

  <el-col  id="store-col" style="padding:0px" v-for="(user,index) in this.terrarium" :key="index" >


{{user}}
          <div class="grid-content bg-purple " >
 <img alt="image" onContextMenu="return false;" id="productimages" @click="showproduct(user,index)" :src="user.image">

    </div>

           <p  id="productname">{{user.name}}</p>

           <p id="productprice">{{user.price}} ₹ </p>


    </el-col>



</el-row>
<h1 id="interior-h1">::  <word style="color:black">Water Features</word> ::</h1>

 <el-row  id="products" >

  <el-col  id="store-col" style="padding:0px" v-for="(user,index) in water_features" :key="index" >

          <div class="grid-content bg-purple " >
 <img alt="image" onContextMenu="return false;" id="productimages" @click="showproduct(user,index)" :src="user.image">

    </div>

           <p  id="productname">{{user.name}}</p>

           <p id="productprice">{{user.price}} ₹ </p>


    </el-col>



</el-row>
<h1 id="interior-h1">::  <word style="color:black">Dish Garden</word> ::</h1>

 <el-row  id="products" >

  <el-col  id="store-col" style="padding:0px" v-for="(user,index) in dish_garden" :key="index" >

          <div class="grid-content bg-purple " >
 <img alt="image" onContextMenu="return false;" id="productimages" @click="showproduct(user,index)" :src="user.image">

    </div>

           <p  id="productname">{{user.name}}</p>

           <p id="productprice">{{user.price}} ₹ </p>


    </el-col>



</el-row>
<h1 id="interior-h1">::  <word style="color:black">Vertical Greens</word> ::</h1>

 <el-row  id="products" >

  <el-col  id="store-col" style="padding:0px" v-for="(user,index) in vertical_green" :key="index" >

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
        products2:[],
        show_art_types:false,
         miniature_garden:[],
     water_features:[],
     terrarium:[],
     dish_garden:[],
     vertical_green:[],
     products:[]

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
  
this.terrarium=[]
this.dish_garden=[]
this.miniature_garden=[]
this.water_features=[]
this.vertical_green=[]



   var productsRef = db.collection('products').where('type', '==', 'Miniature Gardens');
productsRef.get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      ////console.log(doc.id, '=>', doc.data());

var data=doc.data()

data.id=doc.id
this.miniature_garden.push(data)

    });
  })
  .catch(err => {
    //console.log('Error getting documents', err);
  });
     var productsRef2 = db.collection('products').where('type', '==', 'Terrariums');
productsRef2.get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      ////console.log(doc.id, '=>', doc.data());
var data=doc.data()

data.id=doc.id
this.terrarium.push(data)

    });
  })
  .catch(err => {
    //console.log('Error getting documents', err);
  });

   var productsRef3 = db.collection('products').where('type', '==', 'Water Features');
productsRef3.get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      ////console.log(doc.id, '=>', doc.data());

var data=doc.data()

data.id=doc.id
this.water_features.push(data)

    });
  })
  .catch(err => {
    //console.log('Error getting documents', err);
  });

   var productsRef4 = db.collection('products').where('type', '==', 'Dish Gardens');
productsRef4.get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      ////console.log(doc.id, '=>', doc.data());

var data=doc.data()

data.id=doc.id
this.dish_garden.push(data)

    });
  })
  .catch(err => {
    //console.log('Error getting documents', err);
  });

   var productsRef5 = db.collection('products').where('type', '==', 'Vertical Greens');
productsRef5.get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      ////console.log(doc.id, '=>', doc.data());
var data=doc.data()

data.id=doc.id
this.vertical_green.push(data)

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
#productimages {
  margin-top: 9%;
    width: 75%;
    height: 360px;
    cursor: pointer;
        object-fit: cover;
}
img:hover {
  transform: scale(1.1);
  transition: 0.8s;
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


#created-quote1,#created-quote2,#created-quote3,#created-quote4{

   text-align: center;
    padding-left: 22%;
    padding-right: 22%;
    font-size: 129%;
    margin-top: 3%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#interior-h1{

  color: #a52b2b;
    font-size: 180%;
   text-align: center;
    margin-top: 8%;
    margin-bottom: 8%;
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
    font-size: 120%;
    font-style: italic;
    font-weight: bold;
       font-family: 'Cantarell', sans-serif;

}
#created-quote3{

      margin-top: 7%;
    text-align: center;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 90%;
       font-family: 'Cantarell', sans-serif;
   
}
#created-quote4{

      margin-top: 7%;
    text-align: center;
    padding-left: 3%;
    padding-right: 3%;
    font-size: 120%;
       font-family: 'Cantarell', sans-serif;
    

}


  #el-menu2 {
        font-size: 129%;
    width: 100%;
    margin-left: 0px;
        margin-top: 6%;
        height: 340px;
 background-image: url("../assets/300 x 360/o edit - for Art - Created.jpg");
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

}
</style>
