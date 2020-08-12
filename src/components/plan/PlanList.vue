<template>
    <div class="container-fluid">
        <table
            id="plans-table"
            data-toggle="table"
            data-search="true"
            data-show-columns="true"
            data-sortable="true"
            data-pagination="true"
            data-page-size="50">
            <thead class="thead-light">
            <tr>
                <th data-field="code" data-sortable="true">Code</th>
                <th data-field="provider_id" data-sortable="true">Plan</th>
                <th data-field="name" data-sortable="true">Name</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <Plan v-for="plan in plans" :key="plan.id" :plan="plan" />
            </tbody>
        </table>
    </div>
</template>

<script>
import Plan from './Plan';

export default {
    name: 'PlanList',
    computed: {
        plans () { 
            return this.$store.getters.getPlans;
        }
    },
    components: {
        Plan
    },
    created() {
        this.$store.dispatch('fetchPlans');
    },
    mounted() {
        // eslint-disable-next-line no-undef
        $('#plans-table').bootstrapTable();
    }
}
</script>