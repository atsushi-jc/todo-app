<template>
  <section class="container">
    <h1>Todoリスト</h1>
    <div class="addArea">
      <input type="text" name="addName" v-model="content" id="addName" />
      <button id="addButton" class="button" v-on:click="insert()">追加</button>
      <button class="button" v-on:click="changeOrder()">順番切り替え</button>
    </div>
    <table class="Lists">
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <div>
          <draggable v-model="index" element="ul" :options="{animation:300}">
            <tr v-for="(todo, index) in todos" :key="index">
              <div v-if="todo.editflag === false">
                <td>{{ todo.content }}</td>
              </div>
              <div v-if="todo.editflag === true">
                <input type="text" v-model="todo.content" />
              </div>
               <td>{{ todo.created }}</td>
              <td>
                <button class="button" @click="changeState(todo)">{{ todo.state }}</button>
              </td>
              <td>
                <div v-if="todo.editflag === false">
                  <button class="button" @click="changeflag(todo)">編集</button>
                </div>
                <div v-if="todo.editflag === true">
                  <button @click="changeflag(todo)">更新</button>
                </div>
              </td>
              <td>
                <button class="button" @click="remove(todo)">削除</button>
              </td>
            </tr>
          </draggable>
        </div>
      </tbody>
    </table>
    <div>
      <button id="save" class="button">保存</button>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Vuex from "vuex";
import { mapState } from "vuex";
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data: function () {
    return {
      content: "",
      sortOrder: 1,
      editflag: false,
    };
  },
  computed: {
    ...mapState(["todos"]),
  },
  methods: {
    insert: function () {
      if (this.content !== "") {
        this.$store.commit("insert", { content: this.content });
        this.content = "";
      }
    },
    remove: function (todo: string) {
      this.$store.commit("remove", todo);
    },
    changeState: function (todo: string) {
      this.$store.commit("changeState", todo);
    },
    sortedTodoBycCntent() {
      return this.todos.sort((a: string, b: string) => {
        let textA = a.content.toUpperCase();
        let textB = b.content.toUpperCase();
        return textA < textB ? -1 : textA > textB ? this.sortOrder : 0;
        textA = textB > 0 ? -1 : this.sortOrder;
      });
    },
    changeOrder() {
      this.sortOrder = this.sortOrder > 0 ? -1 : 1;
      this.sortedTodoBycCntent();
    },
    changeflag(todo:boolean) {
       this.$store.commit("changeflag", todo);
    },
  },
};
</script>
