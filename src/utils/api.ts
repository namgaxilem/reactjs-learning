import axios, { Axios } from 'axios'
import { config } from 'config/config'
import User from 'types/User'

class RestClient {
  private client: Axios

  constructor(host: string) {
    this.client = axios.create({
      headers: {
        'Content-Type': 'application/json'
      },
      baseURL: host
    })
  }

  public get(endpoint: string, config?: object): Promise<any> {
    return this.client.get(endpoint, this.buildHeader(config))
      .then(this.handleSuccess)
      .catch(this.handleError)
  }

  public post(endpoint: string, data?: object, config?: object): Promise<any> {
    return this.client.post(endpoint, data, this.buildHeader(config))
      .then(this.handleSuccess)
      .catch(this.handleError)
  }

  public put(endpoint: string, data?: object, config?: object): Promise<any> {
    return this.client.put(endpoint, data, this.buildHeader(config))
      .then(this.handleSuccess)
      .catch(this.handleError)
  }

  public delete(endpoint: string, data?: object, config?: object): Promise<any> {
    return this.client.delete(endpoint, { ...this.buildHeader(config), data: data })
      .then(this.handleSuccess)
      .catch(this.handleError)
  }

  private buildHeader(c?: object): object {
    let cfg = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': ``
      },
      withCredentials: true
    }

    const user = localStorage.getItem(config.localStorage.userKey)

    if (user) {
      const userObj: User = JSON.parse(user)
      cfg.headers.Authorization = `Bearer ${userObj.accessToken}` || ''
    }

    return { ...cfg, ...c }
  }

  private handleSuccess(res: any): Promise<any> {
    return Promise.resolve(res.data)
  }

  private handleError(res: any): Promise<any> {
    let error
    if (res.response)
      error = res.response.data.error
    else if (res.request)
      error = res.request
    else
      error = res.message
    return Promise.reject(error)
  }
}

const clientCatalog = new RestClient(config.catalogURL)

export {
  clientCatalog
}

