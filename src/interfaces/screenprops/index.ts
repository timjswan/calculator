import State from "../state";

export default interface ScreenProps {
    screenChange(value: string): void;
    value?: string;
}