<template>
	<v-row justify="center">
		<v-dialog v-model="dialog" max-width="600px">
			<template v-slot:activator="{ on, attrs }">
				<v-btn color="primary" dark v-bind="attrs" v-on="on">
					Add New Task
				</v-btn>
			</template>
			<v-card>
				<form @submit.prevent="callAddNewTask">
					<v-card-title>
						<span class="text-h5">New Task</span>
					</v-card-title>
					<v-card-text>
						<v-container>
							<v-row>
								<v-col>
									<v-text-field
										v-model="newTaskTitle"
										class="clearable"
										label="Task Title *"
										outlined
										dense
										required
									></v-text-field>
								</v-col>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select
										v-model="priority"
										:items="priorities"
										label="Select Priority"
										outlined
										required
									></v-select>
								</v-col>
								<v-col cols="12">
									<v-textarea
										v-model="newTaskDescription"
										class="clearable"
										outlined
										name="input-7-4"
										label="Task Description"
										value=""
										required
									></v-textarea>
								</v-col>
							</v-row>
						</v-container>
						<small>*indicates required field</small>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="blue darken-1" text @click="dialog = false">
							Close
						</v-btn>
						<v-btn type="submit" color="blue darken-1" text> Save Task </v-btn>
					</v-card-actions>
				</form>
			</v-card>
		</v-dialog>
	</v-row>
</template>

<script>
	export default {
		name: 'NewTasks',
		data: () => ({
			priorities: ['High', 'Medium', 'Low'],
			dialog: false,
			newTaskTitle: '',
			newTaskDescription: '',
			priority: '',
			rules: {
      select: [(v) => !!v || "Item is required"],
      select2: [(v) =>  v.length>0 || "Item is required in select 2"],
    }
		}),
		methods: {
			callAddNewTask: function () {
				let newTask = {
					id: Date.now(),
					title: this.newTaskTitle,
					priority: this.priority,
					description: this.newTaskDescription,
					date: (new Date()).toLocaleDateString('en-GB'),
					done: false,
				}
				this.$store.dispatch('addNewTask', newTask)
				this.dialog = false
				this.newTaskTitle = ''
				this.newTaskDescription = ''
				this.priority = ''
			},
		},
	}
</script>

<style></style>
