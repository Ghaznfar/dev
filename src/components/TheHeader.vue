<template>
    <div class="nav">
        <a href="">Daily Expense Management System</a>
        <div class="right">
        <router-link to="/">Home</router-link>
        <router-link to="BaseSignUp">Sign Up</router-link>
        <router-link to="BaseSignUp">Sign In</router-link>
        </div>
    </div>
</template>

<script>

export default{
    name: 'TheHeader'
}

</script>


<style scoped>
.nav{
    background: #8bc53f;
    overflow: hidden;
}
.nav a{
    float: left;
    padding: 20px 30px;
    color: #fff;
    font-size: 20px;
    text-decoration: none;
}
.nav a:hover{
    color: #fff;
    background: #596d75;
}
.right{
    float: right;
}

</style>
