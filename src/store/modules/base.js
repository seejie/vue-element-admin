const state = {
  deptOpts: [{
    name: 'DS 20ml GWP',
    value: 'DS 20ml GWP'
  }, {
    name: 'Store VIP',
    value: 'Store VIP'
  }, {
    name: 'dotcom recruiting',
    value: 'dotcom recruiting'
  }],
  channelOpts: [],
  auditStatusOpts: [],
  productLineOpts: [],
  productsTypeOpts: [],
  programOpts: [],
  specsOpts: [],
  timeNodeOpts: [],
  productsOpts: [{
    id: '80025875',
    name: '娇韵诗双萃赋活精华露',
    note: 'sssss',
    value: '80025875',
    label: '娇韵诗双萃赋活精华露'
  }, {
    id: '80016257',
    name: 'Extra-Firming MASK - 8ml tube',
    note: 'aaa',
    value: '80016257',
    label: 'Extra-Firming MASK - 8ml tube'
  }],
  ocGroupOpts: []
}

const mutations = {
  setDeptOpts: (state, paylod) => {
    state.deptOpts = paylod
  },
  setChannelOpts: (state, paylod) => {
    state.channelOpts = paylod
  },
  setAuditStatusOpts: (state, paylod) => {
    state.auditStatusOpts = paylod
  },
  setProductLineOpts: (state, paylod) => {
    state.productLineOpts = paylod
  },
  setProductsTypeOpts: (state, paylod) => {
    state.productsTypeOpts = paylod
  },
  setProgramOpts: (state, paylod) => {
    state.programOpts = paylod
  },
  setSpecsOpts: (state, paylod) => {
    state.specsOpts = paylod
  },
  setTimeNodeOpts: (state, paylod) => {
    state.timeNodeOpts = paylod
  },
  setProductsOpts: (state, paylod) => {
    state.productsOpts = paylod
  },
  setOcGroupOpts: (state, paylod) => {
    state.ocGroupOpts = paylod
  }
}

const actions = {
  getDeptOpts({ commit }) {
    commit('setDeptOpts', [])
  },
  getChannelOpts({ commit }) {
    commit('setChannelOpts', [])
  },
  getAuditStatusOpts({ commit }) {
    commit('setAuditStatusOpts', [])
  },
  getProductLineOpts({ commit }) {
    commit('setProductLineOpts', [])
  },
  getProductsTypeOpts({ commit }) {
    commit('setProductsTypeOpts', [])
  },
  getProgramOpts({ commit }) {
    commit('setProgramOpts', [])
  },
  getSpecsOpts({ commit }) {
    commit('setSpecsOpts', [])
  },
  getTimeNodeOpts({ commit }) {
    commit('setTimeNodeOpts', [])
  },
  getProductsOpts({ commit }) {
    commit('setProductsOpts', [])
  },
  getOcGroupOpts({ commit }) {
    commit('setOcGroupOpts', [])
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
