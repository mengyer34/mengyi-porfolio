<template>
    <button class="mainBtn" role="button">{{title}}</button>
</template>
<script>
export default {
    props: {
        title: String
    }
}
</script>
<style scoped>
.mainBtn {
  background-color: #20a7d8;
  border: 0 solid #E5E7EB;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: .75rem .65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 100%;
  max-width: 160px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.mainBtn:focus {
  outline: 0;
}

.mainBtn:after {
  content: '';
  position: absolute;
  border: 1px solid #000000;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

.mainBtn:hover:after {
  bottom: 2px;
  left: 2px;
}

@media (min-width: 768px) {
  .mainBtn {
    padding: .75rem 1rem;
    font-size: 1.25rem;
  }
}
</style>