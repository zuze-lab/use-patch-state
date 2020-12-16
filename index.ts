import { useState, useCallback } from 'react';

export const patch = <T extends Record<string, any>>(state: Partial<T>) => (
  s: T,
) => ({ ...s, ...state });

export const usePatchState = <T extends Record<string, any>>(
  initial?: T,
): [T, (state: Partial<T>) => void] => {
  const [state, setState] = useState(initial);
  return [state, useCallback((s: Partial<T>) => setState(patch(s)), [])];
};
