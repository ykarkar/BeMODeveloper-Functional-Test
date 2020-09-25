<template>
    <div id="contact">
        <cmp-navbar></cmp-navbar>
        <div class="container">
            <cmp-contact></cmp-contact>
 </div>
        <cmp-footer></cmp-footer> 
    </div>
</template>
 
<script>
    import Navbar from './components/partials/Navbar'
    import Footer from './components/partials/Footer'
    import Contact from './components/contactUs'

export default {
        name: "contactUs",
        components: {
            'cmp-navbar':Navbar,
            'cmp-footer' :Footer,
            'cmp-contact' : Contact
        }
    }
</script>
 