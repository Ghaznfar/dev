<template>
<div class="sidebar">
    <ul>
        <li><router-link to="">Dashboard</router-link></li>
        <li><router-link to="">Add Daily Expense</router-link></li>
        <li><router-link to="">View Expense +</router-link>
            <ul>
                <li><router-link to="">Daily Expense</router-link></li> 
                <li><router-link to="">Weekly Expense</router-link></li> 
                <li><router-link to="">Monthly Expense</router-link></li> 
                <li><router-link to="">Yearly Expense</router-link></li> 
            </ul>
        </li>
        <li><router-link to="">Password Update</router-link></li>
        <li><router-link to="">Logout</router-link></li>
    </ul>
</div>
</template>
<script>

export default{
    name: 'SearchSideBar'
}
</script>
<style scoped>
.sidebar{
    width: 300px;
    /*min-height: calc(100vh - 65px);*/
    height: 100vh;
    background: #49a0c5;
}
.sidebar ul{
    margin: 0;
    padding: 0;
    list-style: none;
}
.sidebar ul li{
    padding: 15px;
    color: #fff;
    cursor: pointer;
}
.sidebar ul li:hover{
    color: #fff;
    background: #596d75;
    border-top: 1px solid lightblue;
    border-bottom: 1px solid lightblue;
}
.sidebar ul li ul{
    display: none;
}
.sidebar ul li:hover ul{
    display: block;
    margin-top: 20px;
    background: #6dc3e7;
}
</style>
