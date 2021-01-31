'use strict'

const Mail = use('Mail')
const Helpers = use('Helpers')

const TaskHook = exports = module.exports = {}

TaskHook.sendNewTaskEmail = async (taskInstance) => {
  if (!taskInstance.user_id && !taskInstance.dirty.user_id) return

  const { email } = await taskInstance.user().fetch()
  const file = await taskInstance.file().fetch()

  const { id, title, description } = taskInstance

  await Mail.send(
    ['emails.new_task'],
    { id, email, title, description, hasAttachment: !!file },
    message => {
      message
        .to(email)
        .from('celsoalexandre@live.com', 'Celso | Farmaponte')
        .subject('Uma tarefa foi atribuída à você')

      if (file) {
        message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
          filename: file.name
        })
      }
    }
  )
}
