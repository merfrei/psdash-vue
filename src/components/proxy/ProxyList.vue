<template>
    <div class="container-fluid">
        <table
            id="proxies-table"
            data-toggle="table"
            data-search="true"
            data-show-columns="true"
            data-sortable="true">
            <thead class="thead-light">
            <tr>
                <th data-field="url" data-sortable="true">URL</th>
                <th data-field="active" data-sortable="true">Active</th>
                <th data-field="type_id" data-sortable="true">Type</th>
                <th data-field="location_id" data-sortable="true">Location</th>
                <th data-field="provider_id" data-sortable="true">Provider</th>
                <th data-field="provider_plan_id" data-sortable="true">Plan</th>
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