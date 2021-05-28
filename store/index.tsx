import create from 'zustand';
import { persist } from "zustand/middleware"

type Set = {
	itemsCart: Object[],
	// setAddToCart : (a) => void,
	// setRemoveToCart : (a) => void
}

export const useStore = create<Set>(persist(
  (set, get) => ({
		itemsCart: [],
		// setAddToCart: by => set(state => ({itemsCart : [...get().itemsCart, (by != undefined || by != null) && by]})),
		// setRemoveToCart: by => set(state => {
		// 	const arr = state.itemsCart;
		// 	const index = arr.indexOf(by);
		// 	if (index > -1) {
		// 		arr.splice(index, 1);
		// 	}
		// 	return ({ itemsCart : [...arr] });
		// })
	}),
	{
    name: "cartItems",
    getStorage: () => sessionStorage,
  }
));

export default useStore;