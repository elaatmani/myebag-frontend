// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const myTheme = {
  colors: {
    'primary-cyan': '#5dc5c3', 
    'primary-purple': '#6354a4'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme
    }
  }
}
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
