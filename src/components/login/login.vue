<!--
 * @Author: feifan
 * @Date: 2020-12-03 15:03:43
 * @LastEditors: feifan
 * @LastEditTime: 2020-12-03 16:26:39
-->
<template>
  <div>
    <Modal v-model="modal" width="25" footer-hide>
      <p slot="header" style="color: #f60; text-align: center">
        <span>Delete confirmation</span>
      </p>
      <div style="text-align: center">
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input
              type="password"
              v-model="formInline.password"
              placeholder="Password"
            >
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              size="large"
              long
              :loading="loading"
              @click="handleSubmit('formInline')"
              >登录</Button
            >
          </FormItem>
        </Form>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      modal: true,
      loading: false,
      formInline: {
        user: "",
        password: "",
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>