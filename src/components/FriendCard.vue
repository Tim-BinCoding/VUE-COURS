
<template>
    <div id="app">
        <div class="contianer">
            <div class="card" v-for="(content, index) in displayContent" :key="index">
                <h2>{{content.firstname+content.lastname}}</h2>
                <p>{{content.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
     data(){
            return {
                firstName: "",
                lastName:"",
                description:"",
                listContents:[]
            }
        },
        methods:{
            addContent(){
                if(this.firstName!="" && this.lastName!="" && this.description!=""){
                    this.listContents.push({firstname:this.firstName,lastname:this.lastName,description:this.description})
                    this.firstName=""
                    this.lastName=""
                    this.description=""
                }
            }
        },
        computed:{
            displayContent(){
                return this.listContents;
            }
        }
}
</script>

<style>
        .card{
            margin-top: 4px;
            padding:0 10px;
            width: 100%;
            border-radius: 5px;
            border: 1px solid;
        }
</style>
