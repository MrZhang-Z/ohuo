<template>
  <router-view />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

html body {
  min-width: 1200px;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 5px;
}

::-webkit-scrollbar-track {
  background: transparent;
}
</style>
