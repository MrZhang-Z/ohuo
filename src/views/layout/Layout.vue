<template>
  <Header />
  <RouterView />
  <Footer />
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
// 引入组件
import Header from './Header.vue'
import Footer from './Footer.vue'
export default defineComponent({
  name: 'Layout',
  components: {
    Header,
    Footer
  },
  props: {},
  setup() {
    return {};
  },
});
</script>
<style scoped lang='sass'></style>