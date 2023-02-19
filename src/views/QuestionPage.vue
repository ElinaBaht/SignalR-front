<template>
<article class="container" v-if="question">
    <header class="row align-items-center">
    <QuestionScore :question="question" class="col-1" />
    <h3 class="col-11">{{ question.title }}</h3>
    </header>
    <p class="row offset-1 col-11">
      {{ question.body }}
    </p>
    <ul class="list-unstyled row" v-if="hasAnswers">
    <li v-for="answer in question.answers" :key="answer.id" class="offset-1 col-11 border-top py-2">
        <p>{{ answer.body }}</p>
    </li>
    </ul>
    <footer>
      <button @click="openModal" class="btn btn-primary float-right" ><i class="fas fa-edit"/> Post your Answer</button>
      <button class="btn btn-link float-right" @click="onReturnHome">Back to list</button>
    </footer>
    <AddAnswerModal @closeModal="closeModal" id="answer-modal" class="answer-modal" :question-id="this.questionId" @answer-added="onAnswerAdded"/>
</article>
</template>

<script>
import axios from 'axios'

import QuestionScore from '@/components/QuestionScore'
import AddAnswerModal from '@/components/AddAnswerModal'
 
export default {
  components: {
    QuestionScore,
    AddAnswerModal
  },
  data () {
    return {
      question: null,
      answers: [],
      questionId: this.$route.params.id
    }
  },
  computed: {
    hasAnswers () {
      return this.question.answers.length > 0
    }
  },
  created () {
    axios.get(`Question/${this.questionId}`).then(res => {
      this.question = res.data
    })
  },
  methods: {
    openModal() {
      document.getElementById("answer-modal").classList.add("answer-active")
    },
    onReturnHome () {
      this.$router.push({name: 'Home'})
    }, 
    onAnswerAdded (answer) {
      if (!this.question.answers.find(a => a.id === answer.id)) {
        this.question.answers.push(answer)
      }
      document.getElementById("answer-modal").classList.remove("answer-active")
    },
    closeModal() {
      document.getElementById("answer-modal").classList.remove("answer-active")
    },
  }
}
</script>
<style>
.answer-modal {
  display: none;
}
.answer-active {
  display: block;
  position: absolute;
  z-index: 99999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>