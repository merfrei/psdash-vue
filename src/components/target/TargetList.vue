<template>
    <div class="container-fluid">
        <div id="toolbar">
            <button id="newTargetBtn" class="btn btn-success" @click="addNewTarget">
                <i class="fa fa-plus"></i> New
            </button>
        </div>
        <BootstrapTable
            :columns="columns"
            :data="targets"
            :options="options"
            @on-click-cell="performAction" />
    </div>
</template>

<script>
import BootstrapTable from 'bootstrap-table/dist/bootstrap-table-vue.esm.js';
import TargetForm from './TargetForm';

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
                },
                {
                    title: 'Edit',
                    field: 'edit',
                    formatter: this.formatEdit
                },
                {
                    title: 'Delete',
                    field: 'delete',
                    formatter: this.formatDelete
                },
            ],
            options: {
                toolbar: '#toolbar',
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
    methods: {
        formatEdit() {
            return '<button class="btn btn-link">Edit</button>';
        },
        formatDelete() {
            return '<button class="btn btn-link text-danger">Delete</button>';
        },
        performAction(field, value, row) {
            if (field === 'edit') {
                this.$store.dispatch('modalSetTitle', 'Edit Target');
                this.$store.dispatch('modalSetBody', TargetForm);
                this.$store.dispatch('modalSetData', {id: row.id});
                this.$store.dispatch('showModal');
            } else {
                this.$api.DELETE('target', row.id).then(() => {
                    this.$store.dispatch('fetchTargets', { api: this.$api });
                });
            }
        },
        addNewTarget() {
            this.$store.dispatch('modalSetTitle', 'New Target');
            this.$store.dispatch('modalSetBody', TargetForm);
            this.$store.dispatch('modalSetData', {});
            this.$store.dispatch('showModal');
        }
    },
    created() {
        this.$store.dispatch('fetchTargets', { api: this.$api });
    }
}
</script>
