new Vue({
    el: '#app',
    data: function () {
        return {
            title: 'Vue App',
            datas: [],
        }
    },
    created: function () {
        for (let i = 0; i < 20; i++) {
            this.addData()
        }
    },
    methods: {
        addData: function () {
            const id = this.datas.length + 1
            this.datas.push({
                id: id,
                msg: ['foo', 'bar', 'baz'].find((_, index) => index === this.datas.length % 3)
            })
        }
    },
})
