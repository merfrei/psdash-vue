<template>
    <div class="container-fluid">
        <table class="table table-hover">
            <thead class="thead-light">
            <tr>
                <th>Identifier</th>
                <th>Domain</th>
                <th>Blocked Sleep (minutes)</th>
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
export default {
    name: 'TargetList'
}
</script>