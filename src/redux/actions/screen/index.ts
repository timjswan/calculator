import Action from '../../../interfaces/action';
export const SCREEN_CHANGE = 'SCREEN_CHANGE';

export function screenChange(value: string): Action {
    return { type: SCREEN_CHANGE, value: value };
}