new Vue({
    el: '#app',
    data: {
        tabs: ['one', 'two', 'three'],
        currentTab: 'one',
    },
    computed: {
        currentTabComponent(){
            return `comp-${this.currentTab}`
        }
    }
})

// const app = new Vue({
//     el: '#app',
//     // components: {
//     //     'error': someEl
//     // },
//     data: {
//         text: 'Some text',
//         counter: 0,
//     },
//     methods: {
//         some(){
//             console.log('global');
//         }
//     }
// })