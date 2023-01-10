<template>
  <div class="page">
    <div class="header">
      <HeaderComponent></HeaderComponent>
    </div>
    <ProfileComponent class="profile"></ProfileComponent>
    <FooterComponent class="footer"></FooterComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  components: {
    HeaderComponent,
    ProfileComponent,
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

.profile {
  height: 100%;
}
</style>
