<template>
  <div class="not-found-container">
    <img
      class="not-found-image"
      src="../assets/icons/404-error.png"
      alt="Imagem indicando erro de usuários inexistentes"
    />
    <button
      type="button"
      class="back"
      title="Clique para voltar para a tela inicial"
      @click="$router.push('/users')"
    >
      Voltar para a tela inicial
    </button>
  </div>
</template>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.back {
  border: none;
  background-color: var(--accent-color);
  padding: 10px;
  color: var(--light-color);
  transition: 0.5s;
}

.back:hover {
  background-color: var(--light-green-color);
  transition: 0.5s;
}
</style>
