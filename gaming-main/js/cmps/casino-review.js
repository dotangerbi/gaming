export default {
    template: `
    <section id="reviews" class="casino-review">
        <div class="container main-layout">
            <div>
                <h2>Casino Reviews</h2>
            </div>
            <div class="reviews-container" >
                <div class="carousel-container" v-if="reviews" :style="{ transform: 'translateX(-' + (currentIndex * 100) + '%)' }" 
                        @touchstart="handleTouchStart" @touchend="handleTouchEnd">
                    <div  v-for="review in reviews" :key="review.id">
                        <div class="review-item">
                            <h3>{{ review.title }}</h3>
                            <div>
                                <div>
                                    <div>
                                        <img src="./img/symbols/user-alt-1-svgrepo-com.svg" alt="">
                                        <p>{{review.reviewerName}}</p>
                                    </div>
                                    <p class="rating">
                                        <span v-for="n in review.rating" :key="n">★</span>
                                    </p>
                                    <p>{{ review.date }}</p>
                                </div>
                                <div>
                                    <img :src="'./'+review.casinoLogo" alt="">
                                    <!-- <p>{{review.reviewedCasino}}</p> -->
                                </div>
                            </div>
                            <p>{{review.content }}</p>
                        </div>
                    </div>
                </div>
                <button class="next-review" @click="nextSlide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L16 12L9 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>
                </button>
                <button class="prev-review" @click="prevSlide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 19L8 12L15 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                    
                </button>
            </div>
            <div class="carousel-dots">
                <span v-for="(review, index) in reviews" :key="index"
                :class="{ active: currentIndex === index }"
            @click="goToSlide(index)"></span>
            </div>
        </div>

    </section>
`,
    data() {
        return {
            reviews: null,
            currentIndex: 0,
            autoSlideInterval: null,
            startX: 0,
            endX: 0,
        }
    },
    created() {
        this.fetchReviews()
        this.startAutoSlide()
    },
    beforeDestroy() {
        this.stopAutoSlide()
    },
    methods: {
        fetchReviews() {
            this.reviews = [
                {
                    id: 1,
                    date: this.getReviewDate(),
                    reviewedCasino: 'Fat Pirate',
                    casinoLogo: 'img/casino/fatPirate.png',
                    reviewerName: 'CryptoGamer87',
                    title: 'Fast payouts and great games!',
                    content:
                        "Stake.com is definitely one of the best online casinos I've used. The bonuses are great, and it's really easy to deposit with crypto. The payouts are super fast, which I love. My only issue is that they could offer more table games, but overall I'm very satisfied!",
                    rating: 5,
                    pros: ['Fast payouts', 'Great bonuses', 'Crypto-friendly'],
                    cons: ['Limited table games'],
                },
                {
                    id: 2,
                    date: this.getReviewDate(),
                    reviewedCasino: 'Gransino',
                    casinoLogo: 'img/casino/gransino1.webp',
                    reviewerName: 'LuckyLaura',
                    title: 'Good variety but slow verification',
                    content:
                        'Rolletto has a great selection of games, and I really enjoy their cashback offers. The only downside is that their verification process took a bit too long, but overall it’s been a fun experience.',
                    rating: 5,
                    pros: ['Great game selection', 'Solid cashback offers'],
                    cons: ['Slow verification process'],
                },
                {
                    id: 3,
                    date: this.getReviewDate(),
                    reviewedCasino: '1Red',
                    casinoLogo: 'img/casino/1red.png',
                    reviewerName: 'JackpotQueen',
                    title: 'Amazing Experience – Big Wins and Fast Payouts!',
                    content:
                        "I couldn't be happier with my experience at Stake.com! I've tried a lot of online casinos, but this one really stands out. From the moment I signed up, I was blown away by how easy everything was – deposits were instant, and I even got a great welcome bonus to kick things off. I love playing slots, and I actually hit a nice jackpot in my first week – I couldn't believe it! What really impressed me was how fast the withdrawal process was; I had my winnings in my crypto wallet within just a few hours. The customer support team was also super friendly and helpful when I had a question. If you're looking for a fun, hassle-free place to play with great bonuses, I definitely recommend giving Stake.com a shot – it's the real deal!",
                    rating: 5.0,
                    pros: [
                        'Fast payouts',
                        'Great bonuses',
                        'Friendly customer support',
                        'Big variety of games',
                        'Easy deposits',
                    ],
                    cons: ['None so far!'],
                },
                {
                    id: 4,
                    date: this.getReviewDate(),
                    reviewedCasino: 'Donbet',
                    casinoLogo: 'img/casino/donbet.png',
                    reviewerName: 'JackpotQueen',
                    title: '!!!Amazing Experience – Big Wins and Fast Payouts!',
                    content:
                        "couldn't be happier with my experience at Stake.com! I've tried a lot of online casinos, but this one really stands out. From the moment I signed up, I was blown away by how easy everything was – deposits were instant, and I even got a great welcome bonus to kick things off. I love playing slots, and I actually hit a nice jackpot in my first week – I couldn't believe it! What really impressed me was how fast the withdrawal process was; I had my winnings in my crypto wallet within just a few hours. The customer support team was also super friendly and helpful when I had a question. If you're looking for a fun, hassle-free place to play with great bonuses, I definitely recommend giving Stake.com a shot – it's the real deal!",
                    rating: 5.0,
                },
                {
                    id: 5,
                    date: this.getReviewDate(),
                    reviewedCasino: 'Europeen777',
                    casinoLogo: 'img/casino/europeen777.png',
                    reviewerName: 'JackpotQueen',
                    title: '!!!Amazing Experience – Big Wins and Fast Payouts!',
                    content:
                        "couldn't be srupido conmndakl; ajklsd dioajh out. From the moment I signed up, I was blown away by how easy everything was – deposits were instant, and I even got a great welcome bonus to kick things off. I love playing slots, and I actually hit a nice jackpot in my first week – I couldn't believe it! What really impressed me was how fast the withdrawal process was; I had my winnings in my crypto wallet within just a few hours. The customer support team was also super friendly and helpful when I had a question. If you're looking for a fun, hassle-free place to play with great bonuses, I definitely recommend giving Stake.com a shot – it's the real deal!",
                    rating: 5.0,
                },
            ]
        },
        getReviewDate() {
            let day = new Date().getDate() - 1
            let month = new Date().getMonth()
            if (day < 1) {
                day = 28
                month = new Date().getMonth() - 1
            }
            let year = new Date().getFullYear()
            return new Date(Date.UTC(year, month, day)).toLocaleDateString(
                'en-GB'
            )
        },
        nextSlide() {
            this.stopAutoSlide()
            this.currentIndex = (this.currentIndex + 1) % this.reviews.length
            this.startAutoSlide()
        },
        prevSlide() {
            this.stopAutoSlide()
            this.currentIndex =
                (this.currentIndex - 1 + this.reviews.length) %
                this.reviews.length
            this.startAutoSlide()
        },
        goToSlide(index) {
            this.currentIndex = index
        },
        startAutoSlide() {
            this.autoSlideInterval = setInterval(() => {
                this.nextSlide()
            }, 5000) // 5 seconds interval
        },
        stopAutoSlide() {
            clearInterval(this.autoSlideInterval)
        },

        handleTouchStart(e) {
            this.startX = e.changedTouches[0].clientX;
        },

        handleTouchEnd(e) {
            const endX = e.changedTouches[0].clientX;
            const diff = this.startX - endX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) this.nextSlide();     // Swipe left
                else this.prevSlide();              // Swipe right
            }
        }
    },
}
