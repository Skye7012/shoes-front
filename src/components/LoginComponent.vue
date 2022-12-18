<template>
  <div class="login">
    <input
      v-model="user.login"
      class="input"
      style="margin-bottom: 10px"
      placeholder="Логин"
      type="text"
    />
    <input
      v-model="password"
      class="input"
      style="margin-bottom: 20px"
      placeholder="Пароль"
      type="password"
    />
    <button @click="user.signIn(password)" class="button">Войти</button>
    <router-link to="/registration" style="margin-top: 5px; text-align: right"
      >Регистрация</router-link
    >
  </div>
</template>

<script lang="ts">
import { useUserStore } from "@/stores/userStore";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      password: undefined as string | undefined,
    };
  },
  setup() {
    const user = useUserStore();

    return {
      user,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/vars.scss";
@import "@/assets/my.scss";

.login {
  margin: auto auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.input {
  width: 100%;
  box-sizing: border-box;
  border: 1.5px solid $light;
  border-radius: 0.25rem;
  height: 2.5rem;
  text-indent: 1rem;
}
</style>
