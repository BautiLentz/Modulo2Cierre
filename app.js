const autos=require("./autos.js")
const personas=require("./personas.js")

const concesionaria = {
      autos: autos,
      personas:personas,
      buscarAuto:(condicion)=>{
   const resultado=autos.find((auto)=>{
   return auto.patente=== condicion
   })
   if(resultado===undefined){
   return null
   }
   else return resultado
      } ,
   
   venderAuto: function(condicion) {
   const autoBuscado = this.buscarAuto(condicion)
   return autoBuscado.vendido = true
   },

   autosParaLaVenta:function(){
    const autosEnVenta= this.autos.filter((auto)=>{
 return  auto.vendido===false
})
return autosEnVenta
   },
   autosNuevos: function(){
       const autos0km= this.autosParaLaVenta().filter(auto=>{
        return auto.km <= 100
      })
return autos0km
   },

   listaDeVentas:function(){
     const autosVendidos=this.autos.filter((auto)=>{
      return  auto.vendido===true
     })
return autosVendidos.map((auto)=>{
    return auto.precio
})
   },

   totalDeVentas:function(){
      const ventasTotales=this.listaDeVentas().reduce((acumuladora,auto)=>{
         return acumuladora = acumuladora + auto
      },0)
      return ventasTotales
},

puedeComprar:function(auto,persona){
   return auto.precio <= persona.capacidadDePagoTotal && auto.precio /auto.cuotas <= persona.capacidadDePagoEnCuotas
   },
  
   autosQuePuedeComprar: function(personas){
      let array = [];
     let autosQuePuedeComprar= this.autosParaLaVenta().forEach((autos)=>{
      if (this.puedeComprar(autos, personas)) {
      array.push(autos)
     }
     else return null 
   })  
   return autosQuePuedeComprar
},
}