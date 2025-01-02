<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading"> loading</p>

      <ul v-else>
        <survey-result
            v-for="result in results"
            :key="result.id"
            :name="result.name"
            :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading : false,
    }
  },
  methods: {
    loadExperiences() {
      this.isLoading = true
      fetch('https://vue-http-demo-48c63-default-rtdb.firebaseio.com/surveys.json').then(
           (response) => {
            if (response.ok) {
              return response.json();
            }else{
              throw new Error('Something went wrong!');
            }
          }
      ).then( (data) => {
        const results = [];
        for (const id in data){
          results.push(
              {
                id: id,
                name: data[id].name,
                rating: data[id].rating,
              }
          );
        }
        console.log(results);
        this.results = results;
        this.isLoading = false;
      }).catch(
          (error) => {
            console.log(error);
          }
      )
    }
  },
  mounted() {
    this.loadExperiences()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>