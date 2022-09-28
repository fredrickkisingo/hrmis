<template>
  <div class="col-lg-4">
              <div class="w-sidebar">
                <div class="widget widget-category">
                  <h4 class="widget-title"> Categories</h4>
                  <ul v-for="item in knowledgecategories" :key="item.id">
                    <li>
                      <a href="#">{{item.title}}</a>
                    </li>
                  </ul>
                </div>
                
                <div class="widget widget-category">
                  <h4 class="widget-title"> Popular Articles</h4>
                  <ul v-for="item in knowledgepopular" :key="item.id">
                    <li><a href="#"> {{item.title}} </a></li>
                  </ul>
                </div>
                
                <div class="widget widget-category">
                  <h4 class="widget-title"> Latest Articles</h4>
                  <ul v-for="item in knowledgepopular" :key="item.id">
                    <li><a href="#"> {{item.title}} </a></li>
                  </ul>
                </div>
              </div>
  </div>
</template>
<script>
  import knowledgecategories from '../../../../assets/json/knowledgecategories.json';
  import knowledgepopular from '../../../../assets/json/knowledgepopular.json';
  import Vue from 'vue'
  export default {
    data() {
    return {
    knowledgecategories: knowledgecategories,
    knowledgepopular: knowledgepopular
    }
    },
    components: {
   
    },
  }
</Script>