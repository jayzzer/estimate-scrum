<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Входные параметры</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form>
          <v-row>
            <v-col v-for="(input, i) in inputs" :key="input.name" cols="12" sm="6" md="3">
              <v-text-field v-model="input.value" :label="input.name" type="number"
                            :hint="getFuzzyValues(i, input.value).join(' ')"
                            persistent-hint required/>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="getResults" color="success">Посчитать</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Результат</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import initialData from '@/utils/initialData';
import trapezoid from '@/utils/functions';

@Component
export default class Main extends Vue {
  inputs: { name: string; value: number }[] = [];

  getFuzzyValues(index: number, value: number): number[] {
    return initialData.inputVariables[index].areas.map(
      (area) => +trapezoid(area.range, value).toFixed(2),
    );
  }

  aggregate(index: number, value: number): number {
    return Math.min(...this.getFuzzyValues(index, value));
  }

  getResults() {
    console.log();
  }

  mounted() {
    this.inputs = initialData.inputVariables.map(
      (inputVar) => ({ name: inputVar.name, value: inputVar.initValue }),
    );
  }
}
</script>

<style scoped>

</style>
