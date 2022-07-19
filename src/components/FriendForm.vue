<template>
    <div id="app">
        <div class="contianer">
            <form @submit.prevent="addContent">
                <input class="input_text" type="text" v-model="firstName" placeholder="First Name" />
                <input class="input_text" type="text" v-model="lastName" placeholder="Last Name" />
                <input class="input_text" type="text" v-model="description" placeholder="Content" />
                <button type="submit">Add</button>
            </form>
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
    .contianer{
            width: 50%;
            margin: auto;
        }
        .input_text, button{
            width: 100%;
            padding: 10px;
            margin: 10px;
        }

        button{
            border: none;
            background-color: green;
            color: white;
            font-weight: bolder;
        }
        .card{
            margin-top: 4px;
            padding:0 10px;
            width: 100%;
            border-radius: 5px;
            border: 1px solid;
        }
</style>
