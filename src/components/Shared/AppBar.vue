<template>
    <v-app-bar app fixed dark elevation="2" color="light-blue darken-4">
        <v-toolbar-items id="toolbar" >
            <v-img id="logo" contain src="../../assets/logotec.png" />           
        </v-toolbar-items>
        <v-toolbar-title id="title">Control de acceso</v-toolbar-title>
        <v-spacer />
        <p class="mt-4" id="fecha">
            <v-icon class="mb-1" size="19" right dark>mdi-calendar</v-icon>
            {{ fecha }}
        </p>
    </v-app-bar>
</template>

<script>
export default {
    name: 'AppBar',
    data: ()=> ({
        fecha: ''
    }),

    methods: {
        addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        },

        obtenerFecha() {
            /* Obtener fecha */
            var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
            var d = new Date();
            var day = this.addZero(d.getDate());
            var month = meses[d.getMonth()];
            var year = d.getFullYear();

            var fecha = `${day} de ${month} del ${year}`
            this.fecha = fecha;
        }
    },

    mounted() {
        this.obtenerFecha();
    }
}
</script>

<style scoped>
    #toolbar {
        margin-right: 10px;
        height: 82px;
        width: 72px;
    }

    #logo {
        position: relative;
        height: 82px; 
        width: 72px;
    }

    #title {
        padding: 0;
    }

    @media screen and (max-width: 550px) {
    #title {
        font-size: 1.1em;
    }

    #fecha {
        font-size: 14px;
    }

    #toolbar {
        margin-right: 10px;
        height: 72px;
        width: 62px;
    }

    #logo {
        position: relative;
        height: 72px; 
        width: 62px;
    }
  }
</style>