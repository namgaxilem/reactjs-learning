import { clientCatalog as client } from 'utils/api'
import Flow from 'types/Flow'

const FLOW_ENDPOINT = '/flows'
const FLOW_VERSION_ENDPOINT = '/flow-versions'

async function getFlows(page: number, pageSize: number): Promise<Flow[] | any> {
  try {
    const data = await client.get(FLOW_ENDPOINT + `?page=${page}&pageSize=${pageSize}`)
    return Promise.resolve(data)
  } catch (err) {
    return Promise.reject(err)
  }
}

export {
  getFlows
}