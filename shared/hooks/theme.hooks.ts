import { setThemeState } from "../lib/store/features";
import { useAppDispatch, useAppSelector } from "../lib/store/store.hooks";
import { RootState } from "../lib/store/store";

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const defaultState = useAppSelector((store: RootState) => store.default);

  const toggleTheme = async () => {
    dispatch(setThemeState(defaultState.theme === "light" ? "dark" : "light"));
  };

  return {
    toggleTheme,
  };
};
