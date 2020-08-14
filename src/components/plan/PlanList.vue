<template>
    <div class="container-fluid">
        <BootstrapTable
            :columns="columns"
            :data="plans"
            :options="options" />
    </div>
</template>

<script>
import BootstrapTable from 'bootstrap-table/dist/bootstrap-table-vue.esm.js';

export default {
    name: 'PlanList',
    data() {
        return {
            columns: [
                {
                    title: 'Code',
                    field: 'code',
                    sortable: true
                },
                {
                    title: 'Provider',
                    field: 'provider_desc',
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
        plans () {
            return this.$store.getters.getPlans;
        }
    },
    components: {
        BootstrapTable
    },
    created() {
        this.$store.dispatch('fetchPlans', { api: this.$api });
    }
}
</script>
