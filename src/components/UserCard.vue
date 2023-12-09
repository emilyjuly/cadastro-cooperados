<script setup lang="ts">
defineProps<{
  username: string
}>()
</script>

<template>
  <div class="card">
    <div class="avatar">
      <img
        :src="`https://api.dicebear.com/7.x/initials/svg?seed=${username}&radius=50&backgroundType=gradientLinear`"
        alt="avatar"
      />
    </div>
    <div class="username">{{ username }}</div>
    <div class="options">
      <button type="button">
        <img src="../assets/icons/trash.png" alt="Ícone de lixeira" title="Excluir cooperado" />
      </button>
      <button type="button">
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

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;
  padding: 5px;
}

button:hover {
  background-color: var(--secondary-background-color);
  transition: 0.5s;
}
</style>
