<template>
  <q-page style="text-align: center;"  class="q-mt-sm q-mr-sm q-ml-sm ">
   <h2 class="ui header"> مرحبا بكم في موقعنا</h2>
   <p>مشروع ختم الاجازة التطبيقية في التربية و التعليم</p>
   <p>لطالبان : محمد  امين و اسمهان</p>
   <div class="ui divider">

   </div>
   <div  class="">
         <router-link to="listapp" class="ui positive basic button">تمارين</router-link>
         <router-link to='/' class="ui secondary basic button">الرئيسية</router-link>
   </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
