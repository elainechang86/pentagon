export default {
    // components: {
    //   cartForm,
    // },
    data() {
        return {
            cartForm: 'cartForm',
            showForm: false,
            isShowingCart: false,
            products: [
                {
                    id: '2062',
                    name: 'Aw-598',
                    price: 2900,
                    thumb:
                        '1.jpg',
                    amount: 0,
                    amountShow: 1,
                    showingIcon: false,
                },
                {
                    id: '832',
                    name: 'Dw-875',
                    price: 1350,
                    thumb:
                        '2.jpg',
                    amount: 0,
                    amountShow: 1,
                    showingIcon: false,
                },
                {
                    id: '16762',
                    name: 'WQ-474',
                    price: 850,
                    thumb:
                        '3.jpg',
                    amount: 0,
                    amountShow: 1,
                    showingIcon: false,
                },
                {
                    id: '145',
                    name: 'VD-475',
                    price: 2100,
                    thumb:
                        '4.jpg',
                    amount: 0,
                    amountShow: 1,
                    showingIcon: false,
                },
                {
                    id: '103',
                    name: 'AQ-774',
                    price: 2600,
                    thumb:
                        '5.jpg',
                    amount: 0,
                    amountShow: 1,
                    showingIcon: false,
                },
            ],
        }
    },
    computed: {
        // 購物車裡的品項
        productsInCart() {
            return (
                this.products
                    // 只顯示購買數量 > 0 的項目
                    .filter((p) => p.amount)
                    // 算出每個產品的小計
                    .map((p) => {
                        p.sum = p.amount * p.price
                        return p
                    })
            )
        },
        total() {
            return this.productsInCart.reduce((sum, p) => sum + p.sum, 0)
        },
    },
    mounted() {
        window.onload = function () {
            // var form = document.getElementById('shit')
            // // var form = document.getElementsByTagName('form')
            // console.log(form)
            // document.getElementById('shit').addEventListener('submit', (e) => {
            //   e.preventDefault()
            //   fetch(form.action, {
            //     method: 'POST',
            //     body: new FormData(document.getElementById('shit')),
            //   })
            //     .then(console.log('hi'))
            //     .then((html) => {
            //       // you can put any JS code here
            //       alert('輸入成功！最新消息將寄送至您的信箱')
            //       var delayInMilliseconds = 5000 //1 second
            //       setTimeout(function () {
            //         window.location.href = 'https://ark720.art'
            //       }, delayInMilliseconds)
            //     })
            // })
        }
    },
    methods: {
        postData() {
            var form = document.getElementById('shit')
            // var form = document.getElementsByTagName('form')
            form.addEventListener('submit', (e) => {
                e.preventDefault()
                fetch(form.action, {
                    method: 'POST',
                    body: new FormData(document.getElementById('shit')),
                })
                    .then(console.log('hi'))
                    
            })
        },
        // 切換 產品列表 / 購物車 的 tab
        toggleTab(shouldShowCart) {
            this.isShowingCart = shouldShowCart
        },

        // 點擊 - / + 後的動作
        minusOne(product) {
            product.amountShow--
            product.amountShow = product.amountShow < 1 ? 1 : product.amountShow
        },
        addOne(product) {
            product.amountShow++
            product.amountShow = product.amountShow > 9 ? 9 : product.amountShow
        },

        // 點擊 add to cart 後的動作
        addToCart(product) {
            product.amount += product.amountShow

            product.showingIcon = true
            setTimeout(() => {
                product.showingIcon = false
            }, 800)
        },

        // 在購物車裡移除單一品項 ( 把數量設置成 0 )
        remove(product) {
            product.amount = 0
        },
        // 前往結帳
        checkoutCart() {
            this.showForm = true
        },
    },
}
