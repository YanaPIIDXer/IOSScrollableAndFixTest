$(function () {
    window.addEventListener('touchmove', function (e) {
        const scrollable = $(e.target).closest('.scrollable')[0]
        if (!scrollable) {
            e.preventDefault()
        }
    }, { passive: false })
})
