<template class="bg-secondary">
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <div class="toolbar">
          <img class="logo" src="../assets/images/unicred-logo.png" alt="Logo da Unicred" /></div
      ></q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.toolbar {
  display: flex;
  align-items: center;
  background-color: var(--light-color);
  padding-left: 10px;
}

.logo {
  width: 107px;
  height: 40px;
}
</style>
