import { AppTheme } from "./../types/index";
import { setThemeState } from "../lib/store/features";
import { useAppDispatch } from "../lib/store/store.hooks";

export const useTheme = () => {
  const dispatch = useAppDispatch();
  // const defaultState = useAppSelector((store: RootState) => store.default);

  const setTheme = async (theme: AppTheme) => {
    dispatch(setThemeState(theme));
  };

  return {
    setTheme,
  };
};
