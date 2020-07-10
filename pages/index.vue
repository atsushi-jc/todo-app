<template>
  <section class="container">
    <h1>Todoリスト</h1>
    <div class="addArea">
      <input type="text" name="addName" id="addName"/>
      <button id="addButton" class="button button--green">追加</button>
    </div>
    <table class="Lists">
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in todos" :key="index">
          <td>{{ item.content }}</td>
          <td>{{ item.created }}</td>
          <td>
            <button class="button">{{ item.state }}</button>
          </td>
          <td>
            <button class="button button--red">削除</button>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <table class="footer">
      <td>
        <div>
          <button class="button button--Save">保存</button>
        </div>
      </td>
    </table>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Vuex from "vuex";
import {mapState} from 'vuex';

export default {
  data: function() {
    return {
      content: ''
    }
  },
  computed: {
    ...mapState(['todos'])
  }
}

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      todos: [
        { content: "テスト", created: "2020-04-30 17:00", state: "作業前" },
        {
          content: "コーディング",
          created: "2020-04-30 16:00",
          state: "作業中"
        },
        { content: "環境構築", created: "2020-04-30 15:30", state: "完了" }
      ]
    })
  });
};

var app = new Vue({
  el: "#addArea",
  data: {
    todos: []
  },
  methods: {
    addTodo: function() {}
  }
});
</script>


