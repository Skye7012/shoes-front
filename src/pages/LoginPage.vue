<template>
    <div class="page">
      <Header></Header>
      <Login class="login"></Login>
      <Footer class="footer"></Footer>
    </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
    Login,
    Header,
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

.login {
  height: 100%;
}

</style>
