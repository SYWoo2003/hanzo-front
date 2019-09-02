import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const LoginPage = () => import('./pages/auth/LoginPage.vue')
const MainPage = () => import('./pages/MainPage.vue')
const StudyPage = () => import('./pages/Study.vue')
const QuizPage = () => import('./pages/Quiz.vue')
const RankingPage = () => import('./pages/Ranking.vue')
const ReportPage = () => import('./pages/Report.vue')

const Unit1 = () => import('./pages/study/Unit1.vue')
const Unit2 = () => import('./pages/study/Unit2.vue')
const Unit3 = () => import('./pages/study/Unit3.vue')
const Unit4 = () => import('./pages/study/Unit4.vue')
const Unit5 = () => import('./pages/study/Unit5.vue')
const Unit6 = () => import('./pages/study/Unit6.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login_page',
      component: LoginPage,
    },

    {
      path: '/main',
      name: 'main_page',
      component: MainPage,
    },

    {
      path: '/main/study',
      name: 'study_page',
      component: StudyPage,
    },

    {
      path: '/main/quiz',
      name: 'quiz_page',
      component: QuizPage,
    },

    {
      path: '/main/ranking',
      name: 'ranking_page',
      component: RankingPage,
    },

    {
      path: '/main/report',
      name: 'report_page',
      component: ReportPage,
    },

    {
      path: '/main/study/unit1',
      name: 'Unit1',
      component: Unit1,
    },

    {
      path: '/main/study/unit2',
      name: 'Unit2',
      component: Unit2,
    },

    {
      path: '/main/study/unit3',
      name: 'Unit3',
      component: Unit3,
    },

    {
      path: '/main/study/unit4',
      name: 'Unit4',
      component: Unit4,
    },

    {
      path: '/main/study/unit5',
      name: 'Unit5',
      component: Unit5,
    },

    {
      path: '/main/study/unit6',
      name: 'Unit6',
      component: Unit6,
    },
  ],
})
