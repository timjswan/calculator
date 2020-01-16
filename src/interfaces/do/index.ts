export default interface Do {
    (prevNum: number, nextNum: number): void | number;
}