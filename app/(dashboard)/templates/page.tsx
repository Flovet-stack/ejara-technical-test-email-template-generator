"use client";

import { Droppable } from "@/shared/components";
import React from "react";

const page = () => {
  return (
    <div>
      <Droppable id="droppable">
        <div className="test w-[400px] h-[400px] bg-white"></div>
      </Droppable>
    </div>
  );
};

export default page;
