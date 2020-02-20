<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header" />
            <div class="close" @click="$emit('close')"></div>
          </div>
          <div class="modal-body">
            <slot name="body" />
          </div>

          <div class="modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;

  display: table;

  width: 100%;
  height: 100%;

  transition: opacity 0.3s ease;

  background-color: rgba(0, 0, 0, 0.5);
}

.modal-wrapper {
  display: table-cell;

  vertical-align: middle;
}

.modal-container {
  font-family: Helvetica, Arial, sans-serif;

  overflow: hidden;

  width: 87vw;
  height: 87vh;
  margin: 0 auto;
  padding: 20px 30px;

  transition: all 0.3s ease;

  border-radius: 2px;
  background-color: $--color-ff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
.modal-header {
  position: relative;

  height: 32px;
  h3 {
    margin-top: 0;

    color: #42b983;
  }
}

.modal-body {
  overflow: hidden;

  width: 100%;
  height: calc(87vh - 37px - 120px);
  margin: 20px 0;
  .modal-image {
    width: auto;
    height: 100%;

    border-radius: 5px;
  }
}

.modal-footer {
  line-height: 40px;

  height: 40px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}

.close {
  position: absolute;
  top: 0;
  right: 0;

  width: 32px;
  height: 32px;

  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;

    width: 2px;
    height: 33px;

    content: ' ';

    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
}
</style>
