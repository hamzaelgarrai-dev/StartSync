import {defineConfing} from 'vite'

export default defineConfing({
    test:{
        globals: true,
        environment: 'jsdom'
    }
})