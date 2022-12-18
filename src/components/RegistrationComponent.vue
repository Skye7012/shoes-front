<template>
  <div class="registration">
    <input
      v-model="login"
      class="input"
      v-bind:class="{ req: !login }"
      placeholder="Логин"
      type="text"
    />
    <input
      v-model="password"
      class="input"
      v-bind:class="{ req: !password }"
      placeholder="Пароль"
      type="password"
    />
    <input
      v-model="confirmPassword"
      class="input"
      v-bind:class="{ req: !confirmPassword }"
      placeholder="Подтвердите пароль"
      type="password"
    />
    <input
      v-model="name"
      class="input"
      v-bind:class="{ req: !name }"
      placeholder="Имя"
      type="text"
    />
    <input
      v-model="firstName"
      class="input"
      placeholder="Фамилия"
      type="text"
    />
    <input v-model="phone" class="input" placeholder="Телефон" type="text" />
    <button @click="signUp" class="button">Зарегистрироваться</button>
  </div>
</template>

<script lang="ts">
import { useUserStore } from "@/stores/userStore";
import { defineComponent } from "vue";

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
});
</script>

<style lang="scss" scoped>
@import "@/assets/vars.scss";
@import "@/assets/my.scss";

.registration {
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

  margin-bottom: 10px;
}

.button {
  margin-top: 20px;
}

.req {
  border-color: $danger;
}
</style>
