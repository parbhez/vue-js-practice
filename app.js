//part 7

var app = Vue.createApp({
    data() {
        return {
            name: ''
        }
    },
    methods: {
        handleKeyup(e) {
            //console.log(e.target.value);
            this.name = e.target.value;
        },
        handleFormSubmit() {
            console.log('form submitted');

        },
        handleCardClick(e) {
            console.log(e);
        }
    }
});

app.mount("#app");

//Part 6
// var app = Vue.createApp({
//     data() {
//         return {
//             count: 0
//         }
//     },
//     methods: {
//         increase(amount) {
//             this.count = this.count + amount;
//         },
//         decrease(amount) {
//             this.count = this.count - amount;
//         },
//         test(ev) {
//             console.log("test");
//             console.log(ev);
//         }
//     }
// });

// app.mount("#app");






//part 5
// var app = Vue.createApp({
//     data() {
//         return {
//             count: 0
//         };
//     },

//     methods: {
//         increment() {
//             //this.count = this.count + 1;
//             this.count++;
//         },
//         decrement() {
//             if (this.count > 0) {
//                 //this.count = this.count - 1;
//                 this.count--;
//             }

//         }
//     }
// });

// app.mount("#app");

//part 4
// var app = Vue.createApp({
//     data() {
//         return {
//             tutorialinfo: {
//                 name: "Devszone",
//                 link: 'https://devszone.com/',
//             },
//             htmlCode: '<h4>Html Code in js file</h4>'
//         };
//     }
// });

// app.mount("#app4");