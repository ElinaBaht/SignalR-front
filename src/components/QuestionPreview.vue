<template>
    <li class="card container" @click="onOpenQuestion">
        <div class="card-body row">
        <QuestionScore :question="question" class="col-1" />
        <div class="col-11">
            <h5 class="card-title">{{ question.title }}</h5>
            <p>{{question.body}}</p>
            <a href="#" class="card-link">
            View question <span class="badge badge-success">{{ question.answerCount }}</span>
            </a>
        </div>
        </div>
    </li>
</template>

<script>


import QuestionScore from '@/components/QuestionScore'
 
export default {
  components: {
    
    QuestionScore
  },
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  methods: {
    onOpenQuestion () {
      this.$router.push({name: 'QuestionPage', params: {id: this.question.id}})
    }
  }
}
</script>