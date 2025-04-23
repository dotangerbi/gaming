export default {
    template: `
    <header class="header">
        <div class="container main-layout">
            <div class="logo">
                <img src="./img/Mr-&-mrs-Bet_gold.png" alt="Logo">
            </div>
            <div class="menu-toggle" @click="toggleMenu">☰</div>
            <nav class="navbar" :class="{open: menuOpen}">
                <ul>
                    <li><a href="#home" @click="closeMenu">Home</a></li>
                    <li><a href="#casinos" @click="closeMenu">Casinos</a></li>
                    <li><a href="#reviews" @click="closeMenu">Reviews</a></li>
                    <li><a href="#security" @click="closeMenu">Security</a></li>
                </ul>
            </nav>
        </div>
    </header>
`,
    data() {
        return {
            menuOpen: null
        }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        closeMenu() {
            this.menuOpen = false;
        }      
    }
}
