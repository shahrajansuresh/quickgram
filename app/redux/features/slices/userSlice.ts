import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';

export interface usersListState {
  id: number;
  name: string;
  following: boolean;
}

export const initialState: {value: usersListState[]} = {
  value: [
    {
      id: 1,
      name: 'Rajan',
      following: false,
    },
    {
      id: 2,
      name: 'Amit',
      following: false,
    },
    {
      id: 3,
      name: 'Neha',
      following: false,
    },
    {
      id: 4,
      name: 'Suman',
      following: false,
    },
    {
      id: 5,
      name: 'Ashna',
      following: false,
    },
    {
      id: 6,
      name: 'Ruchi',
      following: false,
    },
    {
      id: 7,
      name: 'Mihir',
      following: false,
    },
    {
      id: 8,
      name: 'Dhruv',
      following: false,
    },
    {
      id: 9,
      name: 'parth',
      following: false,
    },
    {
      id: 10,
      name: 'ashish',
      following: false,
    },
    {
      id: 11,
      name: 'Ronak',
      following: false,
    },
    {
      id: 12,
      name: 'Rajat',
      following: false,
    },
    {
      id: 13,
      name: 'Atharv',
      following: false,
    },
    {
      id: 14,
      name: 'Aneri',
      following: false,
    },
  ],
};

export const userSlice = createSlice({
  name: 'UsersList',
  initialState: initialState,
  reducers: {
    handleFollowUser: (state, action: PayloadAction<number>) => {
      let initialArray = JSON.parse(JSON.stringify(state.value));
      let finalArray = initialArray.map((user: usersListState) => {
        if (action.payload === user.id) {
          let {following} = user;
          return {...user, following: !following};
        } else {
          return user;
        }
      });

      state.value = finalArray;
    },
  },
});
export const {handleFollowUser} = userSlice.actions;
export default userSlice.reducer;
