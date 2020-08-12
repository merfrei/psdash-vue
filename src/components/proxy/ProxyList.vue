<template>
    <div class="container-fluid">
        <table
            id="proxies-table"
            data-toggle="table"
            data-search="true"
            data-show-columns="true">
            <thead class="thead-light">
            <tr>
                <th>URL</th>
                <th>Active</th>
                <th>Type</th>
                <th>Location</th>
                <th>Provider</th>
                <th>Plan</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <Proxy v-for="proxy in proxies" :key="proxy.id" :proxy="proxy" />
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Proxy from './Proxy';

export default {
    name: 'ProxyList',
    computed: {
        ...mapGetters(['proxies'])
    },
    components: {
        Proxy
    },
    created() {
        this.$store.dispatch('getProxies');
    },
    mounted() {
        // eslint-disable-next-line no-undef
        $('#proxies-table').bootstrapTable();
    }
}
</script>