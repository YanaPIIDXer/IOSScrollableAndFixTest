$(function () {
    const $scrollable = $('.scrollable')

    $scrollable.each(function () {
        this.scrollTop = 1
    })
    
    $scrollable.on('scroll', function () {
        if (this.scrollTop === 0) {
            this.scrollTop = 1
        }
    })
})
