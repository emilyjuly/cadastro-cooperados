<script setup>
import { useUsersStore } from '../stores/users'
import UserCard from '../components/UserCard.vue'
import { computed } from 'vue'

const usersStore = useUsersStore()

usersStore.getAll()

const content = 'Cooperados'
const quant = usersStore.users.length

const filteredUsers = computed(() => {
  const searchQuery = usersStore.searchQuery ? usersStore.searchQuery.toLowerCase() : ''
  return usersStore.users.filter((user) => user.name.toLowerCase().includes(searchQuery))
})

const handleSearchInput = () => {
  usersStore.setSearchQuery(usersStore.searchQuery)
}
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
            v-model="usersStore.searchQuery"
            @input="handleSearchInput"
          />
          <img class="search-icon" src="../assets/icons/search.png" alt="Ícone de pesquisa" />
        </div>
        <button type="button" @click="$router.push('create')">
          <img
            class="icon-add"
            src="../assets/icons/person-add.png"
            alt="Ícone com um boneco e um sinal de mais que indica adicionar usuário"
            title="Adicione um cooperado"
          />
        </button>
      </div>
    </div>
    <div class="content" v-if="filteredUsers.length > 0">
      <div class="content" v-for="user in filteredUsers" :key="user.id">
        <UserCard :user="user" />
      </div>
    </div>
    <div class="not-found-content" v-else-if="usersStore.users.length > 0">
      <p class="not-found-text">Nenhum resultado encontrado para "{{ usersStore.searchQuery }}"</p>
      <div class="content">
        <div v-for="user in usersStore.users" :key="user.id">
          <UserCard :user="user" />
        </div>
      </div>
    </div>

    <div v-else class="not-found-container">
      <p class="not-found-text-2">Ainda não há cooperados cadastrados...</p>
      <img
        class="not-found-image"
        src="../assets/icons/404-error.png"
        alt="Imagem indicando erro de usuários inexistentes"
      />
      <button
        type="button"
        class="create-user"
        title="Clique para cadastrar um cooperado"
        @click="$router.push('create')"
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
.content {
  display: flex;
  padding: 20px;
  gap: 20px;
  flex-wrap: wrap;
}

.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.not-found-text {
  font-size: 15px;
  text-align: left;
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

.not-found-content {
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>
