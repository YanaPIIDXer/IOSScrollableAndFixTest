window.addEventListener('touchmove', function (e) {
    e.preventDefault()
}, { passive: false })

new Vue({
    el: '#app',
    data: function () {
        return {
            title: 'Vue App',
            datas: [],
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
