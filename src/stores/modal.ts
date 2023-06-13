import {defineStore} from "pinia";

export const useModalStore = defineStore('modal', {
    state: () => ({
        isOpen: false
    }),

    actions: {
        toggleModal: function () {
            const body = document.querySelector<HTMLElement>('body')
            if (body) {
                if (!this.isOpen) {
                    body.className = 'overflow-y-hidden'
                    this.isOpen = true
                } else {
                    body.className = 'overflow-y-visible'
                    this.isOpen = false
                }
            }
        }
    }
})
