export default interface KeyClick {
    history?: string; 
    do?: (prevNum: number, nextNum: number) => number | void;
}