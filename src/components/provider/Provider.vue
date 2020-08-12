<template>
    <tr>
        <td>{{ provider.code }}</td>
        <td>{{ provider.name }}</td>
        <td>{{ provider.url }}</td>
        <td>...</td>
    </tr>
</template>

<script>
export default {
    name: 'Provider',
    props: ['provider']
}
</script>