<template>
    <div class="grid-wrapper">
      <z-row class="row">
        <z-col class="item" span="24">col-24</z-col>
      </z-row>
      <z-row>
        <z-col class="item" span="12">col-12</z-col>
        <z-col class="item" span="12">col-12</z-col>
      </z-row>
      <z-row class="row">
        <z-col class="item" span="8">col-8</z-col>
        <z-col class="item" span="8">col-8</z-col>
        <z-col class="item" span="8">col-8</z-col>
      </z-row>
      <z-row class="row">
        <z-col class="item" span="6">col-6</z-col>
        <z-col class="item" span="6">col-6</z-col>
        <z-col class="item" span="6">col-6</z-col>
        <z-col class="item" span="6">col-6</z-col>
      </z-row>
    </div>
</template>

<script>
    import Col from '../../../src/col.vue'
    import Row from '../../../src/row.vue'
    export default {
        components: {
            'z-col': Col,
            'z-row': Row
        }
    }
</script>

<style lang="scss" scoped>
  *{
    box-sizing: border-box;
  }
  .grid-wrapper{
    $background: #3eaf7c;
    border: 1px solid #eee;
    padding: 36px;
    > .row{ 
        padding: 8px;
      > .item { 
          text-align: center;
          line-height: 36px;
          color: white;
          border-radius: 4px;
        &:nth-child(odd){ 
            background: $background; 
        }
        &:nth-child(even){ 
            background: lighten($background,20%);
        }
      }
    }
  }
</style>