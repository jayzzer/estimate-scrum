import { Component, Mixins, Prop } from 'vue-property-decorator';
import { Line, mixins } from 'vue-chartjs';
import Chart from 'chart.js';

@Component({
  extends: Line,
  mixins: [mixins.reactiveProp],
})
export default class LineChart extends Mixins(mixins.reactiveProp, Line) {
  @Prop(Object) readonly chartData!: Chart.ChartData;

  @Prop(Object) readonly options: Chart.ChartOptions | undefined;

  mounted() {
    this.renderChart(this.chartData, this.options);
  }
}
