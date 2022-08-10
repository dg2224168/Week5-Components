
//Base Example
Vue.component('base-example',{
    template: '#base-template',
    data(){
        return {
            count: 0,
        }
    },
    // template: '<button v-on:click="count++">Click button {{count}}</button>'


})

Vue.component('nav-bar', {
    data(){
        return {
            menus: ["Home","About","Services", "Contact"],
            newFontSize: 1,
        }
    },
    template: '<div class="nav-bar">' +
        '<ul><li v-for="menu in menus">' +
        '<a href="">{{menu}}</a>' +
        '</li></ul>' +
        '</div>'
})



//Passing data to child component
Vue.component('blog-post', {
    props:['title'],
    template: '<h1>{{title}}</h1>'
})



const newApp = new Vue({
    el: "#app-blog",
    data() {
        return {
            blogss: [
                {content: "Content 1"},
                {content: "Content 2"},
                {content: "Content 3"},
            ],
            fontSize: 1,
        }
    }
})

new Vue({
    el: '#blog-vue',
    data() {
        return {
            test: true,
            content: '',
            title:'',
            blogs : [

            ]
        }
    },
    methods: {
        addPost(title, content){
            this.blogs.push({title: title, content: content})
            this.title = ''
            this.content = ''
        },
        removePost(index){
            this.blogs.splice(index, 1)
        }

    }
})

const app = new Vue({
    el: "#app",
    data() {
        return {
            count: 2,
            message: "Hello World!",
            newMark: 0,
            selected: '',
            students: [
                {id:1,name:"David A", assignment: "Assignment A: Axonas sunt vitas de azureus racana.", mark:0},
                {id:2,name:"David B", assignment: "Assignment B: Cur brabeuta mori?", mark:0},
                {id:3,name:"David C", assignment: "Assignment C: You have to appear, and synthesise life by your failing.", mark:0},
                {id:4,name:"David D", assignment: "Assignment D: Yardarms scream from greeds like big sails.", mark:0},
                ],
            posts: [
                {id:1, post:"Post 1"},
                {id:2, post:"Post 2"},
                {id:3, post:"Post 3"},
            ]
        }
    },
    method:{


    }
})

let componentA = Vue.component('increase-font',{
    data(){
        return {
            title: "This is title",
            content:"<h1 style='color: red; font-size: 30px'>This is content</h1>"
        }
    },
    template:`<div class="increase-font"> <h3> {{title}}</h3><div v-html="content"></div> 
                <button v-on:click="$emit('change-text')"> Change the Font</button></div>`
})

// Vue.component('blog-post1', {
//     props: ['title'],
//     template: '<h3>{{ title }}</h3>'
// })
//
// Vue.component('blog-post2', {
//     props: ['title'],
//     template: '<div class="blog-post">\n' +
//         '  <h3>{{ title }}</h3>\n' +
//         '  <div v-html="content"></div>\n' +
//         '</div>'
// })

// Vue.component('blog-post', {
//     props: ['post'],
//     template: `
//     <div class="blog-post">
//       <h3>{{ post.title }}</h3>
//       <div v-html="post.content"></div>
//     </div>
//   `
// })

// Vue.component('blog-post', {
//     props: ['post'],
//     template: `
//     <div class="blog-post">s
//       <h3>{{ post.title }}</h3>
// <!--      <button>-->
//         <button v-on:click="$emit('enlarge-text')">
//
//         Enlarge text
//       </button>
//       <div v-html="post.content"></div>
//     </div>
//   `
// })

new Vue({
    el: "#form-input-handlings",
    data() {
        return {
            message: "Hello!",
            checked: true,
            checkedName: [],
            picked: '',
            selected: '',
            setFontsize: 12,
            posts: [
                { id: 1, title: 'My journey with Vue' },
                { id: 2, title: 'Blogging with Vue' },
                { id: 3, title: 'Why Vue is so fun' }
            ],
            postFontSize: 1
        }
    }
})


Vue.component('blog-post', {
    props: ['post'],
    template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">

        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})

new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ],
        postFontSize: 14
    }
})