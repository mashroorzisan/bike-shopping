// vite.config.js
import liveReload from 'vite-plugin-live-reload'

export default {
    // ...
    plugins: [
        liveReload('**/*/index.html', '**/*/style.css'),
    ]
}