<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Описание</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3>Входные параметры</h3>
      </v-col>
    </v-row>

    <div v-for="chartData in chartsData" :key="chartData.name" class="chart">
      <v-row>
        <v-col>
          <h4 class="text-center">{{ chartData.name }}</h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <LineChart :chart-data="chartData.trapezoidData" :options="chartOptions"/>
        </v-col>
        <v-col>
          <LineChart :chart-data="chartData.triangleData" :options="chartOptions"/>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LineChart from '@/components/LineChart';
import Chart from 'chart.js';

@Component({
  components: { LineChart },
})
export default class Description extends Vue {
  chartsData: { name: string; trapezoidData: Chart.ChartData; triangleData: Chart.ChartData }[] = [
    {
      name: 'Количество разработчиков',
      trapezoidData: {
        labels: [0, 5, 10, 11, 14, 20, 25, 30, 40, 50],
        datasets: [
          {
            label: 'Мало',
            data: [{ x: 0, y: 1 }, { x: 5, y: 1 }, { x: 11, y: 0 }],
            backgroundColor: 'rgba(239, 83, 80, 0.5)',
          },
          {
            label: 'Средне',
            data: [{ x: 10, y: 0 }, { x: 14, y: 1 }, { x: 25, y: 1 }, { x: 30, y: 0 }],
            backgroundColor: 'rgba(171, 71, 188, 0.5)',
          },
          {
            label: 'Много',
            data: [{ x: 20, y: 0 }, { x: 40, y: 1 }, { x: 50, y: 1 }],
            backgroundColor: 'rgba(66, 165, 245, 0.5)',
          },
        ],
      },
      triangleData: {
        labels: [0, 5, 10, 11, 14, 20, 25, 30, 40, 50],
        datasets: [
          {
            label: 'Мало',
            data: [{ x: 0, y: 1 }, { x: 11, y: 0 }],
            backgroundColor: 'rgba(239, 83, 80, 0.5)',
          },
          {
            label: 'Средне',
            data: [{ x: 10, y: 0 }, { x: 20, y: 1 }, { x: 30, y: 0 }],
            backgroundColor: 'rgba(171, 71, 188, 0.5)',
          },
          {
            label: 'Много',
            data: [{ x: 20, y: 0 }, { x: 50, y: 1 }],
            backgroundColor: 'rgba(66, 165, 245, 0.5)',
          },
        ],
      },
    },
    {
      name: 'Количество оставшихся дней',
      trapezoidData: {
        labels: [0, 4, 5, 7, 10, 11, 12, 14],
        datasets: [
          {
            label: 'Мало',
            data: [{ x: 0, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 0 }],
            backgroundColor: 'rgba(239, 83, 80, 0.5)',
          },
          {
            label: 'Средне',
            data: [{ x: 4, y: 0 }, { x: 7, y: 1 }, { x: 10, y: 1 }, { x: 11, y: 0 }],
            backgroundColor: 'rgba(171, 71, 188, 0.5)',
          },
          {
            label: 'Много',
            data: [{ x: 10, y: 0 }, { x: 12, y: 1 }, { x: 14, y: 1 }],
            backgroundColor: 'rgba(66, 165, 245, 0.5)',
          },
        ],
      },
      triangleData: {
        labels: [0, 4, 5, 7, 10, 11, 12, 14],
        datasets: [
          {
            label: 'Мало',
            data: [{ x: 0, y: 1 }, { x: 5, y: 0 }],
            backgroundColor: 'rgba(239, 83, 80, 0.5)',
          },
          {
            label: 'Средне',
            data: [{ x: 4, y: 0 }, { x: 7, y: 1 }, { x: 11, y: 0 }],
            backgroundColor: 'rgba(171, 71, 188, 0.5)',
          },
          {
            label: 'Много',
            data: [{ x: 10, y: 0 }, { x: 14, y: 1 }],
            backgroundColor: 'rgba(66, 165, 245, 0.5)',
          },
        ],
      },
    },
    {
      name: 'Сумма оставшихся SP',
      trapezoidData: {
        labels: [0, 45, 50, 70, 80, 110, 150, 200],
        datasets: [
          {
            label: 'Мало',
            data: [{ x: 0, y: 1 }, { x: 45, y: 1 }, { x: 70, y: 0 }],
            backgroundColor: 'rgba(239, 83, 80, 0.5)',
          },
          {
            label: 'Средне',
            data: [{ x: 50, y: 0 }, { x: 70, y: 1 }, { x: 110, y: 1 }, { x: 150, y: 0 }],
            backgroundColor: 'rgba(171, 71, 188, 0.5)',
          },
          {
            label: 'Много',
            data: [{ x: 110, y: 0 }, { x: 150, y: 1 }, { x: 200, y: 1 }],
            backgroundColor: 'rgba(66, 165, 245, 0.5)',
          },
        ],
      },
      triangleData: {
        labels: [0, 45, 50, 70, 80, 100, 110, 150, 200],
        datasets: [
          {
            label: 'Мало',
            data: [{ x: 0, y: 1 }, { x: 70, y: 0 }],
            backgroundColor: 'rgba(239, 83, 80, 0.5)',
          },
          {
            label: 'Средне',
            data: [{ x: 50, y: 0 }, { x: 100, y: 1 }, { x: 150, y: 0 }],
            backgroundColor: 'rgba(171, 71, 188, 0.5)',
          },
          {
            label: 'Много',
            data: [{ x: 110, y: 0 }, { x: 200, y: 1 }],
            backgroundColor: 'rgba(66, 165, 245, 0.5)',
          },
        ],
      },
    },
    {
      name: 'Сумма выполненных SP',
      trapezoidData: {
        labels: [0, 45, 50, 70, 80, 110, 150, 200],
        datasets: [
          {
            label: 'Мало',
            data: [{ x: 0, y: 1 }, { x: 45, y: 1 }, { x: 70, y: 0 }],
            backgroundColor: 'rgba(239, 83, 80, 0.5)',
          },
          {
            label: 'Средне',
            data: [{ x: 50, y: 0 }, { x: 70, y: 1 }, { x: 110, y: 1 }, { x: 150, y: 0 }],
            backgroundColor: 'rgba(171, 71, 188, 0.5)',
          },
          {
            label: 'Много',
            data: [{ x: 110, y: 0 }, { x: 150, y: 1 }, { x: 200, y: 1 }],
            backgroundColor: 'rgba(66, 165, 245, 0.5)',
          },
        ],
      },
      triangleData: {
        labels: [0, 45, 50, 70, 80, 100, 110, 150, 200],
        datasets: [
          {
            label: 'Мало',
            data: [{ x: 0, y: 1 }, { x: 70, y: 0 }],
            backgroundColor: 'rgba(239, 83, 80, 0.5)',
          },
          {
            label: 'Средне',
            data: [{ x: 50, y: 0 }, { x: 100, y: 1 }, { x: 150, y: 0 }],
            backgroundColor: 'rgba(171, 71, 188, 0.5)',
          },
          {
            label: 'Много',
            data: [{ x: 110, y: 0 }, { x: 200, y: 1 }],
            backgroundColor: 'rgba(66, 165, 245, 0.5)',
          },
        ],
      },
    },
  ];

  chartOptions: Chart.ChartOptions = {
    elements: {
      line: {
        tension: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      intersect: false,
    },
  };
}
</script>

<style scoped lang="sass">
.chart
  height: 500px
</style>
