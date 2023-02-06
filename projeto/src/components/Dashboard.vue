<template>
    <div id="burger-table" v-if="burgers">
      <Message :msg="msg" v-show="msg" />
      <div>
        <div id="burger-table-heading">
          <div class="order-id">#:</div>
          <div>Cliente:</div>
          <div>Pão:</div>
          <div>Carne:</div>
          <div>Opcionais:</div>
          <div>Ações:</div>
        </div>
      </div>
      <div id="burger-table-rows">
        <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
          <div class="order-number">{{ burger.id }}</div>
          <div>{{ burger.nome }}</div>
          <div>{{ burger.pao }}</div>
          <div>{{ burger.carne }}</div>
          <div>
            <ul v-for="(opcional, index) in burger.opcionais" :key="index">
              <li>{{ opcional }}</li>
            </ul>
          </div>
          <div>
            <!-- o change para qd houver mudanca ele chamar o metodo updateburger-->
            <select name="status" class="status" @change="updateBurger($event, burger.id)">
              <option :value="s.tipo" v-for="s in status" :key="s.id" :selected="burger.status == s.tipo">
                {{ s.tipo }}
              </option>
            </select>
            <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Não há pedidos no momento!</h2>
    </div>
  </template>
  <script>
  import Message from './Message.vue'
    export default {
      name: "Dashboard",
      data() {
        return {
          burgers: null,
          burger_id: null,
          status: [], 
          msg: null
        }
      },
      components: {
        Message
      },
      methods: {
        async getPedidos() {
          const req = await fetch('http://localhost:3000/burgers')
  
          const data = await req.json()
  
          this.burgers = data
  
          // Resgata os status de pedidos
          this.getStatus()
  
        },
        async getStatus() {
          const req = await fetch('http://localhost:3000/status') //vai buscar a rota 
          //status, as rotas que ha sao as que estao em bd.json
          const data = await req.json()
          this.status = data
        },
        async deleteBurger(id) {
          const req = await fetch(`http://localhost:3000/burgers/${id}`, {
            method: "DELETE"
          });
          const res = await req.json()
          //para aparecer a mensagem
          //nao sei pq nao funciona com ` `entao feito 2 x
        this.msg =`Pedido foi atulizado para ${res.status}`
        this.msg = "Pedido atualizado"
        // apaga a mesagem apos 3 seg
        setTimeout(() => this.msg = "", 3000)
          //para obrigar a voltar a atualizar os pedidos depois
          //de se apagar
          this.getPedidos();
  
        },

        async updateBurger(event, id) {
          //buscar o valor que o user pos
          const option = event.target.value;
          //poe em string o json de STATUS
          const dataJson = JSON.stringify({status: option});
          //faz a requisicao do hamburguer correto, vai ao bd a esse hamburguer
          //com esse ID mudar o statuas
          const req = await fetch(`http://localhost:3000/burgers/${id}`, {
           //patch e como o update mas atualiza so o q foi enviado, nao tudo
            method: "PATCH",
            headers: { "Content-Type" : "application/json" },
            body: dataJson
          });
  
          const res = await req.json()
  
          console.log(res)
  
        }
      },
      mounted () {
      this.getPedidos()
      }
    }
  </script>
  
  <style scoped>
    #burger-table {
      max-width: 1200px;
      margin: 0 auto;
    }
  
    #burger-table-heading,
    #burger-table-rows,
    .burger-table-row {
      display: flex;
      flex-wrap: wrap;
    }
  
    #burger-table-heading {
      font-weight: bold;
      padding: 12px;
      border-bottom: 3px solid #333;
    }
  
    .burger-table-row {
      width: 100%;
      padding: 12px;
      border-bottom: 1px solid #CCC;
    }
  
    #burger-table-heading div,
    .burger-table-row div {
      width: 19%;
    }
  
    #burger-table-heading .order-id,
    .burger-table-row .order-number {
      width: 5%;
    }
  
    select {
      padding: 12px 6px;
      margin-right: 12px;
    }
  
    .delete-btn {
      background-color: #222;
      color:#fcba03;
      font-weight: bold;
      border: 2px solid #222;
      padding: 10px;
      font-size: 16px;
      margin: 0 auto;
      cursor: pointer;
      transition: .5s;
    }
    
    .delete-btn:hover {
      background-color: transparent;
      color: #222;
    }
    
  </style>