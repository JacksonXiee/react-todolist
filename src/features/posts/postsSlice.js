import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: '第一个post！', content: '完成Redux学习' },
  { id: '2', title: '第二个post！', content: '完成reactRounter学习' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    }
  }
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
