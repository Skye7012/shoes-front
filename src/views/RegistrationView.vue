<template>
  <div class="h-full m-auto flex flex-col justify-center">
    <InputComponent
      v-model="login"
      class="mb-3"
      :class="{ 'border-danger': !login }"
      placeholder="Логин"
      type="text"
    />
    <InputComponent
      v-model="password"
      class="mb-3"
      :class="{ 'border-danger': !password }"
      placeholder="Пароль"
      type="password"
    />
    <InputComponent
      v-model="confirmPassword"
      class="mb-3"
      :class="{ 'border-danger': !confirmPassword }"
      placeholder="Подтвердите пароль"
      type="password"
    />
    <InputComponent
      v-model="name"
      class="mb-3"
      :class="{ 'border-danger': !name }"
      placeholder="Имя"
      type="text"
    />
    <InputComponent
      v-model="firstName"
      class="mb-3"
      placeholder="Фамилия"
      type="text"
    />
    <InputComponent
      v-model="phone"
      class="mb-3"
      placeholder="Телефон"
      type="text"
    />
    <ButtonComponent class="mt-5" @click="signUp"
      >Зарегистрироваться</ButtonComponent
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from "@/stores/userStore";
import InputComponent from "@/components/UI/InputComponent.vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";

export default defineComponent({
  components: { InputComponent, ButtonComponent },
  setup() {
    const user = useUserStore();
    return {
      user
    };
  },
  data() {
    return {
      login: null as string | null,
      password: null as string | null,
      confirmPassword: null as string | null,
      name: null as string | null,
      firstName: null as string | null,
      phone: null as string | null
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
      if (this.password !== this.confirmPassword) {
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
        surname: this.firstName ?? undefined,
        phone: this.phone ?? undefined
      });
    }
  }
});
</script>
