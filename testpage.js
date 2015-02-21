(function(ng, uuid) {
  ng.module('testPageApp', [])
  .controller('commonTransactionController', function ($scope, $location) {
    $scope.transaction = {
      a_transactionType: {
        label: 'Tipo de transacción (TR_NORMAL)',
        name: 'TBK_TIPO_TRANSACCION',
        description: 'Tipo de transacción (default TR_NORMAL) alfanúmerico de largo 50',
        defaultValue: 'TR_NORMAL'
      },
      b_amount: {
        label: 'Monto de la transacción',
        name: 'TBK_MONTO',
        description: 'Monto de la transacción. Sin separadores de miles ni de decimales. Se asume los dos últimos dígitos como valores decimales. númerico largo máximo 10',
        defaultValue: 500000
      },
      c_orderId: {
        label: 'Orden de compra',
        name: 'TBK_ORDEN_COMPRA',
        description: 'Orden de compra, generado por el comercio. largo 26 alfanúmerico',
        defaultValue: uuid.v4()
      },
      d_sessionId: {
        label: 'Identificador de sesión',
        name: 'TBK_ID_SESION',
        description: 'Identificador de sesión (opcional) largo 61 alfanúmerico',
        defaultValue: uuid.v4()
      },
      e_successUrl: {
        label: 'URL de exito',
        name: 'TBK_URL_EXITO',
        description: 'Página a llamar en caso de éxito en la transacción. Debe ser una dirección absoluta, para lograr el redireccionamiento del browser del cliente. largo 256 alfanúmerico',
        defaultValue: 'http://www.floreriasumonte.cl/cgi-bin/testpage.accepted.html'
      },
      f_failureURl: {
        label: 'URL de fracaso',
        name: 'TBK_URL_FRACASO',
        description: 'Página a llamar en caso de fracaso en la transacción. Debe ser una dirección absoluta, para lograr el redireccionamiento del browser del cliente. largo 256 alfanúmerico',
        defaultValue: 'http://www.floreriasumonte.cl/cgi-bin/testpage.failed.html'
      },
      g_couteAmount: {
        label: 'Monto cuota',
        name: 'TBK_MONTO_CUOTA',
        description: 'Sólo se envía para caso de pago CI. (opcional) Monto correspondiente de cada cuota. númerico largo 9',
        defaultValue: null
      },
      h_couteQty: {
        label: 'Número de cuotas',
        name: 'TBK_NUMERO_CUOTAS',
        description: 'Sólo se envía para caso de pago CI. (opcional) Número de cuotas a pagar. largo 2 númerico',
        defaultValue: null
      }
    };
  });
})(window.angular, window.uuid);

