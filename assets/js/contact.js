
requirejs.config({
    baseUrl: '/assets/js/vendor',
    paths: {
        'mailgun-js': 'mailgun-js/lib/mailgun',
        'scmp' : 'scmp/index'
        // 'crypto' : 'crypto'
    }
});


require(['mailgun-js'], function (mailgun) {

    var api_key = 'key-5beb175df9bfc3a220ce6390c3d6eda9';
    var domain = 'mg.protabula.com';
    debugger;
    var m = mailgun({ apiKey: api_key, domain: domain });

    Vue.config.delimiters = ['[[', ']]'];
    Vue.config.unsafeDelimiters = ['[[[', ']]]'];


    new Vue({
        el: '#contact',
        data: {
            email: '',
            name: '',
            title: '',
            message: '',
        },
        methods: {
            onSubmit: function () {

                if (this.validate()) {

                    var data = {
                        from: 'Excited User <me@samples.mailgun.org>',
                        to: 'ace.poblete@gmail.com',
                        subject: 'Hello',
                        text: 'Testing some Mailgun awesomness!'
                    };

                    m.messages().send(data, function (error, body) {
                        console.log(body);
                    });

                }
            },

            validate: function (index) {
                return (this.email && this.name && this.message);
            }
        }
    });
});