import { defineStore } from "pinia";
import { SignUpUserCommand, PutUserCommand } from "@/api/Api";
import { apiClient } from "@/api/apiClient";
import { getToken, removeToken, setToken } from "@/envHelper";
import { throwError } from "@/ErrorHandling";

interface UserType {
  isAuth: boolean;
  login: string | null;
  name: string | null;
  surname: string | null;
  phone: string | null;
}

export const useUserStore = defineStore({
  id: "user",

  state: (): UserType => ({
    isAuth: !!getToken(),
    name: null,
    surname: null,
    login: null,
    phone: null
  }),

  actions: {
    async signIn(password?: string) {
      if (!this.login) {
        alert("Не указан логин");
        return;
      }
      if (!password) {
        alert("Не указан пароль");
        return;
      }

      try {
        const response = await apiClient.user.signInCreate({
          login: this.login,
          password
        });

        setToken(response.data.token);
        this.isAuth = true;
        this.$router.push({ name: this.$router.routeNames.profile });
      } catch (e) {
        throwError(e);
      }
    },

    async signUp(user: SignUpUserCommand) {
      try {
        await apiClient.user.signUpCreate(user);

        this.$router.push({ name: this.$router.routeNames.login });
      } catch (e) {
        throwError(e);
      }
    },

    logout() {
      removeToken();
      this.isAuth = false;
      this.$router.push({ name: this.$router.routeNames.login });
    },

    async fetchUser() {
      try {
        const response = await apiClient.user.userList();

        const user = response.data;
        await this.$patch({
          ...user
        });
      } catch (e) {
        throwError(e);
      }
    },

    async putUser(user: PutUserCommand) {
      try {
        await apiClient.user.userUpdate(user);

        this.$patch({
          ...user
        });
      } catch (e) {
        throwError(e);
      }
    },

    async deleteUser() {
      try {
        await apiClient.user.userDelete();

        this.isAuth = false;
        this.login = null;
        this.name = null;
        this.surname = null;
        this.phone = null;
        removeToken();
        localStorage.removeItem("basket");

        this.$router.push({ name: this.$router.routeNames.home });
      } catch (e) {
        throwError(e);
      }
    }
  }
});
