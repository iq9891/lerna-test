/** @format */

import WText from './src/Text.vue';

(WText as any).install = (Vue: any): void => {
  Vue.component('iq911-text', WText);
};

export default WText;
