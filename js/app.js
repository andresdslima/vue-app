const app = new Vue({
    el: '#app',
    data: {
        username: 'Andre',
        bio: 'Full-Stack Software Developer.',
        tweets: [
            'Started learning to code.',
            'Already learned HTML, CSS, and JavaScript.',
            'Started learning Vue.js.'
        ],
        newTweet: ''
    }
});