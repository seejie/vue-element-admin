<template>
  <el-form inline>
    <el-form-item label="上传文件" label-width="72px">
      <el-upload
        class="upload-box"
        drag
        action=""
        multiple
      >
        <i class="el-icon-upload" />
        <div>将组包信息文件拖到这里，点击上传</div>
      </el-upload>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="upload">上传</el-button>
      <el-button type="text" @click="download">下载导入模板</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Upload',
  methods: {
    upload() {

    },
    download() {

    }
  }
}
</script>

<style lang="scss" scoped>
.el-form-item{
  ::v-deep .upload-box{
    .el-upload-dragger{
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-icon-upload{
        font-size: 18px;
        line-height: 1;
        margin: 0 .5rem;
      }
    }
  }
}
</style>
