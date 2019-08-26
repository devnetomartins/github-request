<template>
  <div id="form">
    <nav>
      <div class="nav-wrapper green darken-1">
        <a href="#" class="brand-logo center">Users from GitHub</a>
      </div>
    </nav>
    <div class="container">
      <form @submit.prevent="sent_request">
        <label>Username</label>
        <input v-model="user" type="text" placeholder="Informe o username" data-user>
        <label class="message" v-if="state_error">{{error}}</label>
        <br/>
        <button class="waves-effect waves-light btn-small">Find</button>
      </form>
      <table v-if="view_data">
        <thead>
          <tr>
            <th>NOME DO REPOSITÓRIO</th>
            <th>STARS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data of result" :key="data.id">
            <td>{{ data.name }}</td>
            <td>{{ data.stars }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Info from '../services/user_info'
export default {
  name: 'Form',
  data () {
    return {
      user: '',
      view_data: false,
      error: '',
      state_error: false,
      result: []
    }
  },
  methods: {
    sent_request(){
      if(this.user != ""){
        this.state_error = false;
        Info.listar(this.user).then(response => {
        var dados = response;
        if(dados.status == 200){
          
          if(this.result.length > 0){
            this.result.length = 0;
          }
          
          for(var y=0; y<dados.data.length; y++){
            this.result.push({"id": dados.data[y].id, "name" : dados.data[y].name,
             "stars" : dados.data[y].stargazers_count });
          }
          
          this.view_data = true;
        }
      }).catch(() => {
        this.view_data = false;
        this.state_error = true;
        this.error = 'Username Invalido';
      })
      }else{
        this.view_data = false;
        this.state_error = true;
        this.error = 'Informe um username para pesquisar';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
