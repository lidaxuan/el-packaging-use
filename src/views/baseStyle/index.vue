<!--
 * @version: v1.2.0
 * @Author: 康浩然
 * @Date: 2021-08-23 15:01:56
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-24 09:44:47
 * @FilePath: /web_beacon/src/views/baseStyle/index.vue
-->
<!--  -->
<template>
  <div width="100%" height="100%">
    <div class="element ptb-10 flex" id="text">
      <div class="outline br-8" width="100%">
        <div class="outline-title pl-25 h-60 lh-60" font="14">文字基础样式</div>
        <div class="outline-content p-25">
          <div class="flex jc-between ai-center ptb-20" v-for="text in obj.textStyle" :key="text.size">
            <div class="part-color flex flex-1" :font="text.size">
              {{ text.name }}
            </div>
            <div class="part-color flex flex-1" :font="text.size" align="center">{{ text.size }}px</div>
            <div class="title-color flex flex-1" :font="text.size">
              {{ text.content }}
            </div>
          </div>
        </div>
      </div>
      <div class="outline br-8 ml-20" width="100%">
        <div class="outline-title pl-25 h-60 lh-60" font="14">文字功能应用</div>
        <div class="outline-content p-25">
          <div class="flex jc-between ai-center ptb-20" v-for="application in obj.textApplication" :key="application.id">
            <div class="flex flex-1">
              <div class="part-color flex flex-1" :font="application.size" :style="{ color: application.basicsColor }">
                {{ application.basics }}
              </div>
              <div class="part-color flex flex-1" :font="application.size" :style="{ color: application.contentColor }">
                {{ application.basicsContent }}
              </div>
            </div>
            <div class="flex flex-1">
              <div class="part-color flex flex-1" :font="application.size" :style="{ color: application.assistColor }">
                {{ application.assist }}
              </div>
              <div class="part-color flex flex-1" :font="application.size" :style="{ color: application.contentColor }">
                {{ application.basicsContent }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="element ptb-10 flex" id="border">
      <div class="outline br-8" width="100%">
        <div class="outline-title pl-25 h-60 lh-60" font="14">边框导角</div>
        <el-row class="ptb-40">
          <el-col :span="6" v-for="border in obj.borderStyle" :key="border.id">
            <div class="flex jc-center ai-center flex-column">
              <div :class="['w-248', 'h-120', border.size]" :style="border.border"></div>
              <div class="border-content mt-20 lh-20" font="14">
                <div>{{ border.name }}</div>
                <div>{{ border.br }}</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="element ptb-10 flex" id="shadow">
      <div class="outline br-8" width="100%">
        <div class="outline-title pl-25 h-60 lh-60" font="14">阴影样式</div>
        <el-row class="ptb-40">
          <el-col :span="6" v-for="shadow in obj.shadowStyle" :key="shadow.id">
            <div class="flex jc-center ai-center flex-column">
              <div class="w-248 h-120 br-8 border-none" :style="{ 'box-shadow': shadow.shadow }"></div>
              <div class="border-content mt-20 lh-20" font="14">
                <div>{{ shadow.name }}</div>
                <div>{{ shadow.content }}</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="element ptb-10 flex" id="head">
      <div class="outline br-8" width="100%">
        <div class="outline-title pl-25 h-60 lh-60" font="14">头像样式</div>
        <el-row class="ptb-40">
          <el-col :span="6" v-for="avatar in obj.avatarStyle" :key="avatar.id">
            <div class="flex jc-center ai-center h-120" v-if="avatar.id == '1'">
              <div :class="[avatar.size]" :font="avatar.font" align="center">
                <i class="el-icon-time"></i>
              </div>
            </div>
            <div class="flex jc-center ai-center h-120" v-else>
              <div :class="[avatar.size, avatar.id == '2' ? 'mr-10' : '']" :font="avatar.font" align="center">雯</div>
              <el-avatar :class="[avatar.size, avatar.id != '2' ? 'ml-20 mr-20' : 'ml-10']" :font="avatar.font" align="center" :src="avatarUser"></el-avatar>

              <div v-if="avatar.id != '2'" :class="[avatar.size, 'head-none']" :font="avatar.font" align="center">无</div>
            </div>
            <div class="head-portrait-content mt-20" font="14" align="center">
              <div>{{ avatar.name }}</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from 'wb@/mixins';
import base from 'wb@/mock/baseStyle.json';
import utils from 'wb@/utils';
export default {
  mixins: [mixins],
  data() {
    return {
      obj: {},
      avatarUser: require('wb@/assets/img/baseStyle/avatar.png')
    };
  },
  created() {
    this.obj = base;
  },
  mounted() {
    utils.goAnchor('#' + this.$route.name);
  }
};
</script>
<style lang="scss" scoped>
.element {
  .title-color {
    color: $-color-7D8DBF;
  }
  .part-color {
    color: $-color-344563;
  }
  .btn-color {
    color: $-color-506AFD;
  }
  .head90,
  .head48,
  .head32 {
    border-radius: 50%;
    color: #ffffff;
    background-color: var(--layoutMain-6359CA);
  }
  .head90 {
    font-size: 60px;
    font-weight: 500;
  }
  .head48,
  .head32 {
    font-weight: 600;
  }
  .head-none {
    background-color: var(--layoutMain-6359CA-rgba);
  }
  .outline {
    background-color: $-color-ffffff;
    color: $-color-344563;

    .outline-title {
      border-bottom: 1px solid $-color-EBEEF5;
      font-weight: 600;
    }
    .border-content {
      font-weight: 400;
    }
    .head-portrait-content {
      font-weight: 400;
    }
  }
}
</style>
