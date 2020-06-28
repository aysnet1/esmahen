<template>
  <q-layout view="hHh lpr fFf" dir="">

    <q-header elevated class="bg-teal text-white">
      <q-toolbar>
        <q-toolbar-title>
             <a class="q-btn q-btn-item non-selectable no-outline q-mr-xs q-btn--flat q-btn--round q-btn--actionable q-focusable q-hoverable q-btn--wrap q-btn--dense" href="https://simulationmath.wixsite.com/tunis/services"><q-btn dense flat round icon="  keyboard_backspace"  /></a>
        </q-toolbar-title>
        <q-btn flat round dense
       @click="$q.fullscreen.toggle()"
        :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"

       class="q-mr-xs" />

        <!-- <q-btn dense flat round icon="menu" @click="right = !right" /> -->
      </q-toolbar>
    </q-header>

    <q-drawer  v-model="right" side="right" overlay bordered>
      <div dir="rtl"  style="    width: 19rem;"class="ui vertical menu">
  <a class="active item">
   <i class="home icon"></i>
    الرئيسية
  </a>
  <a class="item">
     <i class="book icon"></i>
     التمارين
  </a>
  <a class="item">
   <i class="help icon"></i>
    من نحن
  </a>

</div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      right: false
    }
  }
}
</script>
