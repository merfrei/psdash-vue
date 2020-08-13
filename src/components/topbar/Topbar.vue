<template>
    <nav v-if="isVisible" class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button class="btn btn-primary" id="menu-toggle" @click="toggleSidebar">Toggle Menu</button>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <button class="nav-link btn btn-link" @click="logout">Logout</button>
            </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Topbar',
    computed: {
        isVisible() {
            return this.$api.token !== undefined;
        }
    },
    methods: {
        ...mapActions(['toggleSidebar']),
        logout () {
            this.$api.logout();
            window.location.replace('/');  // to force a clean output
        }
    }
}
</script>
