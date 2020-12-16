import { renderHook, act } from '@testing-library/react-hooks';
import { patch, usePatchState } from './index';

type O = {
  a: string;
  c: string;
};

describe('patch', () => {
  it('should work', () => {
    const o = {
      a: 'b',
      c: 'd',
    };

    expect(
      patch<O>({ c: 'e' })(o),
    ).toEqual({ a: 'b', c: 'e' });
  });
});
describe('usePatchState', () => {
  it('should work', () => {
    const state = { a: 'b', c: 'd' };
    const { result } = renderHook(() => usePatchState(state));
    const [, setS] = result.current;

    // it should init state
    expect(result.current[0]).toBe(state);
    act(() => setS({ a: 'd' }));
    expect(result.current[0]).toEqual({ a: 'd', c: 'd' });

    // dispatch shouldn't change
    expect(setS).toEqual(result.current[1]);
  });
});
