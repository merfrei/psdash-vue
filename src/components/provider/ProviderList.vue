<template>
    <div class="container-fluid">
        <BootstrapTable
            :columns="columns"
            :data="providers"
            :options="options" />
    </div>
</template>

<script>
import BootstrapTable from 'bootstrap-table/dist/bootstrap-table-vue.esm.js';

export default {
    name: 'ProviderList',
    data() {
        return {
            columns: [
                {
                    title: 'Code',
                    field: 'code',
                    sortable: true
                },
                {
                    title: 'Name',
                    field: 'name',
                    sortable: true
                },
                {
                    title: 'URL',
                    field: 'url',
                    sortable: true
                }
            ],
            options: {
                search: true,
                showColumns: true,
                sortable: true,
                pagination: true,
                pageSize: 10
            }
        };
    },
    computed: {
        providers () {
            return this.$store.getters.getProviders;
        }
    },
    components: {
        BootstrapTable
    },
    created() {
        this.$store.dispatch('fetchProviders', { api: this.$api });
    }
}
</script>
