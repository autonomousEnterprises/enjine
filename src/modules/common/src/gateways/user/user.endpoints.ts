import { Manager } from '@enjine/database';
import { User } from '@enjine/core';

export async function endpoints(context: any) {

  const { socket, space, database } = context;

  socket.on('all', async (callback: any) => {
    try {
      const res: any = await database.all()
      res.forEach((u: any) => delete u.password)
      callback(null, res)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  })

  socket.on('register', async (data: any) => {
    try {
      const user: any = await new User(data)
      await database.post(user)
      delete user.password

      space.emit('register', user)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  })

  socket.on('update', async (data: any) => {
    try {
      const res: any = await database.put(data._id, ...data)
      delete res.password

      space.emit('update', res)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  })

  socket.on('get', async (id: any, callback: any) => {
    try {
      const user: any = await database.get(id)
      delete user.password
      callback(null, user)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  })

  socket.on('find', async (fn: any, callback: any) => {
    try {
      const user: any = await database.find(fn)
      delete user.password
      callback(null, user)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  })

  socket.on('filter', async (fn: any, callback: any) => {
    try {
      const filtered: any = await database.filter(fn)
      filtered.forEach((u: any) => delete u.password)
      callback(null, filtered)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  })

  socket.on('remove', async (id: string) => {
    try {
      await database.remove(id)
      space.emit('remove', id)
    } catch (err) {
      space.emit('error', new Error(err))
    }
  })
}