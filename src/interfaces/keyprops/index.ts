import KeyClick from "../keyclick";

export default interface KeyProps {
    function: string;
    symbol: string;
    do: (prevNum: number, nextNum: number) => number | void;
    keyClick(value: KeyClick): void;
    history: string;
}