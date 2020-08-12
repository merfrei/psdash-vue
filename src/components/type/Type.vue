<template>
    <tr>
        <td>{{ type.code }}</td>
        <td>{{ type.name }}</td>
        <td>...</td>
    </tr>
</template>

<script>
export default {
    name: 'Type',
    props: ['type']
}
</script>