<template>
    <div class="page">
      <div class="header">
        <Header></Header>
      </div>
      <Verify class="verify"></Verify>
      <Footer class="footer"></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Verify from "@/components/Verify.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
    Header,
    Verify,
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

.verify {
  height: 100%;
}

</style>
