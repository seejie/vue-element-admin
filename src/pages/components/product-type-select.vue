<template>
  <el-select
    v-model="curr"
    @change="onChanged"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProductTypeSelect',
  props: ['data'],
  mounted() {
    this.getData()
  },
  computed: {
    ...mapState('productsTypeOpts'),
    curr() {
      return this.data
    },
    options() {
      return this.productsTypeOpts
    }
  },
  methods: {
    getData() {
      if (this.productsTypeOpts.length) return
      this.options = [{ label: 'test', value: 'test' }]
    },
    onChanged() {
      this.$emit('change')
    }
  }
}
</script>
