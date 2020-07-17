<template>
  <section class="container">
    <h1>Todoリスト</h1>
    <div class="addArea">
      <input type="text" name="addName" v-model="content" id="addName" />
      <button id="addButton" class="button" v-on:click="insert()">追加</button>
    </div>
    <table class="Lists">
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <div>
          <tr v-for="(todo, index) in todos" :key="index">
            <td>{{ todo.content }}</td>
            <td>{{ todo.created }}</td>
            <td>
              <button class="button" @click="changeState(todo)">{{ todo.state }}</button>
            </td>
            <td>
              <button class="button">編集</button>
            </td>
            <td>
              <button class="button" @click="remove(todo)">削除</button>
            </td>
          </tr>
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

export default {
  data: function() {
    return {
      content:  "",
    };
  },
  computed: {
    ...mapState(["todos"])
  },

  methods: {
    insert: function() {
      if (this.content !== "") {
        this.$store.commit("insert", { content: this.content });
        this.content = "";
      }
    },
    remove: function(todo:any) {
      this.$store.commit("remove", todo);
    },
    changeState: function(todo:any) {
      this.$store.commit("changeState", todo);
    },
  }
};
</script>


