import { routeNames } from "@/router/routeNames";

declare module "vue" {
  interface ComponentCustomProperties {
    $routeNames: typeof routeNames;
  }
}
