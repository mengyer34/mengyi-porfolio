<template>
    <div>
        <div id='grow'>
            <div class='measuringWrapper'>
                <div>Here is some more text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae urna nulla. Vivamus a purus mi. In hac habitasse platea dictumst. In ac tempor quam. Vestibulum eleifend vehicula ligula, et cursus nisl gravida sit
                amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>
            </div>
        </div>
        <div style="position: relative;">
            <div  @click="growDiv()" class="collapse-icon">
                <img src="../assets/icons/collapse.svg" style="width: 20px;" class="expand-collapse-icon" :class="isOpenCollapse ? 'rotateIcon':''">
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae ipsa iste accusantium rerum magni neque quisquam sequi, esse suscipit tenetur vitae excepturi natus perspiciatis officiis explicabo illo, nostrum possimus ullam eaque mollitia odio? Sequi, ea error quas cumque, aut hic magni soluta eveniet temporibus, quam possimus? Rem commodi reprehenderit rerum temporibus modi reiciendis illo quos enim adipisci minima aperiam dolorum libero distinctio mollitia voluptates vero dignissimos, sint accusantium corrupti id molestias, dolore architecto. Sunt vitae tenetur harum illo porro reiciendis animi in ex ullam eius earum sapiente vel esse impedit, repellendus officiis inventore consequuntur dolorem culpa minima quas repellat iste. Provident placeat praesentium error veritatis vitae reprehenderit aspernatur. Ipsa sit aperiam deserunt amet aut error neque dolorem veritatis soluta recusandae magnam pariatur, voluptatem obcaecati accusamus. Praesentium cumque sunt sit reiciendis quasi, itaque velit ab, placeat iste explicabo libero soluta eveniet fugiat laboriosam ducimus et blanditiis maiores reprehenderit molestiae, amet doloribus quia. Magni delectus, quis necessitatibus ex suscipit inventore labore a. Amet totam odio incidunt eius. Fugit distinctio eum quis quo, molestias culpa sequi tempora quas perferendis amet asperiores! Dolore tenetur enim quod, eveniet mollitia repellendus tempore iste magnam totam, id officiis aliquam molestiae fuga, neque cupiditate recusandae dolorem dignissimos!\

            </p>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const isOpenCollapse = ref(false)
const text = ref('Here is some more text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae urna nulla...')
function growDiv() {
  var growDiv = document.getElementById('grow');
  if (growDiv.clientHeight > 60) {
    isOpenCollapse.value = false
    console.log(growDiv.clientHeight)
    console.log('true');
    growDiv.style.height = "60px";
} else {
    isOpenCollapse.value = true
    console.log('false');
    var wrapper = document.querySelector('.measuringWrapper');
    growDiv.style.height = wrapper.clientHeight + 5 + "px";
  }
}
</script>
<style>
#more-button {
  border-style: none;
  background: none;
  font: 16px Serif;
  color: blue;
  margin: 0 0 10px 0;
}

#grow {
  -moz-transition: height .5s;
  -ms-transition: height .5s;
  -o-transition: height .5s;
  -webkit-transition: height .5s;
  transition: height .5s;
  height: 60px;
  overflow: hidden;
  background: rgb(48, 227, 158);
}
.measuringWrapper {
    padding: 10px;
}
.collapse-icon {
    background: gray;
    width: 30px;
    padding: 7px;
    border-radius: 100%;
    position: absolute;
    /* top: -5px; */
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
}
.expand-collapse-icon {
    transition: 0.3s ease-in-out all;
}
.rotateIcon {
  -webkit-transform:rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
.truncate-2 {
    display: -webkit-box;
  -webkit-line-clamp: 2; /* if you only want two lines then set it to 2*/
  -webkit-box-orient: vertical;
  overflow: hidden;  
}
.reset {
    display: -webkit-box;
}
</style>