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
  name: 'ChannelSelect',
  props: ['data'],
  mounted() {
    this.getData()
  },
  computed: {
    ...mapState('base', ['channelOpts']),
    curr: {
      set(item) {
        this.$emit('update:data', item)
      },
      get() {
        return this.data
      }
    },
    options() {
      return this.channelOpts
    }
  },
  methods: {
    ...mapMutations('base', ['setChannelOpts']),
    getData() {
      if (this.channelOpts.length) return
      this.setChannelOpts([{ label: 'test', value: 'test' }])
    },
    onChanged() {
      this.$emit('change')
    }
  }
}
</script>
