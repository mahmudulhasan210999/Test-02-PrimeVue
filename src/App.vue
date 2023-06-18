<template>
    <div class="flex">
        <div class="w-1/5">
            <Navbar/>
        </div>
        <div class="w-4/5">
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
