<template>
    <div class="container-fluid">
        <BootstrapTable
            :columns="columns"
            :data="proxies"
            :options="options" />
    </div>
</template>

<script>
import BootstrapTable from 'bootstrap-table/dist/bootstrap-table-vue.esm.js';

export default {
    name: 'ProxyList',
    data() {
        return {
            columns: [
                {
                    title: 'URL',
                    field: 'url',
                    sortable: true
                },
                {
                    title: 'Active',
                    field: 'active_desc',
                    sortable: true,
                    formatter: this.formatActive
                },
                {
                    title: 'Type',
                    field: 'type_desc',
                    sortable: true
                },
                {
                    title: 'Location',
                    field: 'location_desc',
                    sortable: true
                },
                {
                    title: 'Provider',
                    field: 'provider_name',
                    sortable: true
                },
                {
                    title: 'Plan',
                    field: 'plan_desc',
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
        proxies () {
            return this.$store.getters.getProxies;
        }
    },
    methods: {
        formatActive(value) {
            if (value == 'Yes') {
                return '<span class="text-success">' + value + '</span>';
            } else {
                return '<span class="text-danger">' + value + '</span>';
            }
        }
    },
    components: {
        BootstrapTable
    },
    created() {
        this.$store.dispatch('fetchProxies', { api: this.$api });
    }
}
</script>
