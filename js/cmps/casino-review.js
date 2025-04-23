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
                    reviewerName: 'Luke R.',
                    title: 'Thrilling Adventures and Endless Rewards!',
                    content:
                        "Fat Pirate Casino instantly hooked me with its pirate-themed slots and generous bonuses! Every spin felt like a treasure hunt, and the welcome bonus was incredibly easy to claim. I've played at many casinos, but the excitement here keeps me coming back. Highly recommended for anyone looking to hit big and have fun!",
                    rating: 5,
                    pros: ['Fast payouts', 'Great bonuses', 'Crypto-friendly'],
                    cons: ['Limited table games'],
                },
                {
                    id: 2,
                    date: this.getReviewDate(),
                    reviewedCasino: 'Gransino',
                    casinoLogo: 'img/casino/gransino1.webp',
                    reviewerName: 'Elena Novak',
                    title: 'Luxurious Gaming with Incredible Bonuses!',
                    content:
                        'From the sleek, elegant design to their weekly promotions, Gransino has become my first choice for online gaming. The bonuses are genuinely generous, boosting my bankroll and my chances of winning. Their VIP perks make every player feel special—I’m definitely sticking around!',
                    rating: 5,
                    pros: ['Great game selection', 'Solid cashback offers'],
                    cons: ['Slow verification process'],
                },
                {
                    id: 3,
                    date: this.getReviewDate(),
                    reviewedCasino: 'Casino Lab',
                    casinoLogo: 'img/casino/casinoLab.webp',
                    reviewerName: 'Jessica Hart',
                    title: 'A Magical Mix of Fun and Wins!',
                    content:
                        "Casino Lab is hands-down the most enjoyable casino I've visited. Its vibrant, creative interface sets the mood perfectly, and the variety of games is fantastic. What really stood out was how fast they handled payouts—my winnings were in my account within hours! It’s my new favorite spot for gaming.",
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
                    reviewerName: 'Aaron Martinez',
                    title: 'Top-Notch Gaming Experience!',
                    content:
                        "Playing at Donbet Casino feels premium—great selection, smooth gameplay, and flawless mobile compatibility. Their live casino games offer immersive action, and customer service goes above and beyond. Every aspect screams quality. Absolutely worth checking out!",
                    rating: 5.0,
                },
                {
                    id: 5,
                    date: this.getReviewDate(),
                    reviewedCasino: 'My Stake',
                    casinoLogo: 'img/casino/myStake.jpg',
                    reviewerName: 'Daniel Evans',
                    title: 'Simply the Best Casino Out There',
                    content:
                        "MyStake Casino blew me away with its massive game library and constant rewards. The tournaments are thrilling, and their cashback promotions always give me extra reasons to play. Deposits and withdrawals are lightning-fast, making it an unbeatable experience. Five stars, easily!",
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
