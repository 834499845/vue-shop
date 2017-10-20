/**
 * Created by LangK on 2016/12/20.
 */
import Vue from 'vue'

const beginLoading = commit => {
  console.log(commit + " start")
  return Date.now()
}
const stopLoading = commit => {
  console.log(commit + " stop")
  return Date.now()
}
export default {
  SelesCompile({commit}, postdata) {
    beginLoading('促销编辑--');
    return Vue.http.post('URL', postdata).then(response => {
      stopLoading('促销编辑--')
      if (response.status === 200) {
        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  SelesDelect({commit}, postdata) {
    beginLoading('促销删除--');
    return Vue.http.post('URL', postdata).then(response => {
      stopLoading('促销删除--')
      if (response.status === 200) {

        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
  SelesConserve({commit}, postdata) {
    beginLoading('促销保存--');
    return Vue.http.post('URL', postdata).then(response => {
      stopLoading('促销保存--')
      if (response.status === 200) {

        return Promise.resolve(response.body)
      } else {
        return Promise.reject(response.data.message)
      }
    })
  },
}
