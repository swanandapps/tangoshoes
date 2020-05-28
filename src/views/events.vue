<template lang="">
    <div>
      <el-menu   id="el-menu2" class="el-menu-demo" mode="horizontal" >

<div id="menu-tabs">
<router-link  style="text-decoration:none;color:#a52b2b" to="/"     >:: <word   style="color:black" >Home</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/store"     >:: <word style="color:black"  >Products</word> ::</router-link>



 
 
  <router-link style="text-decoration:none;color:#a52b2b;z-index:2000" to="" > ::  <word @click="showtypes()" style="color:black">Art</word> ::</router-link>

<transition name="fade">
<div v-if="show_art_types" id="art-types">
<router-link style="text-decoration:none;color:#a52b2b;background: transparent;z-index:2000" to="/created" ><el-button style="color:#a52b2b"> ::  <word style="color:black;background: transparent;">Created</word> ::</el-button></router-link>
<router-link style="text-decoration:none;color:#a52b2b;background: transparent;z-index:2000" to="/curated" > <el-button style="color:#a52b2b">::  <word style="color:black;background: transparent;">Curated</word> ::</el-button></router-link></div>
</transition>

<router-link  style="text-decoration:none;color:#a52b2b" to="/services"     >:: <word style="color:black" >Services</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/events"     >:: <word style="color:#a52b2b" >Events</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/about"     >:: <word  style="color:black">About</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/contact"     >:: <word style="color:black" >Contact</word> ::</router-link>
</div>
 </el-menu>



   <el-row style="margin-top:8%">




   </el-row>


<h1 id="interior-h1">::  <word style="color:black">Art Showcase - Winter 2017</word> ::</h1>


 <el-row>

  <img src="../assets/collage1.jpg" alt="">

 </el-row>



    </div>
</template>

<script>


export default {
   data() {
      return {
       
        value: '',
        show_art_types:false
    
       
      }
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#menu-tabs a{

 margin-top: 3.5%;
    margin-left: 6%;
    font-size: 136%;
}

#interior-h1{

    color: #a52b2b;
    font-size: 180%;
    text-align: center;
    margin-top: 0%;
    margin-bottom: 4%;
    font-family: 'Cantarell', sans-serif;
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

    
  #el-menu2 {
        font-size: 129%;
    width: 100%;
    margin-left: 0px;
        margin-top: 6%;
        height: 340px;
 background-image: url("../assets/300 x 360/b edit - for Events.jpg");
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
