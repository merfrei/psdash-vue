<template>
    <tr>
        <td>{{ proxy.url }}</td>
        <td v-bind:class="{ 'text-success': proxy.active, 'text-danger': !proxy.active }">{{ proxy.active_desc }}</td>
        <td>{{ proxy.type_desc }}</td>
        <td>{{ proxy.location_desc }}</td>
        <td>{{ proxy.provider_name }}</td>
        <td>{{ proxy.plan_desc }}</td>
        <td>...</td>
    </tr>
</template>

<script>
export default {
    name: 'Proxy',
    props: ['proxy']
}
</script>