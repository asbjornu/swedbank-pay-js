[swedbank-pay - v0.0.0](../README.md) › [Purchase](purchase.md)

# Class: Purchase

## Hierarchy

  ↳ [Payment](payment.md)

  ↳ **Purchase**

## Index

### Constructors

* [constructor](purchase.md#constructor)

### Properties

* [amount](purchase.md#amount)
* [config](purchase.md#config)
* [created](purchase.md#created)
* [description](purchase.md#description)
* [id](purchase.md#id)
* [initiatingSystemUserAgent](purchase.md#initiatingsystemuseragent)
* [instrument](purchase.md#instrument)
* [language](purchase.md#language)
* [number](purchase.md#number)
* [payerReference](purchase.md#payerreference)
* [remainingCancellationAmount](purchase.md#remainingcancellationamount)
* [remainingCaptureAmount](purchase.md#remainingcaptureamount)
* [remainingReversalAmount](purchase.md#remainingreversalamount)
* [state](purchase.md#state)
* [updated](purchase.md#updated)
* [userAgent](purchase.md#useragent)

### Methods

* [GenericResource](purchase.md#genericresource)
* [abort](purchase.md#abort)
* [getOperations](purchase.md#getoperations)
* [getPrices](purchase.md#getprices)
* [getRedirectAuthorization](purchase.md#getredirectauthorization)
* [getUrl](purchase.md#geturl)
* [request](purchase.md#request)
* [runOperation](purchase.md#runoperation)

## Constructors

###  constructor

\+ **new Purchase**(`config`: MerchantConfig, `response`: object): *[Purchase](purchase.md)*

*Inherited from [Payment](payment.md).[constructor](payment.md#constructor)*

*Overrides [SwedbankBase](swedbankbase.md).[constructor](swedbankbase.md#constructor)*

**Parameters:**

▪ **config**: *MerchantConfig*

▪ **response**: *object*

Name | Type |
------ | ------ |
`operations` | Operation[] |
`payment` | [PaymentProperties](../interfaces/paymentproperties.md) |

**Returns:** *[Purchase](purchase.md)*

## Properties

###  amount

• **amount**: *number*

*Inherited from [Payment](payment.md).[amount](payment.md#amount)*

___

###  config

• **config**: *MerchantConfig*

*Inherited from [SwedbankBase](swedbankbase.md).[config](swedbankbase.md#config)*

___

###  created

• **created**: *Date*

*Inherited from [Payment](payment.md).[created](payment.md#created)*

___

###  description

• **description**: *string*

*Inherited from [Payment](payment.md).[description](payment.md#description)*

___

###  id

• **id**: *string*

*Inherited from [Payment](payment.md).[id](payment.md#id)*

___

###  initiatingSystemUserAgent

• **initiatingSystemUserAgent**: *string*

*Inherited from [Payment](payment.md).[initiatingSystemUserAgent](payment.md#initiatingsystemuseragent)*

___

###  instrument

• **instrument**: *string*

*Inherited from [Payment](payment.md).[instrument](payment.md#instrument)*

___

###  language

• **language**: *string*

*Inherited from [Payment](payment.md).[language](payment.md#language)*

___

###  number

• **number**: *number*

*Inherited from [Payment](payment.md).[number](payment.md#number)*

___

###  payerReference

• **payerReference**: *string*

*Inherited from [Payment](payment.md).[payerReference](payment.md#payerreference)*

___

###  remainingCancellationAmount

• **remainingCancellationAmount**: *number*

*Inherited from [Payment](payment.md).[remainingCancellationAmount](payment.md#remainingcancellationamount)*

___

###  remainingCaptureAmount

• **remainingCaptureAmount**: *number*

*Inherited from [Payment](payment.md).[remainingCaptureAmount](payment.md#remainingcaptureamount)*

___

###  remainingReversalAmount

• **remainingReversalAmount**: *number*

*Inherited from [Payment](payment.md).[remainingReversalAmount](payment.md#remainingreversalamount)*

___

###  state

• **state**: *string*

*Inherited from [Payment](payment.md).[state](payment.md#state)*

___

###  updated

• **updated**: *Date*

*Inherited from [Payment](payment.md).[updated](payment.md#updated)*

___

###  userAgent

• **userAgent**: *string*

*Inherited from [Payment](payment.md).[userAgent](payment.md#useragent)*

## Methods

###  GenericResource

▸ **GenericResource**<**T**>(`id?`: string): *Promise‹T›*

*Inherited from [SwedbankBase](swedbankbase.md).[GenericResource](swedbankbase.md#genericresource)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`id?` | string |

**Returns:** *Promise‹T›*

___

###  abort

▸ **abort**(): *Promise‹object›*

*Inherited from [Payment](payment.md).[abort](payment.md#abort)*

**Returns:** *Promise‹object›*

___

###  getOperations

▸ **getOperations**(): *Operation[]*

*Inherited from [Payment](payment.md).[getOperations](payment.md#getoperations)*

**Returns:** *Operation[]*

___

###  getPrices

▸ **getPrices**(): *Promise‹Price[]›*

*Inherited from [Payment](payment.md).[getPrices](payment.md#getprices)*

**Returns:** *Promise‹Price[]›*

___

###  getRedirectAuthorization

▸ **getRedirectAuthorization**(): *string*

**Returns:** *string*

___

###  getUrl

▸ **getUrl**(`env?`: "test" | "prod"): *string*

*Inherited from [SwedbankBase](swedbankbase.md).[getUrl](swedbankbase.md#geturl)*

**Parameters:**

Name | Type |
------ | ------ |
`env?` | "test" &#124; "prod" |

**Returns:** *string*

URL to API

___

###  request

▸ **request**<**T**>(`path`: string, `body?`: object, `method?`: Method): *Promise‹Response‹T››*

*Inherited from [SwedbankBase](swedbankbase.md).[request](swedbankbase.md#request)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`body?` | object |
`method?` | Method |

**Returns:** *Promise‹Response‹T››*

___

###  runOperation

▸ **runOperation**<**T**>(`url`: string, `body?`: object, `method?`: Method): *Promise‹Response‹T››*

*Inherited from [SwedbankBase](swedbankbase.md).[runOperation](swedbankbase.md#runoperation)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`body?` | object |
`method?` | Method |

**Returns:** *Promise‹Response‹T››*
