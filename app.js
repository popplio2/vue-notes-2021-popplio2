const one = new Vue ({
    el: '#vue-app-one',
    data: {
        title: 'Vue App 1',
    },
    methods: {

    },
    computed: {
        greet: function () {
            return 'Hello from app one >:)';
        }
    },
});

const two = new Vue ({
    el: '#vue-app-two',
    data: {
        title: 'Vue App 2',
    },
    methods: {
        changeTitle: function() {
            one.title = 'Title changed greaat successs yeas';
        }
    },
    computed: {
        greet: function () {
            return 'Give up on your dreams and die --App 2 :)';
        },
    },
});

two.title = "Aw yea babey we changed it from outsideee";