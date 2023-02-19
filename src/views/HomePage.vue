<template>
  <div>
      <h1>
      This totally looks like Stack Overflow
      <button @click="openModal"  class="btn btn-primary mt-2 float-right">
          <i class="fas fa-plus"/> Ask a question
      </button>
      </h1>
      <ul class="list-group question-previews mt-4">
      <QuestionPreview
          v-for="question in questions"
          :key="question.id"
          :question="question"
          class="list-group-item list-group-item-action mb-3" />
      </ul>
      <AddQuestionModal @closeModal="closeModal" id="question-modal" class="question-modal" @question-added="onQuestionAdded"/>
  </div>
</template>

<script>
import axios from 'axios'
import QuestionPreview from '@/components/QuestionPreview'
import AddQuestionModal from '@/components/AddQuestionModal'
 
export default {
  components: {
    QuestionPreview,
    AddQuestionModal
  },
  data () {
    return {
      questions: []
    }
  },
  created () {
    axios.get('Question/questions').then(res => {
      this.questions = res.data
      
    })
  },
  methods: {
    openModal() {
      document.getElementById("question-modal").classList.add("question-active")
    },
    onQuestionAdded (question) {
      this.questions = [question, ...this.questions]
      document.getElementById("question-modal").classList.remove("question-active")
    },
    closeModal() {
      document.getElementById("question-modal").classList.remove("question-active")
    },
  }
}
</script>
 
<style>
.question-modal {
  display: none;
}
.question-active {
  display: block;
  position: absolute;
  z-index: 99999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.question-previews .list-group-item{
  cursor: pointer;
}
</style>