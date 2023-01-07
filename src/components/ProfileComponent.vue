<template>
  <div
    class="grid grid-cols-[200px_200px] gap-x-3 auto-rows-min justify-center content-center"
  >
    <FormComponent title="Логин">
      <InputComponent
        v-model="login"
        class="mb-3 text-center !indent-0"
        placeholder="Логин"
        type="text"
        disabled
      />
    </FormComponent>
    <FormComponent title="Имя">
      <InputComponent
        v-model="name"
        class="mb-3 text-center !indent-0"
        v-bind:class="{
          '!border-danger': !name,
          '!border-info': name != user.name,
        }"
        placeholder="Имя"
        type="text"
      />
    </FormComponent>
    <FormComponent title="Фамилия">
      <InputComponent
        v-model="firstName"
        class="mb-5 text-center !indent-0"
        v-bind:class="{ '!border-info': firstName !== user.firstName }"
        placeholder="Фамилия"
        type="text"
      />
    </FormComponent>
    <FormComponent title="Телефон">
      <InputComponent
        v-model="phone"
        class="mb-5 text-center !indent-0"
        v-bind:class="{ '!border-info': phone !== user.phone }"
        placeholder="Телефон"
        type="text"
      />
    </FormComponent>
    <ButtonComponent @click="updateUser" class="mb-2"
      >Сохранить изменения</ButtonComponent
    >
    <ButtonComponent
      @click="$router.push('/orders')"
      class="mb-2 !bg-info text-white"
      >Заказы</ButtonComponent
    >
    <ButtonComponent @click="delProfile" class="mb-2 !bg-danger text-white"
      >Удалить аккаунт</ButtonComponent
    >
    <ButtonComponent @click="user.logout()" class="mb-2">Выйти</ButtonComponent>
  </div>
</template>

<script lang="ts">
import { UserPutRequest } from "@/api/Api";
import { useUserStore } from "@/stores/userStore";
import { defineComponent, ref } from "vue";
import FormComponent from "./UI/FormComponent.vue";
import InputComponent from "./UI/InputComponent.vue";
import ButtonComponent from "./UI/ButtonComponent.vue";

export default defineComponent({
  data() {
    return {
      firstName: null,
      name: null,
      phone: null,
    } as Nullable<Required<UserPutRequest>>;
  },
  setup() {
    const user = useUserStore();
    const login = ref(null as string | null);
    return {
      user,
      login,
    };
  },
  methods: {
    updateUser() {
      if (!this.name) {
        alert("Имя обязательно");
        return;
      }
      this.user.putUser({
        ...(this.$data as Partial<UserPutRequest>),
      });
    },
    delProfile() {
      if (confirm("Вы уверены, что хотите удалить аккаунт?")) {
        this.user.deleteUser();
      } else {
        return;
      }
    },
  },
  async mounted() {
    await this.user.fetchUser();
    if (!this.user.login) throw new Error("FetchUser Error");
    this.login = this.user.login;
    this.name = this.user.name;
    this.firstName = this.user.firstName;
    this.phone = this.user.phone;
  },
  components: { FormComponent, InputComponent, ButtonComponent },
});
</script>
