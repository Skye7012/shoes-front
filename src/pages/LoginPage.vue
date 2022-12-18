<template>
  <div class="page">
    <div class="header">
      <HeaderComponent></HeaderComponent>
    </div>
    <LoginComponent class="login"></LoginComponent>
    <FooterComponent class="footer"></FooterComponent>
  </div>
</template>

<script lang="ts">
import LoginComponent from "@/components/LoginComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    LoginComponent,
    HeaderComponent,
    FooterComponent,
  },
});
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.login {
  height: 100%;
}
</style>
