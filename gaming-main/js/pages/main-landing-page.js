import heroSection from '../cmps/hero-section.js'
import casinoList from '../cmps/casino-list.js'
import casinoReview from '../cmps/casino-review.js'
import securitySection from '../cmps/security-section.js'
import { casinoService } from '../services/casino-service.js'

export default {
    components: {
        heroSection,
        casinoList,
        casinoReview,
        securitySection,
    },
    template: `
        <section>
            <hero-section />
            <casino-list :casinos="casinos" />
            <casino-review />
            <security-section />
        </section>
    `,
    date() {
        return {
            casinos: null,
        }
    },
    created() {
        this.casinos = casinoService.query()
    },
}
