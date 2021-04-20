<template>
    <v-app>
        <AppBar />
        <Registro />
    </v-app>
</template>

<script>
import Registro from '@/components/Registro'
import AppBar from '@/components/Shared/AppBar'

export default {
    name: 'Inicio',
    components: {
        Registro,
        AppBar
    }
}
</script>