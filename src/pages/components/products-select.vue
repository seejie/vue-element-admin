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
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'ProductsSelect',
  props: ['data'],
  mounted() {
    this.getData()
  },
  computed: {
    ...mapState('base', ['productsOpts']),
    curr: {
      set(item) {
        this.$emit('update:data', item)
      },
      get() {
        return this.data
      }
    },
    options() {
      return this.productsOpts
    }
  },
  methods: {
    ...mapMutations('base', ['setProductsOpts']),
    getData() {
      if (this.productsOpts.length) return
      this.setProductsOpts([{ label: 'test', value: 'test' }])
    },
    onChanged() {
      this.$emit('change')
    }
  }
}
</script>
