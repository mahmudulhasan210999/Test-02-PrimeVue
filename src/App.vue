<template>
    <div class="flex">
        <div class="w-1/6">
            <Navbar/>
        </div>
        <div class="w-5/6">
            <Home/>
        </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'
import Home from './components/Home/Home.vue'

export default {
    components: {
        Navbar,
        Home
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
}
</style>
