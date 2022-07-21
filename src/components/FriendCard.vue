
<template>
    <div class="card">
        <h3>{{friend.first + " " + friend.last}}</h3>
        <p>{{friend.comment}}</p>
    </div>
</template>
<script>

export default {
    props:{
        friend:Object,
    }
}
</script>

<style>
        .card{
            padding:0 10px;
            width: 50%;
            margin: 2px auto;
            border-radius: 5px;
            border: 1px solid;
        }
</style>
