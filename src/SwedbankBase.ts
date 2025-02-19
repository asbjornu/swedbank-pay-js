import { MerchantConfig } from './MerchantConfig';
import got, { Method, Response } from 'got';

export class SwedbankBase {
  private apiUrls = {
    test: 'https://api.externalintegration.payex.com',
    prod: 'https://api.payex.com',
  };

  config: MerchantConfig;

  constructor(config: MerchantConfig) {
    this.config = config;
  }

  /**
   * @returns URL to API
   */
  getUrl(env?: 'test' | 'prod'): string {
    return this.apiUrls[env ? env : this.config.testMode ? 'test' : 'prod'];
  }

  // eslint-disable-next
  async request<T>(
    path: string,
    body?: object,
    method?: Method,
  ): Promise<Response<T>> {
    return await got<T>(path.replace(/^\/|\/$/g, ''), {
      method,
      headers: {
        authorization: `Bearer ${this.config.merchantToken}`,
        'user-agent': `bjerkio@swedbank-pay-js/0.0.0`,
      },
      responseType: 'json',
      json: body,
      prefixUrl: this.getUrl(),
    });
  }

  async runOperation<T>(
    url: string,
    body?: object,
    method?: Method,
  ): Promise<Response<T>> {
    return await got<T>(url.replace(/^\/|\/$/g, ''), {
      method,
      headers: {
        authorization: `Bearer ${this.config.merchantToken}`,
        'user-agent': `bjerkio@swedbank-pay-js/0.0.0`,
      },
      responseType: 'json',
      json: body,
    });
  }

  async GenericResource<T>(id?: string): Promise<T> {
    if (id) {
      return (await this.request<T>(id)).body;
    }
    return null;
  }
}
