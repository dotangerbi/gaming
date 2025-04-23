import pageHeader from './cmps/page-header.js'
import pageFooter from './cmps/page-footer.js'
import mainLandingPage from './pages/main-landing-page.js'

const options = {
    components: {
        pageHeader,
        mainLandingPage,
        pageFooter,
    },
    el: '#app',
    template: `
        <div class="all-in-one">
            <page-header />
            <main-landing-page />
            <page-footer />
        </div>
    `,
}

const app = new Vue(options)
