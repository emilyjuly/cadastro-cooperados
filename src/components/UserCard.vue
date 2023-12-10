<script setup lang="ts">
import { useUsersStore } from '../stores/users'

const usersStore = useUsersStore()

interface User {
  id: string
  name: string
  register: string
  profile: string
  date: string
  budget: string
  phone: string
}
defineProps<{
  user: User
}>()
</script>

<template>
  <div class="card">
    <div class="avatar">
      <img
        :src="`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}&radius=50&backgroundType=gradientLinear`"
        alt="avatar"
      />
    </div>
    <div class="username">
      <button type="button" class="username-btn" @click="$router.push(`/details/${user.id}`)">
        <span class="username-link">{{ user.name }}</span>
      </button>
    </div>
    <div class="options">
      <button type="button" class="btn" @click="usersStore.delete(user.id)">
        <img src="../assets/icons/trash.png" alt="Ícone de lixeira" title="Excluir cooperado" />
      </button>
      <button type="button" class="btn" @click="$router.push(`/edit/${user.id}`)">
        <img src="../assets/icons/edit.png" alt="Ícone de lápis" title="Editar cooperado" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--medium-grey-color);
  width: 184px;
  height: 202px;
  padding: 5px;
  gap: 5px;
}

.avatar {
  width: 80px;
  height: 80px;
}

.username {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
}

.options {
  display: flex;
  width: 30%;
  justify-content: space-between;
}

.btn {
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;
  padding: 5px;
}

.btn:hover {
  background-color: var(--secondary-background-color);
  transition: 0.5s;
}

.username-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.5s;
}

.username-btn:hover {
  border-bottom: 1px solid var(--accent-color);
  transition: 0.5s;
}

.username-link {
  font-size: 15px;
  color: var(--color-text);
  font-weight: 500;
}
</style>
