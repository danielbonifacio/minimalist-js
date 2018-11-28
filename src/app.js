// styles
import './css/main.css';

// modules
import Minimalist from '../minimalist';
import outroComponente from './components/batata';

new Minimalist({
  $el: '#app',
  $component: {
    template: `
      <h1 class="main-title">{{ title }}</h1>
      @outroComponente[]
    `,
    data: {
      title: 'Minimalist.js',
    },
    components: {
      outroComponente,
    },
  }
}).initialize();
