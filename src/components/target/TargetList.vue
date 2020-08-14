<template>
    <div class="container-fluid">
        <BootstrapTable
            :columns="columns"
            :data="targets"
            :options="options" />
    </div>
</template>

<script>
import BootstrapTable from 'bootstrap-table/dist/bootstrap-table-vue.esm.js';

export default {
    name: 'TargetList',
    data() {
        return {
            columns: [
                {
                    title: 'Identifier',
                    field: 'identifier',
                    sortable: true
                },
                {
                    title: 'Domain',
                    field: 'domain',
                    sortable: true
                },
                {
                    title: 'Blocked Sleep (minutes)',
                    field: 'blocked_standby',
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
        targets () {
            return this.$store.getters.getTargets;
        }
    },
    components: {
        BootstrapTable
    },
    created() {
        this.$store.dispatch('fetchTargets', { api: this.$api });
    }
}
</script>
