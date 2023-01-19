<template>
	<div class="flex flex-col">
		<p class="mb-6 text-center">{{ label }}</p>
		<div class="m-1" v-for="(date, weekNumber) in dates" :key="date">
			<div
				v-if="!isDateInFirstWeek(date) && weekNumber === 0"
				class="square-big mb-2 border-transparent"
			/>
			<div class="square-big violet-300 flex h-full items-center justify-center">
				<p class="text-center ">{{ date.getDate() }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import useCalendar from "@composables/useCalendar";

	interface Props {
		dates: Date[];
		aria: string;
		label: string;
	}

	defineProps<Props>();

	const { isDateInFirstWeek } = useCalendar();
</script>
