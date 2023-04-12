# countdown-react
Сountdown react component


# api 
|Name|Type|Default|Description|
|:--|:--:|:-----:|:----------|
|**className**|`string`|''| Root className|
|**titleClassName**|`string`|`''`| Title className|
|**titleClassName**|`string`|`''`| Title className|
|**timeClassName**|`string`|`''`|Time section className |
|**eventDate**|`string` |`required`| End time or date|
|**onTick**|`function`| `null`| Callback on every tick|
|**onFinish**|`function`| `null` |Callback on finish eventDate|
|**timeTips**| {
  daysTip: `string` ,
  hoursTip: `string` ,
  minutesTip: `string` ,
  secondsTip: `string` ,
}| `Days` `Hours` `Minutes` `Seconds` | Tips for time section|