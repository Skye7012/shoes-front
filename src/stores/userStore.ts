import { defineStore } from "pinia";
import { SignUpRequest, UserPutRequest } from "@/api/Api";
import { apiClient } from "@/api/apiClient";
import { getToken, removeToken, setToken } from "@/envHelper";
import { routeNames } from "@/router/routeNames";

interface UserType {
  isAuth: boolean;
  login: string | null;
  name: string | null;
  firstName: string | null;
  phone: string | null;
}

export const useUserStore = defineStore({
  id: "user",

  state: (): UserType => ({
    isAuth: !!getToken(),
    name: null,
    firstName: null,
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
        this.$router.push({ name: routeNames.profile });
      } catch (e) {
        alert(e);
      }
    },

    async signUp(user: SignUpRequest) {
      try {
        await apiClient.user.signUpCreate(user);

        this.$router.push({ name: routeNames.login });
      } catch (e) {
        alert(e);
      }
    },

    logout() {
      removeToken();
      this.isAuth = false;
      this.$router.push({ name: routeNames.login });
    },

    async fetchUser() {
      try {
        const response = await apiClient.user.userList();

        const user = response.data;
        await this.$patch({
          ...user
        });
      } catch (e) {
        alert(e);
      }
    },

    async putUser(user: UserPutRequest) {
      try {
        await apiClient.user.userUpdate(user);

        this.$patch({
          ...user
        });
      } catch (e) {
        alert(e);
      }
    },

    async deleteUser() {
      try {
        await apiClient.user.userDelete();

        this.isAuth = false;
        this.login = null;
        this.name = null;
        this.firstName = null;
        this.phone = null;
        removeToken();
        localStorage.removeItem("basket");

        this.$router.push({ name: routeNames.home });
      } catch (e) {
        alert(e);
      }
    }
  }
});
