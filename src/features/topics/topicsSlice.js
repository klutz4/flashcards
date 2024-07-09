import { createSlice } from '@reduxjs/toolkit';
import { addQuiz } from '../quizzes/quizzesSlice';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
        }
    },
    reducers: {
        // addTopic action with payload {id: '123456', name: 'name of topic', icon: 'icon url'}
        // store values as a new topic object in the state
        // include empty quizIds array
        addTopic: (state, action) => {
            const {id, name, icon} = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []   
            };
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(addQuiz, (state, action) => {
            // payload: { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
            const { id, topicId } = action.payload;
            state.topics[topicId].quizIds.push(id);
        })
    }
})

export const selectTopics = (state) => state.topics.topics;

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;