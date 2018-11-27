new Vue({

    el: '#interest',
    data() {

        return {

            r: null,                           // Given interest rate to convert
            p: null,                          // Compounding periods of user selected input
            yp: 365,                          // Computed value based on user input value 'p' -> 'compounding periods'
            y_delta: [1, 2, 4, 12, 52, 365],      // Array of compounding values -> annually, semi-annually, quarterly, monthly, weekly, daily

            // Results, stored as variables to use further (D3)

            annually: null,
            semi_annually: null,
            quarterly: null,
            monthly: null,
            weekly: null,
            daily: null,



        }
    },

    methods: {

        c_calc: function () {
            this.c_annual();
            this.c_semi_annual();
            this.c_quarterly();
            this.c_monthly();
            this.c_weekly();
            this.c_daily();
        },

        c_annual: function () {
            let x = (1 + parseFloat(this.r));
            let yd = (1 / this.y_delta[0]);
            let y = (this.yp * yd);
            let z = (Math.pow(x, y)) - 1;
            this.annually = z.toFixed(6);
        },

        c_semi_annual: function () {
            let x = (1 + parseFloat(this.r));
            let ypd = this.yp;
            let yd = (1 / this.y_delta[1]);
            let y = (ypd * yd);
            let z = (Math.pow(x, y)) - 1;
            this.semi_annually = z.toFixed(6);

        },

        c_quarterly: function () {
            let x = (1 + parseFloat(this.r));
            let ypd = this.yp;
            let yd = (1 / this.y_delta[2]);
            let y = (ypd * yd);
            let z = (Math.pow(x, y)) - 1;
            this.quarterly = z.toFixed(6);

        },

        c_monthly: function () {
            let x = (1 + parseFloat(this.r));
            let ypd = this.yp;
            let yd = (1 / this.y_delta[3]);
            let y = (ypd * yd);
            let z = (Math.pow(x, y)) - 1;
            this.monthly = z.toFixed(6);

        },

        c_weekly: function () {
            let x = (1 + parseFloat(this.r));
            let ypd = this.yp;
            let yd = (1 / this.y_delta[4]);
            let y = (ypd * yd);
            let z = (Math.pow(x, y)) - 1;
            this.weekly = z.toFixed(6);

        },

        c_daily: function () {
            let x = (1 + parseFloat(this.r));
            let ypd = this.yp;
            let yd = (1 / this.y_delta[5]);
            let y = (ypd * yd);
            let z = (Math.pow(x, y)) - 1;
            this.daily = z.toFixed(6);

        },

    },

    computed: {

        // Return the appropriate value yp

        period: function () {
            switch (this.p) {
                case this.p = "annually":
                    this.yp = 1;
                    break;
                case this.p = "semi-annually":
                    this.yp = 2;
                    break;
                case this.p = "quarterly":
                    this.yp = 4;
                    break;
                case this.p = "monthly":
                    this.yp = 12;
                    break;
                case this.p = "weekly":
                    this.yp = 52;
                    break;
                case this.p = "daily":
                    this.yp = 365;
                    break;
            }
            return this.yp;
        },


    }


});