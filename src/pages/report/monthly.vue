<template>
  <div class="wrapper">
    <el-form :model="form" inline>
      <el-form-item label="部门" label-width="72px">
        <dept-select :data.sync="form.dept" />
      </el-form-item>

      <el-form-item label="用途" label-width="102px">
        <program-select :data.sync="form.program" />
      </el-form-item>

      <el-form-item label="FCST 月份" label-width="102px">
        <span class="date-wrapper">
          <el-date-picker v-model="form.sMonth" type="month" placeholder="选择月份" style="width: 100%;" />
        </span>
        <span class="line">-</span>
        <span class="date-wrapper">
          <el-date-picker v-model="form.eMonth" type="month" placeholder="选择月份" style="width: 100%;" />
        </span>
      </el-form-item>

      <el-form-item label="品类" label-width="72px">
        <product-type-select :data.sync="form.prodType" />
      </el-form-item>

      <el-form-item label="产品线" label-width="72px">
        <product-line-select :data.sync="form.prodLine" />
      </el-form-item>

      <el-form-item label="OC编号/名称" label-width="102px">
        <el-input v-model="form.name" placeholder="请输入" style="width: 195px;" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="search">检索</el-button>
      </el-form-item>
    </el-form>

    <div class="charts">
      <div ref="apply" class="bar" />
      <div ref="product" class="bar" />
      <div ref="pie" class="bar" />
    </div>
  </div>
</template>

<script>
import deptSelect from '../components/dept-select.vue'
import ProductLineSelect from '../components/product-line-select.vue'
import ProductTypeSelect from '../components/product-type-select.vue'
import ProgramSelect from '../components/program-select.vue'
import { getReport } from '../../api/index'
import * as echarts from 'echarts'

export default {
  name: 'Monthly',
  components: { deptSelect, ProgramSelect, ProductTypeSelect, ProductLineSelect },
  data() {
    return {
      form: {
        dept: '',
        program: '',
        prodType: '',
        prodLine: '',
        name: ''
      }
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      const res = await getReport()
      console.log(res, '-----res-----')
      this.initMonthlyApplyChart()
      this.initProductLineChart()
      this.initPieChart()
    },
    search() {

    },
    initMonthlyApplyChart() {
      const dom = this.$refs.apply
      const chart = echarts.init(dom)

      chart.setOption({
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['product', '年度FSCT', 'FSCT月度申请', '月度发货申请'],
            ['202103', 43.3, 85.8, 93.7],
            ['202104', 83.1, 73.4, 55.1],
            ['202105', 86.4, 65.2, 82.5],
            ['202106', 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' }
        ]
      })
    },
    initProductLineChart() {
      const dom = this.$refs.product
      const chart = echarts.init(dom)

      chart.setOption({
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['product', '年度FSCT', 'FSCT月度申请', '月度发货申请', '使用效率'],
            ['招新', 43.3, 85.8, 93.7, 85],
            ['维老', 83.1, 73.4, 55.1, 65],
            ['XXX', 86.4, 65.2, 82.5, 55],
            ['YYY', 72.4, 53.9, 39.1, 72]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' },
          { type: 'line' }
        ]
      })
    },
    initPieChart() {
      var datas = [
        // //////////////////////////////////////
        [
          { name: '圣彼得堡来客', value: 5.6 },
          { name: '陀思妥耶夫斯基全集', value: 1 },
          { name: '史记精注全译（全6册）', value: 0.8 },
          { name: '加德纳艺术通史', value: 0.5 },
          { name: '表象与本质', value: 0.5 },
          { name: '其它', value: 3.8 }
        ],
        // ////////////////////////////////////////
        [
          { name: '银河帝国5：迈向基地', value: 3.8 },
          { name: '俞军产品方法论', value: 2.3 },
          { name: '艺术的逃难', value: 2.2 },
          { name: '第一次世界大战回忆录（全五卷）', value: 1.3 },
          { name: 'Scrum 精髓', value: 1.2 },
          { name: '其它', value: 5.7 }
        ],

        // //////////////////////////////////////
        [
          { name: '克莱因壶', value: 3.5 },
          { name: '投资最重要的事', value: 2.8 },
          { name: '简读中国史', value: 1.7 },
          { name: '你当像鸟飞往你的山', value: 1.4 },
          { name: '表象与本质', value: 0.5 },
          { name: '其它', value: 3.8 }
        ],
        // //////////////////////////////////////
        [
          { name: '圣彼得堡来客', value: 5.6 },
          { name: '陀思妥耶夫斯基全集', value: 1 },
          { name: '史记精注全译（全6册）', value: 0.8 },
          { name: '加德纳艺术通史', value: 0.5 },
          { name: '表象与本质', value: 0.5 },
          { name: '其它', value: 3.8 }
        ],
        // ////////////////////////////////////////
        [
          { name: '银河帝国5：迈向基地', value: 3.8 },
          { name: '俞军产品方法论', value: 2.3 },
          { name: '艺术的逃难', value: 2.2 },
          { name: '第一次世界大战回忆录（全五卷）', value: 1.3 },
          { name: 'Scrum 精髓', value: 1.2 },
          { name: '其它', value: 5.7 }
        ],

        // //////////////////////////////////////
        [
          { name: '克莱因壶', value: 3.5 },
          { name: '投资最重要的事', value: 2.8 },
          { name: '简读中国史', value: 1.7 },
          { name: '你当像鸟飞往你的山', value: 1.4 },
          { name: '表象与本质', value: 0.5 },
          { name: '其它', value: 3.8 }
        ]
      ]

      const dom = this.$refs.pie
      const chart = echarts.init(dom)

      chart.setOption({
        title: {
          text: '阅读书籍分布',
          left: 'center',
          textStyle: {
            color: '#999',
            fontWeight: 'normal',
            fontSize: 14
          }
        },
        series: datas.map(function(data, idx) {
          var left = idx <= 2 ? idx * 33.3 : (idx - 3) * 33.3
          var top = idx <= 2 ? 0 : 50
          console.log(top, left)
          return {
            type: 'pie',
            radius: [20, 60],
            top: top + '%',
            height: '50%',
            left: left + '%',
            width: '33.33%',
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1
            },
            label: {
              alignTo: 'edge',
              formatter: '{name|{b}}\n{time|{c} 小时}',
              minMargin: 5,
              edgeDistance: 10,
              lineHeight: 15,
              rich: {
                time: {
                  fontSize: 10,
                  color: '#999'
                }
              }
            },
            labelLine: {
              length: 15,
              length2: 0,
              maxSurfaceAngle: 80
            },
            labelLayout: function(params) {
              var isLeft = params.labelRect.x < chart.getWidth() / 2
              var points = params.labelLinePoints
              // Update the end point.
              points[2][0] = isLeft
                ? params.labelRect.x
                : params.labelRect.x + params.labelRect.width

              return {
                labelLinePoints: points
              }
            },
            data: data
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.date-wrapper {
  display: inline-block;
  width: 160px;
}
.line {
  margin: 0 10px;
}
.charts{
  .bar{
    width: 100%;
    height: 400px;
  }
}
</style>
