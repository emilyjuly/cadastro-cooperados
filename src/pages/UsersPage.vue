<script setup>
import { useUsersStore } from '../stores/users'
import UserCard from '../components/UserCard.vue'

const usersStore = useUsersStore()

const content = 'Cooperados'
const quant = usersStore.users.length
</script>

<template>
  <div class="users-container">
    <div class="top">
      <p class="title">{{ content }} ({{ quant }})</p>
      <div class="options">
        <div class="search-container">
          <input
            class="input-search"
            type="search"
            name="search"
            placeholder="Pesquise um nome"
            title="Pesquise um nome"
          />
          <img class="search-icon" src="../assets/icons/search.png" alt="Ícone de pesquisa" />
        </div>
        <button type="button" @click="this.$router.push('create')">
          <img
            class="icon-add"
            src="../assets/icons/person-add.png"
            alt="Ícone com um boneco e um sinal de mais que indica adicionar usuário"
            title="Adicione um cooperado"
          />
        </button>
        <button type="button" v-if="usersStore.users.length > 0">
          <img
            class="icon-list"
            src="../assets/icons/list.png"
            alt="Ícone de lista que indica visualizar os usuários em forma de lista"
            title="Mudar visualização para lista"
          />
        </button>
      </div>
    </div>
    <div class="content" v-if="usersStore.users.length > 0">
      <div class="content" v-for="user in usersStore.users" :key="user.id">
        <UserCard :username="user.name" />
      </div>
    </div>
    <div v-else class="not-found-container">
      <p class="not-found-text">Ainda não há cooperados cadastrados...</p>
      <img
        class="not-found-image"
        src="../assets/icons/404-error.png"
        alt="Imagem indicando erro de usuários inexistentes"
      />
      <button
        type="button"
        class="create-user"
        title="Clique para cadastrar um cooperado"
        @click="this.$router.push('create')"
      >
        Cadastrar
      </button>
    </div>
  </div>
</template>

<style scoped>
.users-container {
  padding: 20px;
}

.top {
  display: flex;
  justify-content: space-between;
}

.options {
  display: flex;
  gap: 20px;
  align-items: center;
}

.title {
  font-size: 15px;
  font-weight: 500;
}

.search-container {
  position: relative;
}

.input-search {
  width: 200px;
  height: 30px;
  border: none;
  background-color: var(--light-color);
  padding-left: 30px;
  color: var(--color-text);
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 10px; /* Ajuste o valor conforme necessário */
  transform: translateY(-50%);
  height: 13px;
  width: 13px;
  color: var(--color-text);
}

.icon-add {
  width: 18px;
  height: 18px;
}

.icon-list {
  width: 15px;
  height: 15px;
}

.content {
  display: flex;
  padding: 20px;
}

.not-found-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.not-found-text {
  font-size: 20px;
  text-align: center;
  color: var(--color-text);
  font-weight: 500;
}

.not-found-image {
  width: 20%;
}

.create-user {
  border: none;
  background-color: var(--accent-color);
  padding: 10px;
  color: var(--light-color);
  transition: 0.5s;
}

.create-user:hover {
  background-color: var(--light-green-color);
  transition: 0.5s;
}

button {
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: 0.5s;
  padding: 10px;
}

button:hover {
  background-color: var(--medium-grey-color);
  transition: 0.5s;
}
</style>
