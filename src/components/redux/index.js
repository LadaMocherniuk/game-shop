import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './card/reducer';
import gameReducer from '../redux/game/reducer';


export const store = configureStore({
    reducer: {
        card: cardReducer,
        game: gameReducer
    }
});