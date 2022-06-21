$(function () {
    const $scrollable = $('.scrollable')

    $scrollable.each(function () {
        this.scrollTop = 1
    })

    let prevY = 0
    $scrollable.on('touchstart', function (e) {
        prevY = e.pageY
    })

    $scrollable.on('touchmove', function (e) {
        const y = e.pageY
        const move = prevY - y      // スワイプした方向とは逆向きに動く
        prevY = y

        if (this.scrollTop + move <= 0) {
            this.scrollTop = 1
            e.preventDefault()
        } else if (this.scrollTop + this.clientHeight + move >= this.scrollHeight) {
            this.scrollTop = this.scrollHeight - 1
            e.preventDefault()
        }
    })
    
    $scrollable.on('scroll', function () {
        if (this.scrollTop <= 0) {
            this.scrollTop = 1
        } else if (this.scrollTop + this.clientHeight >= this.scrollHeight) {
            this.scrollTop = this.scrollHeight - 1
        }
    })
})
