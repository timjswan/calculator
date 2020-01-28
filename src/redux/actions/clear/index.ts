import Action from '../../../interfaces/action';
export const CLEAR = 'CLEAR';

export function clear(value: string): Action {
    return { type: CLEAR, payload: value };
}