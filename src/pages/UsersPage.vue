<script setup>
import UserCard from '../components/UserCard.vue'
const content = 'Cooperados'
const quant = 23
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
        <img
          class="icon-add"
          src="../assets/icons/person-add.png"
          alt="Ícone com um boneco e um sinal de mais que indica adicionar usuário"
          title="Adicione um cooperado"
        />
        <img
          class="icon-list"
          src="../assets/icons/list.png"
          alt="Ícone de lista que indica visualizar os usuários em forma de lista"
          title="Mudar visualização para lista"
        />
      </div>
    </div>
    <div class="content">
      <UserCard />
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
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 10px; /* Ajuste o valor conforme necessário */
  transform: translateY(-50%);
  height: 10px;
  width: 10px;
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
  padding: 20px;
}
</style>
