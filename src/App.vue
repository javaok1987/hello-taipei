<template>
  <div id="app">
    <header>
      <router-link :to="'/'">
        <h1 class="app-logo">臺北旅遊網</h1>
      </router-link>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  text-align: center;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  header {
    margin: 30px 0;
  }
  .app-logo {
    display: inline-block;

    width: auto;
    border-bottom: 3px solid $--color-primary;
  }
}
</style>
