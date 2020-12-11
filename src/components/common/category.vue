<template>
  <div>
    <Row :style="rowMargin">
      <Col>
        <Card>
          <p slot="title">
            <Icon type="ios-funnel"></Icon>
          </p>
          <div>
            <div v-if="categoryLoading">
              <Spin>
                <Icon type="load-c" size="18" class="spin-icon-load"></Icon>
                <div></div>
              </Spin>
            </div>
            <Row>
              <Col span="22">
                <!-- <ul class="tag-type-ul">
                  <li v-for=" item in category" style="margin-top:5px">
                    <Button
                      @click="search('category_slug',item.slug)"
                      style="margin: 0 5px"
                      :type="getButtonType('category_slug',item.slug)"
                    >{{item.name}}</Button>
                  </li>
                </ul> -->
              </Col>
            </Row>
            <Row >
              <Col>
                <!-- <Input
                  search
                  :enter-button="$t('search')"
                  style="width:320px"
                  @on-search="search('name',name)"
                  v-model="name"
                  :placeholder="$t('article')+$t('name')"
                /> -->
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      categoryLoading: false,
    };
  },
  computed: {
      rowMargin(){
          return  'margin-top: 10px'
      }
  }
};
</script>

<style lang="less" scoped>
</style>