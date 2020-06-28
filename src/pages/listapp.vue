<template>
  <q-page style="text-align: center;"  class="q-mt-sm q-mr-sm q-ml-sm " dir="rtl">
    <div class="ui cards">
   <div class="card">
     <div class="content">
       <div class="header">القطع النقدية</div>
       <div class="description">
         <h4 class="ui header">سنة ثانية</h4>
         القطع النقدية المتداولة والتصرف فيها

       </div>
     </div>
     <router-link to='/app' class="ui bottom attached button">
       <i class="add icon"></i>
      دخول
    </router-link>
   </div>
   <div class="card">
     <div class="content">
       <div class="header">مجموع عددين او اكثر</div>
       <div class="description">
         <h4 class="ui header">السنة اولى</h4>
         مجموع عددين او اكثر - المجموع  اصغر من 10.
       </div>
     </div>
     <div  disabled class="ui bottom attached button">
       <i class="add icon"></i>
       دخول
     </div>
   </div>

 </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
