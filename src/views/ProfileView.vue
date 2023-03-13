<template>
  <div
    class="h-full grid grid-cols-[200px_200px] gap-x-3 auto-rows-min justify-center content-center"
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
        :class="{
          '!border-danger': !name,
          '!border-info': !!name && name != user.name
        }"
        placeholder="Имя"
        type="text"
      />
    </FormComponent>
    <FormComponent title="Фамилия">
      <InputComponent
        v-model="surname"
        class="mb-5 text-center !indent-0"
        :class="{ '!border-info': surname !== user.surname }"
        placeholder="Фамилия"
        type="text"
      />
    </FormComponent>
    <FormComponent title="Телефон">
      <InputComponent
        v-model="phone"
        class="mb-5 text-center !indent-0"
        :class="{ '!border-info': phone !== user.phone }"
        placeholder="Телефон"
        type="text"
      />
    </FormComponent>
    <ButtonComponent class="mb-2" @click="updateUser"
      >Сохранить изменения</ButtonComponent
    >
    <ButtonComponent
      class="mb-2 !bg-info text-white"
      @click="$router.push({ name: $router.routeNames.orders })"
      >Заказы</ButtonComponent
    >
    <ButtonComponent class="mb-2 !bg-danger text-white" @click="delProfile"
      >Удалить аккаунт</ButtonComponent
    >
    <ButtonComponent class="mb-2" @click="user.logout()">Выйти</ButtonComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { UserPutRequest } from "@/api/Api";
import { useUserStore } from "@/stores/userStore";
import FormComponent from "@/components/UI/FormComponent.vue";
import InputComponent from "@/components/UI/InputComponent.vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";

export default defineComponent({
  components: { FormComponent, InputComponent, ButtonComponent },
  setup() {
    const user = useUserStore();
    const login = ref(null as string | null);
    return {
      user,
      login
    };
  },
  data() {
    return {
      surname: null,
      name: null,
      phone: null
    } as Nullable<Required<UserPutRequest>>;
  },
  async mounted() {
    await this.user.fetchUser();
    if (!this.user.login) throw new Error("FetchUser Error");
    this.login = this.user.login;
    this.name = this.user.name;
    this.surname = this.user.surname;
    this.phone = this.user.phone;
  },
  methods: {
    updateUser() {
      if (!this.name) {
        alert("Имя обязательно");
        return;
      }
      this.user.putUser({
        ...(this.$data as Partial<UserPutRequest>)
      });
    },
    delProfile() {
      if (confirm("Вы уверены, что хотите удалить аккаунт?")) {
        this.user.deleteUser();
      }
    }
  }
});
</script>
