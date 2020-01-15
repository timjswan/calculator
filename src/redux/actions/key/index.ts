import KeyClickAction from '../../../interfaces/keyclickaction';
import KeyClick from '../../../interfaces/keyclick';
export const KEY_CLICK = 'KEY_CLICK';

export function keyClick(keyclick: KeyClick): KeyClickAction {
    return { type: KEY_CLICK, value: keyclick };
}