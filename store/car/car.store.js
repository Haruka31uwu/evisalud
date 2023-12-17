import { defineStore } from 'pinia';
export const carStore = defineStore('carStore', {
    state: () => {
        return {
            carItems: [],
        };
    }, getters: {
        getCarItems: (state) => {
            return state.carItems;

            // if (state.carItems.length == 0) {
            //     if (!localStorage.getItem('carItems')) {
            //         return [];
            //     }
            //     return JSON.parse(localStorage.getItem('carItems'));

            // }
        },

    },
    actions: {
        addCarItem(item) {
            this.carItems.push(item);
            // if (localStorage.getItem('carItems')) {
            //     localStorage.removeItem('carItems');
            // }
            // localStorage.setItem('carItems', JSON.stringify(this.carItems));
            // console.log(this.carItems);
        },
        removeCarItem(item) {
            const index = this.carItems.indexOf(item);
            this.carItems.splice(index, 1);
            // if (localStorage.getItem('carItems')) {
            //     let items = JSON.parse(localStorage.getItem('carItems'));
            //     items.splice(index, 1);
            //     localStorage.removeItem('carItems');
            //     localStorage.setItem('carItems', JSON.stringify(items));
            // }

        }
    }
});