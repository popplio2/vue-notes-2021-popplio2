new Vue ({
    el: '#vue-app',
    data: {
        output: 'Your fav food'
    },
    methods: {
        changeName: function () {
            this.name = 'Mario';
        }
    }
});
