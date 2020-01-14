import Action from '../../../interfaces/action';
export const KEY_CLICK = 'KEY_CLICK';

export function calcFunctionClick(value: string): Action {
    return { type: KEY_CLICK, value: value };
}