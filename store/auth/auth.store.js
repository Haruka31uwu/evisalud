import { defineStore } from 'pinia';
export const authStore = defineStore('authStore', {
    state: () => {
        return {
            userData: [],
            token: null
        };
    },
    getters: {
        getUserData: (state) => {
            return state.userData;
        },
        isLogged: (state) => {
            console.log(state.userData.length==0,'owo');
            if (!state.userData==0 && !localStorage.getItem('userData')) {
                return false;
            }
            return true;
        }

    },
    actions: {
        addUserData(item) {
            this.userData.push(item);
            if (localStorage.getItem('userData')) {
                localStorage.removeItem('userData');
            }
            localStorage.setItem('userData', JSON.stringify(item));
        },
        removeUserData(item) {
            const index = this.userData.indexOf(item);
            this.userData.splice(index, 1);
        },
        addToken(item) {
            this.token = item;
            //check if exist in localstorage
            if (localStorage.getItem('token')) {
                localStorage.removeItem('token');
            }
            localStorage.setItem('token', item);
            console.log(this.token);
        }
    }
});