<template>
  <v-row justify="center">
    <v-dialog v-model="openModal" persistent max-width="420px" >
      <v-card>
        <v-card-title>Seleccione la servicio que realizará</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 250px;">
          <v-radio-group v-model="servicio" column >
            <v-radio label="Préstamos en sala" value="1" ></v-radio>
            <v-radio label="Préstamo a domicilio" value="2" ></v-radio>
            <v-radio label="Actividades de fomento de lectura" value="3" ></v-radio>
            <v-radio label="Busqueda automatizada de información" value="4" ></v-radio>
            <v-radio label="Cubículo de estudio" value="5" ></v-radio>
            <v-radio label="Formación de usuarios" value="6" ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="saveData()" >
                <v-icon right dark>mdi-check</v-icon> 
                Guardar
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
//import gql from "graphql-tag";
import { EventBus } from '../../../EventBus';

export default {
    name: 'Servicios',
    props: ['openModal'],

    data: () => ({
        servicio: '',
    }),

    methods: {
        saveData() {
            EventBus.$emit("closeModalServ");
        }
    }
    
}
</script>