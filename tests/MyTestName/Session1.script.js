var Session1 = [
	[{action:'#AOM.Start',params:[{browser:'chrome',url:'http://web.aom.com/#/Dashboard'}]}],
	[{action:'AOM.Signin',params:[{username:'#SESSION1.USERNAME#',password:'Password12'}]}],
	[{action:'#Order.Create',params:[{product:'NAPHTHA CIF NWE - CARGOES',bidask:'BID',quantity:'12500',price:'100',deliverystart:'01/01/2015',deliveryend:'05/01/2015',broker:'VICTOR',notes:'NAPHTHA CIF NWE - CARGOES BID 12500 @ 100',colour:'Orange'}]}],
	[{action:'#Order.CheckInStackWithColour',params:[{product:'NAPHTHA CIF NWE - CARGOES',bidask:'BID',quantity:'12500',price:'100',deliverystart:'01/01/2015',deliveryend:'05/01/2015',broker:'VICTOR',notes:'NAPHTHA CIF NWE - CARGOES BID 12500 @ 100',colour:'Orange'}]}],
	[{action:'AOM.Signout',params:[{none:''}]}],
	[{action:'AOM.End',params:[{none:''}]}]
];

module.exports = Session1;
