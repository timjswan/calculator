import KeyClick from '../../interfaces/keyclick';

export default interface State {
    history?: string;
    value?: string;
    do?: (prevNum: number, nextNum: number) => number | void;
};