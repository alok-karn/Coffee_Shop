import AsyncStorage from '@react-native-async-storage/async-storage';
import {produce} from 'immer';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

export const useStore = create(
  persist(
    (set, get) => ({
      CoffeeList: CoffeeData,
      BeanList: BeansData,
      FavouritesList: [],
      CartList: [],
      OrderHistoryList: [],
      CartPrice: 0,
    }),
    {name: 'coffee-app', storage: createJSONStorage(() => AsyncStorage)},
  ),
);
