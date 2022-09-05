import { createSlice } from '@reduxjs/toolkit';


const cardSlice = createSlice({
    name: 'card',
    initialState: {
        itemsInCard : []
    },
    reducers: {
        setIteminCard: (state, action) => {
            state.itemsInCard.push(action.payload)
        },
        deleteItemFromCard: (state, action) => {
            state.itemsInCard = state.itemsInCard.filter(game => game.id !== action.payload)
        }
    }
});

export const {setIteminCard, deleteItemFromCard} = cardSlice.actions;
export default cardSlice.reducer;