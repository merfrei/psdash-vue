<template>
    <div class="container-fluid">
        <table
            id="types-table"
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
                <Type v-for="type in types" :key="type.id" :type="type" />
            </tbody>
        </table>
    </div>
</template>

<script>
import Type from './Type';

export default {
    name: 'TypeList',
    computed: {
        types () {
            return this.$store.getters.getTypes;
        }
    },
    components: {
        Type
    },
    created() {
        this.$store.dispatch('fetchTypes');
    },
    mounted() {
        // eslint-disable-next-line no-undef
        $('#types-table').bootstrapTable();
    }
}
</script>