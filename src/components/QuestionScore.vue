<template>
    <h3 class="text-center scoring">
      <button class="btn btn-link btn-lg p-0 d-block mx-auto" @click.stop="onUpvote"><i class="fas fa-sort-up" /></button>
      <span class="d-block mx-auto">{{ question.score }}</span>
      <button class="btn btn-link btn-lg p-0 d-block mx-auto" @click.stop="onDownvote"><i class="fas fa-sort-down" /></button>
    </h3>
  </template>
<script>
import connection from "@/question-hub"
import axios from 'axios'
export default {
props: {
    question: {
    type: Object,
    required: true
    }
},
created() {
    connection.on("QuestionScoreChange", this.onScoreChanged)
},
methods: {
    onUpvote () {
    axios.patch(`Question/${this.question.id}/upvoite`).then(res => {
        Object.assign(this.question, res.data)
    })
    },
    onDownvote () {
    axios.patch(`Question/${this.question.id}/downvoite`).then(res => {
        Object.assign(this.question, res.data)
    })
    },
    onScoreChanged(questionId, score) {
        console.log(questionId, score);
        if (this.question.id !== questionId) return
        Object.assign(this.question, {score})
    }
}
}
</script>
   
<style scoped>
.scoring .btn-link{
line-height: 1;
}
</style>