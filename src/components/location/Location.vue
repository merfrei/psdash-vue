<template>
    <tr>
        <td>{{ location.code }}</td>
        <td>{{ location.name }}</td>
        <td>...</td>
    </tr>
</template>

<script>
export default {
    name: 'Location',
    props: ['location']
}
</script>