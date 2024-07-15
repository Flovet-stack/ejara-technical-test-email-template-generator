import { RootState } from "@/shared/lib/store/store";
import { useAppSelector } from "@/shared/lib/store/store.hooks";
import React from "react";
import { VariableCard } from "../variable-card/VariableCard";
import { CreateVariableForm } from "../create-variable-form/CreateVariableForm";

export const VariablesList = () => {
  const variablesState = useAppSelector((store: RootState) => store.variables);
  const { variables, showForm } = variablesState;
  return (
    <div className="variables-list flex flex-col gap-1">
      {showForm && <CreateVariableForm />}
      <div className="flex-col gap-1">
        {variables?.map((variable) => (
          <VariableCard data={variable} key={variable.id} />
        ))}
      </div>
    </div>
  );
};
