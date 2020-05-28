<template>
  <div id="app" >




<el-row style="text-align:center;">

<router-link to="/"><img alt="image" id="apraimg"  src="../src/assets/logo.png"></router-link>


</el-row>





<transition enter-active-class="animated fadeIn"  >
<router-view></router-view>
</transition>


  </div>


</template>

<script>

import { mapState } from "vuex";
export default {
 
  computed: mapState(["cartproducts"]),
 
};
</script>




<style scoped>
@import url('https://fonts.googleapis.com/css?family=Cantarell');

.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
.el-menu-item.is-active {
  color: #0e1316;
}
#apraimg {
  width: 51%;
  height: 86px;
}

#navhover:hover {
  background-color: #c44b49;
  color: white;
}

a {
  text-decoration: none;
}

#title {
  margin-left: 38%;
}
#el-menu {
  background-color: white;
}

#app {
  font-family: 'Cantarell', sans-serif;

  color: #2c3e50;
 
}
#apraimg {
    width: 38%;
    width: 17%;
    margin-top: 1%;
    /* padding-left: 4%; */

    

  }

.item {
  margin-bottom: 3%;
}
#toolbar {
  box-shadow: 0 0 20px black;
  background-color: white;
}

@media screen and (max-width: 480px) {
  #toolbarnew {
    position: fixed;
   
    background-color: white;
    z-index: 2000;
    width: 100%;
    top: -1%;
  }
  
  #title {
    margin-left: 18%;
  }
  #apraimg {
       width: 95%;
    padding-top: 0%;
    /* padding-left: 4%; */
    /* margin-left: 6%; */
    height: 150px;
    margin-left: 2%;
  }

  #navhover {
    display: none;
  }
}


@media screen and (min-width: 481px) and (max-width: 720px) {

    #apraimg {
     width: 52%;
    margin-top: 2%;
}
  
}

@media screen and (min-width: 721px) and (max-width:1024px) {
  
    #apraimg {
    width: 38%;
    width: 34%;
    margin-top: 2%;
    /* padding-left: 4%; */
}
}

</style>
