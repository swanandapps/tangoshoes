<template>

        <div>

  <el-row id="graphs">
<el-col id="graph1" :span="12">
  <el-row>
    <h3 style="text-align:center">Product Sales Statistics </h3>

  </el-row>
<el-row style="padding-top:4%">
<el-col :span="8">
  <el-button @click="showweek()">Weekly</el-button>

</el-col>
<el-col :span="8">

  <el-button @click="showmonth()">Monthly</el-button>

</el-col>
<el-col :span="8">

  <el-button @click="showyear()">Yearly</el-button>


</el-col>

</el-row>

    
   
  

<div id="chart" v-if="week==true">
       <apexchart type=bar height=350 :options="chartOptions" :series="series" />
    </div>
    <div id="chart" v-if="month==true">
       <apexchart type=bar height=350 :options="chartOptionsmonth" :series="seriesmonth" />
    </div>
    <div id="chart" v-if="year==true">
        <apexchart type=bar height=350 :options="chartOptionsyear" :series="seriesyear" />
    </div>

</el-col>

<el-col  id="graph2" :span="12" style="text-align:center">

   <el-row style="    margin-top: 12%;
    margin-left: 4%;
    height: 370px;
    width: 94%;
    display: block;
    border: 1px solid grey;" >
 
  
<el-col style="width:50%">
<el-card style="background:linear-gradient(40deg,#00b09b,#96c93d);    width: 89%;
    height: 151px;    margin-left: 7%;
    margin-top: 6%;
" class="white--text">
              <div row style="height:100px">
                <div style="width:100%">
                 
                    <div>
                      <div  style="margin-top:7%;font-weight:700;    font-size: 181%;
" >
                         
                      </div>
                                       <div   style="margin-top:7%;font-weight:700;    font-size: 181%;
" >   {{orders.length}}
                         
                      </div>
                      <div style="margin-top:8%;font-size:120%">  </div>
                                                         <div style="margin-top:4%;font-size:150%">Order Count</div>
                    </div>
               
                </div>
           

    
              </div>
              
            
            </el-card>
 


</el-col>
<el-col style="width:50%">
 <el-card style="background:linear-gradient(40deg,#00b09b,#96c93d);    width: 89%;
    height: 151px;    margin-left: 2%;
    margin-top: 6%;
" class="white--text">
              <div row style="height:100px">
                <div style="width:100%">
                 
                    <div>
                      <div   style="margin-top:7%;font-weight:700;    font-size: 181%;
" >
                       {{cur}}%
                         
                      </div>
          
                      <div style="margin-top:8%;font-size:120%"> </div>
                                      <div style="margin-top:4%;font-size:150%">CUR(Coupons Used Ratio)</div>
                    </div>
               
                </div>
           

    
              </div>
              
            
            </el-card>
   

</el-col>
<el-col style="width:50%">
 <el-card style="background:linear-gradient(40deg,#00b09b,#96c93d);    width: 89%;
    height: 151px;    margin-left: 7%;
    margin-top: 6%;
" class="white--text">
              <div row style="height:100px">
                <div style="width:80%">
                 
                    <div>
                      <div    style="margin-top:7%;font-weight:700;    font-size: 181%;
" >
                        
                         
                      </div>

             <div   style="margin-top:7%;font-weight:700;    font-size: 181%;
" >
                    {{active_orders}}
                      </div>

                     
                   <div style="margin-top:8%;font-size:150%">Active Orders</div>
                    </div>
               
                </div>
           

    
              </div>
              
            
            </el-card>
 

  </el-col>
 
<el-col style="width:50%">
<el-card style="background:linear-gradient(40deg,#00b09b,#96c93d);    width: 89%;
    height: 151px;    margin-left: 2%;
    margin-top: 6%;
" class="white--text">
              <div row style="height:100px">
                <div style="width:100%">
                 
                    <div>
                      <div  style="margin-top:7%;font-weight:700;    font-size: 181%;
" >
                         {{delivered_orders}}
                         
                      </div>
                      <div style="margin-top:8%;font-size:150%"> Delivered Orders</div>
                   
                    </div>
               
                </div>
           

    
              </div>
              
            
            </el-card>
   

</el-col>
  
   </el-row>
  
</el-col>
       
</el-row>
        
 


<div>

                <h1 id="h1" style="text-align:center;margin-top:10%">Orders Placed</h1>

<el-row id="col-order" v-for="(order,index) in orders" :key="index"  >






<div style="margin-top:3%;margin-left:3%">
  <div style="text-align: right;
    margin-top: -1%;
    margin-right: 3%;" >
 
<el-button style="border:0px white" @click="changestatus(order,index)">
<el-switch
    v-model="orders[index].order_status"
   
    on-color="#13ce66"
    off-color="#ff4949"
  on-text="Active"
  off-text="Delivered"
  width="90">
  </el-switch>
  </el-button>
    </div>
 <h5> Product-{{orders[index].itemsordered.itemnames}}</h5>
  <h5> Quantity-{{orders[index].itemsordered.itemquantity.toString().split(",")}}</h5>

<p> Total Order Value : {{orders[index].ordertotal}} ₹</p>


  <div class="text item" style="    margin-bottom: 4%;
">
          <h3>Shipment Address</h3>
         <b>Order Placed on : </b>{{ orders[index].orderdate  }}<br>
  <b>Name : </b>{{orders[index].firstname}}

   {{orders[index].lastname}}<br>
 <b> Email Address :</b> {{orders[index].email}}<br>
  <b>Contact Number :</b> {{orders[index].number}}<br>
  <b> Address :</b> {{orders[index].address}}<br>
  </div>

</div>


</el-row>





  
</div>

        </div>

</template>
<script>
import axios from "axios";
import db from '../components/firebaseinit.js'

import { storage, functions } from 'firebase';
import firebase from 'firebase';
export default {
  data: () => ({
    cur:'',
    value:true,
    active_orders:[],
    completed_orders:[],
    delivered_orders:[],
    orders: [],
     month:true,
      week:false,
      year:false,
      filtered_orders:{
twentynineteen:{

mar:{
  week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
apr:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
may:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
jun:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
jul:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
aug:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
sep:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
oct:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
nov:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
dec:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},

},
twentytwenty:{
  jan:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
feb:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
mar:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
apr:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
may:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
jun:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
jul:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
aug:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
sep:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
oct:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
nov:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},
dec:{week1:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week2:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week3:{homedecor:[],pottery:[], paintings:[],sculpture:[]},week4:{homedecor:[],pottery:[], paintings:[],sculpture:[]}},}

      },

      series: [{
          name: 'Home Decor',
          data: []
        }, {
          name: 'Sclupture',
          data: []
        }, {
          name: 'Pottery',
          data: []
        }, {
          name: 'Paintings',
          data: []
        }],
        chartOptions: {
          chart: {
            stacked: true,
            toolbar: {
              show: true
            },
            zoom: {
              enabled: true
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },

          xaxis: {
          
            categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4' ],
          },
          
  
           tooltip: {
            y: {
              formatter: function (val) {
                return val + "%"
              }
            }
           }
          ,
          dataLabels: {
  enabled: true,
  textAnchor: 'start',
  formatter: function(val, opt) {
      return val + '%'
  },
  offsetX: 0,
},

          yaxis: {
    show: true,
    showAlways: true,
    seriesName: undefined,
    
    tickAmount: 10,
    min: 0,
    max: 100,
    
    
        offsetX: 0,
        offsetY: 0,
        rotate: 0,
        formatter: (value) => { return val + '%' },
    },
          legend: {
            position: 'right',
            offsetY: 40
          },
          fill: {
            opacity: 1
          }
        },
         seriesmonth: [{
          name: 'Home Decor',
          data: [0,0,0,0,0,0,0,0,0,0,0,0]
        }, {
          name: 'Sclupture',
          data: [0,0,0,0,0,0,0,0,0,0,0,0]
        }, {
          name: 'Pottery',
          data: [0,0,0,0,0,0,0,0,0,0,0,0]
        }, {
          name: 'Paintings',
          data: [0,0,0,0,0,0,0,0,0,0,0,0]
        }],
        chartOptionsmonth: {
          chart: {
            stacked: true,
            toolbar: {
              show: true
            },
            zoom: {
              enabled: true
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },

          xaxis: {
          
            categories: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          },
            tooltip: {
            y: {
              formatter: function (val) {
                return val + "%"
              }
            }
           }
          ,
          dataLabels: {
  enabled: true,
  textAnchor: 'start',
  formatter: function(val, opt) {
      return val + '%'
  },
  offsetX: 0,
},
          legend: {
            position: 'right',
            offsetY: 40
          },
          fill: {
            opacity: 1
          }
        },


        //YEAR
         seriesyear: [{
          name: 'Home Decor',
          data: [1,2,3,4,5]
        }, {
          name: 'Sclupture',
          data: [1,2,3,4,5]
        }, {
          name: 'Pottery',
          data: [1,2,3,4,5]
        }, {
          name: 'Paintings',
          data: [1,2,3,4,5]
        }],
        chartOptionsyear: {
          chart: {
            stacked: true,
            toolbar: {
              show: true
            },
            zoom: {
              enabled: true
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },

          xaxis: {
          
            categories: [2019,2020,2021,2022,2023 ],
          },
          legend: {
            position: 'right',
            offsetY: 40
          },
          fill: {
            opacity: 1
          }
        }
  }),


  methods: {
    


    //Change status of an order
    changestatus: function(order,index){







   db.collection("orders").doc(order.id).update({
    order_status:!order.order_status
})
.then(function() {
    ////console.log("Document successfully written!");
    
})
.catch(function(error) {
    ////console.error("Error writing document: ", error);
});





    },

    showweek:function(){

      this.week=true
      this.month=false
      this.year=false
    },

    showmonth: function () {
      this.week=false
      this.month=true
      this.year=false


    },
    showyear: function () {
      
      this.week=false
      this.month=false
      this.year=true



    function sum(array){
let tempsum=0
array.forEach(el=>{

tempsum=tempsum+el


})
return tempsum
    }

    let total= sum(this.seriesmonth[0].data) + sum(this.seriesmonth[1].data)
+ sum(this.seriesmonth[2].data)+ sum(this.seriesmonth[3].data)

////console.log(total)
   //   Home decor for 2019
this.seriesyear[0].data[0]=Math.round((sum(this.seriesmonth[0].data)/total)*100)
//sculpture for 2019
this.seriesyear[1].data[0]=Math.round((sum(this.seriesmonth[1].data)/total)*100)
//pottery for 2019
this.seriesyear[2].data[0]=Math.round((sum(this.seriesmonth[2].data)/total)*100)
//paintings for 2019
this.seriesyear[3].data[0]=Math.round((sum(this.seriesmonth[3].data)/total)*100)

    }


  },
  created() {
    
let tempthis=this


 var date = new Date();
    this.current_timestamp = db.app.firebase_.firestore.Timestamp.fromDate(
      date
    ).seconds;

   // ////console.log(this.current_timestamp);

   // ////console.log(this.live_length, z);
   // ////console.log(this.$store.state.clicked_card_details);


    //Set Current Month and current Year
    this.current_month = date.toString().slice(4,7)

    ////console.log(date.toString().slice(4,7))
     this.current_year=  date.toString().slice(11,15)
















       db.collection("orders").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        
      
        var data = doc.data()
        data.id=doc.id
         // ////console.log(tempthis.users[count])
           //tempthis.filter[tempthis.count].id=doc.id
           //////console.log(Date(data.orderdate))


          tempthis.orders.push(data);
     
       
    });


    ////console.log(tempthis.orders)

tempthis.cur=(Math.round((tempthis.orders.filter(order=>order.Coupon==true).length/tempthis.orders.length)*100))
tempthis.active_orders= tempthis.orders.filter(order=>order.order_status==true).length
tempthis.delivered_orders= tempthis.orders.filter(order=>order.order_status==false).length


//Sorting the Products as per TIMESTAMP
 tempthis.orders.sort(function(a,b){return a.orderdate.toDate().getTime() / 1000 - b.orderdate.toDate().getTime() / 1000});
    
   tempthis.orders.reverse()
//To obtain human readable date
 tempthis.orders.forEach(order=>{

 order.orderdate=order.orderdate.toDate()
//////console.log(order.year)
switch(order.year)
{
case '2019': 
switch(order.month)
{
case 'Mar': {
switch(order.week){
case 1: {

if(order.homedecor==true){

tempthis.filtered_orders.twentynineteen.mar.week1.homedecor.push(order);


}
if(order.sculpture==true){

tempthis.filtered_orders.twentynineteen.mar.week1.sculpture.push(order);


}
if(order.pottery==true){

tempthis.filtered_orders.twentynineteen.mar.week1.pottery.push(order);


}
if(order.paintings==true){

tempthis.filtered_orders.twentynineteen.mar.week1.paintings.push(order);


}



}break;
case 2: {
if(order.homedecor==true){

tempthis.filtered_orders.twentynineteen.mar.week2.homedecor.push(order);


}
if(order.sculpture==true){

tempthis.filtered_orders.twentynineteen.mar.week2.sculpture.push(order);


}
if(order.pottery==true){

tempthis.filtered_orders.twentynineteen.mar.week2.pottery.push(order);


}
if(order.paintings==true){

tempthis.filtered_orders.twentynineteen.mar.week2.paintings.push(order);


}
} break
case 3: {
if(order.homedecor==true){

tempthis.filtered_orders.twentynineteen.mar.week3.homedecor.push(order);


}
if(order.sculpture==true){

tempthis.filtered_orders.twentynineteen.mar.week3.sculpture.push(order);


}
if(order.pottery==true){

tempthis.filtered_orders.twentynineteen.mar.week3.pottery.push(order);


}
if(order.paintings==true){

tempthis.filtered_orders.twentynineteen.mar.week3.paintings.push(order);


}

} break
case 4:{
if(order.homedecor==true){

tempthis.filtered_orders.twentynineteen.mar.week4.homedecor.push(order);


}
if(order.sculpture==true){

tempthis.filtered_orders.twentynineteen.mar.week4.sculpture.push(order);


}
if(order.pottery==true){

tempthis.filtered_orders.twentynineteen.mar.week4.pottery.push(order);


}
if(order.paintings==true){

tempthis.filtered_orders.twentynineteen.mar.week4.paintings.push(order);


}

} break

}

}break


//Switch case for april month, Copy and paste this for each next month

case 'Apr': {
switch(order.week){
case 1: {
if(order.homedecor==true){

tempthis.filtered_orders.twentynineteen.apr.week1.homedecor.push(order);


}
if(order.sculpture==true){

tempthis.filtered_orders.twentynineteen.apr.week1.sculpture.push(order);


}
if(order.pottery==true){

tempthis.filtered_orders.twentynineteen.apr.week1.pottery.push(order);


}
if(order.paintings==true){

tempthis.filtered_orders.twentynineteen.apr.week1.paintings.push(order);


}

} break
case 2: {

if(order.homedecor==true){

tempthis.filtered_orders.twentynineteen.apr.week2.homedecor.push(order);


}
if(order.sculpture==true){

tempthis.filtered_orders.twentynineteen.apr.week2.sculpture.push(order);


}
if(order.pottery==true){

tempthis.filtered_orders.twentynineteen.apr.week2.pottery.push(order);


}
if(order.paintings==true){

tempthis.filtered_orders.twentynineteen.apr.week2.paintings.push(order);


}


}break;
case 3: {

if(order.homedecor==true){

tempthis.filtered_orders.twentynineteen.apr.week3.homedecor.push(order);


}
if(order.sculpture==true){

tempthis.filtered_orders.twentynineteen.apr.week3.sculpture.push(order);


}
if(order.pottery==true){

tempthis.filtered_orders.twentynineteen.apr.week3.pottery.push(order);


}
if(order.paintings==true){

tempthis.filtered_orders.twentynineteen.apr.week3.paintings.push(order);


}


}break;

case 4: {

if(order.homedecor==true){

tempthis.filtered_orders.twentynineteen.apr.week4.homedecor.push(order);


}
if(order.sculpture==true){

tempthis.filtered_orders.twentynineteen.apr.week4.sculpture.push(order);


}
if(order.pottery==true){

tempthis.filtered_orders.twentynineteen.apr.week4.pottery.push(order);


}
if(order.paintings==true){

tempthis.filtered_orders.twentynineteen.apr.week4.paintings.push(order);


}


}break;




 
}

}break

case 'May': {
switch(order.week){
case 1: {
if(order.homedecor==true){

tempthis.filtered_orders.twentynineteen.apr.week1.homedecor.push(order);


}
if(order.sculpture==true){

tempthis.filtered_orders.twentynineteen.apr.week1.sculpture.push(order);


}
if(order.pottery==true){

tempthis.filtered_orders.twentynineteen.apr.week1.pottery.push(order);


}
if(order.paintings==true){

tempthis.filtered_orders.twentynineteen.apr.week1.paintings.push(order);


}

} break
case 2: {

if(order.homedecor==true){

tempthis.filtered_orders.twentynineteen.apr.week2.homedecor.push(order);


}
if(order.sculpture==true){

tempthis.filtered_orders.twentynineteen.apr.week2.sculpture.push(order);


}
if(order.pottery==true){

tempthis.filtered_orders.twentynineteen.apr.week2.pottery.push(order);


}
if(order.paintings==true){

tempthis.filtered_orders.twentynineteen.apr.week2.paintings.push(order);


}


}break;
case 3: {

if(order.homedecor==true){

tempthis.filtered_orders.twentynineteen.apr.week3.homedecor.push(order);


}
if(order.sculpture==true){

tempthis.filtered_orders.twentynineteen.apr.week3.sculpture.push(order);


}
if(order.pottery==true){

tempthis.filtered_orders.twentynineteen.apr.week3.pottery.push(order);


}
if(order.paintings==true){

tempthis.filtered_orders.twentynineteen.apr.week3.paintings.push(order);


}


}break;

case 4: {

if(order.homedecor==true){

tempthis.filtered_orders.twentynineteen.apr.week4.homedecor.push(order);


}
if(order.sculpture==true){

tempthis.filtered_orders.twentynineteen.apr.week4.sculpture.push(order);


}
if(order.pottery==true){

tempthis.filtered_orders.twentynineteen.apr.week4.pottery.push(order);


}
if(order.paintings==true){

tempthis.filtered_orders.twentynineteen.apr.week4.paintings.push(order);


}


}break;




 
}

/*
case 'May': {
  switch(order.week){
case 1:tempthis.filtered_orders.twentynineteen.may.week1.push(order);break
case 2:tempthis.filtered_orders.twentynineteen.may.week2.push(order);break
case 3:tempthis.filtered_orders.twentynineteen.may.week3.push(order);break
case 4:tempthis.filtered_orders.twentynineteen.may.week4.push(order);break
}
break;
}
case 'Jun': {
  switch(order.week){
case 1:tempthis.filtered_orders.twentynineteen.jun.week1.push(order);break
case 2:tempthis.filtered_orders.twentynineteen.jun.week2.push(order);break
case 3:tempthis.filtered_orders.twentynineteen.jun.week3.push(order);break
case 4:tempthis.filtered_orders.twentynineteen.jun.week4.push(order);break

}
break;
}
case 'Jul': {
  switch(order.week){
case 1:tempthis.filtered_orders.twentynineteen.jul.week1.push(order);break
case 2:tempthis.filtered_orders.twentynineteen.jul.week2.push(order);break
case 3:tempthis.filtered_orders.twentynineteen.jul.week3.push(order);break
case 4:tempthis.filtered_orders.twentynineteen.jul.week4.push(order);break

}
break;
}
case 'Aug': {
  switch(order.week){
case 1:tempthis.filtered_orders.twentynineteen.aug.week1.push(order);break
case 2:tempthis.filtered_orders.twentynineteen.aug.week2.push(order);break
case 3:tempthis.filtered_orders.twentynineteen.aug.week3.push(order);break
case 4:tempthis.filtered_orders.twentynineteen.aug.week4.push(order);break

}
break;
}
case 'Sep': {
  switch(order.week){
case 1:tempthis.filtered_orders.twentynineteen.sep.week1.push(order);break
case 2:tempthis.filtered_orders.twentynineteen.sep.week2.push(order);break
case 3:tempthis.filtered_orders.twentynineteen.sep.week3.push(order);break
case 4:tempthis.filtered_orders.twentynineteen.sep.week4.push(order);break

}
break;
}
case 'Oct': {
  switch(order.week){
case 1:tempthis.filtered_orders.twentynineteen.oct.week1.push(order);break
case 2:tempthis.filtered_orders.twentynineteen.oct.week2.push(order);break
case 3:tempthis.filtered_orders.twentynineteen.oct.week3.push(order);break
case 4:tempthis.filtered_orders.twentynineteen.oct.week4.push(order);break

}
break;
}
case 'Nov': {
  switch(order.week){
case 1:tempthis.filtered_orders.twentynineteen.nov.week1.push(order);break
case 2:tempthis.filtered_orders.twentynineteen.nov.week2.push(order);break
case 3:tempthis.filtered_orders.twentynineteen.nov.week3.push(order);break
case 4:tempthis.filtered_orders.twentynineteen.nov.week4.push(order);break
}
break;
}
case 'Dec': {
  switch(order.week){
case 1:tempthis.filtered_orders.twentynineteen.dec.week1.push(order);break
case 2:tempthis.filtered_orders.twentynineteen.dec.week2.push(order);break
case 3:tempthis.filtered_orders.twentynineteen.dec.week3.push(order);break
case 4:tempthis.filtered_orders.twentynineteen.dec.week4.push(order);break
}
break;
}




}
break;


case '2020':switch(order.month)
{
case 'Apr': {
switch(order.week){
case 1:tempthis.filtered_orders.twentytwenty.mar.week1.push(order);break
case 2:tempthis.filtered_orders.twentytwenty.mar.week2.push(order);break
case 3:tempthis.filtered_orders.twentytwenty.mar.week3.push(order);break
case 4:tempthis.filtered_orders.twentytwenty.mar.week4.push(order);break



}
break;


}
case 'Apr': {
  switch(order.week){
case 1:tempthis.filtered_orders.twentytwenty.apr.week1.push(order);break
case 2:tempthis.filtered_orders.twentytwenty.apr.week2.push(order);break
case 3:tempthis.filtered_orders.twentytwenty.apr.week3.push(order);break
case 4:tempthis.filtered_orders.twentytwenty.apr.week4.push(order);break
}
break;
}

case 'May': {
  switch(order.week){
case 1:tempthis.filtered_orders.twentytwenty.may.week1.push(order);break
case 2:tempthis.filtered_orders.twentytwenty.may.week2.push(order);break
case 3:tempthis.filtered_orders.twentytwenty.may.week3.push(order);break
case 4:tempthis.filtered_orders.twentytwenty.may.week4.push(order);break

}
break;
}
case 'Jun': {
  switch(order.week){
case 1:tempthis.filtered_orders.twentytwenty.jun.week1.push(order);break
case 2:tempthis.filtered_orders.twentytwenty.jun.week2.push(order);break
case 3:tempthis.filtered_orders.twentytwenty.jun.week3.push(order);break
case 4:tempthis.filtered_orders.twentytwenty.jun.week4.push(order);break

}
break;
}
case 'Jul': {
  switch(order.week){
case 1:tempthis.filtered_orders.twentytwenty.jul.week1.push(order);break
case 2:tempthis.filtered_orders.twentytwenty.jul.week2.push(order);break
case 3:tempthis.filtered_orders.twentytwenty.jul.week3.push(order);break
case 4:tempthis.filtered_orders.twentytwenty.jul.week4.push(order);break

}
break;
}
case 'Aug': {
  switch(order.week){
case 1:tempthis.filtered_orders.twentytwenty.aug.week1.push(order);break
case 2:tempthis.filtered_orders.twentytwenty.aug.week2.push(order);break
case 3:tempthis.filtered_orders.twentytwenty.aug.week3.push(order);break
case 4:tempthis.filtered_orders.twentytwenty.aug.week4.push(order);break

}
break;
}
case 'Sep': {
  switch(order.week){
case 1:tempthis.filtered_orders.twentytwenty.sep.week1.push(order);break
case 2:tempthis.filtered_orders.twentytwenty.sep.week2.push(order);break
case 3:tempthis.filtered_orders.twentytwenty.sep.week3.push(order);break
case 4:tempthis.filtered_orders.twentytwenty.sep.week4.push(order);break

}
break;
}
case 'Oct': {
  switch(order.week){
case 1:tempthis.filtered_orders.twentytwenty.oct.week1.push(order);break
case 2:tempthis.filtered_orders.twentytwenty.oct.week2.push(order);break
case 3:tempthis.filtered_orders.twentytwenty.oct.week3.push(order);break
case 4:tempthis.filtered_orders.twentytwenty.oct.week4.push(order);break

}
break;
}
case 'Nov': {
  switch(order.week){
case 1:tempthis.filtered_orders.twentytwenty.nov.week1.push(order);break
case 2:tempthis.filtered_orders.twentytwenty.nov.week2.push(order);break
case 3:tempthis.filtered_orders.twentytwenty.nov.week3.push(order);break
case 4:tempthis.filtered_orders.twentytwenty.nov.week4.push(order);break

}
break;
}
case 'Dec': {
  switch(order.week){
case 1:tempthis.filtered_orders.twentytwenty.dec.week1.push(order);break
case 2:tempthis.filtered_orders.twentytwenty.dec.week2.push(order);break
case 3:tempthis.filtered_orders.twentytwenty.dec.week3.push(order);break
case 4:tempthis.filtered_orders.twentytwenty.dec.week4.push(order);break

}
break;
}



*/

 //End Switch
}
}
}



 })

//Filling series data

//series data for all categories for march month only

if(tempthis.current_month=='May'){



let hdw1=tempthis.filtered_orders.twentynineteen.mar.week1.homedecor.length
let hdw2=tempthis.filtered_orders.twentynineteen.mar.week2.homedecor.length
let hdw3=tempthis.filtered_orders.twentynineteen.mar.week3.homedecor.length
let hdw4=tempthis.filtered_orders.twentynineteen.mar.week4.homedecor.length










let scw1=tempthis.filtered_orders.twentynineteen.mar.week1.sculpture.length
let scw2=tempthis.filtered_orders.twentynineteen.mar.week2.sculpture.length
let scw3=tempthis.filtered_orders.twentynineteen.mar.week3.sculpture.length
let scw4=tempthis.filtered_orders.twentynineteen.mar.week4.sculpture.length







let potw1=tempthis.filtered_orders.twentynineteen.mar.week1.pottery.length

let potw2=tempthis.filtered_orders.twentynineteen.mar.week2.pottery.length

let potw3=tempthis.filtered_orders.twentynineteen.mar.week3.pottery.length

let potw4=tempthis.filtered_orders.twentynineteen.mar.week4.pottery.length




let paintw1=tempthis.filtered_orders.twentynineteen.mar.week1.paintings.length
let paintw2=tempthis.filtered_orders.twentynineteen.mar.week2.paintings.length
let paintw3=tempthis.filtered_orders.twentynineteen.mar.week3.paintings.length
let paintw4=tempthis.filtered_orders.twentynineteen.mar.week4.paintings.length




//Home Decor %

tempthis.series[0].data[3]=Math.round((hdw4/(hdw4+scw4+potw4+paintw4))*100)


////console.log(hdw4,hdw4+scw4+potw4+paintw4)
//Sculpture %

tempthis.series[1].data[3]=Math.round((scw4/(hdw4+scw4+potw4+paintw4))*100)
//Pottery %

tempthis.series[2].data[3]=Math.round((potw4/(hdw4+scw4+potw4+paintw4))*100)
//Painting %

tempthis.series[3].data[3]=Math.round((paintw4/(hdw4+scw4+potw4+paintw4))*100)


}

let mar2019=tempthis.filtered_orders.twentynineteen.mar

let total=mar2019.week1.homedecor.length+
mar2019.week2.homedecor.length+
mar2019.week3.homedecor.length+
mar2019.week4.homedecor.length+mar2019.week1.pottery.length+
mar2019.week2.pottery.length+
mar2019.week3.pottery.length+
mar2019.week4.pottery.length+mar2019.week1.paintings.length+
mar2019.week2.paintings.length+
mar2019.week3.paintings.length+
mar2019.week4.paintings.length+
mar2019.week1.sculpture.length+
mar2019.week2.sculpture.length+
mar2019.week3.sculpture.length+
mar2019.week4.sculpture.length 


//Home decor sales for a march month
tempthis.seriesmonth[0].data[2]=

Math.round(((mar2019.week1.homedecor.length+
mar2019.week2.homedecor.length+
mar2019.week3.homedecor.length+
mar2019.week4.homedecor.length)/total)*100)




//sculpture sales for a march month
tempthis.seriesmonth[1].data[2]=
Math.round(((mar2019.week1.sculpture.length+
mar2019.week2.sculpture.length+
mar2019.week3.sculpture.length+
mar2019.week4.sculpture.length)/total)*100)


//pottery sales for a march month
tempthis.seriesmonth[2].data[2]= 
Math.round(((mar2019.week1.pottery.length+
mar2019.week2.pottery.length+
mar2019.week3.pottery.length+
mar2019.week4.pottery.length)/total)*100)


//paintings sales for a march month
tempthis.seriesmonth[3].data[2]=
Math.round(((mar2019.week1.paintings.length+
mar2019.week2.paintings.length+
mar2019.week3.paintings.length+
mar2019.week4.paintings.length)/total)*100)


////console.log(tempthis.current_month)

//series data for all categories for apr month only
if(tempthis.current_month=='Apr')
{


let hdw1=tempthis.filtered_orders.twentynineteen.apr.week1.homedecor.length
let hdw2=tempthis.filtered_orders.twentynineteen.apr.week2.homedecor.length
let hdw3=tempthis.filtered_orders.twentynineteen.apr.week3.homedecor.length
let hdw4=tempthis.filtered_orders.twentynineteen.apr.week4.homedecor.length










let scw1=tempthis.filtered_orders.twentynineteen.apr.week1.sculpture.length
let scw2=tempthis.filtered_orders.twentynineteen.apr.week2.sculpture.length
let scw3=tempthis.filtered_orders.twentynineteen.apr.week3.sculpture.length
let scw4=tempthis.filtered_orders.twentynineteen.apr.week4.sculpture.length







let potw1=tempthis.filtered_orders.twentynineteen.apr.week1.pottery.length

let potw2=tempthis.filtered_orders.twentynineteen.apr.week2.pottery.length

let potw3=tempthis.filtered_orders.twentynineteen.apr.week3.pottery.length

let potw4=tempthis.filtered_orders.twentynineteen.apr.week4.pottery.length




let paintw1=tempthis.filtered_orders.twentynineteen.apr.week1.paintings.length
let paintw2=tempthis.filtered_orders.twentynineteen.apr.week2.paintings.length
let paintw3=tempthis.filtered_orders.twentynineteen.apr.week3.paintings.length
let paintw4=tempthis.filtered_orders.twentynineteen.apr.week4.paintings.length




//Home Decor %
tempthis.series[0].data[0]=Math.round((hdw1/(hdw1+scw1+potw1+paintw1))*100)
tempthis.series[0].data[1]=Math.round((hdw2/(hdw2+scw2+potw2+paintw2))*100)
tempthis.series[0].data[2]=Math.round((hdw3/(hdw3+scw3+potw3+paintw3))*100)
tempthis.series[0].data[3]=Math.round((hdw4/(hdw4+scw4+potw4+paintw4))*100)


////console.log(hdw4,hdw4+scw4+potw4+paintw4)
//Sculpture %
tempthis.series[1].data[0]=Math.round((scw1/(hdw1+scw1+potw1+paintw1))*100)
tempthis.series[1].data[1]=Math.round((scw2/(hdw2+scw2+potw2+paintw2))*100)
tempthis.series[1].data[2]=Math.round((scw3/(hdw3+scw3+potw3+paintw3))*100)
tempthis.series[1].data[3]=Math.round((scw4/(hdw4+scw4+potw4+paintw4))*100)
//Pottery %

tempthis.series[2].data[0]=Math.round((potw1/(hdw1+scw1+potw1+paintw1))*100)
tempthis.series[2].data[1]=Math.round((potw2/(hdw2+scw2+potw2+paintw2))*100)
tempthis.series[2].data[2]=Math.round((potw3/(hdw3+scw3+potw3+paintw3))*100)
tempthis.series[2].data[3]=Math.round((potw4/(hdw4+scw4+potw4+paintw4))*100)
//Painting %

tempthis.series[3].data[0]=Math.round((paintw1/(hdw1+scw1+potw1+paintw1))*100)
tempthis.series[3].data[1]=Math.round((paintw2/(hdw2+scw2+potw2+paintw2))*100)
tempthis.series[3].data[2]=Math.round((paintw3/(hdw3+scw3+potw3+paintw3))*100)
tempthis.series[3].data[3]=Math.round((paintw4/(hdw4+scw4+potw4+paintw4))*100)



////console.log(tempthis.series)
}




let apr2019=tempthis.filtered_orders.twentynineteen.apr

let total_apr=apr2019.week1.homedecor.length+
apr2019.week2.homedecor.length+
apr2019.week3.homedecor.length+
apr2019.week4.homedecor.length+apr2019.week1.pottery.length+
apr2019.week2.pottery.length+
apr2019.week3.pottery.length+
apr2019.week4.pottery.length+apr2019.week1.paintings.length+
apr2019.week2.paintings.length+
apr2019.week3.paintings.length+
apr2019.week4.paintings.length+
apr2019.week1.sculpture.length+
apr2019.week2.sculpture.length+
apr2019.week3.sculpture.length+
apr2019.week4.sculpture.length 


//Home decor sales for a aprch month
tempthis.seriesmonth[0].data[3]=

Math.round(((apr2019.week1.homedecor.length+
apr2019.week2.homedecor.length+
apr2019.week3.homedecor.length+
apr2019.week4.homedecor.length)/total_apr)*100)




//sculpture sales for a aprch month
tempthis.seriesmonth[1].data[3]=
Math.round(((apr2019.week1.sculpture.length+
apr2019.week2.sculpture.length+
apr2019.week3.sculpture.length+
apr2019.week4.sculpture.length)/total_apr)*100)


//pottery sales for a aprch month
tempthis.seriesmonth[2].data[3]= 
Math.round(((apr2019.week1.pottery.length+
apr2019.week2.pottery.length+
apr2019.week3.pottery.length+
apr2019.week4.pottery.length)/total_apr)*100)


//paintings sales for a aprch month
tempthis.seriesmonth[3].data[3]=
Math.round(((apr2019.week1.paintings.length+
apr2019.week2.paintings.length+
apr2019.week3.paintings.length+
apr2019.week4.paintings.length)/total_apr)*100)






    
    //currently only two months are added in yearly analysis i.e apr and aprch




 ////console.log(tempthis)

      });
      
  }

  




};
</script>

<style scoped>
#col-order {
  border: 1px solid;
  margin-left: 7%;
  margin-top: 5%;
  width: 90%;
}
#graphs{


  display: block
}

#ordercard {
  margin-left: 30%;
}
@media screen and (max-width: 480px) {


#graphs{



}

#graph1{

  width: 100%
}
#graph2{

  width: 100%
}

}
</style>

