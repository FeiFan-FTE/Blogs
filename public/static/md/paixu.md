## 冒泡排序

冒泡排序是最慢的排序算法之一，因为它交换元素的次数实在是太多了，但它也是最容易实现的排序算法。在运行过程中，数据值会像气泡一样从一端漂浮到另一端，比如升序排序，数据会与其右侧相邻的数据进行比较，若它比右侧数据大，则会向右边“冒泡”，直到遇到比它大的数据为止。

### 动图演示

<img src="../md/images/arithmetic/mppx.gif"/>

```javascript
let funcs = {
  // 冒泡排序
  bubbleSort (arr) {
    // 使用一个两层的循环执行排序
    // 内层循环每执行一次，外层循环的指针 i 就向前进一步，表示前面的数据确认已经完成排序
    for (let i = 0; i < arr.length - 1; i++) {
      // 内层循环保证每次都能将最小的数据移到数组最左边
      for (let j = arr.length - 1; j > i; j--) {
        // 当前数据值比前一位的小，则将两个数据交换位置
        // 否则不进行操作，继续处理下一位的数据
        if (arr[j] < arr[j - 1]) {
          this.toolExch(arr, j - 1, j)
        }
      }
    }
    return arr
  }
}

```

## 选择排序

选择排序的原理，以升序排序为例，就是从数组的开头开始，用第一条数据和其他数据进行比较，取其中最小的数据，与第一个位置的数据交换，再用第二条数据对后面的数据进行比较......如此反复，当在数组的倒数第二位上执行完这个比较，整个排序就完成了。

与冒泡排序一样，选择排序也采用了两层循环，但选择排序在每次遍历中只进行了一次数据位置的交换，因此它的速度比冒泡排序要快的多。

### 动图演示

![xzpx](E:\blogs\blog-web\public\static\md\assets\xzpx.gif)

```

```

```javascript

let funcs = {
  // 选择排序
  selectionSort (arr) {
    // 外层循环维护一个指针 i，每当内层循环完成一次交换，外层循环的指针就往前移一步
    // 指针移动到倒数第二个位置 arr.length - 2 时，结束循环
    for (let i = 0; i <= arr.length - 2; i++) {
      // index 维护了当前内循环中最小值的位置
      let index = i
      // 内层循环从指针 i 的位置往后查找最小的数据
      for (let j = i; j < arr.length; j++) {
        // 每当找到更小的数据，就更新 index
        if (arr[j] < arr[index]) index = j
      }
      // 将位置在 index 的最小数据与位置在 i 的当前指针互换位置
      this.toolExch(arr, index, i)
    }
    return arr
  }
}

```

## 插入排序

插入排序同样使用两层循环，以升序排序为例：外层循环维护了一个指针 i，它从第二条数据开始向右移动。内层循环则维护一个指针 j 从 i 的位置开始向左移动，若 j 左边的数据比 j 大，则将左边的数据右移一格，直到遇到 j 左边的数据比 j 小，就停止移动，并把最开始用于比较的 i 上的数据插入到这一位置。如此反复，可以保证`每次内循环结束，i 左边的数据都是有序的`，则执行完外循环即可完成排序。

### 动图演示

![crpx](E:\blogs\blog-web\public\static\md\assets\crpx.gif)

```let funcs = {   // 插入排序   insertionSort (arr) {     // 向右移动的外循环     for (let i = 1; i < arr.length; i++) {       // 声明内循环指针       let j = i       // 记录用于比较的当前数据       let curr = arr[i]       // 内循环，让当前数据一直向左移动       // 直到遇到比当前数据小的值，或移动到数组左端为止       while (j > 0 && arr[j - 1] > curr) {         // 将更大的数据往右推         arr[j] = arr[j - 1]         // 指针左移         j--       }       // 将当前数据插入到正确位置，使得 0~i 之间的数据有序       arr[j] = curr     }     return arr   } }

```

```javascript
let funcs = {
  // 插入排序
  insertionSort (arr) {
    // 向右移动的外循环
    for (let i = 1; i < arr.length; i++) {
      // 声明内循环指针
      let j = i
      // 记录用于比较的当前数据
      let curr = arr[i]
      // 内循环，让当前数据一直向左移动
      // 直到遇到比当前数据小的值，或移动到数组左端为止
      while (j > 0 && arr[j - 1] > curr) {
        // 将更大的数据往右推
        arr[j] = arr[j - 1]
        // 指针左移
        j--
      }
      // 将当前数据插入到正确位置，使得 0~i 之间的数据有序
      arr[j] = curr
    }
    return arr
  }
}


```

