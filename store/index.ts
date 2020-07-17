import Vuex from 'vuex';

option:[
  {id:0 ,label:'作業前'},
  {id:1 ,label:'作業中'},
  {id:2 ,label:'完了'}
]

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      todos:  []
    }),
    mutations: {
      insert: function(state:any , obj:any) {
        var d = new Date();
        var fmt = d.getFullYear()
                + '-' + ('00' + (d.getMonth() + 1)).slice(-2)
                + '-' + ('00' + d.getDate()).slice(-2)
                + ' ' + ('00' + d.getHours()).slice(-2)
                + ':' + ('00' + d.getMinutes()).slice(-2);
        state.todos.unshift({
          content: obj.content,
          created: fmt,
          state: '作業中',
        });
      },
      remove: function(state:any, obj:any) {
        for(let i = 0; i < state.todos.length; i++) {
          const ob = state.todos[i];
          if(ob.content == obj.content) {
              state.todos.splice(i, 1);
              return;
          }
        }
      },
      changeState: function(state:any, obj:any){

      }
    },
  })
}



export default createStore;
