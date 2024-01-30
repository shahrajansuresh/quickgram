import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';
export interface ImageType {
  id: string;
  alt: string;
  type: 'image' | 'video';
  Uri: string;
}
export interface postsListState {
  id: string;
  description: string;
  images: ImageType[];
  liked: boolean;
}

export const initialState: {value: postsListState[]} = {
  value: [
    {
      id: 'Post1',
      description: 'this is the simple Discription of the Text SMS ',
      images: [
        {
          id: 'Post1Image1',
          alt: 'Image1',
          type: 'image',
          Uri: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=',
        },
        {
          id: 'Post1Image2',
          alt: 'Image2',
          type: 'image',
          Uri: 'https://media.istockphoto.com/id/1411772543/photo/side-profile-of-african-woman-with-afro-isolated-against-a-white-background-in-a-studio.webp?b=1&s=170667a&w=0&k=20&c=AXoZk6bD-xbU4AQ66k4AKpWBRuDgHufmP4A1_Gn_5zg=',
        },
        {
          id: 'Post1Image3',
          alt: 'Image3',
          type: 'image',
          Uri: 'https://media.istockphoto.com/id/1491507378/photo/side-view-of-a-young-black-woman-standing-whilst-listening-to-music-on-her-headphones-with.webp?b=1&s=170667a&w=0&k=20&c=3vq3A-1ydBG8Sf9KD1iYUrB-yf9f0ZVFbxI0Kzx-c0k=',
        },
        {
          id: 'Post1Image4',
          alt: 'Image4',
          type: 'image',
          Uri: 'https://media.istockphoto.com/id/1411772543/photo/side-profile-of-african-woman-with-afro-isolated-against-a-white-background-in-a-studio.webp?b=1&s=170667a&w=0&k=20&c=AXoZk6bD-xbU4AQ66k4AKpWBRuDgHufmP4A1_Gn_5zg=',
        },
      ],
      liked: true,
    },
    {
      id: 'Post2',
      description: 'this is the simple Discription of the Text SMS ',
      images: [
        {
          id: 'Post2Image1',
          alt: 'Image1',
          type: 'image',
          Uri: 'https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.webp?b=1&s=170667a&w=0&k=20&c=SXKe66SKDzYHhQOziZgjxmoyeqHGCYwtxz9BouB1kis=',
        },
        {
          id: 'Post2Image2',
          alt: 'Image2',
          type: 'image',
          Uri: 'https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=',
        },
      ],
      liked: false,
    },
    {
      id: 'Post3',
      description: 'this is the simple Discription of the Text SMS ',
      images: [
        {
          id: 'Post3Image1',
          alt: 'Image1',
          type: 'image',
          Uri: 'https://media.istockphoto.com/id/1491507378/photo/side-view-of-a-young-black-woman-standing-whilst-listening-to-music-on-her-headphones-with.webp?b=1&s=170667a&w=0&k=20&c=3vq3A-1ydBG8Sf9KD1iYUrB-yf9f0ZVFbxI0Kzx-c0k=',
        },
      ],
      liked: true,
    },
  ],
};

export const postSlice = createSlice({
  name: 'postsList',
  initialState: initialState,
  reducers: {
    handleLike: (state, action: PayloadAction<string>) => {
      let finalArray = state.value.map((post: postsListState) => {
        if (action.payload === post.id) {
          let {liked} = post;
          return {...post, liked: !liked};
        } else {
          return post;
        }
      });

      state.value = finalArray;
    },
    addPost: (state, action: PayloadAction<postsListState>) => {
      state.value = [...state.value, action.payload];
    },
  },
});
export const {handleLike, addPost} = postSlice.actions;
export default postSlice.reducer;
