<template>
	<section class="w-full" p="2">
		<div
			class="
				w-full
				max-w-6xl
				mx-auto
				flex
				gap-2
				lg:gap-12
				flex-col
				lg:flex-row
				justify-between
				items-center
			"
		>
			<!-- search -->
			<div class="w-full flex gap-2 justify-between items-center">
				<input
					type="text"
					name=""
					id=""
					w="full lg:full"
					p="2"
					class="border-1 border-[magenta] rounded-md"
					placeholder="Search movies, cast, directors"
				/>
				<button class="bg-[magenta] text-white py-2 px-5">Send</button>
			</div>
			<!-- filter -->
			<div
				class="
					w-full
					flex
					gap-2
					justify-between
					items-center
					text-xs
					lg:text-sm
				"
				p="y-2"
			>
				<span w="auto">Filter</span>
				<button
					w="full"
					class="border-[magenta] border-1 rounded-sm px-[.4rem] py-2"
				>
					Genre
				</button>
				<button
					w="full"
					class="border-[magenta] border-1 rounded-sm px-[.5rem] py-2"
				>
					Start
				</button>
				<button
					w="full"
					class="border-[magenta] border-1 rounded-sm px-[.5rem] py-2"
				>
					Release date
				</button>
			</div>
		</div>
	</section>
</template>
