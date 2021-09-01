import React from "react";
import { NavLink } from "react-router-dom";

export const NotFoundView = () => {
  return (
    <div className="inline-flex flex-col w-full min-h-screen h-full max-h-screen overflow-hidden bg-gray-900 justify-center items-center">
      <h2 className="text-4xl text-gray-200">Da ist etwas schiefgelaufen</h2>
      <NavLink className="bg-gray-50 px-3 py-1 text-sm font-semibold mt-6 hover:underline" to="/">
        <span>Zurück zum Anfang</span>
      </NavLink>
    </div>
  );
};
