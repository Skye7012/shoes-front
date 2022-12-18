<template>
  <div class="registration">
    <div>
      <label>Логин</label>
      <input
        v-model="login"
        class="input"
        placeholder="Логин"
        type="text"
        disabled
      />
    </div>
    <div>
      <label>Имя</label>
      <input
        v-model="name"
        class="input"
        v-bind:class="{ req: !name, changed: name != user.name }"
        placeholder="Имя"
        type="text"
      />
    </div>
    <div>
      <label>Фамилия</label>
      <input
        v-model="firstName"
        class="input"
        v-bind:class="{ changed: firstName !== user.firstName }"
        placeholder="Фамилия"
        type="text"
      />
    </div>
    <div>
      <label>Телефон</label>
      <input
        v-model="phone"
        class="input"
        v-bind:class="{ changed: phone !== user.phone }"
        placeholder="Телефон"
        type="text"
      />
    </div>
    <button @click="updateUser" class="button">Сохранить изменения</button>
    <button @click="$router.push('/orders')" class="button link">Заказы</button>
    <button @click="delProfile" class="button del">Удалить аккаунт</button>
    <button @click="user.logout()" class="button exit">Выйти</button>
  </div>
</template>

<script lang="ts">
import { UserPutRequest } from "@/api/Api";
import { useUserStore } from "@/stores/userStore";
import { defineComponent, ref } from "vue";

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
});
</script>

<style lang="scss" scoped>
@import "@/assets/vars.scss";
@import "@/assets/my.scss";

.registration {
  display: grid;
  grid-template-columns: 200px 200px;
  column-gap: 10px;
  grid-auto-rows: min-content;
  justify-content: center;
  align-content: center;
}

label {
  text-align: center;
}

.input {
  width: 100%;
  box-sizing: border-box;
  border: 1.5px solid $light;
  border-radius: 0.25rem;
  height: 2.5rem;
  text-align: center;

  margin-bottom: 10px;
}

.button {
  margin-bottom: 10px;
}

.del {
  background-color: $danger;
  color: white;
}

.changed {
  border-color: $info;
}

.req {
  border-color: $danger;
}
</style>
