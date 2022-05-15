<template>
    <div class="page">
      <Header></Header>
      <Profile class="profile"></Profile>
      <Footer class="footer"></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Profile from "@/components/Profile.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
    Header,
    Profile,
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

.profile {
  height: 100%;
}

</style>
