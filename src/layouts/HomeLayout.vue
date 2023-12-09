<template class="bg-secondary">
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="page">
      <img
        class="vector vector-right"
        src="../assets/images/vector-right.png"
        alt="Um vetor com triângulo virado para a direita"
      />
      <img
        class="vector vector-left"
        src="../assets/images/vector-left.png"
        alt="Um vetor com triângulo virado para a esquerda"
      />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vector {
  position: fixed;
  width: 100px;
  height: 200px;
}

.vector-left {
  top: 0;
  right: 0;
}

.vector-right {
  bottom: 0;
  left: 0;
}
</style>
