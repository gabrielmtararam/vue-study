import { createApp } from 'vue';

import App from './App.vue';
import ActiveElement from './components/ActiveElement.vue';
import KnowledgeBase from './components/KnowledgeBase.vue';
import KnowledgeElement from './components/KnowledgeElement.vue';
import KnowledgeGrid from './components/KnowledgeGrid.vue';
import BaseDiv from './components/BaseDiv.vue';
import CourseGoals from './components/CourseGoals.vue';
import CompA from './components/CompA.vue';
import CompB from './components/CompB.vue';

const app = createApp(App);

app.component('active-element', ActiveElement);
app.component('knowledge-base', KnowledgeBase);
app.component('knowledge-element', KnowledgeElement);
app.component('knowledge-grid', KnowledgeGrid);
app.component('base-div', BaseDiv);
app.component('course-goals', CourseGoals);
app.component('comp-a', CompA);
app.component('comp-b', CompB);

app.mount('#app');
