<template>
    <div v-if="isVisible" class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading"><a href="/">PSDash</a> </div>
        <div class="list-group list-group-flush">
            <router-link to="/targets" class="list-group-item list-group-item-action bg-light">Targets</router-link>
            <router-link to="/proxies" class="list-group-item list-group-item-action bg-light">Proxies</router-link>
            <router-link to="/types" class="list-group-item list-group-item-action bg-light">Types</router-link>
            <router-link to="/locations" class="list-group-item list-group-item-action bg-light">Locations</router-link>
            <router-link to="/providers" class="list-group-item list-group-item-action bg-light">Providers</router-link>
            <router-link to="/plans" class="list-group-item list-group-item-action bg-light">Plans</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    computed: {
        isVisible() {
            return this.$api.token !== undefined;
        }
    }
}
</script>

<style>

.router-link-active{
    background-color: #e9ecef !important;
}

</style>
