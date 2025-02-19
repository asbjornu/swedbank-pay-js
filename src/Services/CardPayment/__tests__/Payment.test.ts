import * as nock from 'nock';
import { CardPayment } from '../CardPayment';
import PaymentResponse from '../__fixtures__/PaymentResponse';
import { Payment } from '../models/Payment';
import { Price } from '../models/Payment/Price';

const examplePrice: Price[] = [
  {
    type: 'CreditCard',
    amount: 1500,
    vatAmount: 0,
  },
];

nock('https://api.payex.com')
  .persist()
  .get('/test-resource')
  .reply(200, PaymentResponse)
  .get('/psp/creditcard/payments/a3d0d519-7b06-4964-5b38-08d7d70fea28/prices')
  .reply(200, examplePrice);


describe('CardPayment', () => {
  let payment: Payment;
  beforeEach(async () => {
    const card = new CardPayment({
      merchantToken: '',
      consumerIp: '1.2.3.4',
    });
    payment = await card.get('test-resource');
  });
  it('should be able to get prices', async () => {
    const prices = await payment.getPrices();
    expect(prices).toStrictEqual(examplePrice);
  })

});
