<script setup>
import RegisterCard from '../components/RegisterCard.vue'
</script>

<template>
  <div class="create-container">
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
    <div class="content">
      <RegisterCard />
    </div>
  </div>
</template>

<style scoped>
.create-container {
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

.content {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
}
</style>
