<template>
<div class="signup">
    <img class="logo" src="../assets/img/logo.png" />
    <input type="email" placeholder="Email">
    <input type="email" placeholder="Password">
    <button class="btn-signup">Sign In</button>
    <button class="forgetpassword">Forget Password</button>
</div>
</template>
<script>
export default{
    name: 'BaseSignIn'
}
</script>


<style scoped>
.logo{
    margin-top: 10px;
}
.signup{
    width: 500px;
    margin: auto;
    text-align: center;
}
.signup input{
    width: 100%;
    height: 50px;
    font-size: 20px;
    margin-top: 20px;
    padding-left: 15px;
    border: 2px solid #8bc53f;
}
.signup input:focus{
    outline: none;

}
.btn-signup{
    width: 100%;
    border: none;
    height: 50px;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    margin-top: 20px;
    background: #8bc53f;
}
.btn-signup:hover{
    background: #596d75;
}
.forgetpassword{
    border: none;
    float: right;
    font-size: 14px;
    cursor: pointer;
    color:darkblue;
    padding-top: 10px;
    background: #fff;
}
</style>
