<template>
    <div>


<div id="login-head-div">

    <h1 style="font-size: medium;">Please Login to Access Admin Panel </h1>
</div>

<el-form id="login-form" :model="login_form" >

<el-form-item label="Email" prop="email">

   <el-input v-model="email" auto-complete="on"></el-input>

</el-form-item>
  <el-form-item label="Password" prop="pass">
    <el-input type="password" v-model="pass" auto-complete="off"></el-input>
  </el-form-item>
 <el-form-item>
    <el-button aria-label="submit" type="primary" @click="submitForm()">Login</el-button>
  
  </el-form-item>
</el-form>



    </div>
</template>
<script>

import db from '../components/firebaseinit.js'
import { storage, functions } from 'firebase';
import firebase from 'firebase';
import { mapState, mapMutations } from "vuex";

export default {
    data() {
        return {
           

                email:'',
                pass:'',

           

            rules:{


            }
        }
    },
     computed: {
    ...mapState(["orders", "disdate","admin_access"])
  },

    methods: {
        

        submitForm(){

let tempthis=this
console.log(this.email,this.pass)

        firebase.auth().signInWithEmailAndPassword(tempthis.email, tempthis.pass).then(function(confirmationResult) {
 
      console.log(confirmationResult)

      tempthis.$router.push('/admin'),
      tempthis.$store.state.admin_access=true
    })
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
 


        }
    },

    created(){



        console.log(firebase.auth())
    }
}
</script>


<style scoped>


#login-form{

    width: 100%;
 
    padding-left: 29%;
    padding-right: 30%;
    padding-top: 2%;


}

#login-head-div{

    text-align: center;
    padding-top: 5%
}
</style>
