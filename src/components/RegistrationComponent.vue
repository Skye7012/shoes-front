<template>
  <div class="m-auto flex flex-col justify-center">
    <InputComponent
      class="mb-3"
      v-model="login"
      v-bind:class="{ 'border-danger': !login }"
      placeholder="Логин"
      type="text"
    />
    <InputComponent
      class="mb-3"
      v-model="password"
      v-bind:class="{ 'border-danger': !password }"
      placeholder="Пароль"
      type="password"
    />
    <InputComponent
      class="mb-3"
      v-model="confirmPassword"
      v-bind:class="{ 'border-danger': !confirmPassword }"
      placeholder="Подтвердите пароль"
      type="password"
    />
    <InputComponent
      class="mb-3"
      v-model="name"
      v-bind:class="{ 'border-danger': !name }"
      placeholder="Имя"
      type="text"
    />
    <InputComponent
      class="mb-3"
      v-model="firstName"
      placeholder="Фамилия"
      type="text"
    />
    <InputComponent
      class="mb-3"
      v-model="phone"
      placeholder="Телефон"
      type="text"
    />
    <ButtonComponent @click="signUp" class="mt-5"
      >Зарегистрироваться</ButtonComponent
    >
  </div>
</template>

<script lang="ts">
import { useUserStore } from "@/stores/userStore";
import { defineComponent } from "vue";
import InputComponent from "./UI/InputComponent.vue";
import ButtonComponent from "./UI/ButtonComponent.vue";

export default defineComponent({
  data() {
    return {
      login: null as string | null,
      password: null as string | null,
      confirmPassword: null as string | null,
      name: null as string | null,
      firstName: null as string | null,
      phone: null as string | null,
    };
  },
  setup() {
    const user = useUserStore();
    return {
      user,
    };
  },
  methods: {
    signUp() {
      if (!this.login) {
        alert("Логин обязателен");
        return;
      }
      if (!this.password) {
        alert("Пароль обязателен");
        return;
      }
      if (!this.confirmPassword) {
        alert("Подтвердите пароль");
        return;
      }
      if (this.password != this.confirmPassword) {
        alert("Пароли не совпадают");
        return;
      }
      if (!this.name) {
        alert("Имя обязательно");
        return;
      }
      this.user.signUp({
        login: this.login,
        name: this.name,
        password: this.password,
        firstName: this.firstName ?? undefined,
        phone: this.phone ?? undefined,
      });
    },
  },
  components: { InputComponent, ButtonComponent },
});
</script>
