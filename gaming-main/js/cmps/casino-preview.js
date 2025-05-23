export default {
    props: ['casino'],
    template: `
    <div class="casino-preview" :class="{ 'show-all': showMore }">
        <div class="casino-logo">
            <div class="casino-name">
                <div class="casino-logo-img">
                    <img :src="'./'+casino.logo" alt="">
                </div>
            </div>
            <div class="rating">
                <h4>{{casino.name}}</h4>
                <p class="rating-stars">★★★★★</p>
                <p class="rating-number">4.9 <span class="rating-amount">/ 5</span></p>
                <p><span class="rating-amount">34 Rating</span></p>
            </div>
        </div>

        <div class="casino-details">
            <div class="casino-bonus">
                <h6>Bonus: </h6>
                <p>{{casino.bonus}}</p>
            </div>
            <div class="casino-wagering">
                <h6>Wagering: </h6>
                <p>{{casino.wagering}}</p>
            </div>
            <div class="casino-categories hide-on-mobile">
                <h6>Games:</h6>
                <ul>
                    <li v-for="(category, idx) in casino.categories">{{category}}<span v-if="idx !== casino.categories.length - 1">, </span> </li>
                </ul>
            </div>
            <div class="casino-payments hide-on-mobile">
                <h6>Payments methods:</h6>
                <ul>
                    <li v-for="(payment, idx) in casino.payments " >{{payment}}<span v-if="idx !== casino.payments.length - 1">, </span></li>
                </ul>
            </div>
            <div class="casino-payout-speed hide-on-mobile">
                <h6>Payout speed: </h6>
                <p>{{casino.payoutSpeed}}</p>
            </div>
        </div>
        <div class="casino-link">
            <div class="games-photos">
                <div>

                    <img src="./img/symbols/3525385_casino_chips_croupier_gamble_gambler_icon.svg" alt="">
                    <img src="./img/symbols/5355688_casino_gambling_game_gaming_play_icon.svg" alt="">
                </div>
                <div>
                    <img src="./img/symbols/9517508_casino_game_iphone_slot_smartphone_icon.svg" alt="">
                    <img src="./img/symbols/casino-chip-style-dollar-svgrepo-com.svg" alt="">

                </div>
            </div>
            <div class="payment-methods">
                <svg width="120" height="60" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_823_247)">
                    <rect x="1.375" y="1.375" width="117.25" height="77.25" rx="6.625" fill="white"/>
                    <path d="M55.5533 22.9046C61.103 22.9046 64.9675 26.7301 64.9675 32.2997C64.9675 37.8892 61.0235 41.7345 55.4142 41.7345H49.2696V51.5062H44.8301V22.9046L55.5533 22.9046ZM49.2695 38.0081H54.3635C58.2288 38.0081 60.4286 35.9271 60.4286 32.3196C60.4286 28.7124 58.2288 26.6509 54.3834 26.6509H49.2695V38.0081Z" fill="black"/>
                    <path d="M66.1274 45.5799C66.1274 41.9326 68.9222 39.6929 73.8778 39.4154L79.5858 39.0786V37.4732C79.5858 35.1541 78.0198 33.7666 75.404 33.7666C72.9258 33.7666 71.3797 34.9556 71.0035 36.8191H66.9601C67.1979 33.0528 70.4086 30.278 75.5623 30.278C80.6165 30.278 83.8471 32.9538 83.8471 37.136V51.5062H79.7441V48.0772H79.6454C78.4365 50.3963 75.8001 51.8629 73.065 51.8629C68.9818 51.8629 66.1274 49.3258 66.1274 45.5799ZM79.5858 43.697V42.0518L74.452 42.3688C71.8951 42.5473 70.4484 43.6771 70.4484 45.461C70.4484 47.2842 71.9547 48.4736 74.254 48.4736C77.2468 48.4736 79.5858 46.4122 79.5858 43.697Z" fill="black"/>
                    <path d="M87.7206 59.177V55.7082C88.0372 55.7874 88.7506 55.7874 89.1077 55.7874C91.0896 55.7874 92.1601 54.9551 92.8139 52.8145C92.8139 52.7747 93.1908 51.5459 93.1908 51.5261L85.6592 30.6546H90.2967L95.5696 47.6214H95.6484L100.921 30.6546H105.44L97.6303 52.5962C95.8472 57.6508 93.7857 59.276 89.4648 59.276C89.1077 59.276 88.0372 59.2363 87.7206 59.177Z" fill="black"/>
                    <path d="M31.7358 25.6955C32.8058 24.3572 33.5319 22.5603 33.3404 20.724C31.7741 20.8019 29.8627 21.7573 28.7562 23.0967C27.7626 24.2436 26.8832 26.1158 27.1124 27.8751C28.8707 28.0276 30.6273 26.9962 31.7358 25.6955Z" fill="black"/>
                    <path d="M33.3204 28.2186C30.7671 28.0665 28.5961 29.6678 27.3767 29.6678C26.1567 29.6678 24.2894 28.2952 22.2698 28.3322C19.6412 28.3708 17.2022 29.8571 15.8682 32.2209C13.1246 36.9497 15.1442 43.9642 17.8122 47.8155C19.1079 49.7209 20.6694 51.8189 22.7269 51.7435C24.6709 51.6672 25.4328 50.4847 27.7958 50.4847C30.1571 50.4847 30.8435 51.7435 32.9013 51.7054C35.0353 51.6672 36.3695 49.799 37.6651 47.8918C39.1515 45.7198 39.7599 43.6225 39.7982 43.5073C39.7599 43.4692 35.6832 41.9053 35.6454 37.2158C35.6069 33.2892 38.8461 31.4215 38.9985 31.3057C37.1694 28.6003 34.3113 28.2952 33.3204 28.2186Z" fill="black"/>
                    <rect x="1.375" y="1.375" width="117.25" height="77.25" rx="6.625" stroke="black" stroke-width="2.75"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_823_247">
                    <rect width="120" height="80" rx="4" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                    <svg width="120" height="60" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="120" height="80" rx="4" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M86.6666 44.9375L90.3238 35.0625L92.3809 44.9375H86.6666ZM100.952 52.8375L95.8086 27.1625H88.7383C86.3525 27.1625 85.7723 29.0759 85.7723 29.0759L76.1904 52.8375H82.8868L84.2269 49.0244H92.3947L93.148 52.8375H100.952Z" fill="#182E66"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M77.1866 33.5711L78.0952 28.244C78.0952 28.244 75.2896 27.1625 72.3648 27.1625C69.2031 27.1625 61.6955 28.5638 61.6955 35.3738C61.6955 41.7825 70.5071 41.8621 70.5071 45.2266C70.5071 48.5912 62.6034 47.9901 59.9955 45.8676L59.0476 51.4362C59.0476 51.4362 61.8919 52.8375 66.2397 52.8375C70.5869 52.8375 77.1467 50.5544 77.1467 44.3455C77.1467 37.8964 68.2552 37.296 68.2552 34.4921C68.2552 31.6882 74.4602 32.0484 77.1866 33.5711Z" fill="#182E66"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M54.6517 52.8375H47.6191L52.0144 27.1625H59.0477L54.6517 52.8375Z" fill="#182E66"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M42.3113 27.1625L35.9217 44.8213L35.1663 41.0185L35.167 41.0199L32.9114 29.4749C32.9114 29.4749 32.6394 27.1625 29.7324 27.1625H19.1709L19.0476 27.5966C19.0476 27.5966 22.2782 28.2669 26.057 30.5326L31.8793 52.8375H38.8617L49.5238 27.1625H42.3113Z" fill="#182E66"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.2857 40.9875L32.1534 29.4695C32.1534 29.4695 31.8963 27.1625 29.1482 27.1625H19.1641L19.0476 27.5955C19.0476 27.5955 23.8467 28.6432 28.4504 32.5652C32.8505 36.3145 34.2857 40.9875 34.2857 40.9875Z" fill="#182E66"/>
                </svg>
                    <svg width="120" height="60" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="120" height="80" rx="4" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M97.5288 54.6562V53.7384H97.289L97.0137 54.3698L96.7378 53.7384H96.498V54.6562H96.6675V53.9637L96.9257 54.5609H97.1011L97.36 53.9624V54.6562H97.5288ZM96.0111 54.6562V53.8947H96.318V53.7397H95.5361V53.8947H95.843V54.6562H96.0111Z" fill="#F79E1B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6521 58.595H70.3479V21.4044H49.6521V58.595Z" fill="#FF5F00"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M98.2675 40.0003C98.2675 53.063 87.6791 63.652 74.6171 63.652C69.0996 63.652 64.0229 61.7624 60 58.5956C65.5011 54.2646 69.0339 47.5448 69.0339 40.0003C69.0339 32.4552 65.5011 25.7354 60 21.4044C64.0229 18.2376 69.0996 16.348 74.6171 16.348C87.6791 16.348 98.2675 26.937 98.2675 40.0003Z" fill="#F79E1B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M50.966 40.0003C50.966 32.4552 54.4988 25.7354 59.9999 21.4044C55.977 18.2376 50.9003 16.348 45.3828 16.348C32.3208 16.348 21.7324 26.937 21.7324 40.0003C21.7324 53.063 32.3208 63.652 45.3828 63.652C50.9003 63.652 55.977 61.7624 59.9999 58.5956C54.4988 54.2646 50.966 47.5448 50.966 40.0003Z" fill="#EB001B"/>
                    </svg>
                    <svg width="120" height="60" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="120" height="80" rx="4" fill="white"/>
                        <rect x="73.2" y="25.2" width="29.6" height="29.6" rx="14.8" fill="#FADC4A"/>
                        <path d="M92.9487 46.1936H83.2815L84.094 42.7099L82.5142 43.6828L82.898 41.7765L84.5504 40.7548L86.1713 33.8065H89.1892L88.0732 38.5775L92.0023 36.149L91.5419 38.1243L87.6134 40.543L86.8362 43.8664H93.4856L92.9487 46.1936Z" fill="#213D62"/>
                        <rect x="73.2" y="25.2" width="29.6" height="29.6" rx="14.8" stroke="#F7C544" stroke-width="2.4"/>
                        <rect x="17.2" y="25.2" width="29.6" height="29.6" rx="14.8" fill="#FADC4A"/>
                        <path d="M31.9984 43.7221L27.5427 40.9462L31.9977 47.5699L36.457 40.9462L31.9965 43.7221H31.9984ZM32.0005 32.4301L27.5427 40.1049L31.9999 42.8387L36.457 40.1074L32.0005 32.4301Z" fill="#213D62"/>
                        <rect x="17.2" y="25.2" width="29.6" height="29.6" rx="14.8" stroke="#F7C544" stroke-width="2.4"/>
                        <rect x="41.2" y="21.2" width="37.6" height="37.6" rx="18.8" fill="#FADC4A"/>
                        <path d="M64.9676 39.1822C66.1348 38.5824 66.8651 37.526 66.6945 35.7662C66.4647 33.3612 64.4063 32.5548 61.8077 32.3251L61.8072 28.9893H59.7938L59.7932 32.2374C59.2635 32.2374 58.7235 32.2479 58.1859 32.2588L58.1855 28.9897L56.1739 28.9895L56.1735 32.3246C55.7375 32.3335 55.3094 32.3421 54.8914 32.3421V32.3322L52.1143 32.3311L52.1146 34.4994C52.1146 34.4994 53.6015 34.4712 53.577 34.4986C54.3922 34.4992 54.6584 34.9767 54.7349 35.3889L54.7356 39.1892V44.5273C54.6997 44.786 54.5486 45.1993 53.9786 45.2001C54.0046 45.2231 52.514 45.1998 52.514 45.1998L52.1146 47.6245H54.7343C55.2225 47.6251 55.7021 47.6328 56.1726 47.6366L56.1744 51.0102L58.1855 51.0108L58.1849 47.6725C58.7382 47.6839 59.2722 47.6888 59.7939 47.6881L59.7933 51.0108H61.8067L61.8078 47.6428C65.1921 47.4467 67.5614 46.5867 67.8559 43.3806C68.0934 40.7995 66.8891 39.6473 64.9676 39.1822ZM58.2857 34.5148C59.4436 34.5148 63.0852 34.1459 63.0857 36.5654C63.0852 38.8849 59.4447 38.6139 58.2857 38.6139V34.5148ZM58.2857 45.4953L58.2865 40.7111C59.6124 40.7106 63.7709 40.2872 63.7714 43.1021C63.772 45.8016 59.6124 45.4942 58.2857 45.4953Z" fill="#213D62"/>
                        <rect x="41.2" y="21.2" width="37.6" height="37.6" rx="18.8" stroke="#F7C544" stroke-width="2.4"/>
                    </svg>
            </div>
            <a :href="casino.link" target=”_blank”><button>Play now!</button></a>
        </div>
        <button class="see-more-btn" @click="toggleDetails">
            {{ showMore ? 'Show Less' : 'See More' }}
        </button>
    </div>
`,
data() {
    return {
        showMore: null
    }
},
methods: {
    toggleDetails() {
        this.showMore = !this.showMore;
    }
},
}
