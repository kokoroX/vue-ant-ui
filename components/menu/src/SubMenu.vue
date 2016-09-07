<template lang="html">
  <li class="ant-menu-submenu"
    :class="classes"
    @mouseenter="activeMenu"
    @mouseleave="inactiveMenu">
    <!-- <div class="ant-menu-submenu-title" :aria-open="`${active}`" aria-haspopup="true"> -->
    <div class="ant-menu-submenu-title" aria-haspopup="true"
      @click="toggleActive">
      {{{title}}}
      <slot name="title"></slot>
    </div>
    <!-- v-show="active" :transition="transition" role="menu" aria-activedescendant=""> -->
    <ul class="ant-menu ant-menu-sub"
      :class="subMenuClasses"
      v-show="active" role="menu" aria-activedescendant="">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
  import { contains } from '_utils';

  export default {
    name: 'ant-sub-menu',
    props: {
      title: String,
      key: String
    },
    data() {
      return {
        active: false,
        mode: '',
        timer: null,
        switchModeFromInline: false
      };
    },
    methods: {
      // todo 需要改善
      activeMenu() {
        if (this.mode === 'inline') return false;
        if (this.timer) clearTimeout(this.timer);
        this.active = true;
      },
      inactiveMenu() {
        if (this.mode === 'inline') return false;
        this.timer = setTimeout(() => {
          this.active = false;
        }, 100);
      },
      toggleActive(e) {
        if (this.mode === 'horizontal') return false;
        if (e.target === e.currentTarget) this.active = !this.active;
      }
    },
    watch: {
      mode(newVal, oldVal) {
        if (newVal === 'inline' && oldVal !== 'inline') {
          this.switchModeFromInline = true;
        }
      }
    },
    computed: {
      transition() {
        let transition;
        switch (this.mode) {
          case 'horizontal':
            transition = 'slide-up';
            break;
          case 'vertical':
            // When mode switch from inline
            // submenu should hide without animation
            if (this.switchModeFromInline) {
              transition = '';
              this.switchModeFromInline = false;
            } else {
              transition = 'zoom-big';
            }
            break;
          case 'inline':
            transition = 'ant-motion-collapse';
            break;
          default:
        }
        return transition;
      },
      classes() {
        const { active, mode } = this;
        return {
          'ant-menu-submenu-active': active,
          'ant-menu-submenu-open': active,
          'ant-menu-submenu-inline': mode === 'inline',
          'ant-menu-submenu-vertical': mode === 'vertical',
          'ant-menu-submenu-horizontal': mode === 'horizontal'
        };
      },
      subMenuClasses() {
        const { active, mode } = this;

        return [
          `ant-menu-${mode}`,
          'ant-motion-collapse-active',
          {
            'slide-up-enter-active': mode === 'horizontal' && active,
            'slide-up-leave-active': mode === 'horizontal' && !active
          }
        ];
      }
    },
    events: {
      'set-menu-mode'(mode) {
        this.mode = mode;
        return true;
      },
      'open-menu'(arr) {
        this.active = !this.disabled && contains(arr, this.key);
      }
    }
  };
</script>
