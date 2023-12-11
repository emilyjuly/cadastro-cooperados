<script setup>
import { useUsersStore } from '../stores/users'

const usersStore = useUsersStore()

const formatDateString = (dateString) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
  return new Date(dateString).toLocaleDateString('pt-BR', options)
}
</script>

<template>
  <div class="details-container">
    <div class="top">
      <button class="btn" type="button" @click="$router.push('/users')">
        <img
          class="icon"
          src="../assets/icons/arrow-left.png"
          alt="Seta para a esquerda"
          title="Voltar para a tela de visualização"
        />
        <p class="back">Voltar</p>
      </button>
    </div>
    <div class="top-profile">
      <img
        class="avatar"
        :src="`https://api.dicebear.com/7.x/initials/svg?seed=${
          usersStore.getOne($route.params.id).name
        }&radius=50&backgroundType=gradientLinear`"
        alt="avatar"
      />
      <div>
        <p class="name">{{ usersStore.getOne($route.params.id).name }}</p>
        <p class="id">{{ usersStore.getOne($route.params.id).id }}</p>
      </div>
    </div>
    <div class="infos">
      <div class="content">
        <div v-if="usersStore.getOne($route.params.id).profile === 'pf'">
          <div class="line">
            <div class="field">
              <span class="label">Nome:</span> {{ usersStore.getOne($route.params.id).name }}
            </div>
            <div class="field">
              <span class="label">CPF:</span> {{ usersStore.getOne($route.params.id).register }}
            </div>
          </div>
          <div class="line">
            <div class="field">
              <span class="label">Telefone:</span> {{ usersStore.getOne($route.params.id).phone }}
            </div>
            <div class="field">
              <span class="label">Data de nascimento:</span>
              {{ formatDateString(usersStore.getOne($route.params.id).date) }}
            </div>
          </div>
          <div class="line">
            <div class="field"><span class="label">Perfil:</span> Pessoa física</div>
            <div class="field">
              <span class="label">Renda (mensal):</span>
              {{ usersStore.getOne($route.params.id).budget }}
            </div>
          </div>
        </div>
        <div v-else-if="usersStore.getOne($route.params.id).profile === 'pj'">
          <div class="line">
            <div class="field">
              <span class="label">Nome:</span> {{ usersStore.getOne($route.params.id).name }}
            </div>
            <div class="field">
              <span class="label">CNPJ:</span> {{ usersStore.getOne($route.params.id).register }}
            </div>
          </div>
          <div class="line">
            <div class="field">
              <span class="label">Telefone:</span> {{ usersStore.getOne($route.params.id).phone }}
            </div>
            <div class="field">
              <span class="label">Data de constituição:</span>
              {{ formatDateString(usersStore.getOne($route.params.id).date) }}
            </div>
          </div>
          <div class="line">
            <div class="field"><span class="label">Perfil:</span> Pessoa jurídica</div>
            <div class="field">
              <span class="label">Faturamento (mensal):</span>
              {{ usersStore.getOne($route.params.id).budget }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.details-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.top {
  display: flex;
  align-items: center;
  justify-content: left;
}

button {
  border: none;
  background-color: transparent;
  padding: 10px;
  transition: 0.5s;
  cursor: pointer;
}

button:hover {
  background-color: var(--medium-grey-color);
  transition: 0.5s;
}

.icon {
  color: var(--color-text);
  width: 13px;
  height: 13px;
}

.btn {
  display: flex;
  align-items: center;
  gap: 5px;
}

.back {
  font-size: 15px;
  color: var(--color-text);
  font-weight: 500;
}

.avatar {
  display: flex;
  width: 100px;
  height: 100px;
}

.top-profile {
  display: flex;
  gap: 10px;
  align-items: center;
}

.name {
  font-size: 20px;
  font-weight: 500;
}

.id {
  font-size: 10px;
}

.infos {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.content {
  background-color: var(--light-color);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.field {
  display: flex;
  align-items: center;
  background-color: var(--color-background);
  padding: 5px;
  width: 100%;
  height: 30px;
  margin: 10px;
  font-size: 13px;
  gap: 5px;
}

.line {
  display: flex;
}

.label {
  font-weight: 600;
}
</style>
