<template lang="html">
  <li class="ant-menu-submenu"
    :class="classes"
    @mouseenter="activeMenu"
    @mouseleave="inactiveMenu"
    @click="toggleActive">
    <div class="ant-menu-submenu-title" :aria-open="`${active}`" aria-haspopup="true">
      <slot name="title"></slot>
    </div>
    <ul class="ant-menu ant-menu-sub"
      :class="subMenuClasses"
      v-show="active" :transition="transition" role="menu" aria-activedescendant="">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'sub-menu',
    data() {
      return {
        active: false,
        mode: '',
        delay: false,
        switchModeFromInline: false
      };
    },
    methods: {
      // todo 需要改善
      activeMenu() {
        if (this.mode === 'inline') return false;
        this.active = true;
        this.delay = true;
        setTimeout(() => {
          this.delay = false;
        }, 500);
      },
      inactiveMenu() {
        if (this.mode === 'inline') return false;
        if (!this.delay) {
          this.active = false;
        } else {
          setTimeout(() => {
            this.active = false;
          }, 500);
        }
      },
      toggleActive() {
        if (this.mode === 'horizontal') return false;
        this.active = !this.active;
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
          'ant-menu-submenu-vertical': mode === 'vertical'
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
      }
    }
  };
</script>
