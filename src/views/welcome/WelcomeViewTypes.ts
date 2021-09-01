import { useMainViewModel } from "../main/MainViewModel";

export namespace WelcomeViewTypes {
  export type Props = ReturnType<typeof useMainViewModel> & {};
}
