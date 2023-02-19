<template>
    <div id="addAnswerModal" ref="addAnswerModal" hide-footer title="Add new Answer" @hidden="onHidden">
      <form @submit.prevent="onSubmit" @reset.prevent="onCancel">
        <form label="Your Answer:" label-for="answerInput">
          <textarea id="answerInput"
                        v-model="form.body"
                        placeholder="Provide an answer"
                        :rows="6"
                        :max-rows="10">
          </textarea>
        </form>
  
        <button class="btn btn-primary float-right ml-2" type="submit" >Submit</button>
        <button @click="$emit('closeModal', $event)" class="btn btn-secondary float-right" type="reset">Cancel</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    props: {
      questionId: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        form: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      onSubmit () {
        axios.post(`Question/${this.questionId}/answer`, this.form).then(res => {
          this.$emit('answer-added', res.data)
         
        })
      },
      onCancel () {
        
      },
      onHidden () {
        Object.assign(this.form, {
          title: '',
          body: ''
        })
      }
    }
  }
  </script>