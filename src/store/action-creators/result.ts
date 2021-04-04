import { GameResult, GameResultActionTypes, ResultAction } from '../../types/gameResult';

function setResults({ resultWord, game }: GameResult): ResultAction {
    return { type: GameResultActionTypes.SET_RESULT, payload: { resultWord, game } };
}
function clearResults(): ResultAction {
    return { type: GameResultActionTypes.CLEAR_RESULT };
}

export { setResults, clearResults };
