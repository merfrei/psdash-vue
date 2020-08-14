<template>
    <div class="container-fluid">
        <BootstrapTable
            :columns="columns"
            :data="types"
            :options="options" />
    </div>
</template>

<script>
import BootstrapTable from 'bootstrap-table/dist/bootstrap-table-vue.esm.js';

export default {
    name: 'TypeList',
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
        }
    },
    computed: {
        types () {
            return this.$store.getters.getTypes;
        }
    },
    components: {
        BootstrapTable
    },
    created() {
        this.$store.dispatch('fetchTypes', { api: this.$api });
    }
}
</script>
