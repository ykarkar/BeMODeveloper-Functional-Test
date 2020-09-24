<template>
    <div id="app">
        <cmp-navbar></cmp-navbar>
        <div class="container">
            <router-view />
        </div>
        <cmp-footer></cmp-footer> 
    </div>
</template>
 
<script>
    import Navbar from './components/partials/Navbar'
    import Footer from './components/partials/Footer'

export default {
        name: "app",
        components: {
            'cmp-navbar':Navbar,
            'cmp-footer' :Footer
        }
    }
</script>
 