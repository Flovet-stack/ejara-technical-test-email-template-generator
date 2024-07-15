"use client";

import { EditorVariable } from "@/shared/types";
import React, { useState } from "react";
import "./variable-card.scss";
import { CustomButton } from "../custom-button/CustomButton";
import { EditIcon } from "@/shared/icons";
import { TrashIcon } from "@/shared/icons/trash-icon";
import { useAppDispatch, useAppSelector } from "@/shared/lib/store/store.hooks";
import { RootState } from "@/shared/lib/store/store";
import { CreateVariableForm } from "../create-variable-form/CreateVariableForm";
import { setVariablesState } from "@/shared/lib/store/features";

interface VariableCardProps {
  data: EditorVariable;
}

export const VariableCard: React.FC<VariableCardProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const defaultState = useAppSelector((store: RootState) => store.default);
  const variablesState = useAppSelector((store: RootState) => store.variables);
  const [showEdit, setShowEdit] = useState<boolean>(false);

  const { theme } = defaultState;
  const { variables } = variablesState;
  const { name, value } = data;

  if (showEdit) {
    return (
      <CreateVariableForm
        data={data}
        onClose={() => {
          setShowEdit(false);
        }}
      />
    );
  }

  const handleDelete = () => {
    const updatedVariables = variables.filter(
      (variable) => variable.id !== data.id
    );
    dispatch(
      setVariablesState({
        showForm: false,
        variables: updatedVariables,
      })
    );
  };

  return (
    <div className={`variable-card ${theme}`}>
      <div className="info">
        <p className="name">{name}</p>
        <p className="value">{value}</p>
      </div>
      <div className="buttons flex gap-1">
        <CustomButton
          theme="variable-card-button"
          icon={<EditIcon />}
          onClick={() => {
            setShowEdit(true);
          }}
        />
        <CustomButton
          theme="variable-card-button-red"
          icon={<TrashIcon />}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};
