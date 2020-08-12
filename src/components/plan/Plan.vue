<template>
    <tr>
        <td>{{ plan.code }}</td>
        <td>{{ plan.provider_desc }}</td>
        <td>{{ plan.name }}</td>
        <td>...</td>
    </tr>
</template>

<script>
export default {
    name: 'Plan',
    props: ['plan']
}
</script>