
<template>
  <section class="employees__list__row">
    <div class="row">
      <div v-for="employee in employeesList" class="col-xs-12 col-sm-6 col-md-4">
        <div class="box__card box__card--one">
          <div class="box__card__content">
            <div class="box__card__avatar">
              <div class="avatar__image">
                <figure>
                  <img :src="employee.Photo" class="img-circle user-img">
                </figure>
              </div>
              <span class="id__badge badge">ID: {{employee.Code}}</span>
            </div>
            <div class="box__card__text">
              <h3>{{employee.Name}}</h3>
              <p>{{employee.Designation}}</p>
              <p class="text--itallic text--thin">Total exp: {{employee.ExperienceYearsOnOfficeJoin}} years</p>
            </div>
          </div>
          <div class="box__card__footer">
            <ul class="social__links">
              <li v-if="checkAvailable(employee.FacebookLink)"><a :href="employee.FacebookLink"><i class="ion-social-facebook"></i></a></li>
              <li v-if="checkAvailable(employee.TwitterLink)"><a :href="employee.TwitterLink"><i class="ion-social-twitter"></i></a></li>
              <li v-if="checkAvailable(employee.LinkedInLink)"><a :href="employee.LinkedInLink"><i class="ion-social-linkedin"></i></a></li>
              <li v-if="checkAvailable(employee.GooglePlusLink)"><a :href="employee.GooglePlusLink"><i class="ion-social-googleplus"></i></a></li>
              <!--<li><a href=""><i class="ion-social-tumblr"></i></a></li>-->
            </ul>
          </div>
          <div class="plus--more">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="ion-more"></i></a>
            <ul class="dropdown-menu droppingMenu pull-right">
                <li>
                  <router-link to="/hrm">Create hr</router-link></li>
                <li>
                  <router-link to="/employees-list">Go to hr list</router-link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 


<script>
export default {
  name: 'EmployeesList',
  data () {
    return {
      msg: 'Citron',
      employeesList: ''
    }
  },
  methods: {
    checkAvailable: function (valueToCheck) {
        if (valueToCheck !== null) {
          return true
        } else {
          return false
        }
      }
  },
  created: function () {
    this.$http.get('http://devoidofsilence-001-site1.itempurl.com/api/HRModule/GetEmployees').then(function (data) {
        if (typeof data !== undefined) {
          this.employeesList = data.body
        }
      })
  }
}
</script>

<style scoped>
.taskNull__content{
  text-align: center;
  width: 100%;
height: 100%;
}
.taskNull__content p{
  font-size: 26px;
  font-weight: 300;
}
.box__card{
  background-color: #fff;
  border-radius: 3px;
  position: relative;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.036);
}
.box__card--one{
  margin-bottom: 30px;
}
.box__card__content:before, .box__card__content:after{
  display: table;
  content: '';
  clear: both;
}
.box__card__content{
  padding: 15px 15px 25px 15px;
}
.box__card__footer{
  border-top: 1px solid #f5f5f5;
  padding: 8px 15px;
}
.box__card__avatar{
  float: left;
  margin-right: 15px;
  position: relative;
}
.avatar__image {
  width: 85px;
}
.avatar__image figure{
  border-radius: 100%;
  overflow: hidden;
}
.avatar__image img{
  max-width: 100%;
}
.box__card__text h3{
    font-size: 16px;
    color: #666f7b;
    font-weight: 500;
    margin: 0 0 10px 0;
}
.box__card__text p {
  margin: 0 0 2px 0;
  font-size: 14px;
}
.id__badge{
    position: absolute;
    bottom: -10px;
    left: -2px;
    padding: 5px 8px;
    background-color: #fff;
    color: #666f7b;
    border: 1px solid #dadada;
    border-radius: 30px;
    font-weight: normal;
    width: 100%;
}
.box__card .plus--more{
    position: absolute;
    right: 0;
    top: 0;
    right: 15px;
}
.social__links{
  margin: 0;
  padding: 0;
}
.social__links li{
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
}
.social__links li:last-child{
  margin-right: 0;
}
.social__links li a{
  display: block;
  color: #8c8c8c;
  font-size: 16px;
}
</style>
