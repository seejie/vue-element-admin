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
  name: 'ProductTypeSelect',
  props: ['data'],
  mounted() {
    this.getData()
  },
  computed: {
    ...mapState('base', ['productsTypeOpts']),
    curr: {
      set(item) {
        this.$emit('update:data', item)
      },
      get() {
        return this.data
      }
    },
    options() {
      return this.productsTypeOpts
    }
  },
  methods: {
    ...mapMutations('base', ['setProductsTypeOpts']),
    getData() {
      if (this.productsTypeOpts.length) return
      this.setProductsTypeOpts([{ label: 'test', value: 'test' }])
    },
    onChanged() {
      this.$emit('change')
    }
  }
}
</script>

<style scoped>
.el-select{
  margin: 0 1rem;
}
</style>
