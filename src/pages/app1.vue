<template>
<q-page style="" class="q-mt-sm q-mr-sm q-ml-sm " dir="rtl">
  <div class="ui brown segment">
    <h1 class="ui header">{{title}}</h1>
    <p style="font-size:larger">
      <q-btn @click.prevent="playSounda('statics/s1.mp4')" size='sm' round color="secondary" icon="campaign" /> {{itema}}</p>

    <div class="ui divider">

    </div>

    <q-card>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="qs1">
          <div class="text-h6"></div>
          <h5 class="ui header">
            <q-btn @click.prevent="playSounda('statics/q1.mp4')" size='sm' round color="secondary" icon="campaign" /> 1- {{itemb}}</h5>
          <div class="">
            <div class="ui two column stackable  grid">
              <div class="column">
                <div class="field">
                  {{itemQ1}}
                  <div class="ui right labeled input">
                    <input class="faux" :class="iscolor ? 'correct' : 'faux'" ref="rep" style="width:100px" type="number">
                    <div class="ui basic label">
                      مي
                    </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <a  href="https://lvet-community.github.io/aminess/prb.html"  target="ifr_a" class="button ui icon "> <i class="redo icon"></i></a>

                <iframe name="ifr_a" src="https://lvet-community.github.io/aminess/prb.html" width="100%" scrolling="no" height="320"></iframe>
              </div>
            </div>
          </div>
          <div class="margin-top:20px">
            <q-btn @click.prevent="playSound('statics/faux.mp4','statics/true.mp4')" style="background: #FF0080; color: white; margin:15px 0px 8px 8px" label="أتثبّتُ" />
            <q-tabs :class="iscolor ? 'none' : 'ino'" v-model="tab" style="width:120px;height:36px ;" class="bg-grey-3">
              <q-tab name="qs2" label="السّوؤال التّالي" />
            </q-tabs>

          </div>
        </q-tab-panel>

        <q-tab-panel name="qs2">
          <div class="text-h6"></div>
          <h5 class="ui header">
            <q-btn @click.prevent="playSounda('statics/q2.mp4')" size='sm' round color="secondary" icon="campaign" /> 2- {{itemq2}}</h5>
          <div class="">
            <div class="row no-wrap justify-around ">
              <iframe src="https://aminesapp2.netlify.app" style="width:100%" height="600" scrolling="no" allowfullscreen></iframe>
            </div>
          </div>
          <div class="margin-top:20px">
            <q-tabs :class="iscolor ? 'none' : 'ino'" v-model="tab" style="width:120px;height:36px ;" class="bg-grey-3">
              <q-tab name="qs3" label="السّوؤال التّالي" />
            </q-tabs>

          </div>
        </q-tab-panel>

        <q-tab-panel name="qs3">
          <div class="text-h6"></div>
          <h5 class="ui header">
            <q-btn @click.prevent="playSounda('statics/q3.mp4')" size='sm' round color="secondary" icon="campaign" /> 3- {{itemq3}}</h5>

          <div class="q-gutter-sm">
            <q-radio v-model="vals" val="vrai" size="xl" label="نعم" color="teal" />
            <q-radio v-model="vals" val="faux" size="xl" label="لا" color="red" />
          </div>
          <div class="q-gutter-sm">
            لماذا ؟:
            <br>
            <q-radio v-model="vals1" val="0" size="xl" label="لان المبلغ الذي يملكه أقل من ثمن المثلجة" color="teal" />
            <q-radio v-model="vals1" val="1" size="xl" label="لان المبلغ الذي يملكه أكثر من ثمن المثلجة" color="teal" />
          </div>
          <div class="margin-top:20px">
            <q-btn @click.prevent="playSoundr('statics/faux.mp4','statics/true.mp4')" style="background: #FF0080; color: white; margin:15px 0px 8px 8px" label="أتثبّتُ" />
            <q-tabs :class="iscolor3 ? 'none' : 'ino'" v-model="tab" style="width:120px;height:36px ;" class="bg-grey-3">
              <q-tab name="qs4" label="السّوؤال التّالي" />
            </q-tabs>

          </div>
        </q-tab-panel>
        <q-tab-panel name="qs4">
          <div class="text-h6"></div>
          <h5 class="ui header">
            <q-btn @click.prevent="playSounda('statics/q4.mp4')" size='sm' round color="secondary" icon="campaign" /> 4- {{itemq4}}</h5>

          <div class="">
            <div class="row no-wrap ">

              <iframe src="https://aminesapp2.netlify.app/app3.html" style="width:100%" height="600" scrolling="no" allowfullscreen></iframe>
            </div>
          </div>
          <div class="margin-top:20px">
            <q-tabs :class="iscolor3 ? 'none' : 'ino'" v-model="tab" style="width:120px;height:36px ;" class="bg-grey-3">
              <q-tab name="qs1" label="عودة" />
            </q-tabs>

          </div>
        </q-tab-panel>
      </q-tab-panels>
      <q-separator />
    </q-card>
  </div>

</q-page>
</template>

<script>
export default {

  data() {
    return {
      status1: [],
      status2: [],
      vals: 't',
      vals1: 't',
      tab: 'qs1',
      iscolor: false,
      iscolor3: false,
      model: '',
      title: "المسالة عدد 1",
      itema: 'عَدًّ رَمْزٍي نُقٌودَهٌ فَوَجَدَ 285 مي . زَادَتْهُ أُمُّهُ قِطْعَتَيْنِ نَقْدِيَّتًيْنِ الْأُولَى مِنْ فِئَةِ 100 مِلٍيمٍ وَ الثًّانِيَة مِنْ فِئَةِ 50 مِلِِّيمًا',
      itemb: 'أَحْسُبُ المَبْلًغَ الًّذِي أَصْبَحَ عِنْدَهُ.',
      itemQ1: 'أَكتُبُ الاجَابَة هُنَا :',
      itemq2: 'أُمِثِّلُ هَذَا المَبْلَغَ بِأَقَلَّ عَدَدٍ مِنَ القِطَعِ النّقْدِيَّةِ. ',
      itemq3: 'هَلْ يَسْتَطِيعُ رَمْزِي شِرَاءَ مْثَلَّجَةٍ ب 465 مي ؟  ثم أٌعَلٍّلُ إِجَابَتِي  .',
      itemq4: '.أُمَثّلُ المَبْلَغَ النَّاقِصَ أَوْ المَبْلَغَ المُتَبَقِّيَ.'
    }
  },
  mounted() {

  },
  methods: {
    handler1(mutationRecords) {
      this.status1 = []
      for (const index in mutationRecords) {
        const record = mutationRecords[index]
        const info = `type: ${record.type}, nodes added: ${record.addedNodes.length > 0 ? 'true' : 'false'}, nodes removed: ${record.removedNodes.length > 0 ? 'true' : 'false'}, oldValue: ${record.oldValue}`
        this.status1.push(info)
      }
    },

    handler2(mutationRecords) {
      this.status2 = []
      for (const index in mutationRecords) {
        const record = mutationRecords[index]
        const info = `type: ${record.type}, nodes added: ${record.addedNodes.length > 0 ? 'true' : 'false'}, nodes removed: ${record.removedNodes.length > 0 ? 'true' : 'false'}, oldValue: ${record.oldValue}`
        this.status2.push(info)
      }
    },
    reset() {
      this.$refs.input.resetValidation()
    },
    playSounda(sounda) {
      if (sounda) {
        var audio = new Audio(sounda);
        audio.play();
      }
    },
    playSound(sound1, sound2) {

      if (this.$refs.rep.value == 435) {
        var audio = new Audio(sound2);
        this.iscolor = true;
        audio.play();
      } else {
        var audio = new Audio(sound1);
        audio.play();
        this.iscolor = false;
      }
    },
    playSoundr(sound1, sound2) {

      if ((this.vals == 'vrai') || (this.vals1 == "0")) {
        var audio = new Audio(sound2);
        audio.play();
        this.iscolor3 = true;
      } else {
        var audio = new Audio(sound1);
        audio.play();
        this.iscolor3 = false;
      }
    }

  }
}
</script>
<style media="screen">
.lsf button {
  width: 30px;
  height: 30px;
  margin: 0 15px 0 15px;
}

.correct {
  background: green !important;
  pointer-events: none;
}

.none {}

.faux {}

.ino {
  visibility: hidden;
}
</style>
  <style scoped lang="sass">
  .drop-target
    height: 400px
    width: 200px
    min-width: 200px
    background-color: gainsboro

  .drag-enter
    outline-style: dashed

  .box
    width: 100px
    height: 100px
    float: left
    cursor: pointer

  @media only screen and (max-width: 500px)
    .drop-target
      height: 200px
      width: 100px
      min-width: 100px
      background-color: gainsboro

    .box
      width: 50px
      height: 50px

  .box:nth-child(3)
    clear: both

  .n100

    background-image: url('/statics/piece/100.jpeg')
    background-repeat: no-repeat
    background-size: cover
    background-origin: content-box

  .n50
    background-image: url('/statics/piece/50.jpg')
    background-repeat: no-repeat
    background-size: cover
    background-origin: content-box

  .n5
    background-image: url('/statics/piece/5.jpeg')
    background-repeat: no-repeat
    background-size: cover
    background-origin: content-box

  .n20
    background-image: url('/statics/piece/20.jpg')
    background-repeat: no-repeat
    background-size: cover
    background-origin: content-box
  .n10
    background-image: url('/statics/piece/10.jpg')
    background-repeat: no-repeat
    background-size: cover
    background-origin: content-box
  .n1000
    background-image: url('/statics/piece/1000.jpg')
    background-repeat: no-repeat
    background-size: cover
    background-origin: content-box
  .n200
    background-image: url('/statics/piece/200.jpg')
    background-repeat: no-repeat
    background-size: cover
    background-origin: content-box
  </style>
