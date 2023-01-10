<template>
  <div class="page">
    <div class="header">
      <HeaderComponent></HeaderComponent>
    </div>
    <RegistrationComponent class="registration"></RegistrationComponent>
    <FooterComponent class="footer"></FooterComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import RegistrationComponent from "@/components/RegistrationComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  components: {
    HeaderComponent,
    RegistrationComponent,
    FooterComponent
  }
});
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.registration {
  height: 100%;
}
</style>
