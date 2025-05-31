<template>
  <div class="slidev-layout">
    <slot />
    <div class="grid grid-cols-3 grid-rows-2 gap-4 h-full w-full">
      <div>
        <slot name="top-left" />
      </div>
      <div class="border-r border-gray-300 pr-4">
        <slot name="top-center" />
      </div>
      <div>
        <slot name="top-right" />
      </div>
      <div>
        <slot name="bottom-left" />
      </div>
      <div class="border-r border-gray-300 pr-4">
        <slot name="bottom-center" />
      </div>
      <div>
        <slot name="bottom-right" />
      </div>
    </div>
  </div>
</template>
