<template>
  <div class="slidev-layout">
    <slot />
    <div class="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full">
      <div>
        <slot name="top-left"></slot>
      </div>
      <div>
        <slot name="top-right" />
      </div>
      <div>
        <slot name="bottom-left" />
      </div>
      <div>
        <slot name="bottom-right" />
      </div>
    </div>
  </div>
</template>
