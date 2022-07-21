<template>

        <div class="contianer">
            <form @submit.prevent="addFriend">
                <input class="group_controll" type="text" required v-model="firstName" placeholder="First Name" />
                <input class="group_controll" type="text" required v-model="lastName" placeholder="Last Name" />
                <input class="group_controll" type="text" required v-model="comment" placeholder="Comment" />
                <button class="group_controll" type="submit">Add</button>
            </form>
        </div>
 
</template>
<script>
export default {
    emits: "Add_data",
    data(){
        return {
            firstName:"",
            lastName:"",
            comment:"",
        }
    },

    methods:{
        addFriend(){
            if(this.firstName!="" && this.lastName!="" && this.comment!=""){
                this.$emit("Add_data", {first:this.firstName, last:this.lastName, comment:this.comment})

                this.firstName="", this.lastName="", this.comment="";
            }
        }
    }
    
}
</script>


<style>
    .contianer{
            width: 50%;
            margin: auto;
        }
        .group_controll{
            border: none;
            outline: hidden;
            width: 100%;
            padding: 10px 5px;
            margin-top: 5%;
        }

        button{
            background-color: green;
            color: white;
            border: none;
        }
        .card{
            margin-top: 4px;
            padding:0 10px;
            width: 100%;
            border-radius: 5px;
            border: 1px solid gray;
        }
</style>
