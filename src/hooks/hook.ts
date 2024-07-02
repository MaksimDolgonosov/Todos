// import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
// import { RootTodo, AppDispatch } from "../store";

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootTodo> = useSelector;

import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store/index'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();