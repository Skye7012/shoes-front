<template>
    <div class="page">
      <div class="header">
        <Header></Header>
      </div>
      <Registration class="registration"></Registration>
      <Footer class="footer"></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Registration from "@/components/Registration.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
    Header,
    Registration,
    Footer
    }
  }
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
