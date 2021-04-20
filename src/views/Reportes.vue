<template>
    <v-app>
        <AppBar />
        <Informe />
    </v-app>
</template>

<script>
import AppBar from '@/components/Shared/AppBar'
import Informe from '@/components/Informe'

export default {
    name: 'Reportes',
    components: {
        AppBar,
        Informe
    }    
}
</script>