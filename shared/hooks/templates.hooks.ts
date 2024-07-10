import { RootState } from "../lib/store/store";
import { useAppDispatch, useAppSelector } from "../lib/store/store.hooks";

export const useTemplates = () => {
  const dispatch = useAppDispatch();
  const templateState = useAppSelector((store: RootState) => store.templates);

  //   const { data: usersDataState, dataDetail: userDataState } = useAppSelector(
  //     (store: RootState) => store.users
  //   );

  const getTemplates = async () => {
    // dispatch(findUserThunk(uid));
  };

  return {
    getTemplates,
  };
};
