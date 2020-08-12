<template>
    <div class="container-fluid">
        <table
            id="providers-table"
            data-toggle="table"
            data-search="true"
            data-show-columns="true"
            data-sortable="true"
            data-pagination="true"
            data-page-size="50">
            <thead class="thead-light">
            <tr>
                <th data-field="code" data-sortable="true">Code</th>
                <th data-field="name" data-sortable="true">Name</th>
                <th data-field="url" data-sortable="true">Website</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <Provider v-for="provider in providers" :key="provider.id" :provider="provider" />
            </tbody>
        </table>
    </div>
</template>

<script>
import Provider from './Provider';

export default {
    name: 'ProviderList',
    computed: {
        providers () { 
            return this.$store.getters.getProviders;
        }
    },
    components: {
        Provider
    },
    created() {
        this.$store.dispatch('fetchProviders');
    },
    mounted() {
        // eslint-disable-next-line no-undef
        $('#providers-table').bootstrapTable();
    }
}
</script>