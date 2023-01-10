<template>
  <div class="m-auto flex flex-col justify-center">
    <InputComponent
      v-model="user.login"
      class="mb-5"
      placeholder="Логин"
      type="text"
    />
    <InputComponent
      v-model="password"
      class="mb-5"
      placeholder="Пароль"
      type="password"
    />
    <ButtonComponent @click="user.signIn(password ?? undefined)">
      Войти
    </ButtonComponent>
    <LinkComponent to="/registration" class="mt-1 text-right"
      >Регистрация</LinkComponent
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from "@/stores/userStore";
import LinkComponent from "./UI/LinkComponent.vue";
import InputComponent from "./UI/InputComponent.vue";
import ButtonComponent from "./UI/ButtonComponent.vue";

export default defineComponent({
  components: { LinkComponent, InputComponent, ButtonComponent },
  setup() {
    const user = useUserStore();
    return {
      user
    };
  },
  data() {
    return {
      password: null as string | null
    };
  }
});
</script>
