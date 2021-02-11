'use strict'

const Kue = use('Kue')
const Job = use('App/Jobs/NewTaskMail')

const TaskHook = exports = module.exports = {}

TaskHook.sendNewTaskEmail = async (taskInstance) => {
  if (!taskInstance.user_id && !taskInstance.dirty.user_id) return

  const { email } = await taskInstance.user().fetch()
  const file = await taskInstance.file().fetch()

  const { id, title, description } = taskInstance

  Kue.dispatch(Job.key, { id, description, email, file, title }, {
    attemps: 3
  })
}
