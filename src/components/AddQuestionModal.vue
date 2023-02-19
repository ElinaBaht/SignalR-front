<template>
    <div id="addQuestionModal" ref="AddQuestionModal" hide-footer title="Add new Question" @hidden="onHidden">
        <form @submit.prevent="onSubmit" >
          <form label="Title:" label-for="titleInput">
              <input id="titleInput"
                          type="text"
                          v-model="form.title"
                          required
                          placeholder="Please provide a title">
              
          </form>
          <form label="Your Question:" label-for="questionInput">
              <textarea id="questionInput"
                          v-model="form.body"
                          placeholder="What do you need answered?"
                          :rows="6"
                          :max-rows="10">
              </textarea>
          </form>

          <button class="btn btn-primary float-right ml-2" type="submit" >Submit</button>
          <button @click="$emit('closeModal', $event)"  class="btn btn-secondary float-right" type="reset">Cancel</button>
        </form>
      </div>
</template>

<script>
import axios from 'axios'
export default {
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
      axios.post('Question/add-question', this.form).then(res => {
        this.$emit('question-added', res.data)
        
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