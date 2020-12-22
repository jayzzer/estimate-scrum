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
                            :min="input.min" :max="input.max"
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
    <v-row>
      <v-col>
        <div>
          <strong>{{ outputName }}:</strong> {{ result.name }}
        </div>
        <div>
          <strong>Правило:</strong> {{ result.rule }}
        </div>
        <div>
          <strong>Значение:</strong> {{ result.value }}
        </div>
        <div>
          <strong>Диапазон:</strong> {{ result.range }}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <strong>Все правила:</strong>
        </div>
        <v-simple-table
          fixed-header
          height="300px"
        >
          <template v-slot:default>
            <thead>
            <tr>
              <th v-for="input in inputs" :key="input.name" class="text-left">
                {{ input.name }}
              </th>
              <th class="text-left black--text">{{ outputName }}</th>
            </tr>
            </thead>
            <tbody>
            <tr
              v-for="(rule, i) in rules"
              :key="i"
              :class="i === result.ruleInd ? 'black white--text' : null"
            >
              <td v-for="(term, j) in rule" :key="j">{{ term }}</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import initialData from '@/utils/initialData';
import { getRuleStr, trapezoid } from '@/utils/functions';

@Component
export default class Main extends Vue {
  // Результат
  result: { name: string; range: number[]; rule: string; ruleInd: number; value: number } = {
    name: '',
    range: [],
    rule: '',
    ruleInd: 0,
    value: 0,
  };

  // Информация для полей ввода
  inputs: { name: string; value: number; min: number; max: number }[] = [];

  // Список всех правил
  rules: string[][] = this.initRules();

  // Название выходного параметра
  outputName: string = initialData.outputVariables[0].name;

  /**
   * Возвращает меру сопоставления для каждой из лингвистических переменных
   * @param index - номер входного параметра
   * @param value - введенное значение
   */
  getFuzzyValues(index: number, value: number): number[] {
    return initialData.inputVariables[index].areas.map(
      (area) => +trapezoid(area.range, value).toFixed(2),
    );
  }

  /**
   * Агрегация правила
   * @param rule - правило
   */
  aggregate(rule: number[]): number {
    const fuzzyValues: number[] = [];
    for (let inpInd = 0; inpInd < 4; inpInd += 1) {
      if (!rule[inpInd]) continue;

      const inputRange: number[] = initialData.inputVariables[inpInd].areas[rule[inpInd] - 1].range;
      fuzzyValues.push(trapezoid(inputRange, this.inputs[inpInd].value));
    }
    return Math.min(...fuzzyValues);
  }

  /**
   * Вычисляет результат: текстовый результат, выбранное правило, значение, диапазон
   */
  getResults() {
    let maxRuleVal = 0;
    let maxRuleInd = 0;
    initialData.rules.forEach((rule, ruleInd) => {
      const ruleAggrVal = this.aggregate(rule);
      if (ruleAggrVal > maxRuleVal) {
        maxRuleVal = ruleAggrVal;
        maxRuleInd = ruleInd;
      }
    });
    const resRule = initialData.rules[maxRuleInd];
    const resArea = initialData.outputVariables[0].areas[resRule[4] - 1];
    this.result = {
      ...resArea,
      rule: getRuleStr(resRule),
      ruleInd: maxRuleInd,
      value: maxRuleVal,
    };
  }

  /**
   * Возвращает список всех правил в виде строк
   */
  initRules(): string[][] {
    return initialData.rules.map((rule) => rule.map((term, i) => {
      if (!term) return '';
      return i === rule.length - 1
        ? initialData.outputVariables[0].areas[term - 1].name
        : initialData.inputVariables[i].areas[term - 1].name;
    }));
  }

  mounted() {
    this.inputs = initialData.inputVariables.map(
      (inputVar) => ({
        name: inputVar.name,
        value: inputVar.initValue,
        min: inputVar.minValue,
        max: inputVar.maxValue,
      }),
    );
  }
}
</script>

<style scoped>

</style>
