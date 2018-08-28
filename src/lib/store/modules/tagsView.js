/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:23
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-28 10:39:15
 */
const tagsView = {
  state: {
    visitedRoutes: [],
    visitedFrames: [],
    cachedViews: []
  },
  mutations: {
    ADD_VIEW: (state, view) => {
      if (state.visitedRoutes.some(v => +v.id === +view.id)) return
      state.visitedRoutes.push(Object.assign({}, view, {
        name: view.name,
        path: view.fullPath,
        title: (view.meta && view.meta.title) || view.title || 'no-name',
        id: view.id
      }))
      if (view.meta && view.meta.keepAlive) {
        state.cachedViews.push(view.name)
      }
    },
    SAVE_KEEP_STATUS: (state, view) => {
      if (view.meta.keepAlive) {
        state.cachedViews.push(view.name)
      } else {
        for (const i of state.cachedViews) {
          if (i === view.name) {
            const index = state.cachedViews.indexOf(i)
            state.cachedViews.splice(index, 1)
            break
          }
        }
      }
    },
    REMOVE_VIEW: (state, view) => {
      for (const [i, v] of state.visitedRoutes.entries()) {
        if (v.id === view.id) {
          state.visitedRoutes.splice(i, 1)
          break
        }
      }
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews.splice(index, 1)
          break
        }
      }
    },
    REMOVE_OTHER_VIEW: (state, view) => {
      for (const [i, v] of state.visitedRoutes.entries()) {
        if (v.id === view.id) {
          state.visitedRoutes = state.visitedRoutes.slice(i, i + 1)
          break
        }
      }
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews = state.cachedViews.slice(index, i + 1)
          break
        }
      }
    },
    REMOVE_ALL_VIEWS: (state) => {
      state.visitedRoutes = []
      state.cachedViews = []
      state.visitedFrames = []
    },
    SAVE_VIEWS: (state, views) => {
      state.visitedRoutes = views
    }
  },
  actions: {
    AddView({ commit }, view) {
      commit('ADD_VIEW', view)
    },
    RemoveView({ commit, state }, view) {
      return new Promise((resolve) => {
        commit('REMOVE_VIEW', view)
        resolve([...state.visitedRoutes])
      })
    },
    RemoveOtherView({ commit, state }, view) {
      return new Promise((resolve) => {
        commit('REMOVE_OTHER_VIEW', view)
        resolve([...state.visitedRoutes])
      })
    },
    RemoveAllViews({ commit, state }) {
      return new Promise((resolve) => {
        commit('REMOVE_ALL_VIEWS')
        resolve([...state.visitedRoutes])
      })
    },
    SaveKeepStatus({ commit, state }, view) {
      commit('SAVE_KEEP_STATUS', view)
    },
    SaveViews({ commit }, views) {
      commit('SAVE_VIEWS', views)
    }
  },
  getters: {
    visitedRoutes: state => state.visitedRoutes,
    cachedViews: state => state.cachedViews
  }
}

export default tagsView
