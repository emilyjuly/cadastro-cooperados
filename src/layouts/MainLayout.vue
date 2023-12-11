<template class="bg-secondary">
  <header>
    <div class="toolbar">
      <img
        class="logo"
        src="../assets/images/unicred-logo.png"
        alt="Logo da Unicred"
        @click="$router.push('/users')"
      />
    </div>
  </header>

  <router-view />
</template>

<style scoped>
.toolbar {
  display: flex;
  align-items: center;
  background-color: var(--light-color);
  padding-left: 10px;
}

.logo {
  cursor: pointer;
  width: 107px;
  height: 40px;
}
</style>
