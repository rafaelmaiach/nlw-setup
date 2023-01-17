<template>
	<div class="flex flex-col">
		<TrackerHeader />
		<Tracker />
	</div>
</template>

<script setup lang="ts">
	import { TrackerHeader } from "./components/TrackerHeader";
	import { Tracker } from "./components/Tracker";
</script>
