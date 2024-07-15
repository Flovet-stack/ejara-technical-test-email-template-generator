"use client";

import React from "react";
import { SortableEditor } from "./_components/sortable-editor/SortableEditor";

const page = () => {
  return (
    <div className="h-full flex justify-center pt-[1.5rem]">
      <SortableEditor />
    </div>
  );
};

export default page;
