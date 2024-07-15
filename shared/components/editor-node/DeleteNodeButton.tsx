import { message, Popconfirm, PopconfirmProps } from "antd";
import React from "react";
import { CustomButton } from "../custom-button/CustomButton";
import { TrashIcon } from "@/shared/icons/trash-icon";

const confirm: PopconfirmProps["onConfirm"] = (e) => {
  console.log(e);
  message.success("Click on Yes");
};

const cancel: PopconfirmProps["onCancel"] = (e) => {
  console.log(e);
  message.error("Click on No");
};

export const DeleteNodeButton = () => {
  return (
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <CustomButton theme="sidebar-section-button" icon={<TrashIcon />} />
    </Popconfirm>
  );
};
