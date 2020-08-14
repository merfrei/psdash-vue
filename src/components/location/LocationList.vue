<template>
    <div class="container-fluid">
        <BootstrapTable
            :columns="columns"
            :data="locations"
            :options="options" />
    </div>
</template>

<script>
import BootstrapTable from 'bootstrap-table/dist/bootstrap-table-vue.esm.js';

export default {
    name: 'LocationList',
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
        locations () {
            return this.$store.getters.getLocations;
        }
    },
    components: {
        BootstrapTable
    },
    created() {
        this.$store.dispatch('fetchLocations', { api: this.$api });
    }
}
</script>
