import { atom } from "recoil";

export const authData = atom({
    key: "authData",
    default: {
        email: 'email',
        token: '',
        UUID: ''
    }
})

