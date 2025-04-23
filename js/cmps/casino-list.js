import casinoPreview from './casino-preview.js'

export default {
    components: {
        casinoPreview,
    },
    props: ['casinos'],
    template: `
        <section id="casinos" class="casino-list">
            <div class="container main-layout">
                <h2>Top Casino Offers</h2>
                <ul>
                    <li v-for="(casino, idx) in casinos">
                        <casino-preview :casino="casino"/>
                    </li>
                </ul>
            </div>
        </section>
    `,
    data() {
        return {}
    },
}
