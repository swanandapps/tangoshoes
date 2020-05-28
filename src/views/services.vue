<template>
<div>
        
<el-menu   id="el-menu4" class="el-menu-demo" mode="horizontal" >

<div id="menu-tabs">
<router-link  style="text-decoration:none;color:#a52b2b" to="/"     >:: <word style="color:black" >Home</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/store"     >:: <word v-bind:class="{ inactive: true }"  >Products</word> ::</router-link>



  <router-link v-bind:class="{ active:isActive }" id="art" style="text-decoration:none;color:#a52b2b" to="" > ::  <word  style="color:black"  @click="showtypes()"  >Art</word> ::</router-link>

<transition name="fade">
<div v-if="show_art_types" id="art-types">
<router-link style="text-decoration:none;color:#a52b2b;background: transparent;z-index:2000" to="/created" ><el-button style="color:#a52b2b"> ::  <word style="color:black;background: transparent;">Created</word> ::</el-button></router-link>
<router-link style="text-decoration:none;color:#a52b2b;background: transparent;z-index:2000" to="/curated" > <el-button style="color:#a52b2b">::  <word style="color:black;background: transparent;">Curated</word> ::</el-button></router-link></div>
</transition>
<!--
<router-link to="/created" > ::  <word style="color:black">Created</word> ::</router-link>
<router-link to="/curated" > ::  <word style="color:black">Curated</word> ::</router-link>
-->

<router-link  style="text-decoration:none;color:#a52b2b" to="/services"     >:: <word style="color:#a52b2b"  >Services</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/events"     >:: <word style="color:black" >Events</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/about"     >:: <word style="color:black" >About</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/contact"     >:: <word style="color:black" >Contact</word> ::</router-link>
</div>
 </el-menu>


<el-row id="store-tag-line">

<div id="store-tag-line1">
  <p>Doing up your space makeover could be a confusing and daunting task at times.</p>

</div>

<div id="store-tag-line1a">
  Aprakrta’s inhouse team of highly qualified Designers, Artists and Architects can help you in every aspect of your space makeover journey right from designing, making and styling up your space just so that it not only suits your needs and personality but also upscales it!
</div>
<div id="services-tag-line1b">

  <p>Jazz up your spaces by consulting our experts for the following services:</p>
</div>

</el-row>


<el-row id="slider-div">

<el-col id="interior-slider">


<h1 id="interior-h1">::  <word style="color:black">Interior Design</word> ::</h1>

<el-carousel  :interval="2500"  id="carousel">
      <el-carousel-item id="carousel-img"  >
<img src="../assets/Interior Design/ANK537_8803a.jpg" alt="">

      </el-carousel-item>
        <el-carousel-item id="carousel-img"  >
<img src="../assets/Interior Design/ANK537_8814a.jpg" alt="">

      </el-carousel-item>
        <el-carousel-item id="carousel-img"  >

<img src="../assets/Interior Design/ANK537_8820a.jpg" alt="">
      </el-carousel-item>


    </el-carousel>


</el-col>
<el-col id="interior-slider">


<h1 id="interior-h1">::  <word style="color:black">Interior Styling</word> ::</h1>

<el-carousel  :interval="2500"  id="carousel">
      <el-carousel-item id="carousel-img"  >
<img src="../assets/Interior Styling/1.jpg" alt="">

      </el-carousel-item>
        <el-carousel-item id="carousel-img"  >
<img src="../assets/Interior Styling/2.jpg" alt="">

      </el-carousel-item>
        <el-carousel-item id="carousel-img"  >
<img src="../assets/Interior Styling/3.jpg" alt="">

      </el-carousel-item>


    </el-carousel>



</el-col>
<el-col id="interior-slider">


<h1 id="interior-h1">::  <word style="color:black">Terrace Gardening</word> ::</h1>
<el-carousel :interval="2500"  id="carousel">
  <el-carousel-item id="carousel-img"  >
<img src="../assets/Terrace Gardening/Balcony options-Model.jpg" alt="">

      </el-carousel-item>
  <el-carousel-item id="carousel-img"  >
<img src="../assets/Terrace Gardening/Interior layout 01.jpg" alt="">

      </el-carousel-item>

</el-carousel>

</el-col>
<el-col id="interior-slider" style="margin-top:-20%">


<h1 id="interior-h1">::  <word style="color:black">Indoor & Outdoor Landscape</word> ::</h1>

<el-carousel :interval="2500"  id="carousel">
  <el-carousel-item id="carousel-img"  >
<img src="../assets/Indoor_Outdoor Landscape/01.jpg" alt="">

      </el-carousel-item>
  <el-carousel-item id="carousel-img"  >
<img src="../assets/Indoor_Outdoor Landscape/02.jpg" alt="">

      </el-carousel-item>
      <el-carousel-item id="carousel-img"  >
<img src="../assets/Indoor_Outdoor Landscape/03.jpg" alt="">

      </el-carousel-item>

</el-carousel>


</el-col>
<el-col id="interior-slider">


<h1 id="interior-h1">::  <word style="color:black">Furniture Design</word> ::</h1>

<el-carousel :interval="2500"  id="carousel">
  <el-carousel-item id="carousel-img"  >
<img src="../assets/Furniture/1.jpg" alt="">

      </el-carousel-item>
  <el-carousel-item id="carousel-img"  >
<img src="../assets/Furniture/2.jpg" alt="">

      </el-carousel-item>
      <el-carousel-item id="carousel-img"  >
<img src="../assets/Furniture/3.jpg" alt="">

      </el-carousel-item>

</el-carousel>


</el-col>





</el-row>
















         
<!--

 <el-row id="servicerow"  >
<el-col>
         <div class="container"  style="
    width: 100%;">

  <div class="content">
    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
      <div class="content-overlay"></div>
      <img alt="image" style="height:350px" class="content-image" src="../assets/spa/service2 (2).jpg">
      <div class="content-details fadeIn-top">
        <h3>Interior Styling</h3>
        <p style="font-size:90%">Art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people </p>
      </div>
    </a>
  </div>
</div>
</el-col>
<el-col style="height:350px">
           <div class="container"  style="
    width: 100%;">

  <div class="content"  >
    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
      <div class="content-overlay"></div>
      <img alt="image" style="height:350px" class="content-image" src="../assets/spa/new2.jpg">
      <div class="content-details fadeIn-top">
        <h3>Home Decor</h3>
        <p style="font-size:90%">Put life into your home by decorating every corner of it with something that appeals to you</p>
      </div>
    </a>
  </div>
</div>
</el-col>
<el-col style="height:400px">
          <div id="abnormal3" class="container" style="
    width: 100%;">

  <div class="content">
    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
      <div class="content-overlay"></div>
      <img alt="image" style="height:350px" class="content-image" src="../assets/spa/service2 (1).jpg">
      <div class="content-details fadeIn-top">
        <h3>Indoor & Outdoor Landscaping</h3>
        <p style="font-size:90%" >Create a stimulating professional environment for you, your employees and clients</p>
      </div>
    </a>
  </div>
</div>
</el-col>
<el-col style="height:400px">
          <div class="container" style="
    width: 100%;">

  <div class="content">
    
      <div class="content-overlay"></div>
      <el-carousel  :interval="2500"  id="carousel">
      <el-carousel-item id="carousel-img"  v-for="item in 3" :key="item">


      </el-carousel-item>


    </el-carousel>
      <div class="content-details fadeIn-top">
        <h3>Paintings</h3>
        <p style="font-size:90%">Painting does what we cannot do - it brings a three-dimensional world into a two-dimensional plane</p>
      </div>
   
  </div>
</div>
</el-col>

</el-row>




      <h1 style="font-family: Montserrat;text-align:center;margin-top:10%">
                 Explore our Work

          </h1>

  <el-row :span="12" style="display:flex;margin-top:17%">
<el-col>
<img id="imgoffgrid" style="
 margin-left:5%"  src="../assets/spa/20.jpg" alt="">
</el-col>
<el-col>
     <div id="img-about1" >
Design is coming to grips with one's real lifestyle, one's real place in the world. Rooms should not be put together for show but to nourish one's well-being
</div>
</el-col>
  </el-row>
  <el-row :span="12" style="display:flex;margin-top:5%">
<el-col>
        <div id="img-about1" >
Aprakrta designers knows when he has reached perfection not when there is nothing left to add but when there is nothing left to take away
</div>
</el-col>

<el-col>
      <img  id="imgoffgrid2"  style=" width:90%"  src="../assets/spa/new.jpg" alt="">
        </el-col>
  </el-row>
 <el-row :span="12" style="display:flex;margin-top:17%">
<el-col>
<img  id="imgoffgrid"  style="margin-left:5%"  src="../assets/spa/ANK537_8835a.jpg" alt="">
</el-col>
<el-col>
     <div id="img-about1" >
A room should never allow the eye to settle in one place. It should smile at you and create fantasy
</div>
</el-col>
  </el-row>
  <el-row :span="12" style="display:flex;margin-top:5%">
<el-col>
        <div id="img-about1" >
Often what’s wrong with some modernist houses – they are kept vacuum-sealed all the way through. And then people wonder why they haven’t any atmosphere
</div>
</el-col>

<el-col>
      <img alt="image"  id="imgoffgrid2"  style="  width:80%;margin-left:10%" src="../assets/spa/bottle.jpg" >
        </el-col>
  </el-row>
-->

        </div>

</template>
<script>
export default {
  data() {
    return {
   show_art_types:false,
   isActive:false

    }
    },
  methods: {
  showtypes(){
this.isActive=true

if(this.show_art_types==false){

 this.show_art_types=true
}

else if(this.show_art_types==true){

  this.show_art_types=false
}
   
  }


  }


  
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Cantarell');


#store-tag-line,#store-tag-line1a,#store-tag-line1b{
  
text-align: center;
    padding-left: 12%;
    padding-right: 12%;
    font-size: 129%;
    margin-top: 5%

}
#service-tag-line1b{
      margin-top: 5%;
}
#interior-h1{

  color: #a52b2b;
    font-size: 180%;
   text-align: center;
    margin-top: 6%;
    margin-bottom: 6%;
    font-family: 'Cantarell', sans-serif;
}
 #carousel {
    height:592px;
  
  }
   #carousel-img {
 
    height: 592px;
    width: 51%;
    margin-left: 24%;
  }


#menu-tabs a{

 margin-top: 3.5%;
    margin-left: 6%;
    font-size: 136%;
}
#art{

  text-decoration: none;
  z-index: 2000;
  color: black
}
.active{

color:#a52b2b
}
.inactive{

  color: black
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

img {
  box-shadow: 0 0 17px 0px black;
  background-image: url("../assets/Furniture/1.jpg")
}
#menu-tabs a{

      margin-top: 3.5%;
}

#el-menu4 {



  margin-top: 2%;
 
 text-align: center;
  font-size: 90%;
  box-shadow: 0px;
  width: 100%;
      background-color: transparent;
          border: 0px;
    

}
#navhover-exception3 {
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
#navhover4 {
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

#steps {
  margin-top: 8%;

  width: 105%;
}
#howitworks {
  height: 200px;
  text-align: center;

  margin-left: 8%;
  margin-right: 8%;
}
#servicerow {
  margin-top: 28%;
  display: flex;
}
#img-about1 {
  font-size: 169%;
  font-family: serif;
  margin-top: 30%;
  margin-left: 8%;
  margin-right: 8%;
}



.main-title {
  color: #2d2d2d;
  text-align: center;
  text-transform: capitalize;
  padding: 0.7em 0;
}

.container {
  padding: 1em 0;
  float: left;
  width: 50%;
}
@media screen and (max-width: 640px) {
  .container {
    display: block;
    width: 100%;
  }
}

@media screen and (min-width: 900px) {
  .container {
    width: 33.33333%;
  }
}

.container .title {
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 10px;
}

.content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.content .content-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay {
  opacity: 1;
}

.content-image {
  width: 100%;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p {
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-bottom {
  top: 80%;
}

.fadeIn-top {
  top: 20%;
}

.fadeIn-left {
  left: 20%;
}

.fadeIn-right {
  left: 80%;
}
#imgoffgrid {
  height: 404px;
}
#imgoffgrid2 {
  height: 504px;
}
@media screen and (max-width: 480px) {
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
    padding-top: 4%;
    font-style: italic;
   padding-left: 5%;
    padding-right: 5%;

    font-family: 'Cantarell', sans-serif;
}
  #carousel {
    height:292px;
  
  }
   #carousel-img {
 
    height: 292px;
    width: 100%;
    margin-left: 0PX
    
  }
#interior-h1{

  color: #a52b2b;
    font-size: 150%;
   text-align: center;
    margin-top: 17%;
    margin-bottom: 15%;
    font-family: 'Cantarell', sans-serif;
}
#services-tag-line1b{

  padding-right: 7%;
    font-size: 90%;
    font-style: italic;
    font-weight: bold;
    padding-top: 4%;
    padding-left: 7%;
}
 #store-tag-line1{
          text-align: center;
    font-family: 'Cantarell', sans-serif;
    font-size: 90%;
    font-style: normal;
    font-weight: normal;
  }
   #store-tag-line1a{
         text-align: center;
    margin-top: 4%;
    font-family: 'Cantarell', sans-serif;
    font-size: 90%;
    padding-left: 4%;
    padding-right: 4%;
}
  
  #servicerow {
    display: block;
    margin-top: 60%;
  }
 
   #el-menu4 {
          font-size: 129%;
    width: 100%;
    margin-left: 0px;
        margin-top: 6%;
        height: 340px;
 background-image: url("../assets/300 x 360/k edit - for Services.jpg");
 background-size: cover;
     border: 0px;

   
  }
   #navhover-exception3 {
    font-size: 70%;
   
    margin-top: -4%;
 
    width: 100%;
    height:70px;
        padding-right: 69%;
        color: #a52b2b;
         padding-left: 4%
  }
  #navhover4 {
    font-size: 70%;
    
        margin-top: -9%;
    width: 100%;
    height:70px;
        padding-right: 69%;
        color: #a52b2b;
        padding-left: 4%
  }

  #abnormal3 {
    margin-top: 7%;
  }
  #imgoffgrid {
    height: 160px;
  }
  #imgoffgrid2 {
    height: 180px;
  }
  #img-about1 {
    font-size: 100%;
    font-family: serif;
    margin-top: 8%;
    margin-left: 17%;
    margin-right: 8%;
  }
}
</style>
