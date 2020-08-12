<template>
    <div class="bg-light border-right" id="sidebar-wrapper">
        <div class="sidebar-heading">Start Bootstrap </div>
        <div class="list-group list-group-flush">
            <router-link to="/targets" class="list-group-item list-group-item-action bg-light">Targets</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>