

var api_key = 'key-5beb175df9bfc3a220ce6390c3d6eda9';
var domain = 'mg.protabula.com';

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


                this.sendEmail();

                this.updateGoogleForm();

            }
        },

        sendEmail: function () {
            var from = this.email + '<' + this.name + '>';

            var data = {
                from: from,
                to: 'ace.poblete@gmail.com',
                subject: 'Thanks for getting in touch!',
                text: 'Testing some Mailgun awesomness!'
            };
        },

        updateGoogleForm: function () {

            var googleActionUrl = 'https://docs.google.com/a/protabula.com/forms/d/1MzIJU_77HQqSFQ2hvF1CfAcCsRqURwshRGEFtQONz-Y/formResponse';

            var data = {
                'entry.1605764209': this.email,
                'entry.75873054': this.name,
                'entry.1436883073': this.title,
                'entry.1704065402': this.message
            }

            this.$http.post(googleActionUrl, data, function (results) {
                debugger;
            }, function (results) {
                debugger;
            });

        },

        validate: function (index) {
            return (this.email && this.name && this.message);
        }
    }
});
