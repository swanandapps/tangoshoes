<template>
<div>

<!--
<div id="newmenu" >

  <div style="width:40%;margin-left:5%">
   <el-select style="    width: 100%;border: solid;" size="large" v-model="value" placeholder="Select Product Category">
   <router-link to="/store" > <el-option
>
    Home Decor
    </el-option>
   </router-link>
     <router-link to="/store" >
        <el-option
>
Sculpture
    </el-option>
     </router-link>
     <router-link to="/store" >
        <el-option
>
Paintings
    </el-option>
     </router-link>
     <router-link to="/store" >
        <el-option
> Pottery
    </el-option>
     </router-link>
  </el-select>

  </div>
 

 <div style="width:40%;margin-left:5%">
  <el-select style="    width: 100%;border: solid;" size="large" v-model="value" placeholder="About Aprakrta">
   
   
    <el-option
    >
    Aprakrta Design
    </el-option>

    <router-link to="/services" >
     <el-option
    >
    Aprakrta Services
    </el-option>
    </router-link>
  </el-select>
        </div>
</div>

-->
     
    
 <el-menu   id="el-menu2" class="el-menu-demo" mode="horizontal" >

<div id="menu-tabs">
<router-link  style="text-decoration:none;color:#a52b2b" to="/"     >:: <word   style="color:#a52b2b" >Home</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/store"     >:: <word style="color:black"  >Products</word> ::</router-link>



 
 
  <router-link style="text-decoration:none;color:#a52b2b;z-index:2000" to="" > ::  <word @click="showtypes()" style="color:black">Art</word> ::</router-link>

<transition name="fade">
<div v-if="show_art_types" id="art-types">
<router-link style="text-decoration:none;color:#a52b2b;background: transparent;z-index:2000" to="/created" ><el-button style="color:#a52b2b"> ::  <word style="color:black;background: transparent;">Created</word> ::</el-button></router-link>
<router-link style="text-decoration:none;color:#a52b2b;background: transparent;z-index:2000" to="/curated" > <el-button style="color:#a52b2b">::  <word style="color:black;background: transparent;">Curated</word> ::</el-button></router-link>
</div>
</transition>

<router-link  style="text-decoration:none;color:#a52b2b" to="/services"     >:: <word style="color:black" >Services</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/events"     >:: <word style="color:black" >Events</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/about"     >:: <word  style="color:black">About</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/contact"     >:: <word style="color:black" >Contact</word> ::</router-link>
</div>
 </el-menu>



<el-row id="tag-line-div" style="">

<el-row id="tag-line">
<b>
 :: Spaces :: Art :: Memories ::

</b>


</el-row>

<el-row id="row3" >
        <q id="tag-line-quote">Spaces speak to us and create memories. Aprakrta belives in celebrating such beautiful memories every moment by creating bespoke art that accentuates and enlivens spaces that you dwell in</q>
</el-row>

</el-row>

<div id="home-img" >
           <!--  <img id="homeimg" style="height:500px" src="../assets/Modern-Art.jpg">-->


  <el-carousel  :interval="2500"  id="carousel">
      <el-carousel-item id="carousel-img"  >
<img src="../assets/Slider01-small.jpg" alt="">

      </el-carousel-item>
        <el-carousel-item id="carousel-img"  >
<img src="../assets/Slider 02-small-1.jpg" alt="">

      </el-carousel-item>
        <el-carousel-item id="carousel-img"  >
<img src="../assets/Slider 03-small.jpg" alt="">

      </el-carousel-item>


    </el-carousel>
<el-carousel  :interval="2500"  id="carousel-desktop">
      <el-carousel-item id="carousel-img-desktop"  >
<img src="../assets/For Desktop/Slider 01.jpg" alt="">

      </el-carousel-item>
        <el-carousel-item id="carousel-img-desktop"  >
<img src="../assets/For Desktop/Slider 02.jpg" alt="">

      </el-carousel-item>
        <el-carousel-item id="carousel-img-desktop"  >
<img src="../assets/For Desktop/Slider 03.jpg" alt="">

      </el-carousel-item>


    </el-carousel>
   
      <div id="home-buttons" >
        <router-link to="/store"><el-button id="shopnow" aria-label="shop now"  large>Visit Art Gallery</el-button></router-link>
         <el-button aria-label="know more" v-scroll-to="'#apra-row'"  id="knowmore" large>About Aprakrta</el-button>


</div>

</div>


<h1 id="interior-h1">::  <word style="color:black">Featured Categories</word> ::</h1>

<el-row style="width:100%;display:flex;margin-top:10%;margin:0px">

<el-col style="margin-top:0%;width: 80%;">

      <img alt="image" id="newhome" src="../assets/w.jpg">
<router-link to="/store" >
<el-button aria-label="check landscape products" id="newhomebtn"> Interior Styling</el-button></router-link>
</el-col>


<el-row id="newhomerow" style="width:60%">

<el-col   style="  margin-top: -0.2%;   ">


      <img alt="image" id="newhome2"  src="../assets/v.jpg">
<router-link to="/store" ><el-button  aria-label="check pottery products" id="newhomebtn2" >Terrariums</el-button></router-link>
</el-col>

<el-col  style="margin-top:0%">

        <img alt="image" id="newhome3" src="../assets/x.jpg" >
<router-link  to="/store" ><el-button  aria-label="check paintings products" id="newhomebtn3">Home Decor</el-button></router-link>

</el-col>



</el-row>


</el-row>




<div>

<h1 id="interior-h1">::  <word style="color:black">Explore Products</word> ::</h1>

</div>
<el-row   id="el-row" >
<el-col  :span="8" ><div id="grid-content" class="grid-content bg-purple-light">
      <router-link to="/productdetails/I4BwisRiXV86UUxavJ3v"> <img alt="image" id="grid-content"  onContextMenu="return false;" src="../assets/_A8A9782.jpg"></router-link></div></el-col>
  <el-col  :span="8" ><div id="grid-content" class="grid-content bg-purple-light">
<img alt="image" id="grid-content"  onContextMenu="return false;" src="../assets/14.jpg"> </div></el-col>
  <el-col :span="8" ><div id="grid-content" class="grid-content bg-purple">
       <img alt="image" id="grid-content"  onContextMenu="return false;" src="../assets/spa/20.jpg"></div></el-col>
   <el-col  :span="8" ><div id="grid-content" class="grid-content bg-purple-light">
       <img alt="image" id="grid-content"  onContextMenu="return false;" src="../assets/_A8A9840.jpg"></div></el-col>
  <el-col :span="8" ><div id="grid-content" class="grid-content bg-purple-light">
       <img alt="image" id="grid-content"  onContextMenu="return false;" src="../assets/16.jpg"></div></el-col>
  <el-col :span="8" ><div id="grid-content" class="grid-content bg-purple">
       <img alt="image" id="grid-content"  onContextMenu="return false;"   src="../assets/19.jpg"></div></el-col>
</el-row>
<div id="about">

<el-row id="apra-row">
      
<h1 id="interior-h2"> <word style="color:black">What is Aprakrta</word> </h1>
      

   <p id="about-para"><q >Aprakrta is a contemporary online art studio and store where Art is created and curated to suit your personalities and spaces.</q></p>

   <router-link to="/about"><el-button id="knowmore2">Know More</el-button></router-link>
</el-row>

</div>



<footer  style="background-color: #1f1e1e;" >

 

        
        <el-row id="social-footer">
          <el-col span="12">
            <h6 id="get-connected">Get connected with us on social networks!</h6>
          </el-col>
         
          <el-col span="12" id="div-icons-social">

          
            <a style="margin-right:5%"  >
               <a href="http://www.facebook.com/AnArtPopUp/"><el-button  aria-label="visit our facebook page" id="fb-btn" type="primary"  ><icon style="height:40px;width:40%"  name="facebook"></icon></el-button></a>
            </a>
          
            <a style="margin-right:10%" >
               <a href="https://www.instagram.com/aprakrta/"><el-button aria-label="visit our instagram page"  id="insta-btn" type="primary"  ><icon style="height:40px;width:70%"  name="instagram"></icon></el-button></a>
            </a>


          </el-col>
         
</el-row>
       

     

 

      
      <el-row id="contact" >

      
        

      
        
         
          <p>
            Raghukul Society </p>
          <p>
           Ganesh Nagar, Karve Nagar,</p>
          <p>
            Pune, Maharashtra 411052 </p>
          <p>
            077988 79277</p>
             <p>
             info@aprakrta.com</p>
       


 

    </el-row>
   
    
    <el-row id="copyright">© 2018 Copyright:
      Aprakrta.com
    </el-row>

<el-row id="made-by">
  
HandCrafted wih ❤️ by
   <a href="https://hyperware.in/Ecommerce"> <img  alt="image" id="hyperware" src="../assets/logo1.jpg"></a>
  
  </el-row>
  </footer>
  <!-- Footer -->

</div>

</template>
<script>

import Icon from "vue-awesome/components/Icon";
export default {
   data() {
      return {
       
        value: '',
        show_art_types:false
    
       
      }
    },
    components: {
    Icon
  },
methods: {
  showtypes(){


if(this.show_art_types==false){

 this.show_art_types=true
}

else if(this.show_art_types==true){

  this.show_art_types=false
}
   
  }
},


 
  
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Cantarell');


#carousel-img-desktop{


  height: 500px;
}

#tag-line{

  margin-top: 4%;
    text-align: center;
    font-size: 160%;
    margin-bottom: 2%

}

#row3{
 text-align: center;
    padding-left: 30%;
    padding-right: 30%;
    font-size: 129%;
}
#carousel-desktop{

  height: 500px;
  display: block;
  margin-top: 5%
}
#carousel{

  display: none
}


#interior-h1{

color: #a52b2b;
    font-size: 180%;
    text-align: center;
    margin-top: 9%;
    margin-bottom: 9%;
    font-family: 'Cantarell', sans-serif;
}
#interior-h2{

    color: #a52b2b;
    font-size: 180%;
    text-align: center;
    margin-top: 9%;
    margin-right: 66%;
    margin-bottom: 9%;
    font-family: 'Cantarell', sans-serif;
}
 #get-connected{

    color: white;
    text-align: left;
    padding-top: 5%;
    font-size: 118%;
    margin-top: 2%;
    margin-left: 9%;
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


#knowmore2{

  
    margin-left: 50%;
    margin-top: 2%;
    z-index: 1000;
    background-color: black;
    color: white;
    width: 12%;
    padding: 10px;
    border-radius: 5px 15px;
    font-size: 100%;
    opacity: 0.7;
}

#menu-tabs a{

 margin-top: 3.5%;
    margin-left: 6%;
    font-size: 136%;
}

#contact{

  padding-left: 4%;
    padding-top: 4%;
    color: white
}
#social-footer{

  display: block;
  color: white
}
 #about-heading {
    font-size: 180%;
    margin-left: 44%;
  }
#made-by{

  text-align: center;
  padding-top: 5%;
  padding-bottom: 4%;
  color: white
}
#el-row .el-col{

  margin-top: 8%
}
#copyright{

  text-align: center;
  padding-top: 5%;
  font-size: 110%;
  color: white
}
#newmenu{
  width:100%;display:flex;margin-top:5%
}
#hyperware {
  height: 38px;
  width: 9%;
  margin-top: 0;
  margin-left: 0.5%;
}
a {
  text-decoration: none;
}

 #div-icons-social{

    text-align:right;
    padding-top: 2%
    
  }

#newhomebtn3 {
  left: 5%;
  top: 55%;
  background-color: black;
  color: white;
     border-radius: 15px 5px;
 width: 20%;
    height: 46px;
    font-size: 115%;
  position: absolute;
   opacity: 0.8;
 
}
#newhomebtn2 {
  left: 5%;
  top: 36%;
  background-color: black;
  color: white;
     border-radius: 15px 5px;
width: 20%;
    height: 46px;
    font-size: 115%;
  position: absolute;
      opacity: 0.8;
  
}
#newhomebtn {
     left: 5%;
    top: 87%;
    background-color: black;
    color: white;
      border-radius: 5px 15px;
    width: 17%;
    height: 46px;
    font-size: 135%;
    /* margin-top: -21%; */
    position: absolute;
        opacity: 0.7;
}
#newhome {
  width: 100%;
  height: 865px;
  object-fit: cover
}

#newhome2 {
  height: 432px;
  width: 100%;
  object-fit: cover
}

#newhome3 {
  margin-top: 0%;
  height: 433px;
  width: 100%;
  object-fit: cover
 
}

#test:hover {
  transform: scale(1.2);
  transition: ease-in 0.5s;
}
.line {
  width: 100%;
  height: 47px;
  border-bottom: 0.1px solid rgb(100, 100, 100);
  margin-top: -2%;
  -webkit-box-shadow: 0 #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 14px 16px -16px #222;
}
.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
.el-menu-item.is-active {
  color: #0e1316;
}
#apraimg {
  width: 51%;
  height: 60px;
}

#navhover:hover {
  background-color: #c44b49;
  color: white;
}

a {
  color: black;
  text-decoration: none;
}

#title {
  margin-left: 34%;
}
#el-menu {
  background-color: white;
      border: 0px;
}

#app {
  font-family: "Josefin Sans", sans-serif;

  color: #2c3e50;
  width: 100%;
}

.item {
  margin-bottom: 3%;
}
#toolbar {
  box-shadow: 0 14px 16px -16px #222;
  background-color: white;
}

#two-grid-img {
  height: 500px;
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
}
#two-grid2-img {
  height: 500px;
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
}
#navhover-exception {
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
#navhover2 {
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
.btn-grad:hover {
  background-position: right center;
}
#navhover2:hover {
  color: black;
  background-color: white;
  transform: scale(1.1);
  transition: ease-in-out 0.3s;
}
#navhover-exception:hover {
  color: black;
  transform: scale(1.1);
  transition: ease-in-out 0.3s;
}
#el-menu3 {
  background-color: white;
  box-shadow: 0px;
  margin-top: -5%;
  text-align: center;
      border: 0px;
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
#mylinkedin {
  margin-top: -10%;
  margin-left: 20%;
}
#credits {
  background-color: black;
  height: 50px;
}
#grid-btn {
  position: absolute;
  margin-top: -35%;
  color: white;
  background-color: black;
  border-color: black;
  width: 20%;
  z-index: 1000;
  margin-left: 5%;
  opacity: 0;
  box-shadow: grey 5px 5px 5px 5px;
}
#grid-btn2 {
  box-shadow: grey 5px 5px 5px 5px;
  position: absolute;
  margin-top: -35%;
  color: white;
  background-color: black;
  border-color: black;
  width: 20%;
  z-index: 1000;
  margin-left: 5%;
  opacity: 0;
}
#apra-row {
  height: 700px;
  color: black
}
#lastfoot {
  margin-left: 39.5%;
  font-size: 110%;
}
#apra {
  margin-left: 2%;
}
#me {
  margin-left: 60%;
}
#row {
  display: inline-flex;
}
#icons {
  margin-left: 1%;
}
#sk {
  margin-left: 20%;
}
#mycredit {
  display: inline-flex;
  height: 70px;
  margin-top: 5%;
  background-color: black;
}

#subheading {
  margin-top: 2%;
  margin-left: 2%;
}
.fa-icon {
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 10%;
}
#foot {
  height: 430px;
  background-color: black;
}
#footer {
  background-color: black;
  height: 280px;
  color: white;
  margin-top: 15%;
}
span {
  margin-left: 30%;
}
#owner-img {
  border-radius: 50%;
  width: 10%;
  height: 150px;
  margin-left: 45%;
}
a {
  text-decoration: none;
}
#home-buttons {
  margin-top: 7%;
  margin-left: 30%;
}

.line {
  width: 590px;
  height: 47px;
  border-bottom: 1px solid black;
  margin-left: 28%;
}
.el-row[data-v-7cbbe74f]:hover #about-para {
  z-index: 1000;
  transform: scale(1.1);
  transition: 1.5s;
}
#el-row {
  flex: 5;
  overflow: auto;
    height: 755px;
    margin-top: -5%
}
#about {
  margin-top: 8%;
  background-image: url("../assets/desktop cover01.jpg");
  background-size: cover;
}
#about-para {
    padding-left: 10%;
    /* margin-right: 28%; */
    padding-right: 35%;
    margin-top: 0%;
    color: black;
    font-weight: 400;
    font-style: italic;
    font-size: 152%;
    letter-spacing: 2px;
    font-family: inherit;
    word-spacing: 4px;
    font-family: 'Cantarell', sans-serif;
}
#two-grid {
  height: 600px;
  width: 70%;
  margin: 0 auto;
}
#two-grid:hover button {
  opacity: 1;
  transform: translateY(120%);
  transition: all 1s ease-in-out;
}
#two-grid:hover img {
  transform: scale(0.9);
  transition: all 0.6s ease-in-out;
  opacity: 0.7;
}
#two-grid2:hover img {
  transform: scale(0.9);
  transition: all 0.6s ease-in-out;
  opacity: 0.7;
}
#two-grid2 {
  height: 600px;
  width: 70%;
  margin: 0 auto;
}
#two-grid2:hover button {
  opacity: 1;
  transform: translateY(120%);
  transition: all 1s ease-in-out;
}
#homeimg {
  margin-top: 0.5%;
  height: 500px;
  width: 100%;
}
#visit-store-btn {
  margin-left: 45%;
  margin-top: 5%;
  background-color: black;
  color: white;
}
#knowmore {
  margin-top: -25%;
  margin-left: 6%;
  z-index: 1000;
  background-color: white;
  color: black;
  width: 27%;
  height: 70px;
  border: 1px solid;
  padding: 10px;

  border-radius: 15px;
  font-size: 110%;
   
}
#knowmore:hover {
  background-color: rgb(167, 62, 44);
  color: white;
}
.line {
  width: 590px;
  height: 47px;
  border-bottom: 1px solid black;
  margin-left: 28%;
  margin-top: -3%;
}

.el-row,
.el-col {
  overflow: hidden;
}


.grid-content {
  margin-left: 9%;
  width: 80%;
  opacity: 1;
}
#grid-content:hover {
  transform: scale(1.1);
  transition: all 0.6s ease-in-out;
}
#shopnow {
  background-color: white;
  color: black;
  width: 27%;
  height: 70px;
  border: 1px solid;
  padding: 10px;
    border-radius: 5px 15px;
}
#shopnow:hover {
  background-color: rgb(167, 62, 44);
  color: white;
}
#featured {
  margin-top: 15%;
  margin-bottom: 3%;
  margin-left: 40%;
}
#featured2 {
  margin-top: 5%;
  margin-bottom: 3%;
  margin-left: 40%;
}
.mapouter {
  margin-left: 63%;
  height: 188px;
  width: 407px;
  margin-top: -18%;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 188px;
  width: 407px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}



#owner-name {
  text-align: center;
  color: black;
  margin-top: 2%;
  font-size: 150%;
}
#owner-p {
  text-align: center;
  color: black;
  font-size: 120%;
  margin-top: -1%;
}
#fb-btn {
  border-radius: 50%;
  background-color: #3b5999;
  border: none;
  height: 60px;
  width: 8%;
 
}
#insta-btn {
  border-radius: 50%;
  background-color: #c32aa3;
  border: none;
  height: 60px;
  width: 8%;
 
}
#map {
  margin-left: 15%;
  margin-top: 9%;
}
#carousel {
  height: 500px;
}

#two-grid-img {
  height: 600px;
}
#two-grid {
  height: 900px;
  width: 60%;
}
#two-grid2-img {
  height: 600px;
}
#two-grid2 {
  height: 900px;
  width: 60%;
}

@media screen and (max-width: 410px) {


#carousel-img{


  height: 192px;
}
}

@media screen and (max-width: 480px) {
  #interior-h2{

    color: #a52b2b;
    font-size: 150%;
    text-align: center;
  margin-top: 16%;
    margin-bottom: 16%;
    margin-right: 66%;
    
    font-family: 'Cantarell', sans-serif;
}
  #interior-h1{

color: #a52b2b;
    font-size: 150%;
    text-align: center;
    margin-top: 16%;
    margin-bottom: 16%;
    font-family: 'Cantarell', sans-serif;
}
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

  #knowmore2{

  
  margin-left: 64%;
  z-index: 1000;
  background-color: black;
  color: white;
  width: 32%;
 

  padding: 10px;

  border-radius: 5px 15px;
  font-size: 100%;
  opacity: 0.7;
}

  #about {
  margin-top: 8%;
  background-image: url("../assets/_A8A9922.jpg");
  background-size: cover;
}
#carousel{

  display: block
}
#carousel-desktop{

  display: none;
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
 .el-col-8{

   width: 50%;
  }
  #tag-line-div{

        background-position: center;
    background-image: url("../assets/l-edit.jpg");
    background-size: cover;
    color: black;
    height: 317px;
    font-family: 'Cantarell', sans-serif;
}

  #tag-line{

    text-align: center;
    font-size: 120%;
    color: black;
    padding-top: 0%;
    font-style: italic;
    padding-left: 2%;
    padding-top: 12%;
    font-family: 'Cantarell', sans-serif;
}


#tag-line-quote{
       text-align: center;
    margin-top: 17%;
    font-family: 'Cantarell', sans-serif;
    font-style: italic;
    font-size: 83%;
    font-weight: 200;
    letter-spacing: normal;
     
}
  .grid-content {
    margin-left: 6%;
    width: 80%;
    opacity: 1;
}
  #copyright{
        text-align: center;
    padding-top: 8%;
    font-size: 15px;
  }
#made-by{
    text-align: center;
    padding-top: 10%;
    padding-bottom: 7%;
}
  
  #social-footer{

  display: grid
}
#social-footer .el-col{

  width: 100%
}

  #get-connected{

    color: white;
    text-align: -webkit-center;
    padding-top: 5%;
    font-size: 15px;



    font-family: 'Cantarell', sans-serif;
  }

  #div-icons-social{

    text-align:center;
    padding-left: 14%;
  }
  #hyperware {
        width: 31%;
    margin-left: 3%;

  }
  #newmenu{

    width:100%;display:flex;margin-top:32%
  }
  #contact {
    text-align: center;
    font-size: 15px;
    font-family: 'Cantarell', sans-serif;
  }
  #apra-row {
    height: 515px;
  }
  #newhomebtn3 {
  
    height: 40px;
    font-size: 100%;
    top: 55%;
    width: 72%;
  font-size: 100%;
    font-family: 'Cantarell', sans-serif;
  }
  #newhomebtn2 {
    top: 35%;

   
    height: 40px;
    font-size: 100%;
    width: 68%;
  font-size: 100%;
    font-family: 'Cantarell', sans-serif;
  }
 #newhome {
    width: 100%;
    height: 400px;
    object-fit: cover
}
#newhome2,#newhome3 {
    height: 200px;
    width: 100%;
    object-fit: cover
}
#newhomebtn{

  width: 38%;
  font-size: 100%;
  top: 87%;
      opacity: 0.7;
        font-family: 'Cantarell', sans-serif;
}

  #toolbar {
    position: fixed;
    transform: translateY(0px);
    background-color: white;
    z-index: 2000;
    width: 100%;
    top: -1%;
  }
  #title {
    margin-left: 18%;
    width: 100%;
  }
  #apraimg {
    width: 80%;
  }

  #navhover {
    display: none;
  }

  #bggrad {
    height: 330px;
  }
  #filter-row {
    height: 150px;
    display: inline-flex;
    width: 100%;
    margin-left: 0%;
  }
  #filters {
    display: -webkit-flex;
  }
  #about-heading {
    font-size: 140%;
    margin-left: 32%;
  }
  #el-row {
    height: 230px;
  }
  #grid-btn,
  #grid-btn2 {
    width: 35%;
    font-size: 60%;
  }
  #owner-name {
    font-size: 90%;
    margin-top: 6%;
    margin-left: 3%;
  }
  #owner-img {
    height: 80px;
    width: 20%;
    margin-left: 43%;
  }
  #fb-btn {
    width: 20%;
    margin-top: 5%;
  }
  #insta-btn {
    width: 20%;
  }
  .mapouter {
    margin-left: 2%;
    margin-top: 8%;
    width: 50%;
  }
  #owner-p {
    font-size: 75%;
  }
  #mapdiv {
    margin-left: 10%;
  }
 #about-para {
       padding-left: 12%;
    /* margin-right: 28%; */
    padding-right: 10%;
    margin-top: -2%;
    color: black;
    font-weight: 400;
    font-style: italic;
    font-size: 99%;
    text-align: center;
    /* letter-spacing: 2px; */
    font-family: inherit;
    word-spacing: 0px;
  
}
  #el-menu2 {
        font-size: 129%;
    width: 100%;
    margin-left: 0px;
        margin-top: 6%;
        height: 340px;
 background-image: url("../assets/u.jpg");
 background-size: cover
   
  }
  #home-buttons {
    margin-top: -1%;
    margin-left: 8%;
  }

  #carousel {
    height: 244px;
    overflow: hidden;
  }
  #grid-content {
        height: 330px;
        width: 95%;
            object-fit: cover;
  }
  #shopnow {
    width: 43%;
    font-size: 100%;
    height: 50px;
    background-color: black;
    color: white
  }
  #knowmore {
    width: 43%;
    font-size: 100%;
    height: 50px;
     background-color: black;
    color: white;
        border-radius: 15px 5px;
  }
  #featured {
    font-size: 170%;
    margin-left: 18%;
    margin-top: 17%;
    margin-bottom: 15%;

  }
  #featured2 {
    font-size: 170%;
    margin-left: 27%;
    margin-top: 15%;
  }
  .line {
    margin-left: 15%;
    width: 70%;
  }
  #two-grid-img {
    height: 300px;
  }
  #two-grid {
    height: 300px;
    width: 90%;
  }
  #two-grid2-img {
    height: 300px;
  }
  #two-grid2 {
    height: 300px;
    width: 90%;
  }
  #productimages {
    height: 20px;
  }
  #navhover-exception {
    font-size: 70%;
   
    margin-top: -4%;
   
    width: 100%;
    height:70px;
        padding-right: 69%;
        color: #a52b2b;
         padding-left: 4%
  }
  #navhover2 {
    font-size: 70%;
    
       margin-top: -9%;
    width: 100%;
    height:70px;
        padding-right: 69%;
        color: #a52b2b;
        padding-left: 4%
  }
  #row2 {
    margin-top: 19%;
    font-size: 110%;
    width: 100%;
    margin-left: 2%;
  }
  #carticon {
    display: inline;
    margin-left: -2%;
    right: 45%;
  }
  #row3 {
       font-size: 90%;
    margin-top: 28%;
    padding-left: 17%;
    padding-right: 15%;
    padding-bottom: 1%;
    text-align: center;
  }

  
  #products {
    margin-left: 30%;
    left: 3px;
  }
  .grid-content {
    height: 330px;
  }
 
  #addtocartbtn {
    display: none;
  }
  #viewbtn {
    display: none;
  }
  #sortbtn {
    width: 13opx;
  }
  #sortproducts {
    font-size: 63%;
    margin-top: -10%;
    display: inline;
    text-align: center;
  }
  #interior-h2{
        color: #a52b2b;
    font-size: 180%;
    text-align: center;
    margin-top: 10%;
    margin-left: 1%;
    /* margin-right: 66%; */
    margin-bottom: 5%;
    font-family: 'Cantarell', sans-serif;
    width: 100%
  }
 
}
@media screen and (min-width: 400px) and (max-width: 600px) {
  #row2 {
    margin-left: 9%;
  }







}
@media screen and (min-width: 481px) and (max-width: 720px) {
  #apraimg {
    width: 90%;
  }

   #navhover-exception {
    font-size: 70%;
   
    margin-top: -4%;
  
    width: 100%;
    height:90px
  }
  #navhover2 {
    font-size: 70%;
    
        margin-top: -9%;
    width: 100%;
    height: 90px;
  }
  #newhome {
    width: 100%;
    height: 600px;
    object-fit: cover
}
#newhome2,#newhome3 {
    height: 300px;
    width: 100%;
    object-fit: cover
}
#newhomebtn{

  width: 36%
}
#apra-row {
    height: 866px;
    color: black;
}
#newhomebtn2,#newhomebtn3{


  width: 52%
}

  #row2 {
    margin-left: -30%;
  }
  
  #title {
    width: 30%;
  }
  #bggrad {
    height: 330px;
  }
  #filter-row {
    height: 150px;
    display: inline-flex;
    width: 100%;
    margin-left: 0%;
  }
  #filters {
    display: -webkit-flex;
  }
  #about-heading {
    font-size: 140%;
    margin-left: 40%;
  }
  #el-row {
    height: 300px;
  }
  #grid-btn,
  #grid-btn2 {
    width: 35%;
    font-size: 60%;
  }
  #owner-name {
    font-size: 90%;
    margin-top: 6%;
    margin-left: 3%;
  }
  #owner-img {
    height: 110px;
    width: 20%;
    margin-left: 43%;
  }
  #fb-btn {
    width: 26%;
    margin-top: 5%;
  }
  #insta-btn {
    width: 26%;
  }
  .mapouter {
    margin-left: 10%;
    margin-top: 8%;
    width: 50%;
  }
  #contact {
    margin-left: -1%;
    font-family: 'Cantarell', sans-serif;
  }
  #owner-p {
    font-size: 75%;
  }
  #mapdiv {
    margin-left: 10%;
  }
  #about-para {
    font-size: 140%;
    margin-top: 12%;
  }
  #el-menu2 {
    font-size: 150%;
    margin-left: 0%;
 background-image: url("../assets/u.jpg");
  background-size: cover
    
  }
  #home-buttons {
    margin-top: -1%;
    margin-left: 13%;
  }

  #carousel {
    height: 270px;
    overflow: hidden;
  }
  #grid-content {
    height: 230px;
        object-fit: cover;
  }
  #shopnow {
    width: 40%;
    font-size: 100%;
    height: 50px;
  }
  #knowmore {
    width: 40%;
    font-size: 100%;
    height: 50px;
  }
  #featured {
  font-size: 170%;
    margin-left: 28%;
    margin-top: 22%;
    margin-bottom: 15%;
  }
  #featured2 {
    font-size: 170%;
    margin-top: 15%;
  }
  .line {
    margin-left: 14%;

    width: 70%;
  }
  #two-grid-img {
    height: 400px;
  }
  #two-grid {
    height: 400px;
    width: 90%;
  }
  #two-grid2-img {
    height: 400px;
  }
  #two-grid2 {
    height: 400px;
    width: 90%;
  }
  #productimages {
    height: 20px;
  }
 
  #row2 {
    margin-top: 10%;
    font-size: 130%;
    width: 100%;
    margin-left: 8%;
  }
  #carticon {
    display: inline;
    margin-left: -2%;
    right: 45%;
  }
  #row3 {
    font-size: 90%;
  }
 
  #products {
    margin-left: 30%;
    left: 3px;
  }
  .grid-content {
    height: 330px;
  }
 
  #addtocartbtn {
    display: none;
  }
  #viewbtn {
    display: none;
  }
  #sortbtn {
    width: 13opx;
  }
  #sortproducts {
    font-size: 63%;
    margin-top: -10%;
    display: inline;
    text-align: center;
  }
}
@media screen and (min-width: 721px) and (max-width: 1024px) {
  #apraimg {
    width: 90%;
  }

#category-btn-pc{

  width: 110%
}




  #newhomebtn{

    width: 32%
  }

  #newhomebtn2, #newhomebtn3{

    left: 8%;
  
    width: 49%;
   
    font-size: 123%;
  
  }
  #featured{
        margin-bottom: 12%;
    margin-left: 35%;
  }
  #apraimg{
    width: 38%;
    width: 38%;
    margin-top: 2%;
    /* padding-left: 4%; */
}

  #row2 {
    margin-left: -30%;
  }
  #navhover2 {
    margin-left: 2%;
  }
  #title {
    width: 30%;
  }
  #bggrad {
    height: 330px;
  }
  #filter-row {
    height: 150px;
    display: inline-flex;
    width: 100%;
    margin-left: 0%;
  }
  #filters {
    display: -webkit-flex;
  }
  #about-heading {
    font-size: 140%;
    margin-left: 42%;
  }
  #el-row {
    height: 300px;
  }
  #grid-btn,
  #grid-btn2 {
    width: 25%;
    font-size: 90%;
    margin-left: 7%;
  }
  #owner-name {
    font-size: 120%;
    margin-top: 6%;
    margin-left: 1%;
  }
  #owner-img {
    height: 160px;
    width: 16%;
    margin-left: 42%;
  }
  #fb-btn {
    width: 12%;
    margin-top: 5%;
  }
  #insta-btn {
    width: 12%;
  }
  .mapouter {
    margin-left: 10%;
    margin-top: 8%;
    width: 50%;
  }
  #contact {
    margin-left: -1%;
    font-family: 'Cantarell', sans-serif;
  }
  #owner-p {
    font-size: 95%;
  }
  #mapdiv {
    margin-left: 10%;
  }
  #about-para {
      font-size: 163%;
    margin-top: 12%;
  }
#el-menu2 {
    font-size: 148%;
    margin-left: 2%;
    margin-top: 5%;
}
  #home-buttons {
    margin-top: -1%;
    margin-left: 13%;
  }
  
  #carousel {
    height: 370px;
    overflow: hidden;
  }
  #grid-content {
    height: 400px;
        object-fit: cover;
  }
  #shopnow {
    width: 40%;
    font-size: 120%;
    height: 80px;
    margin-top: 15%;
  }
  #knowmore {
    width: 40%;
    font-size: 120%;
    height: 80px;
  }
  #featured {
    font-size: 170%;
    margin-top: 20%;
  }
  #featured2 {
    font-size: 170%;
    margin-top: 15%;
  }
  .line {
    margin-left: 14%;

    width: 70%;
  }
  #two-grid-img {
    height: 540px;
  }
  #two-grid {
    height: 540px;
    width: 80%;
  }
  #two-grid2-img {
    height: 540px;
  }
  #two-grid2 {
    height: 540px;
    width: 80%;
  }
  #productimages {
    height: 20px;
  }
  #navhover-exception {
    font-size: 67%;
    width: 15%;
    border: #a52b2b 5px;
    
    padding: 0px;
    letter-spacing: 0.7px;
    color: white; /* padding-right: 7%; */
    text-align: center;
    padding-left: 0px;
    margin-right: 2%;
  }
  #navhover2 {
    width: 17%;
    border: #a52b2b 5px;
    
    font-size: 67%;
    padding: 0px;
    letter-spacing: 0.7px;
    color: white;
    /* padding-right: 7%; */
    text-align: center;
    padding-left: 0px;
    margin-right: 1%;
  }
  #row2 {
    margin-top: 10%;
    font-size: 130%;
    width: 100%;
    margin-left: 8%;
  }
  #carticon {
    display: inline;
    margin-left: -2%;
    right: 45%;
  }
  #row3 {
    font-size: 90%;
    margin-top: 5%;
  }

  
  #products {
    margin-left: 30%;
    left: 3px;
  }
  .grid-content {
    height: 330px;
  }

  #addtocartbtn {
    display: none;
  }
  #viewbtn {
    display: none;
  }
  #sortbtn {
    width: 13opx;
  }
  #sortproducts {
    font-size: 63%;
    margin-top: -10%;
    display: inline;
    text-align: center;
  }

  @media only screen and (min-width: 870px) and (max-width: 2005px)  
{

#el-menu2{

  display: none
}

}
}
</style>

