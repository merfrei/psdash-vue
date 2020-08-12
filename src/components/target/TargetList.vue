<template>
    <div class="container-fluid">
        <table
            id="targets-table"
            data-toggle="table"
            data-search="true"
            data-show-columns="true"
            data-sortable="true"
            data-pagination="true"
            data-page-size="50">
            <thead class="thead-light">
            <tr>
                <th data-field="identifier" data-sortable="true">Identifier</th>
                <th data-field="domain" data-sortable="true">Domain</th>
                <th data-field="blocked_standby" data-sortable="true">Blocked Sleep (minutes)</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <Target v-for="target in targets" :key="target.id" :target="target" />
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Target from './Target';

export default {
    name: 'TargetList',
    computed: {
        ...mapGetters(['targets'])
    },
    components: {
        Target
    },
    created() {
        this.$store.dispatch('getTargets');
    },
    mounted() {
        // eslint-disable-next-line no-undef
        $('#targets-table').bootstrapTable();
    }
}
</script>