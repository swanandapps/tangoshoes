<template>
<div >


<el-row  id="top-row" >

<el-col  style="width:20%;margin:0%;margin-top:2%;height:20px;text-align: center">
       <router-link to="/"><md-icon style="color: rgb(167, 62, 44);">home</md-icon></router-link>
</el-col>
<el-col  style="width:50%;margin-left:4%;margin-top:-1%;height:40px;text-align: center">
 <md-menu md-offset-x="-40" md-offset-y="2" md-size="medium" md-align-trigger>
      <md-button aria-label="select category"  md-menu-trigger> <md-icon style="color: rgb(167, 62, 44);">category</md-icon></md-button>

      <md-menu-content id="list-content">
               <md-menu-item @click="seeall" >View All</md-menu-item>
        <md-menu-item @click="filterbysports" >Sports</md-menu-item>
        <md-menu-item @click="filterbysneak" >Sneaker</md-menu-item>
        <md-menu-item  @click="filterbycasuals" >Casuals</md-menu-item>

        <md-menu-item   @click="filterbyloafers" >Loafer</md-menu-item>
        <md-menu-item   @click="filterbyslippers" >Slippers</md-menu-item>
       

      </md-menu-content>
    </md-menu>
</el-col>
<el-col style="width:20%;margin:0%;height:40px;text-align: center;margin-top:-1%">

        <md-menu   md-size="medium" md-align-trigger>
      <md-button aria-label="sort products" md-menu-trigger> <md-icon style="color: rgb(167, 62, 44);">sort</md-icon></md-button>

      <md-menu-content id="list-content">
              <md-menu-item @click="sortrelevance">Relevance</md-menu-item>
              <md-menu-item @click="sortpopular">Most Popular</md-menu-item>
               <md-menu-item @click="sort_mostviewed">Most Viewed</md-menu-item>
        <md-menu-item @click="sortlowtohigh">Price: Low to High</md-menu-item>
        <md-menu-item @click="sorthightolow">Price: High to Low</md-menu-item>

      </md-menu-content>
    </md-menu>

</el-col>


<el-col style="width:30%;margin:0%;margin-left:-4%;text-align: center">
Home
</el-col>
<el-col style="width:50%;margin:0%;text-align: center">
Category
</el-col>
<el-col style="width:20%;margin:0%;text-align: center">
Sort
</el-col>


</el-row>














 
<!--
 <el-menu  id="el-menu3"  class="el-menu-demo" mode="horizontal" >


<div id="navhover-stuff">
<router-link to="/store" ><el-menu-item id="navhover-exception2">:: <word style="color:black">Products</word> ::</el-menu-item></router-link>
<router-link to="/artstore" > <el-menu-item id="navhover3" >::  <word style="color:black">Art</word> ::</el-menu-item></router-link>
<router-link to="/store" ><el-menu-item id="navhover3"  >::  <word style="color:black">Services</word> ::</el-menu-item></router-link>
<router-link to="/services" ><el-menu-item id="navhover3" >::  <word style="color:black">Events</word> ::</el-menu-item></router-link>
<router-link to="/about" ><el-menu-item id="navhover3" >::  <word style="color:black">About</word> ::</el-menu-item></router-link>
<router-link to="/contact" ><el-menu-item id="navhover3" >::  <word style="color:black">Contact</word> ::</el-menu-item></router-link>
 
 </div>
 </el-menu>



<el-menu id="el-menu3" class="el-menu-demo" mode="horizontal" >

<router-link to="/" ><el-menu-item   id="navhover-exception2">:: <word  style="color:black">Home</word> ::</el-menu-item></router-link>
<router-link to="/store" ><el-menu-item  id="navhover3">:: <word  style="color:black">Products</word> ::</el-menu-item></router-link>
<router-link to="/artstore" > <el-menu-item id="navhover3" >::  <word style="color:black">Art</word> ::</el-menu-item></router-link>
<router-link to="/store" ><el-menu-item id="navhover3"  >::  <word style="color:black">Services</word> ::</el-menu-item></router-link>
<router-link to="/services" ><el-menu-item id="navhover3" >::  <word style="color:black">Events</word> ::</el-menu-item></router-link>
<router-link to="/about" ><el-menu-item id="navhover3" >::  <word style="color:black">About</word> ::</el-menu-item></router-link>
<router-link to="/contact" ><el-menu-item id="navhover3" >::  <word style="color:black">Contact</word> ::</el-menu-item></router-link>
 </el-menu>

-->

<el-menu   id="el-menu3" class="el-menu-demo" mode="horizontal" >

<div id="menu-tabs">
<el-button style="border:none"><router-link  style="text-decoration:none;color:#a52b2b" to="/"     >:: <word style="color:black"   >Home</word> ::</router-link></el-button> 
<el-button large style="text-decoration:none;border:none;color:#a52b2b;font-size: 139%;" v-scroll-to="'#products'"  >:: <word style="color:#a52b2b" >Products</word> ::</el-button>

<el-button style="border:none"><router-link  style="text-decoration:none;color:#a52b2b" to="/about"     >:: <word style="color:black"   >About</word> ::</router-link></el-button> 
<el-button style="border:none"><router-link  style="text-decoration:none;color:#a52b2b" to="/contact"     >:: <word style="color:black"   >Contact</word> ::</router-link></el-button> 


<!--<router-link style="text-decoration:none;color:#a52b2b;z-index:2000" to="" > ::  <word @click="showtypes()" style="color:black">Art</word> ::</router-link>

<transition name="fade">
<div v-if="show_art_types" id="art-types">
<router-link style="text-decoration:none;color:#a52b2b;background: transparent;z-index:2000" to="/created" ><el-button style="color:#a52b2b"> ::  <word style="color:black;background: transparent;">Created</word> ::</el-button></router-link>
<router-link style="text-decoration:none;color:#a52b2b;background: transparent;z-index:2000" to="/curated" > <el-button style="color:#a52b2b">::  <word style="color:black;background: transparent;">Curated</word> ::</el-button></router-link></div>
</transition>

<router-link  style="text-decoration:none;color:#a52b2b" to="/services"     >:: <word style="color:black" >Services</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/events"     >:: <word style="color:black" >Events</word> ::</router-link>-->

</div>
 </el-menu>




<el-row id="store-tag-line">

<div id="store-tag-line1">
  <b>Casual Shoes, Sneakers and More</b>

</div>

<!--<div id="store-tag-line1a">
  The setup of your space talks a lot about your personality. Be it the space where you work, live, relax or just be!
</div>
-->

</el-row>
    
<el-row id="store-tag-line-div" >

<!--<el-row id="store-tag-line2">
<b>
Shoes For Every Story!

</b>


</el-row>

<el-row id="store-row3" >
       
          
     <p>Jazz up your story,</p> 
     <p>Set the mood right,</p> 
     <p>Accentuate your space,</p> 
     <p>Add Aprakrta’s bespoke art in your life!</p> 
     <p>Find the right spots for them in your space to create long lasting memories!</p> 
   




</el-row>


</el-row>

<el-row>


 <div id="store-tag-line3">
Our Art works can easily be your companion at your work cubicle in office, be a conversation starter over your coffee table, accompany you besides your thinking window, smile at you in your kitchen or simply brighten up an empty corner of your house!

<p id="single-gift-line">Gift our Artwork to your friends, relatives and loved one’s and jazz up their stories and spaces!</p>


</div>
-->
</el-row>











<el-row id="only-pc-row" >




          <el-col style="width:30%"  >
 <md-menu md-offset-x="-40" md-offset-y="2" md-size="medium" md-align-trigger>
      <md-button aria-label="choose category" id="category-btn-pc"   md-menu-trigger> Choose Category</md-button>

      <md-menu-content id="list-content">
               <md-menu-item @click="seeall" >View All</md-menu-item>
        <md-menu-item @click="filterbysports" >Sports</md-menu-item>
        <md-menu-item @click="filterbysneak" >Sneaker</md-menu-item>
        <md-menu-item  @click="filterbycasuals" >Casuals</md-menu-item>

        <md-menu-item   @click="filterbyloafers" >Loafer</md-menu-item>
        <md-menu-item   @click="filterbyslippers" >Slippers</md-menu-item>
       

      </md-menu-content>
    </md-menu>
</el-col>

<el-col id="sort-col" >
   Sort By :  <el-button aria-label="sort by price low to high" id="sortbtn1" small @click="sortlowtohigh">Price: Low to High</el-button>
   <el-button aria-label="sort by price high to low" id="sortbtn1" small @click="sorthightolow">Price: High to Low</el-button>
    <el-button aria-label="sort by relevance" id="sortbtn1" @click="sortrelevance">Relevance</el-button>
              <el-button aria-label="sort by most popular" id="sortbtn1" @click="sortpopular">Most Popular</el-button>
               <el-button aria-label="sort by most viewed" id="sortbtn1" @click="sort_mostviewed">Most Viewed</el-button>

  </el-col>

</el-row>












 <!-- Prod<ucts-->
  <el-row  id="products" >

  <el-col  id="store-col" style="padding:0px" v-for="(user,index) in filter" :key="index" >

          <div class="grid-content bg-purple " >
 <img alt="image" onContextMenu="return false;" id="productimages" @click="showproduct(user,index)" :src="filter[index].image">
<el-button aria-label="add product to cart"   @click="addtocart(index)" id="addtocartbtn">Add to Cart</el-button>
<el-button aria-label="view product in detail" id="viewbtn" @click="showproduct(index)">View product</el-button>
    </div>

           <p  id="productname">{{filter[index].name}}</p>

           <p id="productprice">{{filter[index].price}} ₹ </p>


    </el-col>



<el-row>
<section >


<div  class="icon-bar">
         <el-tooltip class="item" effect="dark" content="GO to Cart" placement="right-end">
           
<router-link style="text-decoration:none"  to="/cart"> <md-icon  class="facebook" style="color:white" >shopping_cart</md-icon><div class="count" style="color:white">{{cartproducts.length}}</div></router-link>
      
    
         </el-tooltip>
         

</div>

</section>
</el-row>

</el-row>


</div>

</template>
<script >
  
import db from '../components/firebaseinit.js'
import { storage, functions } from 'firebase';
import firebase from 'firebase';
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      users: [],
      filter: [],
      isDisabled: false,
      dialogVisible: false,
      count:1,
      id:'',
         show_art_types:false
 
     
    };
  },
   

  computed: {
    ...mapState(["title", "cartproducts", "clickedproduct","color"]),
    ...mapGetters(["indexed"])
  },
 

 methods: {
  showtypes(){


if(this.show_art_types==false){

 this.show_art_types=true
}

else if(this.show_art_types==true){

  this.show_art_types=false
}
   
  
},


    addtocart: function(index) {
 

  //console.log(this)

      let flag = 1;
      for (let i = 0; i < this.cartproducts.length; i++) {
        if (this.filter[index].id == this.cartproducts[i].id) {
          this.$notify.warning({
            title: "Already Added to Cart",
            message: "Visit Cart to Checkout",
            offset: 10,
            duration: 1500
          });
          flag = 0;
        }
      }

      if (flag == 1) {

        this.filter[index].quantity+=1
        this.cartproducts.push(this.filter[index]);

        console.log(this.cartproducts);

        this.$notify.success({
          title: "Added to Cart",
          message: "Visit Cart to Checkout",
          offset: 40,
          duration: 1500
        });
      }
    },
    showproduct(product,index) {
      this.clickedproduct.push(this.filter[index]);
      this.clickedproduct.splice(0, this.clickedproduct.length - 1);
      this.id=this.clickedproduct[0].id

      this.$router.push('/productdetails/' + this.id)

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

    sortrelevance: function() {
      return this.filter.sort(() => Math.random() - 0.5);
    },
    sortlowtohigh: function() {
      // result = this.filter.sort(
      //  (a, b) => parseFloat(a.price) > parseFloat(b.price)
      //

      return this.filter.sort(function(a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
      });
    },
    sorthightolow: function() {
      return this.filter
        .sort(function(a, b) {
          return parseFloat(a.price) - parseFloat(b.price);
        })
        .reverse();
    },
        sortpopular: function() {
      return this.filter
        .sort(function(a, b) {
          return parseFloat(a.sold_count) - parseFloat(b.sold_count);
        })
        .reverse();
    },
     sort_mostviewed: function() {
      return this.filter
        .sort(function(a, b) {
          return parseFloat(a.clicked_count) - parseFloat(b.clicked_count)
        })
        .reverse();
    },
    seeall: function() {
      this.filter = this.users;
    },
    filterbysports: function() {
      this.filter = this.users.filter(users => users.type == "sports");
      //console.log(this.filter);
    },
     filterbyslippers: function() {
      this.filter = this.users.filter(users => users.type == "slipper");
      //console.log(this.filter);
    },

    filterbysneak: function() {
      this.filter = this.users.filter(users => users.type == "sneaker");
      //console.log(this.filter);
    },
    filterbycasuals: function() {
      this.filter = this.users.filter(users => users.type == "casuals");
      //console.log(this.filter);
    },
    filterbyloafers: function() {
      this.filter = this.users.filter(users => users.type == "loafer");
      //console.log(this.filter);
    }
  },
  beforeCreate() {

let tempthis=this

    db.collection("products").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        
        //console.log(tempthis.count)
        var data = doc.data()
        data.id=doc.id
         // //console.log(tempthis.users[count])
           //tempthis.filter[tempthis.count].id=doc.id
           //console.log(data.id)
          tempthis.users.push(data);
        tempthis.filter.push(data);
        tempthis.count++;

    });

    //console.log(tempthis.users)
    //console.log(tempthis.filter)
    tempthis.filter=tempthis.filter.sort(function (a, b) {
  return a.price - b.price;
}).reverse();



});

   
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Cantarell');
#store-tag-line2,#store-tag-line1{



  margin-top: 4%;
    text-align: center;
    font-size: 160%;
    margin-bottom: 2%

}

#store-tag-line1a,#store-row3{


   text-align: center;
    padding-left: 30%;
    padding-right: 30%;
    font-size: 129%;
      font-family: 'Cantarell', sans-serif;
}

#store-tag-line3{

   text-align: center;
    padding-left: 15%;
    padding-right: 15%;
    font-size: 129%;
    margin-top: 3%
}
#menu-tabs a{

 margin-top: 3.5%;
    margin-left: 6%;
    font-size: 136%;
}
#addtocartbtn {
  width: 35%;
  font-size: 70%;
  
  margin-top: -2%;
  color: rgb(0, 0, 0);
  height: 35px;
  background-color: rgb(255, 255, 255);
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
#productname{


  font-size: 100%;
   font-weight: bold
}


#menu-tabs a{

      margin-top: 3.5%;
}


#sort-col{
  width:70%;
      padding-top: 1%;
}
#navhover-exception2 {
  width: 11%;
  border: #a52b2b 5px;
  font-size: 97%;
  letter-spacing: 0.7px;
  border: none;
  color: black;
  /* padding-right: 7%; */
  text-align: center;
  padding: 0px;
  margin-right: 8%;
  
    color: #a52b2b;

}
.btn-grad:hover {
  background-position: right center;
}
#navhover3 {
  width: 11%;
  border: #a52b2b 5px;
    
    color: #a52b2b;
  font-size: 97%;
  padding: 0px;
  letter-spacing: 0.7px;

  /* padding-right: 7%; */
  text-align: center;
  padding-left: 0px;
  margin-right: 8%;

}
#el-menu3 {

     margin-top: 2%;
    text-align: center;
    font-size: 90%;
    box-shadow: 0px;
    width: 100%;
    background-color: transparent;
        border: 0px;

    
}
#productimages {
  margin-top: 9%;
    width: 75%;
    height: 360px;
    cursor: pointer;
            object-fit: contain;
}
a {
  text-decoration: none;
}
#category-btn-pc {
  width: 170%;
  height: 55px;
  font-size: 100%;

  color: inherit;
  background-color: #f5f5f5;
}

#home-i {
  margin-top: 15%;
  margin-left: 25%;
}
a {
  text-decoration: none;
}
#store-col {
  background-color: white;
  padding: 0px 0px 0px 0px;
 
  margin-left: 0%;
  text-align: center;
  width: 25%;
}
.md-menu-content.md-menu-content-medium {
  color: black;
  background-color: white;
  /* width: 150%; */

  width: 50%;
  left: -5px;
}
#top-row {
  position: fixed;
  width: 100%;
  background-color: white;
  border: 1px solid;
  z-index: 1;
  box-shadow: 0 0 15px black;
  height: 74px;
  display: none;
}
.md-menu {
  margin-left: 27%;
  margin-top: 1%;
}
#drawer {
  display: none;
}
#categorybtn {
  opacity: 1;
}
#home-icon {
  margin-top: -15%;
}
.icon-bar {
  position: fixed;
  top: 80%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 8%;
}
#viewbtn {
  text-decoration: none;
}
.count {
     font-size: 110%;
    z-index: 2000;
    margin-top: -119%;
    margin-left: 80%;
}

.icon-bar a {
     display: block;
    text-align: center;
    padding: 23px;
    transition: all 0.3s ease;
    color: white;
    background-color: #a52b2b;
    font-size: 120%;
    border-radius: 50%;
    height: 76px;
    width: 110%;
}


.facebook {
  color: black;
  font-size: 200%;
  margin-top: 19%;
}
#el-menu2 {
  background-color: white;
  margin-top: 4%;
  margin-left: 7%;
  font-size: 110%;
  box-shadow: 0px;
  width: 100%;
      border: 0px;
}
#navhover-exception {
  width: 11%;
  border: #a52b2b 5px;
  font-size: 77%;
  letter-spacing: 0.7px;
  border: none;
  color: black;
  /* padding-right: 7%; */
  text-align: center;
  padding: 0px;
  margin-right: 8%;

  background-color: hsl(0, 34%, 47%);
  color: white;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 13px 6px -6px grey;
  background-image: linear-gradient(
    to right,
    #b6423e 0%,
    #b31217 51%,
    #e52d27 100%
  );
}
#navhover-exception:hover {
  background-color: black;
  color: black;
  transform: scale(1.1);
  transition: ease-in-out 0.3s;
}
#navhover2 {
  width: 11%;
  border: #a52b2b 5px;
  background-color: #a15050;
  font-size: 77%;
  padding: 0px;
  letter-spacing: 0.7px;
  color: white;
  /* padding-right: 7%; */
  text-align: center;
  padding-left: 0px;
  margin-right: 8%;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 13px 6px -6px grey;
  background-image: linear-gradient(
    to right,
    #b6423e 0%,
    #b31217 51%,
    #e52d27 100%
  );
}
#filter-row {
  height: 50px;
  width: 100%;
  margin-left: 0%;
}

@media screen and (max-width: 320px) {
  #art-types :nth-child(2){

 margin-left: 0px;
background: rgba(255, 255, 255, 0.6);
border-radius: 15px 5px;
margin-top: 4%

}

#addtocartbtn {
    width: 75%;
    font-size: 70%;
    margin-top: -2%;
    color: rgb(0, 0, 0);
    height: 35px;
    background-color: rgb(255, 255, 255);
}
#art-types :nth-child(1){

  margin-left: 0px;
background: rgba(255, 255, 255, 0.6);
border-radius: 5px 15px;
margin-top: -2%

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

  #store-tag-line-div{

        background-position: center;
    background-image: url("../assets/store1.jpg");
    background-size: cover;
    color: white;
    height: 375px;
    font-family: 'Cantarell', sans-serif;
       margin-top: 6%;

}

#single-gift-line{

  font-style: italic;
  font-weight: bold;
      margin-top: 6%;
}
#store-tag-line3{

      text-align: center;
    margin-top: 2%;
    font-family: 'Cantarell', sans-serif;
    font-size: 90%;
    padding-left: 4%;
    padding-right: 4%;
    line-height: normal;
        margin-top: 5%;

}
#store-row3 p{
    margin-top: -3%;
    font-size: 100%;
    font-weight: 500;
      font-family: 'Cantarell', sans-serif;

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
  #store-tag-line{

    text-align: center;
    font-size: 120%;
    color: black;
    padding-top: 0%;
  
    padding-left: 2%;
    padding-right: 2%;
  
    font-family: 'Cantarell', sans-serif;
        margin-top: 8%;
}
 #store-row3 {
         font-size: 84%;
    margin-top: 4%;
    padding-left: 17%;
    padding-right: 15%;
    padding-bottom: 1%;
    text-align: center;
    font-style: italic;
      font-family: 'Cantarell', sans-serif;
  }


#store-tag-line-quote{
       text-align: center;
    margin-top: 17%;
    font-family: 'Cantarell', sans-serif;
    font-style: italic;
    font-size: 83%;
    font-weight: 200;
    letter-spacing: normal;
     
}
  #only-pc-row {
    display: none;
  }
#store-tag-line2{

       text-align: center;
    margin-top: 7%;
    font-size: 150%;
    font-style: italic;
      font-family: 'Cantarell', sans-serif;

}
  #store-tag-line1{
        text-align: center;
         font-family: 'Cantarell', sans-serif;
                font-size: 120%;
  }
   #store-tag-line1a{
        text-align: center;
            margin-top: 2%;
            font-family: 'Cantarell', sans-serif;
            font-size: 90%;
                padding-left: 4%;
    padding-right: 4%;
  }
  #el-menu3 {
          font-size: 75%;
    width: 100%;
    margin-left: 0px;
        margin-top: 0%;
        height: 369px;
 background-image: url("../assets/shoe.jpg");
 background-size: cover
   
  }
  #navhover-exception2 {
    font-size: 70%;
   
        margin-top: 6%;
 
    width: 100%;
    height:70px;
        padding-right: 69%;
        color: #a52b2b;
         padding-left: 4%
  }
  #navhover3 {
    font-size: 70%;
    
        margin-top: -9%;
    width: 100%;
    height:70px;
        padding-right: 69%;
        color: #a52b2b;
        padding-left: 4%
  }


  #top-row {
   background-color: white;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: block;
  margin-left: 0%;
    border: 0px;
  }
  #viewbtn {
    display: none;
  }
  #filter-row {
    display: none;
  }
  .md-menu {
    margin-left: 4%;
    margin-top: 3%;
  }
  #row2 {
    display: none;
  }
  #drawer {
    display: block;
  }
  .line {
    display: none;
  }
  .icon-bar {
    position: fixed;
    -webkit-transform: translateY(-50%);
    transform: translateY(-56%);
      right: 12%;
    bottom: 0%;
  }

  #row2 {
    margin-top: 40%;
    font-size: 110%;
    width: 100%;
    margin-left: 2%;
  }
  #el-menu2 {
    background-color: white;
    text-align: center;
    font-size: 140%;
    -webkit-box-shadow: 0px;
    box-shadow: 0px;
    display: initial;
    width: 100%;
    margin-left: -2%;
        border: 0px;
  }

  #title {
    width: 30%;
  }
  #bggrad {
    height: 210px;
    margin-top: 15%;
        width: 100%;
            object-fit: fill;
  }
  #productimages {
        height: 263px;
    width: 100%;
    margin-left: 0%;
    cursor: pointer;
    border: none
  }

  #carticon {
    display: none;
  }

  #row3 {
    margin-top: 5%;
  }
  #store-col {
         width: 49%;
    height: 400px;
    margin-left: 1%;

   
  }
  #products {
    width: 100%;
       
       display: block;
       margin-left: 0%;
           margin-top: 6%;
           margin-bottom: 27%;

   
  }
  .grid-content {
    height: 296px;
  }
  img {
    height: 10px;
  }

  
  #filter-row {
    background-color: #f5f5f5c2;
    color: black;
    height: 20px;
  }
  #sortproducts {
    margin-top: 7%;
    margin-left: 10%;
    width: 100%;
    font-size: 60%;
  }
  #sortbtn1 {
    width: 50%;
    height: 50px;
    font-size: 30%;
   
    opacity: 1;
  }
  #sortbtn2 {
    width: 50%;
    height: 50px;
    font-size: 30%;
   
    opacity: 1;
  }
}


@media screen and (min-width: 321px) and (max-width: 480px) {
  #art-types :nth-child(2){

 margin-left: 0px;
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

  #store-tag-line-div{

        background-position: center;
    background-image: url("../assets/store1.jpg");
    background-size: cover;
    color: white;
    height: 375px;
    font-family: 'Cantarell', sans-serif;
       margin-top: 6%;

}

#single-gift-line{

  font-style: italic;
  font-weight: bold;
      margin-top: 6%;
}
#store-tag-line3{

      text-align: center;
    margin-top: 2%;
    font-family: 'Cantarell', sans-serif;
    font-size: 90%;
    padding-left: 4%;
    padding-right: 4%;
    line-height: normal;
        margin-top: 5%;

}
#store-row3 p{
    margin-top: -3%;
    font-size: 100%;
    font-weight: 500;
      font-family: 'Cantarell', sans-serif;

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
  #store-tag-line{

    text-align: center;
    font-size: 120%;
    color: black;
    padding-top: 0%;
  
    padding-left: 2%;
    padding-right: 2%;
  
    font-family: 'Cantarell', sans-serif;
        margin-top: 8%;
}
 #store-row3 {
         font-size: 84%;
    margin-top: 4%;
    padding-left: 17%;
    padding-right: 15%;
    padding-bottom: 1%;
    text-align: center;
    font-style: italic;
      font-family: 'Cantarell', sans-serif;
  }


#store-tag-line-quote{
       text-align: center;
    margin-top: 17%;
    font-family: 'Cantarell', sans-serif;
    font-style: italic;
    font-size: 83%;
    font-weight: 200;
    letter-spacing: normal;
     
}
  #only-pc-row {
    display: none;
  }
#store-tag-line2{

       text-align: center;
    margin-top: 7%;
    font-size: 150%;
    font-style: italic;
      font-family: 'Cantarell', sans-serif;

}
  #store-tag-line1{
        text-align: center;
         font-family: 'Cantarell', sans-serif;
                font-size: 120%;
  }
   #store-tag-line1a{
        text-align: center;
            margin-top: 2%;
            font-family: 'Cantarell', sans-serif;
            font-size: 90%;
                padding-left: 4%;
    padding-right: 4%;
  }
  #el-menu3 {
          font-size: 75%;
    width: 100%;
    margin-left: 0px;
        margin-top: 0%;
        height: 369px;
 background-image: url("../assets/shoe.jpg");
 background-size: cover
   
  }
  #navhover-exception2 {
    font-size: 70%;
   
        margin-top: 6%;
 
    width: 100%;
    height:70px;
        padding-right: 69%;
        color: #a52b2b;
         padding-left: 4%
  }
  #navhover3 {
    font-size: 70%;
    
        margin-top: -9%;
    width: 100%;
    height:70px;
        padding-right: 69%;
        color: #a52b2b;
        padding-left: 4%
  }


  #top-row {
   background-color: white;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: block;
  margin-left: 0%;
    border: 0px;
  }
  #viewbtn {
    display: none;
  }
  #filter-row {
    display: none;
  }
  .md-menu {
    margin-left: 4%;
    margin-top: 3%;
  }
  #row2 {
    display: none;
  }
  #drawer {
    display: block;
  }
  .line {
    display: none;
  }
  .icon-bar {
    position: fixed;
    -webkit-transform: translateY(-50%);
    transform: translateY(-56%);
      right: 12%;
    bottom: 0%;
  }

  #row2 {
    margin-top: 40%;
    font-size: 110%;
    width: 100%;
    margin-left: 2%;
  }
  #el-menu2 {
    background-color: white;
    text-align: center;
    font-size: 140%;
    -webkit-box-shadow: 0px;
    box-shadow: 0px;
    display: initial;
    width: 100%;
    margin-left: -2%;
        border: 0px;
  }

  #title {
    width: 30%;
  }
  #bggrad {
    height: 210px;
    margin-top: 15%;
        width: 100%;
            object-fit: fill;
  }
  #productimages {
        height: 263px;
    width: 100%;
    margin-left: 0%;
    cursor: pointer;
    border: none
  }

  #carticon {
    display: none;
  }

  #row3 {
    margin-top: 5%;
  }
  #store-col {
         width: 49%;
    height: 400px;
    margin-left: 1%;

   
  }
  #products {
    width: 100%;
       
       display: block;
       margin-left: 0%;
           margin-top: 6%;
           margin-bottom: 27%;

   
  }
  .grid-content {
    height: 296px;
  }
  img {
    height: 10px;
  }

  #addtocartbtn {
    margin-top: -2%;
    left: 19%;
    width: 70%;
  }

  #filter-row {
    background-color: #f5f5f5c2;
    color: black;
    height: 20px;
  }
  #sortproducts {
    margin-top: 7%;
    margin-left: 10%;
    width: 100%;
    font-size: 60%;
  }
  #sortbtn1 {
    width: 50%;
    height: 50px;
    font-size: 30%;
   
    opacity: 1;
  }
  #sortbtn2 {
    width: 50%;
    height: 50px;
    font-size: 30%;
   
    opacity: 1;
  }
}
/* TABLETS PORTRAIT */
@media screen and (min-width: 481px) and (max-width: 720px) {
  #only-pc-row {
    display: none;
  }
  .line {
    display: none;
  }
  .icon-bar {
    position: fixed;
    -webkit-transform: translateY(-50%);
    transform: translateY(-56%);
    right: 18%;
    bottom: 10%;
  }
  #navhover-exception {
    font-size: 97%;
    letter-spacing: 0.7px;
    border: none;
    color: black;
    margin-top: -6%;
  }
  #el-menu2 {
    background-color: white;
    text-align: center;
    font-size: 140%;
    -webkit-box-shadow: 0px;
    box-shadow: 0px;
    display: initial;
    width: 100%;
    margin-left: -2%;
        border: 0px;
  }
  #navhover2 {
    font-size: 90%;
    color: black;
    margin-left: -3%;
    margin-top: -6%;
  }
  #title {
    width: 30%;
  }
  #bggrad {
    height: 210px;
        object-fit: fill;
  }
  #filters {
    display: -webkit-flex;
    margin-bottom: 8%;
  }
  #productimages {
       height: 400px;
    width: 99%;
      cursor: pointer;
  }

  #row2 {
    margin-left: 9%;
    font-size: 90%;
    margin-top: 10%;
  }
  #carticon {
    display: none;
  }

  #row3 {
    margin-top: 1%;
  }
  #home-icon {
    margin-top: -12%;
    margin-left: 15%;
  }
 #store-col {
         width: 49%;
    height: 470px;
    margin-left: 1%;

   
  }
  #products {
    width: 100%;
      
       display: block;
      
       margin-left: 0%

   
  }

  .grid-content {
    height: 420px;
  }
  img {
    height: 10px;
  }

  #addtocartbtn {
    margin-top: -2%;
    left: 19%;
  }
  #viewbtn {
    display: none;
  }
  #filter-row {
    background-color: #f5f5f5c2;
    color: black;
    height: 100px;
  }
  #sortproducts {
    margin-top: 6%;
    margin-left: 20%;
    width: 100%;
  }
  #sortbtn1 {
    width: 30%;
    height: 40px;
    font-size: 50%;
    
    opacity: 1;
  }
  #sortbtn2 {
    width: 30%;
    height: 40px;
    font-size: 50%;
    
    opacity: 1;
  }
}
/* /* TABLETS PORTRAIT */
@media screen and (min-width: 721px) and (max-width: 1024px) {
  .line {
    display: none;
  }
  #sort-col{
    width: 100%;
    padding-left: 5%
  }
  .md-menu {
    margin-left: 15%;
    margin-top: 1%;
}
  .icon-bar {
    position: fixed;
    -webkit-transform: translateY(-50%);
    transform: translateY(-56%);
    right: 18%;
    bottom: 10%;
  }
  #navhover-exception {
    font-size: 97%;
    letter-spacing: 0.7px;
    border: none;
    color: black;
    margin-top: -6%;
  }
  #el-menu2 {
    background-color: white;
    text-align: center;
    font-size: 140%;
    -webkit-box-shadow: 0px;
    box-shadow: 0px;
    display: initial;
    width: 100%;
    margin-left: -2%;
  }
  #navhover2 {
    font-size: 90%;
    color: black;
    margin-left: -3%;
    margin-top: -6%;
  }
  #title {
    width: 30%;
  }
  #bggrad {
    height: 210px;
        object-fit: fill;
  }
  #productimages {
    height: 100%;
    width: 95%;
      cursor: pointer;
  }
  #row2 {
    margin-left: 9%;
    font-size: 90%;
    margin-top: 10%;
  }
  #carticon {
    display: none;
  }

  #row3 {
    margin-top: 1%;
  }
  #home-icon {
    margin-top: -5%;
  }
  span {
    margin-top: 1%;
  }
#store-col {
         width: 33%;
    height: 400px;
    

   
  }
  #products {
    width: 100%;
     
       display: block;
      padding-left:1%

   
  }
  #productimages{
    width: 99%
  }
  .grid-content {
    height: 365px;
  }
  img {
    height: 10px;
  }

  #addtocartbtn {
    margin-top: -2%;
    left: 19%;
  }
  #viewbtn {
    display: none;
  }
  #filter-row {
    background-color: #f5f5f5c2;
    color: black;
    height: 150px;
  }
  #sortproducts {
    margin-top: 4%;
    margin-left: 30%;
    width: 100%;
  }
  #sortbtn1 {
    width: 17%;
    height: 40px;
    font-size: 70%;
    
    opacity: 1;
  }
  
  #category-btn-pc{
        width: 117%;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1400px) {
}

#cartcount {
  color: black;
  display: table-caption;
  height: 50px;
}
#sortbtn1{
    width: 17%;

}

#carticon {
  margin-top: -2%;
  margin-left: 30%;
  text-align: right;
}
#cart-icon {
  padding-bottom: 0px;
  margin-left: 32%;
  margin-right: 5%;
  margin-top: -3%;
  text-decoration: none;
  border: none;
  background-color: white;
  color: black;
}
#cart-icon:hover {
  color: #c44b49;
}
a {
  text-decoration: none;
}
#navhover2 {
  font-size: 77%;
  letter-spacing: 0.7px;
  border: none;
  color: white;
}
#navhover2:hover {
  color: black;
  background-color: white;
  transform: scale(1.1);
  transition: ease-in-out 0.3s;
}

#el-menu2 {
  background-color: white;
  margin-top: 3%;
  margin-bottom: 3%;
  text-align: center;
  font-size: 140%;
  box-shadow: 0px;
  width: 100%;
}
#sortbtn1:hover {
  background-color: rgb(167, 62, 44);
  color: white;
}
#sortbtn2:hover {
  background-color: rgb(167, 62, 44);
  color: white;
}
#category-btn-pc:hover {
  background-color: rgb(167, 62, 44);
  color: white;
}
#toolbar {
  position: fixed;
  z-index: 1000;
}
#filter-row {
  background-color: #f5f5f5c2;
  color: black;
  height: 150px;
}
#sortproducts {
  margin-top: 4%;
  margin-left: 50%;
  width: 100%;
}
#home-icon {
  margin-top: -1%;
}

span {
  margin-left: 2%;
}
#dialog-img {
  width: 20%;
  height: 30%;
  margin-right: 90%;
}
#dialogbox {
  height: 600px;
  top: 5%;
  width: 90%;
  left: 5%;
}

#prodactions {
  display: inline-block;
}
#viewbtn {
  width: 35%;
  font-size: 70%;
  margin-left: 5%;
  margin-top: -2%;
  color: rgb(0, 0, 0);
  height: 35px;
  text-align: center;
  background-color: rgb(255, 255, 255);
}
#quick-view-icon {
  z-index: 1000;
  margin-top: -5%;
  margin-left: 10%;
}


#productname {
  margin-top: 7%;
  text-align: center;
  font-size: 90%;
  font-weight: bold
}
#productprice {
  text-align: center;
    margin-top: -2%;
    font-size: 113%;
    font-family: auto;
    color: black;
}

.el-dropdown {
  display: inline;
  margin-left: 70%;
}
#sortproducts {
  margin-left: 5%;
}
.px-0 {
  text-align: center;
  font-size: 200%;
  margin-top: 5%;
}
.line {
  width: 590px;
  height: 47px;
  border-bottom: 1px solid black;
  margin-left: 28%;
  margin-bottom: 3%;
}




h1 {
  margin: 10% 35%;
}
.el-row,
.el-col {
  overflow: hidden;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  overflow: hidden;
}
img {
  height: 300px;
  width: 100%;
  margin-top: 10px;
  word-spacing: 3px;
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

#bggrad {
  height: 210px;
  margin-top: 4%;
      object-fit: fill;
}
img:hover {
  transform: scale(1.1);
  transition: 0.8s;
}
.grid-content:hover #addtocartbtn {
  opacity: 1;
  transform: translateY(-120%);
  transition: all 0.8s ease-in-out;
}
.grid-content:hover #viewbtn {
  opacity: 1;
  transform: translateY(-120%);
  transition: all 0.8s ease-in-out;
}
#addtocartbtn,
#viewbtn {
  opacity: 0;
}
#shopnow {
  margin-top: -30%;
  margin-left: 28%;
}
#featured {
  margin-top: 2%;
  text-align: center;
}
#only-pc-row{

  margin-top: 8%;
  margin-bottom: 5%;
}

#category-btn-pc[data-v-40dd46b7] {
    width: 143%;
 
}

</style>
