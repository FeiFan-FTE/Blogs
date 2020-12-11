<template>
    <div>
         <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1" @on-select="handleSelect">
            <div class="layout-logo"></div>
            <div class="layout-nav">
              <MenuItem :name="item.herf" v-for="item in menuList">
                <Icon :type="item.icon"></Icon>
                {{item.title}}
              </MenuItem>
            </div>
          </Menu>
        </Header>
      
        <Content :style="{ padding: '0 50px' }">
          <!-- <Breadcrumb :style="{ margin: '20px 0' }">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb> -->
          <Card>
            <div style="min-height: 500px">
                <slot></slot>
            </div>
          </Card>
        </Content>
        <Copyright></Copyright>
      </Layout>
    </div>
    </div>
</template>

<script>
import Copyright from "_c/copyright/copyright";
    export default {
        name: '',
        components:{
            Copyright
        },
        data() {
            return {
                menuList:[
                    {
                    icon:"ios-navigate",
                    title:'首页',
                    herf:'index'
                },
                  {
                    icon:"ios-navigate",
                    title:'文章',
                    herf:'blogs'
                },
                  {
                    icon:"ios-navigate",
                    title:'关于我',
                    herf:'resume'
                },
                  {
                    icon:"ios-navigate",
                    title:'提问',
                    herf:'question'
                },
                ]
            }
        },
        methods:{
            handleSelect(name){
                this.$router.push({
                    name:name,
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    
</style>