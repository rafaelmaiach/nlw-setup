<template>
	<div class="flex justify-center">
		<TrackerWeekDay
			v-for="weekDay in weekDays"
			:key="weekDay.label"
			:dates="weekDay.dates"
			:aria="weekDay.aria"
			:label="weekDay.label"
		/>
	</div>
</template>

<script setup lang="ts">
	import TrackerWeekDay from "./TrackerWeekDay.vue";
	import useCalendar from "@composables/useCalendar";

	const { weekDays } = useCalendar();
</script>
