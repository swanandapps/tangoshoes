<template lang="">
    <div>
      <el-menu   id="el-menu2" class="el-menu-demo" mode="horizontal" >

<div id="menu-tabs">
<router-link  style="text-decoration:none;color:#a52b2b" to="/"     >:: <word   style="color:black" >Home</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/"     >:: <word style="color:black"  >Products</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/about"     >:: <word  style="color:black">About</word> ::</router-link>



 <!--
 
  <router-link style="text-decoration:none;color:#a52b2b;z-index:2000" to="" > ::  <word @click="showtypes()" style="color:black">Art</word> ::</router-link>

<transition name="fade">
<div v-if="show_art_types" id="art-types">
<router-link style="text-decoration:none;color:#a52b2b;background: transparent;z-index:2000" to="/created" ><el-button style="color:#a52b2b"> ::  <word style="color:black;background: transparent;">Created</word> ::</el-button></router-link>
<router-link style="text-decoration:none;color:#a52b2b;background: transparent;z-index:2000" to="/curated" > <el-button style="color:#a52b2b">::  <word style="color:black;background: transparent;">Curated</word> ::</el-button></router-link></div>
</transition>

<router-link  style="text-decoration:none;color:#a52b2b" to="/services"     >:: <word style="color:black" >Services</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/events"     >:: <word style="color:black" >Events</word> ::</router-link>
<router-link  style="text-decoration:none;color:#a52b2b" to="/contact"     >:: <word style="color:#a52b2b" >Contact</word> ::</router-link>
-->
</div>
 </el-menu>


<div id="about">

<el-row id="apra-row">
      

      

   <p id="about-para">  Write to us to know more about our Art, Design Services or Collaborations</p>

   <el-form  id="checkout-form"  ref="form" :model="form" :rules="rules"  >

           <el-form-item label="Name" prop="name">
    <el-input
      v-model="form.name"
      
      :counter="15"
      
      
    ></el-input>
    </el-form-item >

   <el-form-item label="Contact Number"  prop="number">
    <el-input
      v-model="form.number"
      
      
      
    ></el-input>
</el-form-item>


    <el-form-item label="E-mail" prop="email">
    <el-input
      v-model="form.email"
      
      
    ></el-input>
    </el-form-item>
  
<el-form-item label="Message" prop="message">
    <el-input
    type="textarea"
      v-model="form.message"

  
    ></el-input>
    </el-form-item>


    <el-button aria-label="Submit Order" id='submit-proceed'
      
     @click="submitForm('form')"
    >
      Submit
    </el-button>

  </el-form>


</el-row>

</div>






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


        form:{

name:'',
  
    email: "",
  
    number: "",

    message: ""

        }
    ,
  
   rules: {
          name: [
            { required: true, message: 'Please input name', trigger: 'blur' },
            { min: 2, max: 25, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
         
        number:[
      {required: true,}
    ],
      
          email: [
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
    ],
   
      
     
        },

        
    
       
      }
    },
  
methods: {

   submitForm(formName) {
let tempthis=this
      console.log(this.$refs)
        this.$refs[formName].validate((valid) => {
          if (valid) {

 db.collection("enquiry").add({
        name: tempthis.form.name,
        number: tempthis.form.number,
        email: tempthis.form.email,
        message: tempthis.form.message,
    
       
        }).then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
     tempthis.$swal("Success", "Your Message is Sent Successfully", "success");
   
})
.catch(function(error) {
    console.error("Error adding document: ", error);
      tempthis.$swal("Error!", "Error While Adding Enquiry, Try Again", "error");
});




             } else {
            alert('error submit!!');
            return false;
          }


        })
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


 
  
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Cantarell");
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#checkout-form {
  margin-left: 10%;
    width: 30%;
    margin-right: 5%;
    margin-top: 5%;
}
#apra-row {
  height: 700px;
  color: black;
}
#about {
  margin-top: 8%;
  background-image: url("../assets/desktop cover01.jpg");
  background-size: cover;
  height: 700px;
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
  font-family: "Cantarell", sans-serif;
}

#art-types {
  padding-left: 62%;
  padding-right: 21%;
  /* padding-bottom: 5%; */
  position: absolute;
  top: 125%;
  left: -29%;
  z-index: 200;
}
#art-types :nth-child(2) {
  margin-left: 7px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px 5px;
  margin-top: 4%;
}
#art-types :nth-child(1) {
  margin-left: 0px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px 15px;
  margin-top: -2%;
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
#menu-tabs a {
  margin-top: 3.5%;
  margin-left: 6%;
  font-size: 136%;
}

@media screen and (max-width: 480px) {
  #about-para {
    padding-left: 8%;
    /* margin-right: 28%; */
    padding-right: 3%;
    margin-top: 0%;
    word-spacing: unset;
    color: black;
    font-weight: 400;
    font-size: 100%;
    font-family: "Cantarell", sans-serif;
}
#checkout-form {
 margin-left: 5%;
    width: 90%;
   margin-right: 5%;
    margin-top: 5%;
}
  #art-types :nth-child(2) {
    margin-left: 0px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 15px 5px;
    margin-top: 4%;
  }

  #contact-quote {
    margin-top: 7%;
    padding-left: 5%;
    padding-right: 5%;
    text-align: center;
  }
  #art-types {
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
    height: 311px;
    background-image: url("../assets/300 x 360/x edit - for Contact.jpg");
    background-size: cover;
  }
  #menu-tabs a {
    margin-top: 3.5%;
    font-size: 94%;
    margin-left: 2%;
  }

  #menu-tabs {
    display: grid;
    text-align-last: center;
    /* left: 5%; */
    padding-left: -13%;
    margin-left: -69%;
    font-size: 78%;
    margin-top: -5%;
  }
}
</style>
