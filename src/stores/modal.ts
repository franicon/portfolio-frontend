import {defineStore} from "pinia";

export const useModalStore = defineStore('modal', {
    state: () => ({
        isOpen: false
    }),

    actions: {
        toggleModal() {
            if (this.isOpen) {
                this.isOpen = false;
                document.querySelector('body').className = 'overflow-y-visible'
            } else {
                this.isOpen = true
                document.querySelector('body').className = 'overflow-y-hidden'
            }
        }
    }
})
