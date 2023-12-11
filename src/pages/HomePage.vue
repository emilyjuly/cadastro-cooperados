<script setup lang="ts">
const title = 'Cadastro de cooperados'
const buttonText = 'Acessar'
const linkText = 'https://www.unicred.com.br/'
</script>

<template>
  <div class="home-container">
    <div class="content">
      <img class="logo" src="../assets/images/unicred-logo.png" alt="Logo da Unicred" />
      <p class="title">{{ title }}</p>
      <img
        class="icon"
        src="../assets/icons/people.png"
        alt="Ícone com 3 bonecos, indicando várias pessoas"
      />
      <button class="btn" type="button" @click="$router.push('users')">
        {{ buttonText }}
      </button>
      <p class="link">{{ linkText }}</p>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
}

.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
}

.logo {
  display: flex;
  justify-content: center;
  width: 288px;
  height: 113px;
}

.title {
  font-size: 20px;
  font-weight: 500;
}

.icon {
  width: 40px;
  height: 28px;
  margin: 20px 0px 20px 0px;
}

.btn {
  width: 200px;
  height: 35px;
  border: none;
  background: var(--gold-color);
  color: var(--light-color);
  transition: 0.5s;
  cursor: pointer;
}

.btn:hover {
  background-color: var(--light-gold-color);
  transition: 0.5s;
}

.link {
  font-size: 10px;
}
</style>
