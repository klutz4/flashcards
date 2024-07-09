import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state,action) => {
            // payload:  { id: '123', front: 'front of card', back: 'back of card'}
            const {id, front, back} = action.payload;
            state.cards[id] = {
                id: id,
                front: front,
                back: back
            };
        }

    }
});

export const selectCards = (state) => state.cards.cards;
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;