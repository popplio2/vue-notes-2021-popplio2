new Vue ({
    el: '#vue-app',
    data: {
        name: 'Daniel',
        job: 'Pokemon Master',
        website: 'http://pokemoncenter.com',
        websiteTag: '<a href="http://pokemoncenter.com">Get awesome Pokemon clothes</a>'
    },
    methods: {
        greet: function (time) {
            return "Good " + time + ", " + this.name;
        }
    }
});