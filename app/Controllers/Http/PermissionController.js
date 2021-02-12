'use strict'

const Permission = use('Permission')

class PermissionController {
  async store ({ request, response }) {
    const data = request.only(['name', 'slug', 'permission'])

    const permission = await Permission.create(data)

    return permission
  }
}

module.exports = PermissionController
