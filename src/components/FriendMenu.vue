<template>
 <div id="app">
    <div class="nav_bar">
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">HELP</a></li>
        </ul>
    </div>
 </div>
</template>

<script>
export default {
  
}
</script>
<style>
   .nav_bar ul{
        margin: auto;
        display: flex;
        width: 80%;
        padding: 10px;
        background-color: brown;
        list-style: none;
    }
    .nav_bar ul li a{
        text-decoration: none;
        margin: 0 1rem;
        color: white;
        list-style: none;
    }
</style>
