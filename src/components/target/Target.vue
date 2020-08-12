<template>
    <tr>
        <td>{{ target.identifier }}</td>
        <td>{{ target.domain }}</td>
        <td>{{ target.blocked_standby }}</td>
        <td>...</td>
    </tr>
</template>

<script>
export default {
    name: 'Target',
    props: ['target']
}
</script>