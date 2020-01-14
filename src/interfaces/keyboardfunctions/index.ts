export default interface KeyBoardFunctions {    
    symbol: string;
    name: string;
    do: (prevNum: number, nextNum: number) => number | void;       
}