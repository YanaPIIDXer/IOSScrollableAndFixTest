window.addEventListener('touchmove', function (e) {
    e.preventDefault()
}, { passive: false })

new Vue({
    el: '#app',
    data: function () {
        return {
            title: 'Vue App',
        }
    }
})
