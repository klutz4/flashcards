import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    topics: {
    }
}

// addTopic action with payload {id: '123456', name: 'name of topic', icon: 'icon url'}
// store values as a new topic object in the state
// include empty quizIds array

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {

            state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []   
            };
        }
    },
})

export const selectTopics = (state) => state.topics.topics;

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;