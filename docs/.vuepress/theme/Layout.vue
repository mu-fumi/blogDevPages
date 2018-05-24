<template>
  <div class="page-main">
    <nav-menu></nav-menu>
    <div class="page-container">
      <page></page>
    </div>
  </div>
</template>

<script>
import Page from './components/page.vue'
import NavMenu from './components/nav-menu.vue'

export default {
  components: {
    Page,
    NavMenu
  }
}
</script>

<style>
@import './styles/base.css';
@import './styles/theme.css';

.page-main {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.page-main .page-container {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  background: #e6ecf0;
}
.page-main .page-container > aside {
  flex: 1;
}
.page-main .page-container > section {
  flex: 3;
  background: #ccc;
}
</style>
