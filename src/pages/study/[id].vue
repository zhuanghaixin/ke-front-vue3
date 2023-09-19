<template>
  <div>id :{{ route.id }}</div>
</template>

<script setup lang="ts">
// type Params = {
//   id: string
// }
// const route = useRoute().params as Params

// 可以将下面这些方法进行抽离，抽离到src/hooks
// function useParams<P extends RouteParams>() {
//   const route = useRoute()
//   return computed(() => {
//     return route.params as P
//   })
// }

import { useParams } from '@/hooks'
type Params = {
  id: string
}

const route = useParams<Params>()
</script>

<style scoped></style>
