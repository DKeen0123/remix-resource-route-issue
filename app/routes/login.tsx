import {ActionFunction, json} from 'remix'

export const action: ActionFunction = async ({request}) => {
  const formdata = await request.formData()
  console.log({formdata})
  return json({data: 'hi'})
}
