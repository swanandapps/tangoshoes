<template>
    <div>



<!--
<h1 id="about-h1">About US</h1>
-->

<el-menu   id="el-menu2" class="el-menu-demo" mode="horizontal" >

<div id="menu-tabs">
<router-link  style="text-decoration:none;color:#a52b2b" to="/"     >:: <word   style="color:black" >Home</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/store"     >:: <word style="color:black"  >Products</word> ::</router-link>



 
 
 
<router-link  style="text-decoration:none;color:#a52b2b" to="/contact"     >:: <word style="color:black" >Contact</word> ::</router-link>
</div>
 </el-menu>

<!--
<el-row id="about-row3" >
        <q id="about-tag-line-quote">“The comprehension of things within the cognizant world is a resultant of a balance amongst all our senses and emotions. Art happens when this balance attains tranquility and transcendence.
<b>Aprakrta</b> functions at these time-slices of our lives.”</q>
</el-row>
-->
<el-row id="about-row3-2">
    <p style="    text-align: justify;" id="about-tag-line-quote2">
      High Fashion. Low Prices. That’s our motto and we’ve lived by it since 1997.

All those yummy shoes you love in our stores? Now you can find them easily online too!

New to Shoe Land? Love fashion? Prepare to fall in love. Our design team stays on top of the hottest seasonal trends to bring you the boldest shoe styles and colors most chic.

Shoe Land satisfies all your shoe cravings. See a great look on a red carpet actress you want to make your own? Looking for something special for your first blind date? Or maybe you want to wow the old crowd at your 10-year high school reunion. Give your girlfriends something to talk about at your weekly rant session at the corner bar. Strut into that board meeting with confidence. Whatever your shoe fashion needs, we’ve got you covered.

Don’t worry about making your bank card weep. Shoe Land offers a phenomenal discount over those fancy shmancy department stores. Same great looks, 1/3 to 1/4 off! And you know what that means: more shoes! Buy 3 or 4 pairs for the price of one spendy name-brand pair of shoes.

And just because our shoes are low priced does not mean they’re cheap. You can depend on us to offer only the best quality. Just ask our thousands and thousands of customers in Florida and Georgia who have been shopping with us for years because they know they get great value and shoes built to last.

So don’t be shy! We have new styles every week. We’ll make sure you’ll always be the most stylish in the room. At these prices, you can afford to treat yourself to some fabulous new shoes any time you need a little pickup.
    </p>
</el-row>

<!--
<el-row id="about-row3-3">
    <p id="about-tag-line-quote3">
        ‘Aprakrta’  means - beyond the material world – Transcendental. Hence every art work at Aprakrta is passionately created for you to induce transcendence in the spaces where you live, work, relax or just be!
    </p>
</el-row>

-->

<h1></h1>

<!--

<h1 id="interior-h1">::  <word style="color:black">The Team</word> ::</h1>
<el-row id="main-div-team">
<el-row id="founder-img-div">

<img id="founder-img" src="../assets/IMG_0335_edit_bw.jpg" alt="">



</el-row>

<el-row id="founder-img-text1">

Aprakrta is founded by <b> Nivedita Bachhav-Gawande </b> who is a registered Landscape Architect by profession and is dedicated towards creating and curating bespoke art. She is a passionate artist & stylist with a keen eye for detail and firm believer of co-living with nature in every aspect of life. This inspired her to establish Aprakrta with an aim to enhance and upscale our mundane spaces by bringing in a fusion of “Art and Greens” into our daily hectic lives. 

</el-row>
<el-row id="founder-img-text2">

 <b>The team </b> of Aprakrta consists of experts such as Artists, Sculptors, Architects, Product Designers, Botanists and Horticulturists who collaborate to generate unique ideas and create exclusive designs that accentuate your space. They are passionate to create designs that manifest a synergy of creativity and positivity. 
</el-row>
<el-row id="founder-img-text3">

This creative team is driven by a common commitment towards experimenting with unique ideas that are inspired by and harmonize with nature. 
</el-row>

    <el-row id="social-icons" >

          <el-col style="    text-align: right;" :span="12">

    
            <a style="margin-right:2%"  >
               <a href="https://www.facebook.com/nivedita.bachhav"><el-button  aria-label="visit our facebook page" id="fb-btn" type="primary"  ><icon style="height:40px;width:40%"  name="facebook"></icon></el-button></a>
            </a>
              
          </el-col>
    <el-col style="    text-align:left;" :span="12">

            <a style="margin-left:2%" >
               <a href="https://www.instagram.com/niveditabachhav"><el-button aria-label="visit our instagram page"  id="insta-btn" type="primary"  ><icon style="height:40px;width:70%"  name="instagram"></icon></el-button></a>
            </a>
  </el-col>

          </el-row>

</el-row>

-->



    </div>
</template>


<script>
import Icon from "vue-awesome/components/Icon";
export default {
    data() {
        return {
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
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Cantarell');

#about-row3,#about-row3-2,#about-row3-3,#founder-img-text1,#founder-img-text2,#founder-img-text3{

  text-align: center;
    padding-left: 22%;
    padding-right: 22%;
    font-size: 129%;
    margin-top: 3%;
   
}
#social-icons{
  margin-top: 2%;
  text-align: center;
    margin-bottom: 2%;
}
#founder-img{

border-radius: 50%;
 width: 12%;
    height: 200px;


}
#founder-img-div{
  text-align: center
}
#menu-tabs a{

 margin-top: 3.5%;
    margin-left: 6%;
    font-size: 136%;
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
    margin-top: 6%;
    margin-bottom: 3%;
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




@media screen and (max-width: 480px) {
    #art-types :nth-child(2){

 margin-left: 0px;
background: rgba(255, 255, 255, 0.6);
border-radius: 15px 5px;
margin-top: 4%

}
 #fb-btn {
    width: 32%;
    margin-top: 8%;
  }
  #insta-btn {
    width: 32%;
     margin-top: 8%;
  }
 #div-icons-social{

    text-align:center;
        display: inline-flex;
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
#founder-img{

border-radius: 50%;
 width: 52%;
    height: 200px;
    margin-top: 5%


}


  #main-div-team{

    font-size: 88%;
  }


  #founder-img-div{


  }

  #founder-img-text1{

text-align: center;
    padding-left: 10%;
    padding-right: 10%;
    font-family: 'Cantarell', sans-serif;
    margin-top: 9%

  }
    #founder-img-text2{

text-align: center;
    padding-left: 10%;
    padding-right: 10%;
    font-family: 'Cantarell', sans-serif;
    margin-top: 5%

  }
    #founder-img-text3{

text-align: center;
    padding-left: 10%;
    padding-right: 10%;
    font-family: 'Cantarell', sans-serif;
    margin-top: 5%

  }
    
  #el-menu2 {
        font-size: 129%;
    width: 100%;
    margin-left: 0px;
        margin-top: 6%;
        height: 340px;
 background-image: url("../assets/shoes/1.jpg");
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
#about-h1{


        padding-top: 5%;
    padding-right: 43%;

}

#about-head-div{

background-image: url("../assets/bg-tag4.jpg");
 
    height: 500px;
    
    text-align: center;
    background-size: cover;
}
#tag-line-quote{

    text-align:center;font-size:100%;margin-top:2%;
    font-family: 'Cantarell', sans-serif;
     font-style: italic;
     font-size: 110%;
     font-weight:700
     
}

  #about-row3 {
       font-size: 90%;
    margin-top: 5%;
    padding-left: 7%;
    padding-right: 8%;
    padding-bottom: 5%;
    text-align: center;
    margin-left: 2%;
    font-style: italic;
    font-family: 'Cantarell', sans-serif;
  }
    #about-row3-2 {
       font-size: 90%;
    margin-top: -3%;
    padding-left: 7%;
    padding-right: 8%;
    padding-bottom: 5%;
    text-align: center;
    margin-left: 2%;
    font-family: 'Cantarell', sans-serif;
    
  }
  #about-row3-3{
  font-size: 90%;
    margin-top: -6%;
    padding-left: 7%;
    padding-right: 8%;
    padding-bottom: 5%;
    text-align: center;
    margin-left: 2%;
    font-style: italic;
    font-family: 'Cantarell', sans-serif;

  }










}
</style>
