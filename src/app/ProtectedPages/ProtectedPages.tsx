"use client";

import { appRoutes } from "@/paths.routes";
import { useAppSelector } from "@/store/appHooks";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export const ProtectedPages = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) {
    redirect(appRoutes.home);
  }

  return <>{children}</>;
};
