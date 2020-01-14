import KeyBoardFunctions from '../../../interfaces/keyboardfunctions'

export let keyBoardFunctions: Array<KeyBoardFunctions> = [
    {
        symbol: '+',
        name: 'add',
        do: (prevNum: number, nextNum: number) => {
            return prevNum + nextNum;
        }
    },
    {
        symbol: '-',
        name: 'subtract',
        do: (prevNum: number, nextNum: number) => {
            return prevNum - nextNum;
        }
    },
    {
        symbol: '÷',
        name: 'divide',
        do: (prevNum: number, nextNum: number) => {
            return prevNum / nextNum;
        }
    },
    {
        symbol: '=',
        name: 'equals',
        do: () => {
            //
        }
    },
    {
        symbol: 'C',
        name: 'clear',
        do: () => {
            //
        }
    }
]