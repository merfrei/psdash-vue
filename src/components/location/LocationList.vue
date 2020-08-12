<template>
    <div class="container-fluid">
        <table
            id="locations-table"
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
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <Location v-for="location in locations" :key="location.id" :location="location" />
            </tbody>
        </table>
    </div>
</template>

<script>
import Location from './Location';

export default {
    name: 'LocationList',
    computed: {
        locations () { 
            return this.$store.getters.getLocations;
        }
    },
    components: {
        Location
    },
    created() {
        this.$store.dispatch('fetchLocations');
    },
    mounted() {
        // eslint-disable-next-line no-undef
        $('#locations-table').bootstrapTable();
    }
}
</script>