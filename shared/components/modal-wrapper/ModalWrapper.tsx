import { RootState } from "@/shared/lib/store/store";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import { ConfigProvider } from "antd";
import React, { ReactNode } from "react";

export const ModalWrapper = ({ children }: { children: ReactNode }) => {
  const defaultState = useAppSelector((store: RootState) => store.default);
  const isDarkTheme = defaultState.theme === "dark";

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            titleColor: isDarkTheme ? "#fff" : "#131313",
            contentBg: isDarkTheme ? "#131313" : "#fff",
            footerBg: isDarkTheme ? "#131313" : "#fff",
            headerBg: isDarkTheme ? "#131313" : "#fff",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
