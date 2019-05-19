// Vue.component('comp-one', {
//     template: `<p>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam amet assumenda consequatur consequuntur corporis debitis deleniti, fugit inventore iste libero nisi numquam officia repellendus repudiandae sequi totam ullam vel?</p>`
// });
// Vue.component('comp-two', {
//     template: `<p>2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam amet assumenda consequatur consequuntur corporis debitis deleniti, fugit inventore iste libero nisi numquam officia repellendus repudiandae sequi totam ullam vel?</p>`
// });
// Vue.component('comp-three', {
//     template: `<p>3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam amet assumenda consequatur consequuntur corporis debitis deleniti, fugit inventore iste libero nisi numquam officia repellendus repudiandae sequi totam ullam vel?</p>`
// })


// Глоальные компоненты
// const someEl = {
//     data(){
//         return {
//             title: 'Error comp'
//         }
//     },
//     template: `<p>{{title}}</p>`
// }

// Vue.component('error', {
//     data(){
//         return {
//             title: 'Error comp'
//         }
//     },
//     template: `<p>{{title}}</p>`
// });
// Vue.component('some-el', {
//     props: ['counter'],
//     data(){
//         return {
//             title: 'Hello!!!',
//             // counter: 0
//         }
//     },
//     mounted(){
//
//     },
//     methods: {
//       some(){
//           console.log('component');
//       },
//         increase(){
//           this.counter++
//         }
//     },
//     template: `<div>
//             <p @click="$emit('custom')">{{title}}</p>
//             <button @click="$emit('increase')">Increase</button>
//             <slot></slot>
//             <error></error>
//             <p>{{counter}}</p>
//         </div>`
// });

// Локальный компонент

