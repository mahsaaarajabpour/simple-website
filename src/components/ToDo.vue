<template>
  <div class="body">
    <div class="container">
      <h4> todo with vuex</h4>
      <div class="col-lg-8 col-md-10 col-sm-12 concentrated">
        <section class="todoapp">
          <header class="header">
            <h3>todo</h3>
            <input class="new-todo"
                   autofocus autocomplete="off"
                   placeholder="What do you want to do?"
                   v-model="NewItem"
                   @keydown.enter="AddItem">
          </header>
          <section class="main">
            <input class="toggle-all" type="checkbox">
            <ul class="todo-list">
              <li v-for="item in filterItem" :key="item.index"
                  :class="{completed:item.completed , editing:item==Editing}">
                <div class="view">
                  <input class="checkbox"
                         style="
                                        text-align: center;
                                        width: 40px;
                                        /* auto, since non-WebKit browsers doesn't support input styling */
                                        height: auto;
                                        position: absolute;
                                        top: 0;
                                        bottom: 0;
                                        margin: auto 0;
                                        border: none; /* Mobile Safari */
                                        /*-webkit-appearance: none;*/
                                        appearance: none;"
                         type="checkbox" v-model="item.completed">
                  <label @dblclick="EditedItem(item)"> {{ item.title }}</label>
                  <button class="destroy" @click="DeleteItem(item)"></button>
                </div>
                <input class="edit" type="text" v-model="item.title" @keydown.enter="StoreItem(item)"
                       @blur="StoreItem(item)">
              </li>
            </ul>
          </section>
          <footer class="footer">
                    <span class="todo-count">
                        <strong>{{ itemCounter|ActiveItem }}</strong>
                    </span>
            <ul class="filters">
              <li><a :class="{selected:this.visibility=='all'}" @click="visibility='all'">all</a></li>
              <li><a :class="{selected: this.visibility=='active'}" @click="visibility='active'">active</a>
              </li>
              <li><a :class="{selected:this.visibility=='completed'}" @click="visibility='completed'">completed</a>
              </li>
            </ul>
            <button class="clear-completed" @click="RemoveActiveItem"> Delete completed</button>
          </footer>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import TodoMixin from "../mixins/TodoMixin";
import {mapActions} from 'vuex'

export default {
  name: "ToDo",
  mixins: [TodoMixin],
  data() {
    return {
      visibility: 'all'
    }
  },
  computed: {
    NewItem: {
      get() {
        return this.$store.getters.NewItem
      },
      set(value) {
        return this.$store.dispatch('NewItem', value)
      }
    },
    Editing() {
      return this.$store.getters.EditItem
    }
  },
  methods: {
    ...mapActions(['AddItem', 'RemoveItem', 'RemoveActiveItem', 'EditItem', 'SaveItem']),
    DeleteItem(item) {
      this.RemoveItem({item: item})
    },
    EditedItem(item) {
      this.EditItem({item: item})
    },
    StoreItem(item) {
      this.SaveItem({item: item})
    },
  },
  filters: {
    ActiveItem(value) {
      if (value > 1) {
        return value + ' active items'
      } else {
        return value + ' active item'
      }
    }
  }
}
</script>

<style scoped>

button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container h4 {
  padding-bottom: 50px;
}

:focus {
  outline: 0;
}

.todoapp {
  background: #fff;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
  0 25px 50px 0 rgba(0, 0, 0, 0.1);

}

.todoapp input::-webkit-input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.todoapp input::-moz-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.todoapp input::input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.todoapp h3 {
  position: absolute;
  top: -70px;
  width: 100%;
  font-size: 50px;
  font-weight: 100;
  text-align: center;
  color: honeydew;
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}

.new-todo,
.edit {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.new-todo {
  padding: 16px 60px 16px 16px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

.main {
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
}

label[for='toggle-all'] {
  display: none;
}

.toggle-all {
  position: absolute;
  top: -55px;
  right: -12px;
  width: 60px;
  height: 34px;
  text-align: center;
  border: none; /* Mobile Safari */
}

.toggle-all:before {
  content: '❯';
  font-size: 22px;
  color: #e6e6e6;
  padding: 10px 27px 10px 27px;
}

.toggle-all:checked:before {
  color: #737373;
}

.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.todo-list li {
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}

.todo-list li:last-child {
  border-bottom: none;
}


.todo-list li.editing .edit {
  display: block;
  width: 506px;
  padding: 12px 16px;
  margin: 0 43px 0 0;
}

.todo-list li label {
  word-break: break-all;
  padding: 15px 15px 15px 60px;
  margin-right: 45px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
}

.todo-list li.completed label {
  color: #d9d9d9;
  text-decoration: line-through;
}

.todo-list li .destroy {
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: #cc9a9a;
  margin: auto 0 11px;
  transition: color 0.2s ease-out;
}

.todo-list li .destroy:hover {
  color: #af5b5e;
}

.todo-list li .destroy:after {
  content: '×';
}

.todo-list li:hover .destroy {
  display: block;
}

.todo-list li .edit {
  display: none;
}


.footer {
  color: #777;
  font-size: 1.3vw;
  padding: 25px 15px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
}

.footer:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
  0 8px 0 -3px #f6f6f6,
  0 9px 1px -3px rgba(0, 0, 0, 0.2),
  0 16px 0 -6px #f6f6f6,
  0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.todo-count {
  float: right;
  text-align: right;
}

.todo-count strong {
  font-weight: 300;
}

.filters {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  left: 0;
  right: 0;
}

.filters li {
  display: inline;
}

.filters li a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

.filters li a:hover {
  border-color: rgba(175, 47, 47, 0.1);
}

.clear-completed,
html .clear-completed:active {
  float: left;
  position: relative;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
}

.clear-completed:hover {
  text-decoration: underline;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {

  .toggle-all {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-appearance: none;
    appearance: none;
  }
}

@media (max-width: 430px) {
  .footer {
    font-size: 2vw;
  }
}
</style>