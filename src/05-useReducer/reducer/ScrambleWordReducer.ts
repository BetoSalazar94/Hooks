export interface ScrambleWordState {
    words: string[];
    currentWord: string;
    scrambledWord: string;
    guess: string;
    points: number;
    errorCounter: number;
    maxAllowErrors: number;
    skipCounter: number;
    maxSkips: number;
    isGameOver: boolean;
    totalWords: number;
}

export type ScrambleWordAction =
    | { type: 'SET_WORDS'; payload: string[] }
    | { type: 'SET_CURRENT_WORD'; payload: string }
    | { type: 'SET_SCRAMBLED_WORD'; payload: string }
    | { type: 'SET_GUESS'; payload: string }
    | { type: 'SET_POINTS'; payload: number }
    | { type: 'SET_ERROR_COUNTER'; payload: number }
    | { type: 'SET_MAX_ALLOW_ERRORS'; payload: number }
    | { type: 'SET_SKIP_COUNTER'; payload: number }
    | { type: 'START_NEW_GAME'; payload: ScrambleWordState }
    | { type: 'SKIP_WORD'; }
    | { type: 'CHECK_ANSWER'; };

const GAME_WORDS = [
    'REACT',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'HTML',
    'ANGULAR',
    'SOLID',
    'NODE',
    'VUEJS',
    'SVELTE',
    'EXPRESS',
    'MONGODB',
    'POSTGRES',
    'DOCKER',
    'KUBERNETES',
    'WEBPACK',
    'VITE',
    'TAILWIND',
];

const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};

export const getInitialState = (): ScrambleWordState => {

    const shuffledWords = shuffleArray([...GAME_WORDS]);

    return {
        words: shuffledWords,
        currentWord: shuffledWords[0],
        scrambledWord: scrambleWord(shuffledWords[0]),
        guess: '',
        points: 0,
        errorCounter: 0,
        maxAllowErrors: 3,
        skipCounter: 0,
        maxSkips: 3,
        isGameOver: false,
        totalWords: shuffledWords.length
    };
};

export const scrambleWordReducer = (state: ScrambleWordState, action: ScrambleWordAction):
    ScrambleWordState => {

    switch (action.type) {

        case 'SET_GUESS':
            return {
                ...state,
                guess: action.payload.trim().toUpperCase()
            };

        case 'CHECK_ANSWER':
            {

                if (state.currentWord === state.guess) {

                    const newWords = state.words.slice(1);

                    return {
                        ...state,
                        words: newWords,
                        points: state.points + 1,
                        guess: '',
                        currentWord: newWords[0],
                        scrambledWord: scrambleWord(newWords[0]),
                    };
                } else {
                    return {
                        ...state,
                        errorCounter: state.errorCounter + 1,
                        guess: '',
                        isGameOver: state.errorCounter + 1 >= state.maxAllowErrors
                    };
                }
            }
        case 'SKIP_WORD': {

            if (state.skipCounter >= state.maxSkips) return state;

            const updatedWords = state.words.slice(1);

            return {
                ...state,
                skipCounter: state.skipCounter + 1,
                words: updatedWords,
                currentWord: updatedWords[0],
                scrambledWord: scrambleWord(updatedWords[0]),
                guess: ''
            }

        }

        case 'START_NEW_GAME': {

        }

        default:
            return state;
    }

}