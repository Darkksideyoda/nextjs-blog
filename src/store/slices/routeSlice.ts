/* eslint-disable no-unused-vars */
import { create } from 'zustand';

type RoutePathProps = {
  isActive?: boolean;
  setRouteActive: (isActive: boolean) => void;
};

export const useRoutePathStore = create<RoutePathProps>((set) => ({
  isActive: false,

  setRouteActive: (isActive: boolean) => set({ isActive: isActive })
}));
