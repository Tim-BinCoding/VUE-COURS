<template>
 <div id="app">
    <div class="nav_bar">
        <ul>
            <li v-for="(nav,index) in nav_bars" :key="index">{{nav}}</li>
        </ul>
    </div>
 </div>
</template>

<script>
export default {
   data(){
      return {
          nav_bars:["HOME","ABOUT US","SERVICES", "HELP"],
      }
  },
}
</script>
<style>
   .nav_bar ul{
        margin: auto;
        display: flex;
        width: 80%;
        background-color: brown;
        border-radius: 5px;
    }
    .nav_bar ul li{
        margin: 0 1rem;
        padding: 10px;
        color: white;
        list-style: none;
    }
</style>
