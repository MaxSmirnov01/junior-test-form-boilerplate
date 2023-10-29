import { createSlice } from '@reduxjs/toolkit';

import getData from '../api/getData';
import formattedDate from '../formattedDate';

const imgSlice = createSlice({
  name: 'img',
  initialState: { images: [], errors: {} },
  reducers: {
    addImage: (state, { payload }) => {
      state.images.push(payload);
    },
    removeImage: (state, { payload }) => {
      const newState = state.images.filter((item) => item.id !== payload);

      state.images = newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, { payload }) => {
        const newState = payload.map((item) => ({
          id: item.id,
          url: item.urls.small,
          date: formattedDate(item.created_at),
          name: 'Без названия',
          description: item.alt_description,
        }));

        state.images = newState;
      })
      .addCase(getData.rejected, (state, { error }) => {
        console.log(error);
        state.errors = error;
      });
  },
});

export const { addImage, removeImage } = imgSlice.actions;

export default imgSlice.reducer;
