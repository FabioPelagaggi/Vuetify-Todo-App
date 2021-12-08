<template>
	<v-list-item-group multiple>
		<v-list-item
			v-for="task in $store.state.myTasks"
			:class="{ 'blue-grey lighten-4': task.done }"
			class="mx-auto pa-6 transition-swing"
			:key="task.id"
		>
			<template v-slot:default>
				<v-list-item-action @click="callDoneTask(task.id)">
					<v-checkbox :input-value="task.done" color="primary"></v-checkbox>
				</v-list-item-action>

				<v-list-item-content
					:class="{ 'text-decoration-line-through': task.done }"
				>
					<v-list-item-title>{{ task.title }}</v-list-item-title>
					<v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>
					<v-list-item-subtitle>Priority: {{ task.priority }}</v-list-item-subtitle>
				</v-list-item-content>

				<v-list-item-action>
					<v-list-item-subtitle>{{ task.date }}</v-list-item-subtitle>
					<v-btn @click.stop="callDeleteTask(task.id)" icon>
						<v-icon color="grey linghten-1">mdi-delete</v-icon>
					</v-btn>
				</v-list-item-action>
			</template>
		</v-list-item>
	</v-list-item-group>
</template>

<script>
	export default {
		name: 'Tasks',
		methods: {
			callDoneTask(index) {
				this.$store.commit('doneTask', index)
			},
			callDeleteTask(index) {
				this.$store.commit('deleteTask', index)
			},
		},
	}
</script>

<style></style>
