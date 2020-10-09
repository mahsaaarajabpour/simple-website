import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        number: '',
        errorMessage: '',
        error: false,
        Numbers: [],
        NewItem: '',
        items: [],
        editedItem: null,
        userLogin: false,
        userInfo: []

    },
    getters: {
        Num: state => {
            return state.number
        },
        Err: state => {
            return state.error
        },
        Numbers: state => {
            return state.Numbers
        },
        NewItem: state => {
            return state.NewItem
        },
        EditItem: state => {
            return state.editedItem
        },
        UserLogin: state => {
            return state.userLogin
        }
    },
    mutations: {
        Num: (state, payload) => {
            return state.number = payload
        },
        Increment: (state) => {
            if (state.number === '') {
                state.error = true;
                state.errorMessage = 'please first enter your number...';
            } else {
                state.error = false;
                state.errorMessage = ''
                return state.number++
            }
        },
        // checkInput:(state)=>{
        //     if(!state.error){
        //         state.errorMessage='please fill in the blank'
        //     }

        // },
        Decrement: (state) => {
            if (state.number === '') {
                state.error = true;
                state.errorMessage = 'please first enter your number...';
            } else {
                state.error = false;
                state.errorMessage = ''
                return state.number--
            }
        },
        AddNum: (state) => {
            if (state.number === '') {
                state.error = true
                state.errorMessage = 'first enter number!!!'
            } else {
                state.error = false
                state.errorMessage = ''
                return state.Numbers.push(state.number)
            }
        },
        NewItem: (state, payload) => {
            return state.NewItem = payload
        },
        AddItem: (state) => {
            if (state.NewItem === '') {
                return
            }
            let subject = state.NewItem
            state.items.push({
                title: subject,
                completed: false
            })
            state.NewItem = ''
        },
        RemoveItem: (state, item) => {
            state.items.splice(state.items.indexOf(item), 1)
        },
        RemoveEmpty: (state, item) => {
            if (state.editedItem == null || state.editedItem === "") {
                state.items.splice(state.items.indexOf(item), 1)
            } else {
                return
            }
        },
        RemoveActiveItem: (state) => {
            for (let index = 0; index < state.items.length; index++) {
                if (state.items[index].completed) {
                    state.items.splice(index, 1)
                    index--
                }
            }
        },
        EditItem: (state, item) => {
            return state.editedItem = item
        },
        SaveItem: (state) => {
            if (!state.editedItem) {
                return
            }
            state.editedItem = null
        },
        UserLogin: (state, payload) => {
            state.userLogin = payload
        },
    },
    actions: {
        Num: ({commit}, payload) => {
            commit('Num', payload)
        },
        Increment: ({commit}) => {
            commit('Increment')
        },
        Decrement: ({commit}) => {
            commit('Decrement')
        },
        AddNum: ({commit}) => {
            commit('AddNum')
        },
        NewItem: ({commit}, payload) => {
            commit('NewItem', payload)
        },
        AddItem: ({commit}) => {
            commit('AddItem')
        },
        RemoveItem: ({commit}, {item}) => {
            commit('RemoveItem', item)
        },
        RemoveEmpty: ({commit}, {item}) => {
            commit('RemoveEmpty', item)
        },
        RemoveActiveItem: ({commit}) => {
            commit('RemoveActiveItem')
        },
        EditItem: ({commit}, {item}) => {
            commit('EditItem', item)
        },
        SaveItem: ({commit}, {item}) => {
            if (item.title === "" || item.title === " ") {
                commit('RemoveEmpty', item)
            }
            commit('SaveItem', item)
        },
        UserLogin: ({commit}, payload) => {
            commit('UserLogin', payload)
        }
    }
})
