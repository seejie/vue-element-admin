const state = {
  deptOpts: [],
  channelOpts: [],
  auditStatusOpts: [],
  productLineOpts: [],
  productsTypeOpts: [],
  programOpts: [],
  specsOpts: [],
  timeNodeOpts: []
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
